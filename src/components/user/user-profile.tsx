import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import UserHeader from './user-header';
import UserMenu, { AchievementEntry, CommentEntry, Friend, ReviewProps } from './user-menu';
import PageGlows from '@/components/ui/page-glows';
import { useAuth } from '../authorization/auth-context';
import {
    Achievement,
    AchievementByUser,
    Categories,
    CategoryForGame,
    Discussion,
    Friends as FriendRow,
    GameGuide,
    GameInShop,
    GamePosts,
    OwnedDlc,
    OwnedGame,
    Screenshot,
    User,
    UserComment,
    Video,
    WishedGame,
} from '@/shared/lib/interfaces';
import { PostProps } from '../shop/community/post';
import { formatDate } from '../shop/about/review-list';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

type UserWithId = User & { id: string };

interface GameAuthoredItem {
    title?: string;
    description?: string;
    content?: string;
    gameId: string;
    contentUrl?: string;
    createdAt: Date | string;
    likesCount: number;
    commentsCount?: number;
}

interface ProfileContent {
    ownedGames: GameInShop[];
    wishedGames: (GameInShop & { categorys?: string[] })[];
    dlcCount: number;
    screenshots: PostProps[];
    videos: PostProps[];
    discussions: PostProps[];
    guides: PostProps[];
    reviews: ReviewProps[];
    comments: CommentEntry[];
    achievements: AchievementEntry[];
}

const emptyProfileContent: ProfileContent = {
    ownedGames: [],
    wishedGames: [],
    dlcCount: 0,
    screenshots: [],
    videos: [],
    discussions: [],
    guides: [],
    reviews: [],
    comments: [],
    achievements: [],
};

const UserProfile: React.FC = () => {
    const { t } = useTranslation();
    const { userName } = useParams<{ userName: string }>();
    const { isAuthenticated, userId } = useAuth();
    const [user, setUser] = useState<UserWithId>();
    const [games, setGames] = useState<GameInShop[]>([]);
    const [categoryNamesByGame, setCategoryNamesByGame] = useState<Map<string, string[]>>(new Map());
    const [loading, setLoading] = useState(true);
    const [profileContent, setProfileContent] = useState<ProfileContent>(emptyProfileContent);
    const [friends, setFriends] = useState<Friend[]>([]);
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const [usersRes, gamesRes, categoriesRes, categoriesForGameRes] = await Promise.all([
                    fetch('http://localhost:5049/api/User', { credentials: 'include' }),
                    fetch('http://localhost:5049/api/GamesInShop'),
                    fetch('http://localhost:5049/api/Categories'),
                    fetch('http://localhost:5049/api/CategoriesForGame'),
                ]);
                if (usersRes.ok) {
                    const users = await usersRes.json() as UserWithId[];
                    setUser(users.find((u) => u.name === userName));
                }
                if (gamesRes.ok) setGames(await gamesRes.json() as GameInShop[]);
                if (categoriesRes.ok && categoriesForGameRes.ok) {
                    const categories = await categoriesRes.json() as Categories[];
                    const categoriesForGame = await categoriesForGameRes.json() as CategoryForGame[];
                    const categoryNameById = new Map(categories.map((c) => [c.id, c.name]));
                    const byGame = new Map<string, string[]>();
                    for (const link of categoriesForGame) {
                        const name = categoryNameById.get(link.categoryId);
                        if (!name) continue;
                        if (!byGame.has(link.gameId)) byGame.set(link.gameId, []);
                        byGame.get(link.gameId)!.push(name);
                    }
                    setCategoryNamesByGame(byGame);
                }
            } catch (error) {
                console.log('Fetch user profile error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [userName]);

    // Everything this user actually owns/wished/authored — fetched once we know who
    // the profile belongs to. Several entities (GamePost/GameGuide/Discussion) have no
    // byauthorid endpoint on the backend yet, so those fetch the full list and filter
    // client-side, same workaround used elsewhere in this app (e.g. User/byname).
    useEffect(() => {
        if (!user?.id || games.length === 0) return;
        let cancelled = false;

        async function loadProfileContent() {
            try {
                const [
                    ownedRes, ownedDlcRes, wishedRes, screenshotsRes, videosRes,
                    postsRes, guidesRes, discussionsRes, commentsRes, achievementLinksRes,
                ] = await Promise.all([
                    fetch(`http://localhost:5049/api/OwnedGame/byuserid/${user!.id}`, { credentials: 'include' }),
                    fetch(`http://localhost:5049/api/OwnedDlc/byuserid/${user!.id}`, { credentials: 'include' }),
                    fetch('http://localhost:5049/api/WishedGame', { credentials: 'include' }),
                    fetch(`http://localhost:5049/api/Screenshot/byuserid/${user!.id}`, { credentials: 'include' }),
                    fetch(`http://localhost:5049/api/Video/byuserid/${user!.id}`, { credentials: 'include' }),
                    fetch('http://localhost:5049/api/GamePost', { credentials: 'include' }),
                    fetch('http://localhost:5049/api/GameGuide', { credentials: 'include' }),
                    fetch('http://localhost:5049/api/Discussion', { credentials: 'include' }),
                    fetch(`http://localhost:5049/api/UserComment/byuserid/${user!.id}`, { credentials: 'include' }),
                    fetch(`http://localhost:5049/api/AchievementByUser/byuserid/${user!.id}`, { credentials: 'include' }),
                ]);

                const gamesById = new Map(games.map((g) => [g.id, g]));
                const dedupeById = <T extends { id: string }>(items: T[]): T[] => [...new Map(items.map((i) => [i.id, i])).values()];

                const ownedRows = ownedRes.ok ? await ownedRes.json() as OwnedGame[] : [];
                const ownedGames = dedupeById(ownedRows.map((r) => gamesById.get(r.ownedGameId)).filter((g): g is GameInShop => !!g));

                const ownedDlcRows = ownedDlcRes.ok ? await ownedDlcRes.json() as OwnedDlc[] : [];

                const wishedRows = wishedRes.ok ? (await wishedRes.json() as WishedGame[]).filter((w) => w.userId === user!.id) : [];
                const wishedGames = dedupeById(wishedRows.map((r) => gamesById.get(r.ownedGameId)).filter((g): g is GameInShop => !!g))
                    .map((g) => ({ ...g, categorys: categoryNamesByGame.get(g.id) ?? [] }));

                const screenshotRows = screenshotsRes.ok ? await screenshotsRes.json() as Screenshot[] : [];
                const videoRows = videosRes.ok ? await videosRes.json() as Video[] : [];
                const postRows = postsRes.ok ? (await postsRes.json() as GamePosts[]).filter((p) => p.authorId === user!.id) : [];
                const guideRows = guidesRes.ok ? (await guidesRes.json() as GameGuide[]).filter((g) => g.authorId === user!.id) : [];
                const discussionRows = discussionsRes.ok ? (await discussionsRes.json() as Discussion[]).filter((d) => d.authorId === user!.id) : [];
                const commentRows = commentsRes.ok ? await commentsRes.json() as UserComment[] : [];
                const achievementLinkRows = achievementLinksRes.ok ? await achievementLinksRes.json() as AchievementByUser[] : [];

                // Branded by game (name/cover), matching how the rest of the app shows
                // game-authored content — not by the viewed user, who authored all of it.
                const toPostProps = (item: GameAuthoredItem): PostProps => {
                    const game = gamesById.get(item.gameId);
                    return {
                        postAuthor: game?.name ?? '',
                        postAuthorAvatarUrl: game?.previeImage,
                        postTitle: item.title ?? '',
                        postText: item.content || item.description,
                        postMediaUrl: item.contentUrl,
                        postDate: formatDate(item.createdAt),
                        postLikes: item.likesCount,
                        postComments: item.commentsCount ?? 0,
                    };
                };

                const screenshots = screenshotRows
                    .filter((s) => s.authorId === user!.id)
                    .map((s) => toPostProps(s));
                const videos = videoRows
                    .filter((v) => v.authorId === user!.id)
                    .map((v) => ({ ...toPostProps(v), postPosterUrl: v.previewImage }));
                const discussionsPosts = postRows.map((p) => toPostProps(p));
                const guides = guideRows.map((g) => toPostProps(g));

                const reviews: ReviewProps[] = discussionRows.map((d) => {
                    const game = gamesById.get(d.attachedId);
                    return {
                        gameName: game?.name ?? '',
                        gamePictureUrl: game?.previeImage ?? '',
                        reviewText: d.content,
                        rating: d.rate,
                        date: formatDate(d.createdAt),
                        likes: d.likesCount,
                        comments: 0,
                    };
                });

                // Comments left ON this profile — resolve each commenter's name/avatar.
                const commentAuthors = await Promise.all(commentRows.map(async (c) => {
                    const r = await fetch(`http://localhost:5049/api/User/getbyuid/${c.authorId}`, { credentials: 'include' });
                    return r.ok ? await r.json() as User : undefined;
                }));
                const comments: CommentEntry[] = commentRows.map((c, i) => ({
                    userName: commentAuthors[i]?.name ?? t('shop.about.player'),
                    userAvatar: commentAuthors[i]?.image ?? '',
                    date: formatDate(c.createdAt),
                    text: c.content,
                }));

                let achievements: AchievementEntry[] = [];
                if (achievementLinkRows.length > 0) {
                    const achievementIds = achievementLinkRows.map((a) => a.achievementId);
                    const achievementsRes = await fetch('http://localhost:5049/api/Achievement/getall', {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(achievementIds),
                    });
                    const achievementRows = achievementsRes.ok ? await achievementsRes.json() as Achievement[] : [];
                    const achievementsById = new Map(achievementRows.map((a) => [a.id, a]));
                    for (const link of achievementLinkRows) {
                        const a = achievementsById.get(link.achievementId);
                        if (!a) continue;
                        achievements.push({
                            name: a.description,
                            description: '',
                            points: a.amountOfExperience,
                            imageUrl: a.urlForImage ?? '',
                            complitionDate: link.awardTime ? formatDate(link.awardTime) : undefined,
                        });
                    }
                }

                if (!cancelled) {
                    setProfileContent({
                        ownedGames, wishedGames, dlcCount: ownedDlcRows.length,
                        screenshots, videos, discussions: discussionsPosts, guides, reviews, comments, achievements,
                    });
                }
            } catch (error) {
                console.log('Fetch profile content error:', error);
            }
        }

        loadProfileContent();
        return () => { cancelled = true; };
    }, [user?.id, games, categoryNamesByGame, t]);

    useEffect(() => {
        if (!user?.id) return;
        let cancelled = false;

        async function loadFriends() {
            try {
                const res = await fetch(`http://localhost:5049/api/Friends/getbyuserid/${user!.id}`, { credentials: 'include' });
                const rows = res.ok ? await res.json() as FriendRow[] : [];

                const resolved = await Promise.all(rows.map(async (row) => {
                    const r = await fetch(`http://localhost:5049/api/User/getbyuid/${row.friendId}`, { credentials: 'include' });
                    return r.ok ? await r.json() as UserWithId : undefined;
                }));

                const friendEntries: Friend[] = [];
                for (const u of resolved) {
                    if (!u) continue;
                    friendEntries.push({ name: u.name, avatarUrl: u.image, isOnline: true, levelPoints: u.amountOfXp });
                }

                if (!cancelled) setFriends(friendEntries);
            } catch (error) {
                console.log('Fetch friends error:', error);
            }
        }

        loadFriends();
        return () => { cancelled = true; };
    }, [user?.id]);

    // Stable reference — PageSwitcher's effect depends on this and must not re-fire just
    // because content changed (it would reset content back to the active PageSwitcher tab).
    const handleMoveContentToParent = useCallback((node: React.ReactNode) => {
        setContent(node);
    }, []);

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head></Head>
                {loading || !user ? (
                    <div className='h-screen flex justify-center items-center text-heading-1 text-typography'>{loading ? t('common.loading') : t('user.notFound')}</div>
                ) : (
                    <div className="max-w-[1464px] mx-auto">
                        <img src={user.backgroundImage || "/mock/games/duck-simulator.jpg"} alt="" className="w-full h-[320px] object-cover rounded-b-[20px]" />
                        <div className="px-5">
                            <UserHeader
                                className="pt-5"
                                userName={user.name}
                                userAvatarUrl={user.image}
                                about={user.description}
                                isOnline={true}
                                isOwnProfile={isAuthenticated && user.id === userId}
                            />
                            <div className="grid grid-cols-4 gap-6 py-6">
                                <div className="col-span-3">{content}</div>
                                <div className="col-span-1">
                                    <UserMenu
                                        onMoveContentToParent={handleMoveContentToParent}
                                        levelPoints={user.amountOfXp}
                                        friends={friends}
                                        {...profileContent}
                                    ></UserMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UserProfile;
