// Mock backend: answers requests to the old API address with placeholder data
// from ./mock-data.ts, so every page renders without a running server.
//
// The routes below are also the list of endpoints the new backend needs.
// Turn the mock off by setting VITE_USE_MOCK_API=false in .env.local.

import * as db from './mock-data';

export const API_BASE = 'http://localhost:5049/api/';

type Handler = (params: string[], body: unknown) => unknown;

const byId = <T extends { id: string }>(list: T[]) => (id: string) => list.find((x) => x.id === id);
const byGame = <T extends { gameId: string }>(list: T[]) => (id: string) => list.filter((x) => x.gameId === id);
// Returns items in the order the ids were requested.
const byIds = <T extends { id: string }>(list: T[]) => (_: string[], body: unknown) =>
    (body as string[]).map((id) => list.find((x) => x.id === id)).filter((x): x is T => !!x);

// Patterns are matched against the path after API_BASE; ":x" captures a segment.
const routes: [method: string, pattern: string, handler: Handler][] = [
    ['GET', 'GamesInShop', () => db.games],
    ['POST', 'GamesInShop/getall', byIds(db.games)],
    ['GET', 'GamesInShop/byname/:name', ([name]) => db.games.find((g) => g.name === name)],
    ['GET', 'GamesInShop/:id', ([id]) => byId(db.games)(id)],

    ['GET', 'DLCInShop/bygameid/:id', ([id]) => byGame(db.dlcs)(id)],
    ['POST', 'DLCInShop/getall', byIds(db.dlcs)],

    ['GET', 'GameBundleCollection/bygameid/:id', ([id]) => byGame(db.bundleCollections)(id)],
    ['POST', 'GameBundle/getall', (_, body) =>
        db.bundles.filter((b) => [...new Set(body as string[])].includes(b.id))],

    ['GET', 'Publisher/:id', ([id]) => byId(db.publishers)(id)],
    ['GET', 'Developer/:id', ([id]) => byId(db.developers)(id)],

    ['GET', 'MinimalSystemRequirements/bygameid/:id', ([id]) => byGame(db.minRequirements)(id)[0]],
    ['GET', 'MaximumSystemRequirements/bygameid/:id', ([id]) => byGame(db.maxRequirements)(id)[0]],

    ['GET', 'CategoriesForGame/bygameid/:id', ([id]) => byGame(db.categoriesForGames)(id)],
    ['POST', 'Categories/getall', byIds(db.categories)],

    ['GET', 'Discussion/byattachedid/:id', ([id]) => db.reviews.filter((r) => r.attachedId === id)],

    ['GET', 'Screenshot', () => db.screenshots],
    ['GET', 'Screenshot/bygameid/:id', ([id]) => byGame(db.screenshots)(id)],
    ['GET', 'Video', () => db.videos],
    ['GET', 'Video/bygameid/:id', ([id]) => byGame(db.videos)(id)],
    ['GET', 'GameNews', () => db.news],
    ['GET', 'GameNews/bygameid/:id', ([id]) => byGame(db.news)(id)],
    ['GET', 'GamePost', () => db.posts],
    ['GET', 'GamePost/bygameid/:id', ([id]) => byGame(db.posts)(id)],
    ['GET', 'GameGuide', () => db.guides],
    ['GET', 'GameGuide/bygameid/:id', ([id]) => byGame(db.guides)(id)],

    ['GET', 'Friends/wished/bygameid/:id', ([id]) => db.wishedFriends(id)],
    ['GET', 'Friends/owned/bygameid/:id', ([id]) => db.ownedFriends(id)],

    ['GET', 'User/getbyuid/:id', ([id]) => byId(db.users)(id)],
    ['POST', 'User', (_, body) => ({ ...(body as object), id: `u${Date.now()}` })],
    // Any credentials are accepted; the token is a dummy value.
    ['POST', 'User/validatelogin', () => ({ res: 'mock-token' })],
];

function match(pattern: string, path: string): string[] | null {
    const p = pattern.split('/');
    const s = path.split('/');
    if (p.length !== s.length) return null;
    const params: string[] = [];
    for (let i = 0; i < p.length; i++) {
        if (p[i].startsWith(':')) params.push(decodeURIComponent(s[i]));
        else if (p[i].toLowerCase() !== s[i].toLowerCase()) return null;
    }
    return params;
}

const json = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export function installMockApi() {
    const realFetch = window.fetch.bind(window);

    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
        if (!url.startsWith(API_BASE)) return realFetch(input, init);

        const method = (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase();
        const path = url.slice(API_BASE.length).split('?')[0].replace(/\/$/, '');
        const body = typeof init?.body === 'string' ? JSON.parse(init.body) : undefined;

        for (const [routeMethod, pattern, handler] of routes) {
            if (routeMethod !== method) continue;
            const params = match(pattern, path);
            if (!params) continue;
            const result = handler(params, body);
            return result === undefined ? json({ error: 'Not found' }, 404) : json(result);
        }

        console.warn(`[mock-api] No mock for ${method} ${path}`);
        return json({ error: 'No mock for this endpoint' }, 404);
    };
}
