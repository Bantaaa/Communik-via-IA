import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Communik via IA</h3>
                        <p className="mb-4 text-gray-300">
                            Agence de communication nouvelle génération avec intégration IA et automatisation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition">Accueil</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
                            <li><Link href="/team" className="text-gray-300 hover:text-white transition">Équipe</Link></li>
                            <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition">Réalisations</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <address className="not-italic text-gray-300">
                            <p className="mb-2">123 Avenue de l'Innovation</p>
                            <p className="mb-2">75001 Paris, France</p>
                            <p className="mb-2">Email: contact@communik-via-ia.com</p>
                            <p className="mb-2">Téléphone: +33 1 23 45 67 89</p>
                        </address>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>&copy; {currentYear} Communik via IA. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;