'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import StarIcon from '@/components/icons/StarIcon';

export default function ContactPage() {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay,
                duration: 0.5
            }
        })
    };

    return (
        <div className="pt-16">
            {/* Page Header */}
            <section className="relative py-20 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 star-bg opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-1 via-background to-background"></div>

                {/* Cosmic elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 1.5 }}
                    className="absolute w-full h-full overflow-hidden"
                >
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary/20 bg-gradient-radial from-primary/5 to-transparent"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-secondary/20 bg-gradient-radial from-secondary/5 to-transparent"></div>
                </motion.div>

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
                            <span className="text-sm font-medium">Contactez les astres</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            custom={0.2}
                            className="text-4xl font-cinzel font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent-2"
                        >
                            Communication interstellaire
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            custom={0.3}
                            className="text-xl max-w-2xl mx-auto text-gray-light"
                        >
                            Envoyez-nous un message pour initier un voyage cosmique ensemble et découvrir comment nous pouvons aligner votre communication avec les énergies universelles.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 relative">
                {/* Background elements */}
                <div className="absolute inset-0 star-bg opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background to-dark-1/50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-cinzel font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary"
                        >
                            Nos coordonnées cosmiques
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="cosmic-card p-6 text-center"
                            >
                                <div className="w-12 h-12 bg-dark-2 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/20 shadow-lg shadow-secondary/5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-cinzel font-semibold mb-2 text-foreground">Notre constellation</h3>
                                <address className="not-italic text-gray-light">
                                    <p>123 Avenue des Étoiles</p>
                                    <p>75001 Paris, France</p>
                                </address>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="cosmic-card p-6 text-center"
                            >
                                <div className="w-12 h-12 bg-dark-2 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/20 shadow-lg shadow-secondary/5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-cinzel font-semibold mb-2 text-foreground">Transmission spatiale</h3>
                                <p className="text-gray-light">contact@astrocommunik.com</p>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="cosmic-card p-6 text-center"
                            >
                                <div className="w-12 h-12 bg-dark-2 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/20 shadow-lg shadow-secondary/5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-cinzel font-semibold mb-2 text-foreground">Canal astral</h3>
                                <p className="text-gray-light">+33 1 23 45 67 89</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}