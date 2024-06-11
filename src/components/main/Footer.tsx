import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-card1 text-typography py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-semibold uppercase text-sign-1 text-primary">Slush</h2>
                    <p className="text-block-2 font-artifakt text-typographySecondary mt-4">
                        © 2024, Zubatik inc, Inc. All rights reserved. Zubatik inc, Zubatik inc, the Zubatik inc logo, Fortnite, the Fortnite logo, Unreal,
                        Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of
                        Zubatik inc, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective
                        owners.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <Link className="text-button-2 font-artifakt text-typography hover:underline" to="/terms">
                            Terms of Service
                        </Link>
                        <Link className="text-button-2 font-artifakt text-typography hover:underline" to="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="text-button-2 font-artifakt text-typography hover:underline" to="/refund">
                            Store Refund Policy
                        </Link>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <FacebookIcon className="text-typography h-6 w-6" />
                    <InstagramIcon className="text-typography h-6 w-6" />
                    <TwitterIcon className="text-typography h-6 w-6" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
