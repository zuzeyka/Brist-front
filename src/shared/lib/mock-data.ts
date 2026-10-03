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

const studio = (id: string, name: string) => ({
    id,
    name,
    subscribersCount: 1200,
    description: LOREM,
    avatar: image(`${id}-avatar`, 150, 150),
    backgroundImage: image(`${id}-bg`, 1280, 400),
    urlForNewsPage: '',
    createdAt: daysFromNow(-900),
});

const studioNames = [
    'Ubisoft', 'Massive Entertainment', 'CD PROJEKT RED', 'Slavic Magic', 'Hooded Horse', 'Donkey Crew',
    'ConcernedApe', 'Sucker Punch Productions', 'PlayStation Publishing', 'Larian Studios', 'Warhorse Studios',
    'Deep Silver', 'The Indie Stone', 'Okomotive', 'Bungie', 'Unknown Worlds Entertainment', 'Valve', 'Plarium',
    'Indie Studio',
];
const studios = studioNames.map((name, i) => studio(`st${i + 1}`, name));
const studioId = (name: string) => studios.find((st) => st.name === name)!.id;

export const developers = studios;
export const publishers = studios;

export const categories = [
    'шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ',
    'многокористувацька', 'RPG', 'стратегія', 'інді', 'пригоди', 'симулятор', 'головоломка',
].map((name, i) => ({ id: `c${i + 1}`, name, description: '', createdAt: daysFromNow(-1000) }));

// The catalogue shown in the Figma mockups. Covers live in public/mock/games.
// The main page picks its rows from this list by rule (see main.tsx), so the
// order here decides which games land in the curated rows.
const gameSeeds: {
    name: string; slug: string; price: number; discount?: number;
    released: number; developer?: string; publisher?: string; description?: string;
}[] = [
    {
        name: 'Avatar: Frontiers of Pandora', slug: 'hero/avatar-banner', price: 1519, discount: 40, released: -300,
        developer: 'Massive Entertainment', publisher: 'Ubisoft',
        description: 'Avatar: Frontiers of Pandora™ — це пригодницька гра від першої особи, де події розгортаються на західному кордоні.',
    },
    { name: 'Cyberpunk 2077', slug: 'cyberpunk-2077', price: 1099, released: -1400, developer: 'CD PROJEKT RED', publisher: 'CD PROJEKT RED' },
    { name: 'Відьмак 3: Дикий гін', slug: 'witcher-3', price: 729, released: -3400, developer: 'CD PROJEKT RED', publisher: 'CD PROJEKT RED' },
    { name: 'Manor Lords', slug: 'manor-lords', price: 599, discount: 25, released: -160, developer: 'Slavic Magic', publisher: 'Hooded Horse' },
    { name: 'Bellwright', slug: 'bellwright', price: 600, released: -150, developer: 'Donkey Crew' },
    { name: 'Stardew Valley', slug: 'stardew-valley', price: 229, released: -3000, developer: 'ConcernedApe', publisher: 'ConcernedApe' },
    { name: 'Ghost of Tsushima', slug: 'ghost-of-tsushima', price: 1699, released: -120, developer: 'Sucker Punch Productions', publisher: 'PlayStation Publishing' },
    { name: 'Avatar: Frontiers of Pandora Special Edition', slug: 'avatar-special-edition', price: 1519, discount: 40, released: -300, developer: 'Massive Entertainment', publisher: 'Ubisoft' },
    { name: "Baldur's Gate 3", slug: 'baldurs-gate-3', price: 899, released: -400, developer: 'Larian Studios', publisher: 'Larian Studios' },
    { name: 'Kingdom Come: Deliverance', slug: 'kingdom-come', price: 799, discount: 80, released: -2300, developer: 'Warhorse Studios', publisher: 'Deep Silver' },
    { name: 'Project Zomboid', slug: 'project-zomboid', price: 415, released: -3800, developer: 'The Indie Stone', publisher: 'The Indie Stone' },
    { name: 'FAR: Lone Sails', slug: 'far-lone-sails', price: 229, discount: 85, released: -2400, developer: 'Okomotive' },
    { name: 'Placid Plastic Yellow Duck Simulator', slug: 'duck-simulator', price: 60, released: -500 },
    { name: 'The Escape: Together', slug: 'escape-together', price: 74, released: -600 },
    { name: 'Juro Janosik', slug: 'juro-janosik', price: 245, discount: 69, released: -700 },
    { name: 'Destiny 2: The Final Shape', slug: 'destiny-2', price: 1249, released: -5, developer: 'Bungie', publisher: 'Bungie' },
    { name: 'Sun Haven', slug: 'sun-haven', price: 329, discount: 30, released: -10 },
    { name: 'Subnautica', slug: 'subnautica', price: 1498, discount: 10, released: -20, developer: 'Unknown Worlds Entertainment', publisher: 'Unknown Worlds Entertainment' },
    { name: 'Soul Dossier', slug: 'soul-dossier', price: 0, released: -200 },
    { name: 'Counter-Strike 2', slug: 'counter-strike-2', price: 365, discount: 100, released: -350, developer: 'Valve', publisher: 'Valve' },
    { name: 'RAID: Shadow Legends', slug: 'raid-shadow-legends', price: 0, released: -2000, developer: 'Plarium', publisher: 'Plarium' },
];

// Discounts end a week from now at 10:00, like the mockups.
const discountEnd = () => {
    const d = new Date(Date.now() + 7 * 86_400_000);
    d.setHours(10, 0, 0, 0);
    return d.toISOString();
};

export const games = gameSeeds.map((g, i) => ({
    id: `g${i + 1}`,
    name: g.name,
    price: g.price,
    discount: g.discount ?? 0,
    discountFinish: g.discount ? discountEnd() : (null as unknown as string),
    previeImage: g.slug.includes('/') ? `/mock/${g.slug}.jpg` : `/mock/games/${g.slug}.jpg`,
    description: g.description ?? `${g.name} — ${LOREM}`,
    dateOfRelease: daysFromNow(g.released),
    developerId: studioId(g.developer ?? 'Indie Studio'),
    publisherId: studioId(g.publisher ?? g.developer ?? 'Indie Studio'),
    urlForContent: '',
    createdAt: daysFromNow(g.released),
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

const avatarShots = Array.from({ length: 10 }, (_, i) => `/mock/hero/thumb-${i + 1}.jpg`);

export const screenshots = [
    ...avatarShots.map((url, k) => ({
        id: `s-avatar-${k}`,
        title: 'Скріншот з Avatar: Frontiers of Pandora',
        description: 'Гарний момент з гри',
        likesCount: 12 + k,
        gameId: 'g1',
        authorId: author(0, k),
        contentUrl: url,
        createdAt: daysFromNow(-k),
    })),
    ...perGame(2, (g, gi, k) => ({
    id: `s${gi}-${k}`,
    title: `Скріншот з ${g.name}`,
    description: 'Гарний момент з гри',
    likesCount: 5 + k,
    gameId: g.id,
    authorId: author(gi, k + 1),
    contentUrl: image(`slush-shot-${gi}-${k}`, 1280, 720),
    createdAt: daysFromNow(-gi - k),
})).filter((s) => s.gameId !== 'g1'),
];

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
