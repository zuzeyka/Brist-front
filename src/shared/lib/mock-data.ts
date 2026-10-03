// Placeholder data used while there is no backend.
// Shapes match the interfaces in ./interfaces.ts so the same components work
// unchanged once a real API is connected.

const image = (seed: string, w = 640, h = 360) => `https://picsum.photos/seed/${seed}/${w}/${h}.jpg`;
const SAMPLE_VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const LOREM = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima harum officiis laborum assumenda ad, maxime ipsum laudantium fugit quisquam repudiandae explicabo voluptatem sapiente optio porro neque pariatur eligendi voluptatibus impedit voluptate officia.';

const daysFromNow = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString();

export const users = [
    { id: 'u1', name: 'zuzeyka', email: 'zuzeyka@example.com', amountOfXp: 2450 },
    { id: 'u2', name: 'Rozumnichok', email: 'rozumnichok@example.com', amountOfXp: 870 },
    { id: 'u3', name: 'PixelHunter', email: 'pixel@example.com', amountOfXp: 5120 },
    { id: 'u4', name: 'NightOwl', email: 'owl@example.com', amountOfXp: 330 },
    { id: 'u5', name: 'Kozak_Gamer', email: 'kozak@example.com', amountOfXp: 9900 },
    { id: 'u6', name: 'Zubarik', email: 'zubarik@example.com', amountOfXp: 1500 },
].map((u, i) => ({
    ...u,
    passwordSalt: '',
    description: 'Гравець спільноти Slush',
    image: `https://i.pravatar.cc/150?img=${i + 11}`,
    verified: true,
    amountOfMoney: 1000,
    createdAt: daysFromNow(-400 + i * 30),
}));

export const developers = [
    { id: 'd1', name: 'Rozumnichki Team' },
    { id: 'd2', name: 'Blue Fox Studio' },
    { id: 'd3', name: 'Steppe Games' },
].map((d) => ({
    ...d,
    subscribersCount: 1200,
    description: LOREM,
    avatar: image(`${d.id}-avatar`, 150, 150),
    backgroundImage: image(`${d.id}-bg`, 1280, 400),
    urlForNewsPage: '',
    createdAt: daysFromNow(-900),
}));

export const publishers = [
    { id: 'p1', name: 'Zubarik Inc' },
    { id: 'p2', name: 'Dnipro Interactive' },
].map((p) => ({
    ...p,
    subscribersCount: 5400,
    description: LOREM,
    avatar: image(`${p.id}-avatar`, 150, 150),
    backgroundImage: image(`${p.id}-bg`, 1280, 400),
    urlForNewsPage: '',
    createdAt: daysFromNow(-1200),
}));

export const categories = [
    'шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ',
    'многокористувацька', 'RPG', 'стратегія', 'інді', 'пригоди', 'гонки', 'головоломка',
].map((name, i) => ({ id: `c${i + 1}`, name, description: '', createdAt: daysFromNow(-1000) }));

// [name, price, discount %, days until discount ends, days since release]
const gameSeeds: [string, number, number, number, number][] = [
    ['Cyber Steppe 2077', 1299, 40, 7, -30],
    ['Kozak Legends', 799, 0, 0, -400],
    ['Night City Racer', 499, 25, 3, -120],
    ['Pixel Dungeon Quest', 99, 0, 0, -800],
    ['Space Colony Zero', 1099, 50, 10, -15],
    ['Forest of Shadows', 0, 0, 0, -200],
    ['Mech Arena', 0, 0, 0, -60],
    ['Dnipro Drift', 349, 70, 2, -365],
    ['Puzzle Tower', 79, 20, 5, -500],
    ['Last Survivor', 899, 15, 14, -5],
    ['Kingdom of Ash', 1499, 0, 0, -2],
    ['Ocean Explorer', 59, 0, 0, -90],
];

export const games = gameSeeds.map(([name, price, discount, discountDays, releaseDays], i) => ({
    id: `g${i + 1}`,
    name,
    price,
    discount,
    discountFinish: discount ? daysFromNow(discountDays) : (null as unknown as string),
    previeImage: image(`slush-game-${i + 1}`),
    description: `${name} — ${LOREM}`,
    dateOfRelease: daysFromNow(releaseDays),
    developerId: developers[i % developers.length].id,
    publisherId: publishers[i % publishers.length].id,
    urlForContent: '',
    createdAt: daysFromNow(releaseDays),
}));

export const categoriesForGames = games.flatMap((g, i) =>
    [0, 1, 2, 3].map((k) => ({
        id: `cg${i}-${k}`,
        gameId: g.id,
        categoryId: categories[(i + k * 3) % categories.length].id,
        createdAt: g.createdAt,
    })),
);

export const dlcs = games.slice(0, 5).flatMap((g, i) =>
    [1, 2].map((n) => ({
        ...g,
        id: `dlc${i + 1}-${n}`,
        gameId: g.id,
        name: `${g.name}: DLC ${n}`,
        price: Math.round(g.price / 4),
        previeImage: image(`slush-dlc-${i + 1}-${n}`),
    })),
);

export const bundles = games.slice(0, 5).map((g, i) => ({
    id: `b${i + 1}`,
    name: `${g.name} — Повне видання`,
    description: 'Гра та всі доповнення',
    price: g.price + dlcs.filter((d) => d.gameId === g.id).reduce((s, d) => s + d.price, 0),
    discount: 20,
    discountFinish: daysFromNow(10),
    createdAt: g.createdAt,
}));

export const bundleCollections = bundles.flatMap((b, i) =>
    dlcs
        .filter((d) => d.gameId === games[i].id)
        .map((d, k) => ({ id: `bc${i}-${k}`, bundleId: b.id, gameId: games[i].id, dlcId: d.id })),
);

const requirement = (gameId: string, high: boolean) => ({
    id: `${high ? 'max' : 'min'}-${gameId}`,
    gameId,
    os: high ? 'Windows 11 64-bit' : 'Windows 10 64-bit',
    processor: high ? 'Intel Core i7-12700 / AMD Ryzen 7 5800X' : 'Intel Core i5-8400 / AMD Ryzen 5 2600',
    ram: high ? '16 GB RAM' : '8 GB RAM',
    video: high ? 'NVIDIA RTX 3070 / AMD RX 6800' : 'NVIDIA GTX 1060 / AMD RX 580',
    freeDiskSpace: high ? '100 GB SSD' : '70 GB',
    createdAt: daysFromNow(-100),
});
export const minRequirements = games.map((g) => requirement(g.id, false));
export const maxRequirements = games.map((g) => requirement(g.id, true));

// Community content: a few items of each kind per game, authored by rotating users.
const perGame = <T>(count: number, make: (game: (typeof games)[number], gi: number, k: number) => T) =>
    games.flatMap((g, gi) => Array.from({ length: count }, (_, k) => make(g, gi, k)));

const author = (gi: number, k: number) => users[(gi + k) % users.length].id;

export const reviews = perGame(3, (g, gi, k) => ({
    id: `r${gi}-${k}`,
    authorId: author(gi, k),
    attachedId: g.id,
    content: ['Чудова гра, рекомендую!', 'Непогано, але є баги.', 'Найкраща гра року. ' + LOREM][k],
    rate: [5, 3, 4][k],
    likesCount: 10 + gi * 3 + k,
    createdAt: daysFromNow(-k * 4 - gi),
}));

export const screenshots = perGame(2, (g, gi, k) => ({
    id: `s${gi}-${k}`,
    title: `Скріншот з ${g.name}`,
    description: 'Гарний момент з гри',
    likesCount: 5 + k,
    gameId: g.id,
    authorId: author(gi, k + 1),
    contentUrl: image(`slush-shot-${gi}-${k}`, 1280, 720),
    createdAt: daysFromNow(-gi - k),
}));

export const videos = perGame(1, (g, gi, k) => ({
    id: `v${gi}-${k}`,
    title: `Геймплей ${g.name}`,
    description: 'Перші 10 хвилин гри',
    likesCount: 20 + gi,
    gameId: g.id,
    authorId: author(gi, k + 2),
    contentUrl: SAMPLE_VIDEO,
    createdAt: daysFromNow(-gi - 2),
}));

const textPost = (prefix: string, title: string) => (g: (typeof games)[number], gi: number, k: number) => ({
    id: `${prefix}${gi}-${k}`,
    title: `${title}: ${g.name}`,
    description: LOREM,
    likesCount: 3 + gi + k,
    discussionId: '',
    contentUrl: image(`slush-${prefix}-${gi}-${k}`),
    gameId: g.id,
    gameGroupId: '',
    gameTopicId: '',
    authorId: author(gi, k + 3),
    content: LOREM,
    createdAt: daysFromNow(-gi - k * 2),
});

export const news = perGame(2, textPost('n', 'Оновлення'));
export const posts = perGame(2, textPost('po', 'Обговорення'));
export const guides = perGame(1, textPost('gd', 'Гайд для новачків'));
