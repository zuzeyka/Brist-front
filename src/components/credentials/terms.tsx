import { useTranslation } from "react-i18next";
import Head from "../main/head";
import Footer from "../main/footer";


const Terms: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Head></Head>
            <div className="flex items-center justify-center px-72 py-12">
                <div className="flex flex-col p-16 text-block-2 bg-card1 rounded-[30px] max-md:px-5">
                    <div className="max-md:max-w-full text-heading-2 font-bold font-manrope">{t('legal.terms.pageTitle')}</div>
                    <div className="mt-12 leading-10 max-md:mt-10 max-md:max-w-full">
                        <span className="text-2xl leading-7">
                            {t('legal.terms.intro')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s1.title')}</span>
                        <br /> <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s1.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s1.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s2.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s2.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s2.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s3.title')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s3.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s3.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s4.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s4.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s4.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s5.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s5.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s5.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s6.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s6.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s6.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s7.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s7.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s8.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s8.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s9.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s9.p1')}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.effectiveDate')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.terms.s10.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.s10.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-2xl leading-7">
                            {t('legal.terms.closing')}
                        </span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Terms;
