import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import Search from '../main/search';
import PageGlows from '@/components/ui/page-glows';
import PageSwitcher from './page-switcher';
import MediaPlayer from './about/media-player';
import ReviewList from './about/review-list';
import DlcList from './about/dlc-list';
import Friends from './about/friends';
import Payment from './payment';
import Characteristics from './characteristics/characteristics';
import Community from './community/community';
import { GameTitle } from './about/about-game';
import { formatDate } from './about/review-list';
import GamePrice from '@/components/main/game-price';
import { primaryButton } from './about/bundle-list';
import { WindowsIcon, MacOsIcon } from '@/components/ui/icons';
import { Developer, Discussion, DlcInShop, GameGroup, GameGuide, GameInShop, GameNews, GamePosts, Publisher, Screenshot, SystemRequirement, User, Video } from '@/shared/lib/interfaces';

const glows = [
    { left: 4, top: 817, large: true },
    { left: 1472, top: 108, large: true },
];

const dlcPill = 'inline-flex items-center px-3 py-1 rounded-[20px] bg-accent text-background font-artifakt font-bold text-sign-3';

const DlcPage: React.FC = () => {
    const { t } = useTranslation();
    const { dlcName } = useParams<{ dlcName: string }>();
    const [dlc, setDlc] = useState<DlcInShop>();
    const [baseGame, setBaseGame] = useState<GameInShop>();
    const [developer, setDeveloper] = useState<Developer>();
    const [publisher, setPublisher] = useState<Publisher>();
    const [siblingDlcs, setSiblingDlcs] = useState<DlcInShop[]>([]);
    const [reviews, setReviews] = useState<Discussion[]>([]);
    const [reviewUsers, setReviewUsers] = useState<User[]>([]);
    const [minrequirements, setMinRequirements] = useState<SystemRequirement[]>([]);
    const [maxrequirements, setMaxRequirements] = useState<SystemRequirement[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [wishedFriends, setWishedFriends] = useState<User[]>([]);
    const [ownedFriends, setOwnedFriends] = useState<User[]>([]);
    const [group, setGroup] = useState<GameGroup>();
    const [news, setNews] = useState<GameNews[]>([]);
    const [posts, setPosts] = useState<GamePosts[]>([]);
    const [guides, setGuides] = useState<GameGuide[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
    const [loading, setLoading] = useState(true);
    const gameRate = reviews.length > 0 ? Math.round(reviews.map((r) => r.rate).reduce((a, b) => a + b, 0) / reviews.length) : 0;
    const dlcIdRef = useRef('');

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const dlcsRes = await fetch('http://localhost:5049/api/DLCInShop');
                if (!dlcsRes.ok) throw new Error('Network response was not ok');
                const dlcs = await dlcsRes.json() as DlcInShop[];
                const found = dlcs.find((d) => d.name === dlcName);
                if (!found) { setLoading(false); return; }
                setDlc(found);
                dlcIdRef.current = found.id;

                const [gameRes, siblingsRes, developerRes, publisherRes] = await Promise.all([
                    fetch('http://localhost:5049/api/GamesInShop/' + found.gameId),
                    fetch('http://localhost:5049/api/DLCInShop/bygameid/' + found.gameId),
                    fetch('http://localhost:5049/api/Developer/' + found.developerId),
                    fetch('http://localhost:5049/api/Publisher/' + found.publisherId),
                ]);
                const game = gameRes.ok ? await gameRes.json() as GameInShop : undefined;
                setBaseGame(game);
                if (siblingsRes.ok) setSiblingDlcs((await siblingsRes.json() as DlcInShop[]).filter((d) => d.id !== found.id));
                if (developerRes.ok) setDeveloper(await developerRes.json() as Developer);
                if (publisherRes.ok) setPublisher(await publisherRes.json() as Publisher);

                const [reviewsRes, wishedRes, ownedRes] = await Promise.all([
                    fetch('http://localhost:5049/api/Discussion/byattachedid/' + found.id),
                    fetch('http://localhost:5049/api/Friends/wished/bygameid/' + found.id),
                    fetch('http://localhost:5049/api/Friends/owned/bygameid/' + found.id),
                ]);
                const reviewData = reviewsRes.ok ? await reviewsRes.json() as Discussion[] : [];
                setReviews(reviewData);
                setWishedFriends(wishedRes.ok ? await wishedRes.json() as User[] : []);
                setOwnedFriends(ownedRes.ok ? await ownedRes.json() as User[] : []);
                setReviewUsers(await Promise.all(reviewData.map(async (r) => {
                    const u = await fetch('http://localhost:5049/api/User/getbyuid/' + r.authorId, { credentials: 'include' });
                    return u.ok ? await u.json() as User : { name: '' } as User;
                })));

                if (game) {
                    const [maxReqRes, minReqRes, catsRes, groupRes, newsRes, postsRes, guidesRes, videosRes, screenshotsRes] = await Promise.all([
                        fetch('http://localhost:5049/api/MaximumSystemRequirements/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/MinimalSystemRequirements/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/CategoriesForGame/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/GameGroup/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/GameNews/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/GamePost/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/GameGuide/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/Video/bygameid/' + game.id),
                        fetch('http://localhost:5049/api/Screenshot/bygameid/' + game.id),
                    ]);
                    if (maxReqRes.ok) setMaxRequirements([await maxReqRes.json() as SystemRequirement]);
                    if (minReqRes.ok) setMinRequirements([await minReqRes.json() as SystemRequirement]);
                    if (catsRes.ok) {
                        const catLinks = await catsRes.json();
                        const ids = catLinks.map((x: any) => x.categoryId);
                        const namesRes = await fetch('http://localhost:5049/api/Categories/getall', {
                            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(ids),
                        });
                        if (namesRes.ok) setCategories((await namesRes.json()).map((c: any) => c.name));
                    }
                    if (groupRes.ok) setGroup(await groupRes.json() as GameGroup);
                    if (newsRes.ok) setNews(await newsRes.json() as GameNews[]);
                    if (postsRes.ok) setPosts(await postsRes.json() as GamePosts[]);
                    if (guidesRes.ok) setGuides(await guidesRes.json() as GameGuide[]);
                    if (videosRes.ok) setVideos(await videosRes.json() as Video[]);
                    if (screenshotsRes.ok) setScreenshots(await screenshotsRes.json() as Screenshot[]);
                }
            } catch (error) {
                console.log('Fetch DLC page error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [dlcName]);

    const fetchReviews = async () => {
        if (!dlcIdRef.current) return;
        try {
            const res = await fetch('http://localhost:5049/api/Discussion/byattachedid/' + dlcIdRef.current);
            if (!res.ok) return;
            const data = await res.json() as Discussion[];
            setReviews(data);
            setReviewUsers(await Promise.all(data.map(async (r) => {
                const u = await fetch('http://localhost:5049/api/User/getbyuid/' + r.authorId, { credentials: 'include' });
                return u.ok ? await u.json() as User : { name: '' } as User;
            })));
        } catch (error) {
            console.log('Fetch reviews error:', error);
        }
    };

    const [content, setContent] = useState<React.ReactNode>(null);

    if (loading || !dlc) {
        return (
            <div className="relative bg-background">
                <Head />
                <div className='h-screen flex justify-center items-center text-heading-1 text-typography'>{loading ? t('common.loading') : t('shop.dlc.dlcNotFound')}</div>
                <Footer />
            </div>
        );
    }

    const getDiscountEnd = (date?: Date) => date ? formatDate(date) : undefined;

    const aboutContent = (
        <div className='flex flex-col gap-6 pt-8'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <span className={dlcPill}>DLC</span>
                    <GameTitle name={dlc.name} rate={gameRate} />
                </div>
            </div>
            <div className='flex gap-6 items-start'>
                <div className='w-[1092px] min-w-0 flex flex-col gap-9'>
                    <MediaPlayer mediaUrl={screenshots.length ? screenshots.map((s) => s.contentUrl) : [dlc.previeImage]} />
                    {categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {categories.map((c) => (
                                <span key={c} className='flex items-center rounded-[20px] bg-cardLight25 px-3 py-1 font-artifakt font-bold text-sign-3 tracking-[-0.01em] text-typographySecondary'>{c}</span>
                            ))}
                        </div>
                    )}
                    <p className="font-artifakt text-block-1 tracking-[-0.01em] text-typography">{dlc.description}</p>
                    {baseGame && (
                        <div className='flex flex-col gap-5'>
                            <h2 className='font-manrope font-bold text-heading-1 text-typography'>{t('shop.dlc.baseGame')}</h2>
                            <div className='flex justify-between items-center bg-card1 p-5 rounded-[20px] text-typography'>
                                <div className='flex items-center gap-3'>
                                    <span className={dlcPill.replace('bg-accent', 'bg-cardLight25').replace('text-background', 'text-typographySecondary')}>{t('shop.dlc.baseGame')}</span>
                                    <span className='font-manrope font-bold text-heading-3'>{baseGame.name}</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <GamePrice price={baseGame.price} discount={baseGame.discount ?? 0} bold />
                                    <button type="button" className={primaryButton}>{t('shop.toCart')}</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <DlcList dlc={siblingDlcs} gameName={baseGame?.name} />
                    <ReviewList userData={reviewUsers} reviewData={reviews} gameId={dlc.id} gameName={dlc.name} onReviewPublished={fetchReviews} />
                </div>
                <aside className='w-[348px] shrink-0 sticky top-6 flex flex-col gap-8'>
                    <Payment
                        gameId={dlc.id}
                        itemType="dlc"
                        gameName={dlc.name}
                        platforms={[<WindowsIcon />, <MacOsIcon />]}
                        developer={developer?.name ?? ''}
                        publisher={publisher?.name ?? ''}
                        releaseDate={formatDate(dlc.dateOfRelease)}
                        previewUrl={dlc.previeImage}
                        price={dlc.price}
                        discount={dlc.discount}
                        rate={gameRate}
                        endDate={getDiscountEnd(dlc.discountFinish)}
                    />
                    <Friends wishedFriends={wishedFriends} ownedFriends={ownedFriends} />
                </aside>
            </div>
        </div>
    );

    const pages = [
        { title: t('shop.tabs.about'), content: aboutContent },
        {
            title: t('shop.tabs.characteristics'), content: (
                <Characteristics
                    gameId={dlc.id}
                    gameName={dlc.name}
                    wishedFriends={wishedFriends}
                    ownedFriends={ownedFriends}
                    maxOs={maxrequirements}
                    minOs={minrequirements}
                    previewUrl={dlc.previeImage}
                    price={dlc.price}
                    discount={dlc.discount}
                    rate={gameRate}
                    endDate={getDiscountEnd(dlc.discountFinish)}
                    releaseDate={formatDate(dlc.dateOfRelease)}
                    publisher={publisher?.name ?? ''}
                    developer={developer?.name ?? ''}
                />
            )
        },
        {
            title: t('shop.tabs.community'), content: (
                <Community
                    gameId={baseGame?.id ?? ''}
                    gameGroupId={group?.id ?? ''}
                    onPostCreated={() => undefined}
                    gameName={baseGame?.name ?? dlc.name}
                    subscribersCount={group?.subscribersCount ?? 0}
                    onlineCount={group?.onlineCount ?? 0}
                    postsUserData={[]}
                    screenshotsUserData={[]}
                    videosUserData={[]}
                    guidesUserData={[]}
                    newsUserData={[]}
                    posts={posts}
                    screenshots={screenshots}
                    videos={videos}
                    guides={guides}
                    news={news}
                />
            )
        },
    ];

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                <Search />
                <div className="max-w-[1464px] mx-auto pt-3 pb-[120px] text-typography">
                    <PageSwitcher onMoveContentToParent={setContent} pages={pages} />
                    {content ?? aboutContent}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default DlcPage;
