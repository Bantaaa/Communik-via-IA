'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarIcon from '@/components/icons/StarIcon';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.7,
            ease: "easeOut"
        }
    })
};

export default function ServicesPage() {
    // Zodiac signs for our service sections
    const zodiacSigns = [
        { symbol: '♈', name: 'Aries' },      // Branding
        { symbol: '♉', name: 'Taurus' },     // Sites
        { symbol: '♊', name: 'Gemini' },     // AI Strategy
        { symbol: '♋', name: 'Cancer' },     // Automation
    ];

    return (
        <div className="pt-16">
            {/* Page Header */}
            <section className="relative py-20 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 star-bg opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-1 via-background to-background"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl mx-auto"
                    >
                        <motion.div
                            variants={fadeIn}
                            custom={0.1}
                            className="mb-4 inline-flex items-center gap-2 bg-dark-2/80 text-secondary px-4 py-1.5 rounded-full backdrop-blur-sm mx-auto"
                        >
                            <StarIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Services Cosmiques</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            custom={0.2}
                            className="text-4xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent-2"
                        >
                            Nos Constellations de Services
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            custom={0.3}
                            className="text-xl max-w-2xl mx-auto text-gray-light"
                        >
                            Découvrez comment nous pouvons transformer votre présence numérique grâce à l'alignement astral de l'IA et de l'automatisation.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4">
                    {/* Branding */}
                    <div id="branding" className="mb-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center"
                        >
                            <motion.div
                                variants={fadeIn}
                                custom={0.1}
                                className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-2 text-secondary border border-secondary/20">
                                        <span className="text-2xl">{zodiacSigns[0].symbol}</span>
                                    </div>
                                    <span className="text-sm text-gray-light">Signe du {zodiacSigns[0].name}</span>
                                </div>

                                <h2 className="text-3xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Branding Cosmique</h2>

                                <p className="text-lg text-gray-light mb-6">
                                    Notre approche de branding intègre l'intelligence artificielle pour créer des identités de marque uniques et mémorables qui résonnent avec l'énergie astrale de votre audience cible.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Conception de logo alignée avec vos énergies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Charte graphique et identité visuelle céleste</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Analyse de positionnement astral de marque</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeIn}
                                custom={0.3}
                                className="md:w-1/2"
                            >
                                <div className="relative">
                                    {/* Main image placeholder */}
                                    <div className="cosmic-card aspect-video flex items-center justify-center overflow-hidden">
                                        <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent-1/5 p-8 flex items-center justify-center">
                                            {/* Abstract branding element */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                                                <svg viewBox="0 0 100 100" className="w-full h-full text-secondary opacity-30">
                                                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
                                                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                                                    <path d="M50 10V90M10 50H90M35 20l30 60M20 35l60 30M20 65l60-30M35 80l30-60" stroke="currentColor" strokeWidth="0.5" />
                                                </svg>
                                            </div>
                                            <div className="z-10 text-xl font-cinzel text-foreground">Branding Cosmique</div>
                                        </div>
                                    </div>

                                    {/* Decorative stars */}
                                    <div className="absolute -top-3 -right-3 w-6 h-6 text-secondary animate-pulse">
                                        <StarIcon />
                                    </div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '1s' }}>
                                        <StarIcon />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Site Creation */}
                    <div id="sites" className="mb-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse items-center"
                        >
                            <motion.div
                                variants={fadeIn}
                                custom={0.1}
                                className="md:w-1/2 mb-8 md:mb-0 md:pl-12"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-2 text-secondary border border-secondary/20">
                                        <span className="text-2xl">{zodiacSigns[1].symbol}</span>
                                    </div>
                                    <span className="text-sm text-gray-light">Signe du {zodiacSigns[1].name}</span>
                                </div>

                                <h2 className="text-3xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Sites Stellaires</h2>

                                <p className="text-lg text-gray-light mb-6">
                                    Nous concevons des sites web intelligents et optimisés pour la conversion, avec une attention particulière à l'expérience utilisateur cosmique et la performance stellaire.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Sites vitrines et e-commerce célestes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Optimisation SEO et expérience cosmique</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Intégration d'outils d'IA et d'automatisation stellaire</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeIn}
                                custom={0.3}
                                className="md:w-1/2"
                            >
                                <div className="relative">
                                    {/* Main image placeholder */}
                                    <div className="cosmic-card aspect-video flex items-center justify-center overflow-hidden">
                                        <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent-2/5 p-8 flex items-center justify-center">
                                            {/* Website mockup */}
                                            <div className="border border-gray-dark rounded-lg w-5/6 h-5/6 bg-dark-1/50 overflow-hidden flex flex-col">
                                                <div className="h-6 border-b border-gray-dark/50 flex items-center px-2 space-x-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-accent-1/50"></div>
                                                    <div className="w-2 h-2 rounded-full bg-accent-2/50"></div>
                                                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                                                </div>
                                                <div className="flex-1 p-3 flex flex-col">
                                                    <div className="w-1/2 h-3 bg-primary/20 rounded mb-2"></div>
                                                    <div className="w-3/4 h-2 bg-gray-dark/50 rounded mb-1"></div>
                                                    <div className="w-2/3 h-2 bg-gray-dark/50 rounded mb-1"></div>
                                                    <div className="w-1/3 h-2 bg-gray-dark/50 rounded mb-3"></div>
                                                    <div className="w-1/4 h-6 rounded bg-secondary/30 mb-4"></div>
                                                    <div className="flex-1 grid grid-cols-2 gap-2">
                                                        <div className="bg-gray-dark/30 rounded"></div>
                                                        <div className="bg-gray-dark/30 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative stars */}
                                    <div className="absolute -top-3 -left-3 w-6 h-6 text-secondary animate-pulse">
                                        <StarIcon />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '1s' }}>
                                        <StarIcon />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* AI Strategy */}
                    <div id="strategie" className="mb-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center"
                        >
                            <motion.div
                                variants={fadeIn}
                                custom={0.1}
                                className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-2 text-secondary border border-secondary/20">
                                        <span className="text-2xl">{zodiacSigns[2].symbol}</span>
                                    </div>
                                    <span className="text-sm text-gray-light">Signe du {zodiacSigns[2].name}</span>
                                </div>

                                <h2 className="text-3xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Stratégie Astrale</h2>

                                <p className="text-lg text-gray-light mb-6">
                                    Nous développons des stratégies d'intelligence artificielle qui s'alignent sur les forces cosmiques de votre entreprise pour une communication plus intuitive et efficace.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Analyse de données guidée par les constellations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Chatbots et assistants virtuels intuitifs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Personnalisation de contenu basée sur l'astrologie numérique</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeIn}
                                custom={0.3}
                                className="md:w-1/2"
                            >
                                <div className="relative">
                                    {/* Main image placeholder */}
                                    <div className="cosmic-card aspect-video flex items-center justify-center overflow-hidden">
                                        <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent-2/5 p-8 flex items-center justify-center">
                                            {/* AI Neural Network visualization */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#9D71EA" strokeWidth="0.5" fill="none">
                                                        <circle cx="40" cy="40" r="5" fill="#9D71EA" fillOpacity="0.3" />
                                                        <circle cx="40" cy="100" r="5" fill="#9D71EA" fillOpacity="0.3" />
                                                        <circle cx="40" cy="160" r="5" fill="#9D71EA" fillOpacity="0.3" />

                                                        <circle cx="100" cy="40" r="5" fill="#9D71EA" fillOpacity="0.3" />
                                                        <circle cx="100" cy="100" r="5" fill="#9D71EA" fillOpacity="0.3" />
                                                        <circle cx="100" cy="160" r="5" fill="#9D71EA" fillOpacity="0.3" />

                                                        <circle cx="160" cy="40" r="5" fill="#9D71EA" fillOpacity="0.3" />
                                                        <circle cx="160" cy="100" r="5" fill="#9D71EA" fillOpacity="0.3" />
                                                        <circle cx="160" cy="160" r="5" fill="#9D71EA" fillOpacity="0.3" />

                                                        {/* Connections */}
                                                        <path d="M40,40 L100,40 L160,40 M40,40 L100,100 L160,160 M40,40 L100,160 M40,100 L100,40 L160,100 M40,100 L100,100 L160,100 M40,100 L100,160 L160,40 M40,160 L100,40 M40,160 L100,100 L160,160 M40,160 L100,160 L160,160" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="z-10 text-xl font-cinzel text-foreground">Stratégie Astrale</div>
                                        </div>
                                    </div>

                                    {/* Decorative stars */}
                                    <div className="absolute -top-3 -right-3 w-6 h-6 text-secondary animate-pulse">
                                        <StarIcon />
                                    </div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '1s' }}>
                                        <StarIcon />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Automation */}
                    <div id="automatisation" className="mb-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse items-center"
                        >
                            <motion.div
                                variants={fadeIn}
                                custom={0.1}
                                className="md:w-1/2 mb-8 md:mb-0 md:pl-12"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-2 text-secondary border border-secondary/20">
                                        <span className="text-2xl">{zodiacSigns[3].symbol}</span>
                                    </div>
                                    <span className="text-sm text-gray-light">Signe du {zodiacSigns[3].name}</span>
                                </div>

                                <h2 className="text-3xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Automatisation Céleste</h2>

                                <p className="text-lg text-gray-light mb-6">
                                    Libérez le potentiel de votre équipe grâce à nos workflows intelligents qui automatisent les tâches répétitives et vous permettent de vous concentrer sur les activités à forte valeur ajoutée.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Conception de workflows automatisés avec n8n</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Intégration de systèmes et API cosmiques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-light">Automatisation des notifications et des suivis clients</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeIn}
                                custom={0.3}
                                className="md:w-1/2"
                            >
                                <div className="relative">
                                    {/* Main image placeholder */}
                                    <div className="cosmic-card aspect-video flex items-center justify-center overflow-hidden">
                                        <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent-2/5 p-8 flex items-center justify-center">
                                            {/* Automation flow visualization */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg viewBox="0 0 240 160" className="w-4/5 h-4/5" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <rect x="20" y="20" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />
                                                        <rect x="100" y="20" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />
                                                        <rect x="180" y="20" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />

                                                        <rect x="60" y="65" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />
                                                        <rect x="140" y="65" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />

                                                        <rect x="20" y="110" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />
                                                        <rect x="100" y="110" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />
                                                        <rect x="180" y="110" width="40" height="30" rx="4" fill="#1A1433" stroke="#9D71EA" strokeWidth="1" />

                                                        <path d="M60,35 L100,35 M140,35 L180,35 M40,50 L60,65 M100,50 L80,65 M140,50 L120,65 M180,50 L160,65 M60,95 L40,110 M80,95 L100,110 M120,95 L140,110 M160,95 L180,110"
                                                              stroke="#F2C94C" strokeWidth="1.5" strokeDasharray="2,2" />

                                                        <circle cx="40" cy="35" r="3" fill="#F2C94C" />
                                                        <circle cx="120" cy="35" r="3" fill="#F2C94C" />
                                                        <circle cx="200" cy="35" r="3" fill="#F2C94C" />
                                                        <circle cx="80" cy="80" r="3" fill="#F2C94C" />
                                                        <circle cx="160" cy="80" r="3" fill="#F2C94C" />
                                                        <circle cx="40" cy="125" r="3" fill="#F2C94C" />
                                                        <circle cx="120" cy="125" r="3" fill="#F2C94C" />
                                                        <circle cx="200" cy="125" r="3" fill="#F2C94C" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="z-10 text-xl font-cinzel text-foreground">Automatisation Céleste</div>
                                        </div>
                                    </div>

                                    {/* Decorative stars */}
                                    <div className="absolute -top-3 -right-3 w-6 h-6 text-secondary animate-pulse">
                                        <StarIcon />
                                    </div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '1s' }}>
                                        <StarIcon />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl mx-auto text-center cosmic-card border-primary/20 p-10 relative overflow-hidden"
                    >
                        {/* Background stars */}
                        <div className="absolute inset-0 star-bg opacity-30"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="mb-2">
                                <StarIcon className="w-8 h-8 mx-auto text-secondary mb-4 animate-pulse" />
                            </div>

                            <h2 className="text-3xl font-cinzel font-semibold mb-4 text-foreground">Prêt à atteindre les étoiles ?</h2>

                            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-light">
                                Laissez-nous aligner votre communication avec les énergies cosmiques de l'innovation pour des résultats qui transcendent les attentes.
                            </p>

                            <Link
                                href="/contact"
                                className="cosmic-btn px-8 py-3 text-lg group inline-flex items-center gap-2"
                            >
                                <span>Commencer votre voyage astral</span>
                                <svg
                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}