import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FilterIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import PageGlows from '@/components/ui/page-glows';
import StarRating from '@/components/ui/star-rating';
import GamePrice from '@/components/main/game-price';
import { DlcInShop, GameInShop } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

const AllDlcs: React.FC = () => {
    const { t } = useTranslation();
    const { userName } = useParams<{ userName: string }>();
    const [game, setGame] = useState<GameInShop>();
    const [dlcs, setDlcs] = useState<DlcInShop[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const gameRes = await fetch('http://localhost:5049/api/GamesInShop/byname/' + encodeURIComponent(userName ?? ''));
                if (!gameRes.ok) throw new Error('Network response was not ok');
                const gameData = await gameRes.json() as GameInShop;
                setGame(gameData);
                const dlcsRes = await fetch('http://localhost:5049/api/DLCInShop/bygameid/' + gameData.id);
                if (dlcsRes.ok) setDlcs(await dlcsRes.json() as DlcInShop[]);
            } catch (error) {
                console.log('Fetch all DLCs error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [userName]);

    const visible = dlcs.filter((d) => d.name.toLowerCase().includes(search.trim().toLowerCase()));

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                {loading || !game ? (
                    <div className='h-screen flex justify-center items-center text-heading-1 text-typography'>{loading ? t('common.loading') : t('shop.dlc.gameNotFound')}</div>
                ) : (
                    <>
                        <img src={game.previeImage} alt="" className="w-full h-[280px] object-cover" />
                        <div className="max-w-[1464px] mx-auto pt-6 pb-[120px] text-typography">
                            <p className="font-artifakt text-block-2 text-typographySecondary">{t('shop.dlc.downloadableContentFor')}</p>
                            <h1 className="font-manrope font-bold text-heading-1 mb-6">{game.name}</h1>
                            <div className='flex items-center gap-5 mb-6'>
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder={t('shop.dlc.searchPlaceholder')}
                                    className='flex-1 max-w-md px-4 py-2.5 rounded-[22px] border border-secondary bg-background40 text-sign-2 tracking-[-0.01em] placeholder:text-typographySecondary focus:outline-none focus:border-primary'
                                />
                                <button type="button" className='flex items-center gap-2 font-artifakt font-semibold text-button-2 text-typography hover:text-primaryHover'>
                                    <FilterIcon className='size-5' />{t('shop.filters.title')}
                                </button>
                            </div>
                            {visible.length > 0 ? (
                                <div className="grid grid-cols-2 gap-6">
                                    {visible.map((dlc) => (
                                        <Link key={dlc.id} to={`/dlc/${encodeURIComponent(dlc.name)}`} className='flex flex-col bg-card1 rounded-[20px] overflow-hidden hover:brightness-110 transition'>
                                            <img src={dlc.previeImage} alt="" className='w-full h-[260px] object-cover' />
                                            <div className='flex flex-col gap-3 p-5'>
                                                <div className='flex items-center justify-between'>
                                                    <h2 className='font-manrope font-bold text-heading-3'>{dlc.name}</h2>
                                                    <StarRating rate={4.5} size={20} />
                                                </div>
                                                <p className='font-artifakt text-block-2 text-typographySecondary line-clamp-3'>{dlc.description}</p>
                                                <div className='flex items-center justify-between'>
                                                    <GamePrice price={dlc.price} discount={dlc.discount ?? 0} bold />
                                                    <span className='rounded-[20px] bg-primary hover:bg-primaryHover px-[26px] py-3 font-artifakt font-semibold text-button-1 text-background'>{t('shop.toCart')}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className='py-16 text-center font-artifakt text-block-1 text-typographySecondary'>{t('settings.nothingFound')}</p>
                            )}
                        </div>
                    </>
                )}
                <Footer />
            </div>
        </div>
    );
};

export default AllDlcs;
