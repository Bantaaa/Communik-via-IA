'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-opacity-90 backdrop-blur-md bg-dark-1 shadow-lg py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-1 flex items-center justify-center shadow-md relative overflow-hidden">
                                <div className="absolute inset-0 bg-dark-1 rounded-full scale-[0.85]"></div>
                                <div className="w-6 h-6 relative z-10 text-center">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <circle cx="12" cy="12" r="3" fill="var(--secondary)" />
                                        <path d="M12 5v2M12 17v2M5 12H3M21 12h-2M18.4 5.6l-1.4 1.4M7 7L5.6 5.6M7 17l-1.4 1.4M18.4 18.4l-1.4-1.4"
                                              stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_var(--secondary)]"></div>
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl font-cinzel font-medium text-foreground tracking-wider"
                        >
                            <span className="text-primary">Astro</span> Communik
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation - hidden on mobile */}
                    <div className="hidden md:block">
                        <Navigation />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-gray-light hover:text-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="relative w-6 h-6">
                            <span
                                className={`absolute block h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'top-3 rotate-45 w-6' : 'top-1 w-6'
                                }`}
                            ></span>
                            <span
                                className={`absolute block h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'opacity-0 top-3 w-6' : 'opacity-100 top-3 w-4'
                                }`}
                            ></span>
                            <span
                                className={`absolute block h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'top-3 -rotate-45 w-6' : 'top-5 w-5'
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation - shown when menu is open */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 py-4 px-2 border-t border-gray-dark/30 backdrop-blur-md bg-dark-1/90 rounded-lg shadow-lg"
                    >
                        <Navigation mobile onClick={() => setMobileMenuOpen(false)} />
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;