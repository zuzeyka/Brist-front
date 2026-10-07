import React from "react";
import { useTranslation } from "react-i18next";

const Badge: React.FC<{ bagesimageUrl: string[] }> = ({ bagesimageUrl }) => {
    const { t } = useTranslation();
    if (bagesimageUrl.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-heading-2 font-manrope font-bold">{t('user.showcase.badgeGallery')}</h2>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex flex-col items-center justify-center w-32 h-20 shrink-0 bg-card1 rounded-2xl text-center">
                            <p className="font-bold text-heading-1 font-manrope">{bagesimageUrl.length}</p>
                            <p className="text-sign-1 text-typographySecondary">{t('user.showcase.badges')}</p>
                        </div>
                        <div className="flex gap-6">
                            {bagesimageUrl.slice(0, 5).map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className="w-16 h-16 object-contain"
                                    alt={t('user.showcase.badge')}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Badge;
