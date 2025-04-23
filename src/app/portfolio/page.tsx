'use client';

import { useState } from 'react';
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

// Portfolio project data
const projects = [
    {
        
        title: "TechInnov",
        category: "Branding & Site Web",
        tags: ["branding", "web"],
        description: "Refonte complète de l'identité visuelle et création d'un site web optimisé pour la génération de leads, aligné avec les énergies cosmiques de l'innovation.",
        zodiacElement: "♈", // Aries - Fire sign for innovation
        gradient: "from-accent-1/20 to-secondary/10",
        results: [
            "Augmentation de 75% des leads qualifiés",
            "Refonte complète de l'identité de marque",
            "Mise en place d'un système de qualification automatisé"
        ]
    },
    {
        title: "EcoSolutions",
        category: "Stratégie IA & Automatisation",
        tags: ["ai", "automation"],
        description: "Mise en place d'un système de qualification de leads par IA et automatisation du processus de vente pour une entreprise éco-responsable en harmonie avec les forces naturelles.",
        zodiacElement: "♉", // Taurus - Earth sign for eco-solutions
        gradient: "from-primary/20 to-accent-2/10",
        results: [
            "Réduction de 40% du temps de traitement des leads",
            "Amélioration de la précision des prédictions de vente",
            "Automatisation de 85% du processus de suivi client"
        ]
    },
    {
        title: "ModeÉlégance",
        category: "E-commerce & Automatisation",
        tags: ["web", "automation"],
        description: "Création d'une boutique en ligne avec personnalisation automatisée des recommandations produits basée sur l'alignement cosmique des préférences clients.",
        zodiacElement: "♌", // Leo - For elegance and style
        gradient: "from-secondary/20 to-primary/10",
        results: [
            "Augmentation de 120% du panier moyen",
            "Personnalisation avancée basée sur l'IA",
            "Système de recommandation avec 92% de précision"
        ]
    },
    {
        title: "SantéZen",
        category: "Stratégie IA & Site Web",
        tags: ["ai", "web"],
        description: "Développement d'une plateforme de santé intégrant un chatbot d'orientation des patients et un système de prise de rendez-vous aligné avec les rythmes biologiques.",
        zodiacElement: "♋", // Cancer - For health and care
        gradient: "from-accent-2/20 to-primary/10",
        results: [
            "Réduction de 60% du temps d'attente",
            "Amélioration de 45% de la satisfaction client",
            "Système prédictif de gestion des flux de patients"
        ]
    },
    {
        title: "FinanceVision",
        category: "Branding & Automatisation",
        tags: ["branding", "automation"],
        description: "Création d'une identité de marque innovante et mise en place d'un système de reporting automatisé pour un cabinet de conseil financier.",
        zodiacElement: "♎", // Libra - For balance and finances
        gradient: "from-primary/20 to-secondary/10",
        results: [
            "Image de marque renforcée et différenciante",
            "Réduction de 70% du temps de reporting",
            "Augmentation de 55% des nouveaux clients"
        ]
    },
    {
        title: "VoyageCosmos",
        category: "Site Web & Stratégie IA",
        tags: ["web", "ai"],
        description: "Conception d'un site web immersif pour une agence de voyage avec système de recommandation basé sur les affinités cosmiques des voyageurs.",
        zodiacElement: "♐", // Sagittarius - For travel and exploration
        gradient: "from-secondary/20 to-accent-1/10",
        results: [
            "Expérience utilisateur immersive notée 4.9/5",
            "Augmentation de 85% du taux de conversion",
            "Personnalisation avancée des recommandations"
        ]
    }
];

// Available filter tags
const filterTags = [
    { id: "all", label: "Tous les projets" },
    { id: "branding", label: "Branding" },
    { id: "web", label: "Sites Web" },
    { id: "ai", label: "Stratégie IA" },
    { id: "automation", label: "Automatisation" }
];

export default function PortfolioPage() {
    // State for filtering projects
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter projects based on selected tag
    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

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
                            <span className="text-sm font-medium">Nos Constellations</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            custom={0.2}
                            className="text-4xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent-2"
                        >
                            Réalisations Astrales
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            custom={0.3}
                            className="text-xl max-w-2xl mx-auto text-gray-light"
                        >
                            Découvrez nos projets récents et comment nous aidons nos clients à transformer leur communication par l'alignement cosmique.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Navigation */}
            <section className="py-4">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        {filterTags.map((tag) => (
                            <button
                                key={tag.id}
                                onClick={() => setActiveFilter(tag.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeFilter === tag.id
                                        ? 'bg-primary text-foreground shadow-lg shadow-primary/20'
                                        : 'bg-dark-2/80 text-gray-light hover:bg-dark-1 hover:text-foreground'
                                }`}
                            >
                                {tag.label}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="cosmic-card overflow-hidden group h-full"
                            >
                                {/* Project Image Area */}
                                <div className="aspect-video bg-gradient-to-br relative overflow-hidden flex items-center justify-center p-6">
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>

                                    {/* Zodiac element */}
                                    <div className="text-6xl text-secondary/40 group-hover:scale-125 transition-transform duration-700">
                                        {project.zodiacElement}
                                    </div>

                                    {/* Project title overlay - appears on hover */}
                                    <div className="absolute inset-0 bg-dark-1/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <h3 className="text-2xl font-cinzel text-foreground text-center px-4">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-cinzel font-semibold text-foreground">{project.title}</h3>
                                        <span
                                            className="text-2xl"
                                            title={`Élément zodiacal: ${project.zodiacElement}`}
                                        >
                                            {project.zodiacElement}
                                        </span>
                                    </div>

                                    <div className="inline-block px-3 py-1 rounded-full bg-dark-2 text-primary text-sm mb-4">
                                        {project.category}
                                    </div>

                                    <p className="text-gray-light mb-4">{project.description}</p>

                                    {/* Results section */}
                                    <div className="space-y-2 mt-4">
                                        <h4 className="text-sm font-semibold text-secondary mb-2">Résultats cosmiques:</h4>
                                        {project.results.map((result, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                                                <p className="text-sm text-gray-light">{result}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty state if no filtered projects */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-12"
                        >
                            <div className="text-3xl text-secondary mb-4">✨</div>
                            <h3 className="text-xl font-cinzel mb-2 text-foreground">Aucun projet dans cette constellation</h3>
                            <p className="text-gray-light">Essayez une autre catégorie pour découvrir nos réalisations.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
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
                            Messages des étoiles
                        </h2>
                        <p className="text-gray-light">
                            Ce que nos clients disent après leur voyage cosmique avec nous.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                quote: "L'équipe d'Astro Communik a complètement transformé notre présence en ligne. Leur approche holistique et leur expertise en IA ont créé une connexion profonde avec notre audience.",
                                author: "Sophie Durand",
                                company: "TechInnov",
                                zodiac: "♌"
                            },
                            {
                                quote: "Grâce à leur système d'automatisation, nous avons pu réduire drastiquement nos coûts d'acquisition client tout en améliorant la qualité de notre service.",
                                author: "Marc Lefebvre",
                                company: "EcoSolutions",
                                zodiac: "♉"
                            },
                            {
                                quote: "L'intuition cosmique de leur stratégie a permis à notre e-commerce de se démarquer dans un secteur saturé. Les résultats ont dépassé toutes nos espérances.",
                                author: "Émilie Laurent",
                                company: "ModeÉlégance",
                                zodiac: "♌"
                            },
                            {
                                quote: "La refonte de notre marque et l'automatisation de nos processus ont créé une harmonie parfaite entre notre vision et notre exécution quotidienne.",
                                author: "Thomas Mercier",
                                company: "FinanceVision",
                                zodiac: "♎"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="cosmic-card p-6 relative"
                            >
                                {/* Large quote marks */}
                                <div className="absolute top-6 left-6 text-5xl text-primary/10 font-serif">❝</div>

                                {/* Testimonial content */}
                                <div className="relative z-10">
                                    <p className="text-gray-light mb-6 pt-8 px-4">"{testimonial.quote}"</p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-foreground">{testimonial.author}</p>
                                            <p className="text-sm text-primary">{testimonial.company}</p>
                                        </div>
                                        <div className="text-2xl text-secondary/70" title="Signe zodiacal">
                                            {testimonial.zodiac}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
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

                            <h2 className="text-3xl font-cinzel font-semibold mb-4 text-foreground">Prêt à créer votre propre constellation ?</h2>

                            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-light">
                                Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons aligner votre communication avec les forces cosmiques.
                            </p>

                            <a
                                href="/contact"
                                className="cosmic-btn px-8 py-3 text-lg group inline-flex items-center gap-2"
                            >
                                <span>Commencer votre voyage cosmique</span>
                                <svg
                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}