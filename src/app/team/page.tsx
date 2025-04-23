'use client';

import { motion } from 'framer-motion';
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

// Team member data with zodiac signs
const teamMembers = [
    {
        name: 'Sophie Martin',
        role: 'Directrice & Stratège Cosmique',
        bio: 'Experte en intelligence artificielle avec plus de 10 ans d\'expérience dans la communication stellaire. Née sous le signe du Lion.',
        zodiacSign: '♌', // Leo
        speciality: 'Stratégie & Vision',
        gradient: 'from-primary to-accent-1'
    },
    {
        name: 'Thomas Dubois',
        role: 'Architecte des Étoiles',
        bio: 'Maître en développement d\'architectures stellaires et spécialiste de l\'automatisation des systèmes cosmiques. Né sous le signe du Verseau.',
        zodiacSign: '♒', // Aquarius
        speciality: 'Développement & Automatisation',
        gradient: 'from-secondary to-accent-2'
    },
    {
        name: 'Emma Blanc',
        role: 'Directrice Créative Astrale',
        bio: 'Visionnaire du design et de l\'expérience utilisateur avec une approche centrée sur les énergies créatives de l\'univers. Née sous le signe des Gémeaux.',
        zodiacSign: '♊', // Gemini
        speciality: 'Design & UX',
        gradient: 'from-accent-2 to-primary'
    },
    {
        name: 'Marc Lefèvre',
        role: 'Analyste des Constellations',
        bio: 'Expert en analyse de données et en intelligence artificielle pour révéler les patterns cachés de votre communication. Né sous le signe de la Balance.',
        zodiacSign: '♎', // Libra
        speciality: 'Analyse & IA',
        gradient: 'from-primary to-secondary'
    },
    {
        name: 'Julie Moreau',
        role: 'Spécialiste des Flux Astraux',
        bio: 'Experte en workflows et automatisation avec n8n pour créer des systèmes fluides et efficaces. Née sous le signe du Taureau.',
        zodiacSign: '♉', // Taurus
        speciality: 'Workflows & Intégrations',
        gradient: 'from-accent-1 to-secondary'
    },
    {
        name: 'Alexandre Dupont',
        role: 'Développeur Stellaire',
        bio: 'Architecte de sites web et d\'applications qui capturent l\'essence de votre marque dans le cosmos numérique. Né sous le signe du Sagittaire.',
        zodiacSign: '♐', // Sagittarius
        speciality: 'Web & Mobile',
        gradient: 'from-secondary to-primary'
    }
];

export default function TeamPage() {
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
                            <span className="text-sm font-medium">Notre Constellation</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            custom={0.2}
                            className="text-4xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent-2"
                        >
                            L'Équipe Astrale
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            custom={0.3}
                            className="text-xl max-w-2xl mx-auto text-gray-light"
                        >
                            Des experts passionnés par l'astrologie numérique, l'IA et l'automatisation au service de votre communication cosmique.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="cosmic-card h-full overflow-hidden group"
                            >
                                <div className="h-full flex flex-col">
                                    {/* Member Image Placeholder */}
                                    <div className="aspect-square bg-dark-2 relative overflow-hidden">
                                        {/* Gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>

                                        {/* Constellation background */}
                                        <div className="absolute inset-0 star-bg opacity-40"></div>

                                        {/* Zodiac symbol */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-secondary opacity-30 transform group-hover:scale-110 transition-transform duration-500">
                                            {member.zodiacSign}
                                        </div>

                                        {/* Member placeholder silhouette */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4">
                                            <svg viewBox="0 0 200 230" className="w-full h-full text-gray-dark opacity-50">
                                                <circle cx="100" cy="70" r="50" fill="currentColor" />
                                                <path d="M100,120 L100,190 M60,140 L140,140 M70,230 L90,180 M130,230 L110,180" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
                                            </svg>
                                        </div>

                                        {/* Decorative sparkles */}
                                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)] animate-pulse"></div>
                                        <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="text-xl font-cinzel font-semibold text-foreground">{member.name}</h3>
                                            <span className="text-2xl" title={`Signe du ${member.zodiacSign}`}>{member.zodiacSign}</span>
                                        </div>

                                        <p className="text-primary font-medium mb-3">{member.role}</p>

                                        <p className="text-gray-light mb-4 flex-grow">{member.bio}</p>

                                        <div className="bg-dark-2 rounded-lg px-3 py-2 inline-flex items-center gap-2 self-start">
                                            <StarIcon className="w-4 h-4 text-secondary" />
                                            <span className="text-sm text-gray-light">{member.speciality}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 relative">
                {/* Background elements */}
                <div className="absolute inset-0 star-bg opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background to-dark-1/30"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                            Nos valeurs cosmiques
                        </h2>
                        <p className="text-gray-light">
                            Guidés par les constellations, nous suivons ces principes fondamentaux dans tous nos projets.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Innovation Stellaire',
                                description: 'Nous explorons constamment de nouvelles frontières pour apporter des solutions avant-gardistes à nos clients.',
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Harmonie Cosmique',
                                description: 'Nous créons une synergie parfaite entre l\'humain, la technologie et l\'intelligence artificielle.',
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Écoute Astrale',
                                description: 'Nous nous connectons aux besoins profonds de nos clients pour créer des solutions sur mesure.',
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M18 14a8 8 0 01-8-8" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Excellence Galactique',
                                description: 'Nous visons toujours les plus hauts standards de qualité dans chaque aspect de notre travail.',
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                )
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="cosmic-card p-6 flex items-start gap-5"
                            >
                                <div className="w-12 h-12 rounded-full bg-dark-2 flex-shrink-0 flex items-center justify-center p-3 text-secondary border border-secondary/20">
                                    {value.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-cinzel font-semibold mb-2 text-foreground">{value.title}</h3>
                                    <p className="text-gray-light">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}