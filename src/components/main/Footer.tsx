import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#4A4A4A] text-white py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold uppercase">Slush</h2>
                    <p className="text-sm mt-4">
                        © 2024, Zubatik inc, Inc. All rights reserved. Zubatik inc, Zubatik inc, the Zubatik inc logo, Fortnite, the Fortnite logo, Unreal,
                        Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of
                        Zubatik inc, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective
                        owners.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <Link className="text-sm hover:underline" to="/terms">
                            Terms of Service
                        </Link>
                        <Link className="text-sm hover:underline" to="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="text-sm hover:underline" to="/policy">
                            Store Refund Policy
                        </Link>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <FacebookIcon className="text-white h-6 w-6" />
                    <InstagramIcon className="text-white h-6 w-6" />
                    <TwitterIcon className="text-white h-6 w-6" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
