import { useTranslation } from "react-i18next";
import Head from "../main/head";
import Footer from "../main/footer";


const Privacy: React.FC = () => {
    const { t } = useTranslation();
    const usageItems = t('legal.privacy.s2.items', { returnObjects: true }) as string[];
    const shareItems = t('legal.privacy.s3.items', { returnObjects: true }) as string[];
    const rightsItems = t('legal.privacy.s7.items', { returnObjects: true }) as string[];
    return (
        <>
            <Head></Head>
            <div className="flex items-center justify-center px-72 py-12">
                <div className="flex flex-col p-16 text-block-2 bg-card1 rounded-[30px] max-md:px-5">
                    <div className="text-3xl max-md:max-w-full text-heading-2 font-bold font-manrope">
                        {t('legal.privacy.pageTitle')}
                    </div>
                    <div className="mt-12 text-2xl leading-7 max-md:mt-10 max-md:max-w-full">
                        {t('legal.privacy.intro')}
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s1.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s1.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s1.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s2.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s2.p1')}
                        </span>
                        <ul>
                            {usageItems.map((item, i) => (
                                <li key={i}>
                                    <span className="text-xl leading-6">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s3.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s3.p1')}
                        </span>
                        <ul>
                            {shareItems.map((item, i) => (
                                <li key={i}>
                                    <span className="text-xl leading-6">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s4.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s4.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s4.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s5.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s5.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s5.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s6.title')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s6.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s7.title')} </span>
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s7.p1')}</span>
                        <ul>
                            {rightsItems.map((item, i) => (
                                <li key={i}>
                                    <span className="text-xl leading-6">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s8.title')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s8.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s8.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.privacy.s9.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.privacy.s9.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.effectiveDate')}
                        </span>
                        <br />
                        <br />
                        {t('legal.privacy.closing')}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Privacy;
