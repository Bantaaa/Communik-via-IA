'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define our services with zodiac signs
const services = [
    {
        title: 'Branding Cosmique',
        icon: '♈', // Aries
        description: 'Création d\'identité de marque alignée avec les énergies cosmiques et amplifiée par l\'IA.',
        link: '/services#branding'
    },
    {
        title: 'Sites Stellaires',
        icon: '♉', // Taurus
        description: 'Sites web intelligents qui brillent dans la constellation numérique, optimisés pour la conversion.',
        link: '/services#sites'
    },
    {
        title: 'Stratégie Astrale',
        icon: '♊', // Gemini
        description: 'Intégration de l\'intelligence artificielle dans votre communication pour des résultats qui transcendent.',
        link: '/services#strategie'
    },
    {
        title: 'Automatisation Céleste',
        icon: '♋', // Cancer
        description: 'Workflows intelligents pour optimiser vos processus et libérer votre potentiel créatif.',
        link: '/services#automatisation'
    },
    {
        title: 'Référencement Lunaire',
        icon: '♌', // Leo
        description: 'Propulsez votre visibilité dans les étoiles grâce à notre stratégie SEO cosmique.',
        link: '/services#seo'
    },
    {
        title: 'Contenu Éthéré',
        icon: '♍', // Virgo
        description: 'Création de contenu qui résonne avec les fréquences de votre audience cible.',
        link: '/services#contenu'
    }
];

const ZodiacSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    // Navigate to different slides
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        // Reset autoplay timer when manually navigating
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            if (autoplay) startAutoplay();
        }
    };

    const startAutoplay = () => {
        autoplayRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % services.length);
        }, 5000);
    };

    // Set up autoplay on mount
    useEffect(() => {
        if (autoplay) startAutoplay();

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [autoplay]);

    return (
        <div className="relative">
            {/* Main slider */}
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-all duration-500 ease-in-out relative"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {services.map((service, index) => (
                        <div key={index} className="min-w-full p-4">
                            <motion.div
                                className="cosmic-card h-full p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
                                initial={{ opacity: index === currentIndex ? 1 : 0.5 }}
                                animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Background zodiac pattern */}
                                <div className="absolute top-0 left-0 w-full h-full star-bg opacity-20"></div>

                                {/* Service content */}
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4 text-secondary filter drop-shadow-glow">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-cinzel font-semibold mb-4 text-foreground">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-light mb-6 max-w-xl mx-auto">
                                        {service.description}
                                    </p>

                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
                                    >
                                        <span>Explorer ce service</span>
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                    ))}
                </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                            index === currentIndex
                                ? 'bg-secondary scale-125'
                                : 'bg-gray-dark hover:bg-gray'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow navigation */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 sm:px-6 pointer-events-none">
                <button
                    onClick={() => goToSlide((currentIndex - 1 + services.length) % services.length)}
                    className="w-10 h-10 rounded-full bg-dark-2/80 text-gray-light hover:text-foreground hover:bg-dark-1 focus:outline-none flex items-center justify-center backdrop-blur-sm pointer-events-auto transition-colors"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => goToSlide((currentIndex + 1) % services.length)}
                    className="w-10 h-10 rounded-full bg-dark-2/80 text-gray-light hover:text-foreground hover:bg-dark-1 focus:outline-none flex items-center justify-center backdrop-blur-sm pointer-events-auto transition-colors"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Autoplay toggle */}
            <button
                onClick={() => setAutoplay(!autoplay)}
                className="absolute bottom-0 right-0 p-2 text-gray-light hover:text-foreground focus:outline-none"
                aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
            >
                {autoplay ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ZodiacSlider;