'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ZodiacSlider from '@/components/astro/ZodiacSlider';
import StarIcon from '@/components/icons/StarIcon';

// Fade in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Home() {
  return (
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background stars */}
          <div className="absolute inset-0 star-bg"></div>

          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-1 to-background"></div>

          {/* Cosmic circles */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full border border-primary/30 bg-gradient-radial from-primary/5 to-transparent"
          />
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-secondary/20 bg-gradient-radial from-secondary/5 to-transparent"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                  className="md:w-1/2"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  custom={0}
              >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-2 inline-flex items-center gap-2 bg-dark-2/80 text-secondary px-4 py-1.5 rounded-full backdrop-blur-sm"
                >
                  <StarIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Communication Cosmique</span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent-2"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2, duration: 0.7 }
                      }
                    }}
                >
                  Communication alignée avec les astres
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-light mb-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3, duration: 0.7 }
                      }
                    }}
                >
                  Transformez votre pr&apos;esence num&apos;erique gr&apos;ace &agrave; l&apos;intelligence artificielle et l&apos;automatisation guid&apos;ees par les constellations.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.4, duration: 0.7 }
                      }
                    }}
                >
                  <Link
                      href="/services"
                      className="cosmic-btn group"
                  >
                    <span className="relative z-10">Découvrir nos services</span>
                  </Link>

                  <Link
                      href="/contact"
                      className="px-6 py-3 rounded-md border border-primary/30 text-primary hover:bg-dark-2/50 transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Nous contacter</span>
                    <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                  className="md:w-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Main cosmic sphere */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-primary/20 to-accent-1/5 border border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-dark-2 to-dark-1 border border-gray-dark/30 relative overflow-hidden">
                        {/* Constellation pattern */}
                        <div className="absolute inset-0 star-bg opacity-30"></div>

                        {/* AI/Automation symbols */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-1/2 h-1/2 text-secondary opacity-40" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" strokeWidth="1" />
                            <path d="M12 5v2M12 17v2M5 12H3M21 12h-2"
                                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  {[...Array(3)].map((_, i) => (
                      <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-full h-full"
                          initial={{ rotate: i * 45 }}
                          animate={{ rotate: 360 + i * 45 }}
                          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                      >
                        <div
                            className="absolute"
                            style={{
                              top: `${50 + 40 * Math.cos(i * 2)}%`,
                              left: `${50 + 40 * Math.sin(i * 2)}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                        >
                          <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-secondary' : i === 1 ? 'bg-primary' : 'bg-accent-2'}`}></div>
                        </div>
                      </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Zodiac Services Preview */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                  className="text-3xl font-cinzel font-semibold mb-4 inline-block relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
              >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Nos services cosmiques
              </span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
              </motion.h2>
              <motion.p
                  className="max-w-2xl mx-auto text-gray-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
              >
                Découvrez comment nos services peuvent aligner vos projets avec les énergies cosmiques de l&apos;innovation.
              </motion.p>
            </div>

            {/* Zodiac-themed services slider */}
            <ZodiacSlider />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative">
          {/* Background design element */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark-1/50 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                  className="text-3xl font-cinzel font-semibold mb-4 inline-block relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
              >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-1">
                Pourquoi nous choisir ?
              </span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expertise Astro-IA',
                  description: 'Notre équipe maîtrise les forces cosmiques de l\'intelligence artificielle pour des résultats alignés avec vos objectifs.',
                  icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                  )
                },
                {
                  title: 'Alignement cosmique',
                  description: 'Chaque projet est unique et mérite une approche personnalisée en harmonie avec les énergies de votre entreprise.',
                  icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M12 2v20M2 12h20M18 3l-6 18M6 3l6 18M3 6l18 12M3 18l18-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                  )
                },
                {
                  title: 'Résultats stellaires',
                  description: 'Nous nous engageons sur des objectifs concrets et mesurables qui propulsent votre communication vers de nouveaux horizons.',
                  icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                  )
                }
              ].map((point, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                      className="cosmic-card p-6 h-full"
                  >
                    <div className="flex flex-col h-full items-center text-center p-2">
                      <div className="w-16 h-16 rounded-full bg-dark-2 border border-primary/20 text-secondary flex items-center justify-center mb-4 p-3 shadow-md shadow-primary/5">
                        {point.icon}
                      </div>

                      <h3 className="text-xl font-cinzel font-semibold mb-3 text-foreground">{point.title}</h3>

                      <p className="text-gray-light flex-grow">{point.description}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 relative overflow-hidden">
          {/* Background star pattern */}
          <div className="absolute inset-0 star-bg opacity-30"></div>

          {/* Cosmic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-dark-2 to-accent-1/10 opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
                className="max-w-4xl mx-auto text-center cosmic-card border-primary/20 p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              <div className="mb-1">
                <StarIcon className="w-8 h-8 mx-auto text-secondary mb-4 animate-pulse" />
              </div>
              <h2 className="text-3xl font-cinzel font-semibold mb-4 text-foreground">Prêt à transformer votre communication cosmique ?</h2>

              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-light">
                Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et découvrir comment l&apos;IA peut révolutionner votre communication.
              </p>

              <Link
                  href="/contact"
                  className="cosmic-btn px-8 py-3 text-lg group inline-flex items-center gap-2"
              >
                <span>Demander un alignement astral gratuit</span>
                <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
  );
}