import { useTranslation } from "react-i18next";
import Head from "../main/head";
import Footer from "../main/footer";


const Refund: React.FC = () => {
    const { t } = useTranslation();
    const exclusionItems = t('legal.refund.s6.items', { returnObjects: true }) as string[];
    return (
        <>
            <Head></Head>
            <div className="flex items-center justify-center px-72 py-12">
                <div className="flex flex-col p-16 text-block-2 bg-card1 rounded-[30px] max-md:px-5">
                    <div className="text-3xl max-md:max-w-full text-heading-2 font-bold font-manrope">
                        {t('legal.refund.pageTitle')}
                    </div>
                    <div className="mt-12 text-2xl leading-7 max-md:mt-10 max-md:max-w-full">
                        {t('legal.refund.pageTitle')}
                        <br />
                        {t('legal.refund.intro')}
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s1.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s1.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s1.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s2.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s2.p1')}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s2.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s3.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s3.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s3.p2')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s3.p3')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s4.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s4.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s4.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s5.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s5.p1')}{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s5.p2')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s6.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s6.p1')}
                        </span>
                        <ul>
                            {exclusionItems.map((item, i) => (
                                <li key={i}>
                                    <span className="text-xl leading-6">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s7.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s7.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">{t('legal.refund.s8.title')} </span>
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.refund.s8.p1')}
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            {t('legal.terms.effectiveDate')}
                        </span>
                        <br />
                        <br />
                        {t('legal.refund.closing1')} <br />
                        {t('legal.refund.closing2')}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Refund;
