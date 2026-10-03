// Placeholder data used while there is no backend.
// Shapes match the interfaces in ./interfaces.ts so the same components work
// unchanged once a real API is connected.

const image = (seed: string, w = 640, h = 360) => `https://picsum.photos/seed/${seed}/${w}/${h}.jpg`;
const SAMPLE_VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const LOREM = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima harum officiis laborum assumenda ad, maxime ipsum laudantium fugit quisquam repudiandae explicabo voluptatem sapiente optio porro neque pariatur eligendi voluptatibus impedit voluptate officia.';

const daysFromNow = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString();

// Names from the mockups; everyone uses the design's placeholder avatar.
const userNames = [
    'zuzeyka', 'DenroyPro', 'N.Anderson', 'KiriketHirik', 'Юзернейм', 'GhostRogue', 'sanya_KAL',
    'karl_vava', 'NikaNii', 's1imerock', 'whysxugly', 'low_owl', 'mop_riderEX',
    'Rozumnichok', 'PixelHunter', 'NightOwl', 'Kozak_Gamer',
];

export const users = userNames.map((name, i) => ({
    id: `u${i + 1}`,
    name,
    email: `user${i + 1}@example.com`,
    amountOfXp: 300 + i * 450,
    passwordSalt: '',
    description: 'Гравець спільноти Slush',
    image: i >= 5 && i <= 12 ? '/mock/avatars/friend.jpg' : '/mock/avatars/reviewer.jpg',
    verified: true,
    amountOfMoney: 1000,
    createdAt: daysFromNow(-400 + i * 30),
}));
const userId = (name: string) => users.find((u) => u.name === name)!.id;

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
    'Indie Studio', 'Zubarik Inc',
];
const studios = studioNames.map((name, i) => studio(`st${i + 1}`, name));
const studioId = (name: string) => studios.find((st) => st.name === name)!.id;

export const developers = studios;
export const publishers = studios;

export const categories = [
    'шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ',
    'многокористувацька', 'RPG', 'стратегія', 'інді', 'пригоди', 'симулятор', 'головоломка',
    'кіберпанк', 'оголеність', 'майбутнє', 'насильство', 'сюжетна', 'від першої особи',
].map((name, i) => ({ id: `c${i + 1}`, name, description: '', createdAt: daysFromNow(-1000) }));

// The catalogue shown in the Figma mockups. Covers live in public/mock/games.
// The main page picks its rows from this list by rule (see main.tsx), so the
// order here decides which games land in the curated rows.
const releaseDate = (released: number | string) =>
    typeof released === 'string' ? new Date(`${released}T00:00:00`).toISOString() : daysFromNow(released);

const gameSeeds: {
    name: string; slug: string; price: number; discount?: number;
    released: number | string; developer?: string; publisher?: string; description?: string;
}[] = [
    {
        name: 'Avatar: Frontiers of Pandora', slug: 'hero/avatar-banner', price: 1519, discount: 40, released: -300,
        developer: 'Massive Entertainment', publisher: 'Ubisoft',
        description: 'Avatar: Frontiers of Pandora™ — це пригодницька гра від першої особи, де події розгортаються на західному кордоні.',
    },
    {
        name: 'Cyberpunk 2077', slug: 'cyberpunk-2077', price: 1099, released: '2020-12-10',
        developer: 'CD PROJEKT RED', publisher: 'Zubarik Inc',
        description: 'Cyberpunk 2077 — пригодницький бойовик і рольова гра з відкритим світом. Дія відбувається у темному майбутньому Найт-Сіті, небезпечного мегаполіса, одержимого владою, гламуром і ненаситною модифікацією тіла.',
    },
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
    dateOfRelease: releaseDate(g.released),
    developerId: studioId(g.developer ?? 'Indie Studio'),
    publisherId: studioId(g.publisher ?? g.developer ?? 'Indie Studio'),
    urlForContent: '',
    createdAt: releaseDate(g.released),
}));
const gameId = (name: string) => games.find((g) => g.name === name)!.id;
const CYBERPUNK = gameId('Cyberpunk 2077');

const cyberpunkTags = ['шутер', 'екшн', 'кіберпанк', 'оголеність', 'відкритий світ', 'майбутнє', 'насильство', 'RPG', 'сюжетна', 'від першої особи'];

export const categoriesForGames = games.flatMap((g, i) => {
    const ids = g.id === CYBERPUNK
        ? cyberpunkTags.map((name) => categories.find((c) => c.name === name)!.id)
        : [0, 1, 2, 3].map((k) => categories[(i + k * 3) % 12].id);
    return ids.map((categoryId, k) => ({ id: `cg${i}-${k}`, gameId: g.id, categoryId, createdAt: g.createdAt }));
});

const dlc = (game: (typeof games)[number], id: string, name: string, price: number) => ({
    ...game, id, gameId: game.id, name, price, discount: 0,
    discountFinish: null as unknown as string,
    previeImage: image(`slush-${id}`),
});

const cyberpunk = games.find((g) => g.id === CYBERPUNK)!;
export const dlcs = [
    dlc(cyberpunk, 'dlc-cp-bonus', 'Cyberpunk 2077 Bonus Content', 0),
    dlc(cyberpunk, 'dlc-cp-redmod', 'Cyberpunk 2077 REDmod', 0),
    dlc(cyberpunk, 'dlc-cp-pl', 'Cyberpunk 2077: Ілюзія свободи', 549),
    ...['Manor Lords', "Baldur's Gate 3", 'Stardew Valley'].flatMap((name, i) => {
        const g = games.find((x) => x.name === name)!;
        return [1, 2].map((n) => dlc(g, `dlc${i}-${n}`, `${g.name}: DLC ${n}`, Math.round(g.price / 4)));
    }),
];

const CYBERPUNK_ABOUT = 'Cyberpunk 2077 — пригодницький рольовий екшн у відкритому світі мегаполісу Найт-Сіті, де у ролі кіберпанкового найманця ви боротиметеся за виживання. Гра вдосконалена і має новий безкоштовний вміст. Налаштуйте персонажа й ігровий стиль, виконуючи завдання, нарощуючи репутацію і відкриваючи апгрейди. Будуючи взаємини і здійснюючи вибір, ви формуєте сюжет і світ навколо. Тут народжуються легенди. Якою буде ваша?';

const bundleSeeds = [
    { id: 'b-cp', gameId: CYBERPUNK, name: 'Cyberpunk 2077', description: CYBERPUNK_ABOUT, price: 1099, discount: 0, dlcIds: ['dlc-cp-bonus', 'dlc-cp-redmod'] },
    { id: 'b-cp-full', gameId: CYBERPUNK, name: 'Cyberpunk: Повне видання', description: '', price: 1648, discount: 8, dlcIds: ['dlc-cp-pl'] },
];

export const bundles = bundleSeeds.map(({ dlcIds: _d, gameId: _g, ...b }) => ({
    ...b,
    discountFinish: b.discount ? daysFromNow(10) : (null as unknown as string),
    createdAt: daysFromNow(-100),
}));

export const bundleCollections = bundleSeeds.flatMap((b) =>
    b.dlcIds.map((dlcId, k) => ({ id: `bc-${b.id}-${k}`, bundleId: b.id, gameId: b.gameId, dlcId })),
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

// Date and author of every post in the community mockups.
const DESIGN_DATE = new Date('2024-02-25T12:00:00').toISOString();
const nika = () => userId('NikaNii');

// Community content: a few items of each kind per game, authored by rotating users.
const perGame = <T>(count: number, make: (game: (typeof games)[number], gi: number, k: number) => T) =>
    games.flatMap((g, gi) => Array.from({ length: count }, (_, k) => make(g, gi, k)));

const author = (gi: number, k: number) => users[(gi + k) % users.length].id;

const cyberpunkReviews: [string, number, string][] = [
    ['DenroyPro', 5, 'Чудова гра'],
    ['KiriketHirik', 4, 'Імба. 10 з 10. Незважаючи на баги і проблему з економікою (купую за 50к продаю за 1к) це імба, всі любители рпг з відкритим світом і сюжетом мають в це пограти. Дякуєм за українську!'],
    ['N.Anderson', 4, 'Топчиковий топ. Дякуємо панам та панессам з CDPR за українську локалізацію основної гри та DLC Ілюзія Свободи. Прийдеться проходити гру уже третій раз.'],
    ['Юзернейм', 5, 'До зустрічі, Найт-Сіті'],
];

export const reviews = [
    ...cyberpunkReviews.map(([name, rate, content], k) => ({
        id: `r-cp-${k}`,
        authorId: userId(name),
        attachedId: CYBERPUNK,
        content,
        rate,
        likesCount: 2500,
        createdAt: new Date('2023-02-21T12:00:00').toISOString(),
    })),
    ...perGame(3, (g, gi, k) => ({
        id: `r${gi}-${k}`,
        authorId: author(gi, k),
        attachedId: g.id,
        content: ['Чудова гра, рекомендую!', 'Непогано, але є баги.', 'Найкраща гра року. ' + LOREM][k],
        rate: [5, 3, 4][k],
        likesCount: 10 + gi * 3 + k,
        createdAt: daysFromNow(-k * 4 - gi),
    })).filter((r) => r.attachedId !== CYBERPUNK),
];

// Friends of the signed-in user who want / own a game.
const wishedNames = ['GhostRogue', 'sanya_KAL'];
const ownedNames = ['karl_vava', 'zuzeyka', 'NikaNii', 's1imerock', 'whysxugly', 'low_owl', 'mop_riderEX', 'Rozumnichok', 'PixelHunter', 'NightOwl', 'Kozak_Gamer'];
export const wishedFriends = (_gameId: string) => users.filter((u) => wishedNames.includes(u.name));
export const ownedFriends = (_gameId: string) => users.filter((u) => ownedNames.includes(u.name));

const avatarShots = Array.from({ length: 10 }, (_, i) => `/mock/hero/thumb-${i + 1}.jpg`);

const cyberpunkShots = ['/mock/games/cyberpunk-2077.jpg', ...Array.from({ length: 6 }, (_, i) => `/mock/cyberpunk/shot-${i + 1}.jpg`)];

export const screenshots = [
    {
        id: 's-cp-post', title: '', likesCount: 5300, commentsCount: 4500, gameId: CYBERPUNK, authorId: nika(),
        description: 'Привіт, на попередній вечірці мені вдалося отримати цей квест.\nУ тому, що я зараз роблю, воно не хоче з’являтися. Є спосіб змусити її з\'явитися чи ні?',
        contentUrl: '/mock/community/screenshot.jpg', createdAt: DESIGN_DATE,
    },
    ...cyberpunkShots.map((url, k) => ({
        id: `s-cp-${k}`,
        title: 'Скріншот з Cyberpunk 2077',
        description: 'Найт-Сіті',
        likesCount: 30 + k,
        gameId: CYBERPUNK,
        authorId: author(1, k),
        contentUrl: url,
        createdAt: daysFromNow(-k),
    })),
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
    commentsCount: 2 + gi + k,
    createdAt: daysFromNow(-gi - k),
})).filter((s) => s.gameId !== 'g1' && s.gameId !== CYBERPUNK),
];

export const videos = [
    {
        id: 'v-cp-post', title: '', likesCount: 3100, commentsCount: 1100, gameId: CYBERPUNK, authorId: nika(),
        description: 'Як мені вдалося зробити цей прекрасний знімок Джуді в «Чорному сапфірі» перед початком шоу…',
        contentUrl: SAMPLE_VIDEO, previewImage: '/mock/community/video.jpg', createdAt: DESIGN_DATE,
    },
    ...perGame(1, (g, gi, k) => ({
    id: `v${gi}-${k}`,
    title: `Геймплей ${g.name}`,
    description: 'Перші 10 хвилин гри',
    likesCount: 20 + gi,
    gameId: g.id,
    authorId: author(gi, k + 2),
    contentUrl: SAMPLE_VIDEO,
    commentsCount: 4 + gi,
    createdAt: daysFromNow(-gi - 2),
})).filter((v) => v.gameId !== CYBERPUNK),
];

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
    commentsCount: 1 + gi + k,
    createdAt: daysFromNow(-gi - k * 2),
});

const notCyberpunk = <T extends { gameId: string }>(list: T[]) => list.filter((x) => x.gameId !== CYBERPUNK);

// The Cyberpunk 2077 community feed from the "Community - All" mockup.
const cyberpunkPost = (id: string, title: string, content: string, likesCount: number, commentsCount: number, contentUrl = '') => ({
    id, title, description: content, content, likesCount, commentsCount, contentUrl,
    discussionId: '', gameId: CYBERPUNK, gameGroupId: '', gameTopicId: '', authorId: nika(), createdAt: DESIGN_DATE,
});

export const news = [
    cyberpunkPost('n-cp-1', 'Питання для початківців',
        'Я трохи втратив уявлення про цю гру:\nНа даний момент у мене 9 рівень (новий у грі), і коли я переходжу на свою сторінку з кіберпрограмами, там написано, що потрібно відвідати розкопувач, щоб оновити їх. Але коли я туди потрапляю, у мене не вистачає компонентів для оновлення.',
        1500, 500, '/mock/community/news.jpg'),
    ...notCyberpunk(perGame(2, textPost('n', 'Оновлення'))),
];
export const guides = [
    cyberpunkPost('gd-cp-1', 'Допомогти?',
        'Чи може хтось створити навчальний посібник про те, як максимально швидко використовувати все в грі як НОВУ ГРУ з самого початку за допомогою Cheat Engine.',
        100000, 500, '/mock/community/guide.jpg'),
    ...notCyberpunk(perGame(1, textPost('gd', 'Гайд для новачків'))),
];
export const posts = [
    cyberpunkPost('po-cp-1', 'Летальний чи нелетальний?',
        'Чи є в цьому якісь переваги/недоліки?\nЗавжди любив стелс в іграх із кількома варіантами гри, як-от deus-ex. Повна скритність не була моєю найсильнішою стороною, більшість часу або занадто багато в одній зоні, так повно стрілянини тощо.',
        5, 0),
    cyberpunkPost('po-cp-2', 'Мені б хотілося, щоб ресурси відновлення та здібностей були більш уніфікованими.',
        'Я думаю, що можна було б додати багато глибини, якби CDPR вирішив використовувати Ram як універсальний ресурс, а не використовувати його лише для швидких хаків. Якби Berzerker і Sandevistan використовували Ram замість того, щоб мати власну тривалість і час відновлення, це створило б багато цікавих збірок із використанням деяких бонусів «інтелекту», щоб дійсно максимізувати їхню функціональність.',
        120000, 2500, '/mock/community/discussion.jpg'),
    ...notCyberpunk(perGame(2, textPost('po', 'Обговорення'))),
];

// Subscriber and online counts for each game's community.
export const gameGroups = games.map((g, i) => ({
    id: `gg-${g.id}`,
    gameId: g.id,
    subscribersCount: g.id === CYBERPUNK ? 10000 : 800 + i * 350,
    onlineCount: g.id === CYBERPUNK ? 5267 : 40 + i * 17,
    createdAt: g.createdAt,
}));
