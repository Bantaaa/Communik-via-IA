import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Zodiac signs for our cosmic theme
    const zodiacSigns = [
        { name: 'Aries', symbol: '♈' },
        { name: 'Taurus', symbol: '♉' },
        { name: 'Gemini', symbol: '♊' },
        { name: 'Cancer', symbol: '♋' },
        { name: 'Leo', symbol: '♌' },
        { name: 'Virgo', symbol: '♍' },
        { name: 'Libra', symbol: '♎' },
        { name: 'Scorpio', symbol: '♏' },
        { name: 'Sagittarius', symbol: '♐' },
        { name: 'Capricorn', symbol: '♑' },
        { name: 'Aquarius', symbol: '♒' },
        { name: 'Pisces', symbol: '♓' }
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-dark-1 to-background py-12 border-t border-gray-dark/30">
            {/* Zodiac constellation background */}
            <div className="absolute inset-0 star-bg opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent-1 flex items-center justify-center shadow-md relative overflow-hidden">
                                <div className="absolute inset-0 bg-dark-1 rounded-full scale-[0.85]"></div>
                                <div className="w-5 h-5 relative z-10 text-center">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <circle cx="12" cy="12" r="3" fill="var(--secondary)" />
                                        <path d="M12 5v2M12 17v2M5 12H3M21 12h-2M18.4 5.6l-1.4 1.4M7 7L5.6 5.6M7 17l-1.4 1.4M18.4 18.4l-1.4-1.4"
                                              stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-cinzel text-foreground">
                                <span className="text-primary">Astro</span> Communik
                            </h3>
                        </div>

                        <p className="text-gray-light">
                            Agence de communication cosmique avec intégration IA et automatisation stellaire.
                        </p>

                        {/* Zodiac signs */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {zodiacSigns.map((sign) => (
                                <div
                                    key={sign.name}
                                    className="w-7 h-7 flex items-center justify-center rounded-full text-sm text-secondary border border-gray-dark/50 hover:border-secondary transition-colors cursor-default group"
                                    title={sign.name}
                                >
                                    <span className="group-hover:animate-pulse">{sign.symbol}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-cinzel mb-4 text-primary">Constellations</h3>
                        <ul className="space-y-2">
                            <li className="constellation relative pl-6 before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2">
                                <Link href="/" className="text-gray-light hover:text-secondary transition">Accueil</Link>
                            </li>
                            <li className="constellation relative pl-6 before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2">
                                <Link href="/services" className="text-gray-light hover:text-secondary transition">Services</Link>
                            </li>
                            <li className="constellation relative pl-6 before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2">
                                <Link href="/team" className="text-gray-light hover:text-secondary transition">Équipe</Link>
                            </li>
                            <li className="constellation relative pl-6 before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2">
                                <Link href="/portfolio" className="text-gray-light hover:text-secondary transition">Réalisations</Link>
                            </li>
                            <li className="constellation relative pl-6 before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2">
                                <Link href="/contact" className="text-gray-light hover:text-secondary transition">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-cinzel mb-4 text-primary">Coordonnées Astrales</h3>
                        <address className="not-italic text-gray-light space-y-2">
                            <p className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                123 Avenue des Étoiles
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                contact@astrocommunik.com
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +33 1 23 45 67 89
                            </p>
                        </address>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-4">
                            {[
                                { icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' },
                                { icon: 'M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.639c.962-.689 1.797-1.562 2.457-2.549z' },
                                { icon: 'M7.8 2h8.4c3.2 0 5.8 2.6 5.8 5.8v8.4c0 3.2-2.6 5.8-5.8 5.8h-8.4c-3.2 0-5.8-2.6-5.8-5.8v-8.4c0-3.2 2.6-5.8 5.8-5.8zm.2 2c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-10c0-1.7-1.3-3-3-3h-10zm10.6 2.5c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm-5.6 1.5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z' },
                                { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-8 h-8 rounded-full flex items-center justify-center bg-dark-2 text-gray-light hover:text-secondary hover:bg-dark-1 transition-colors"
                                    aria-label="Social media link"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-dark/30 mt-8 pt-6 text-center text-gray">
                    <p>&copy; {currentYear} Astro Communik. Tous droits réservés par les astres.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;