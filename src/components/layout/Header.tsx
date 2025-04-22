'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Communik via IA
                    </Link>

                    {/* Desktop Navigation - hidden on mobile */}
                    <div className="hidden md:block">
                        <Navigation />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation - shown when menu is open */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 py-2 border-t border-gray-200">
                        <Navigation mobile onClick={() => setMobileMenuOpen(false)} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;