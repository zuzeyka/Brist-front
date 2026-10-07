import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const socials = [
    { href: 'https://uk-ua.facebook.com', icon: '/src/assets/svg/social-facebook.svg', label: 'Facebook' },
    { href: 'https://www.instagram.com', icon: '/src/assets/svg/social-instagram.svg', label: 'Instagram' },
    { href: 'https://x.com', icon: '/src/assets/svg/social-twitter.svg', label: 'X' },
];

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const links = [
        { to: '/terms', label: t('footer.terms') },
        { to: '/privacy', label: t('footer.privacy') },
        { to: '/refund', label: t('footer.refund') },
    ];
    return (
        <footer className="relative bg-card1 text-typography">
            <div className="max-w-[1464px] mx-auto pt-[52px] pb-12 flex flex-col">
                <div className="flex justify-between items-start">
                    <img className="h-6 w-auto mt-1" src="/src/assets/svg/logoDecorativeDark.svg" alt="Slush" />
                    <div className="flex gap-2">
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="p-[2.3px] hover:opacity-70">
                                <img src={s.icon} alt="" width={27.43} height={27.43} />
                            </a>
                        ))}
                    </div>
                </div>
                <p className="mt-6 w-[808px] max-w-full font-artifakt text-block-2 tracking-[-0.01em] text-typographySecondary">
                    © 2024, Zubarik inc, Inc. All rights reserved. Zubarik inc, Zubarik inc, the Zubarik inc logo, Zubarik, the Zubarik logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Zubarik inc, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
                </p>
                <div className="flex gap-8 mt-6">
                    {links.map((l) => (
                        <Link key={l.to} className="font-artifakt font-semibold text-button-2 hover:text-primaryHover" to={l.to}>
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
