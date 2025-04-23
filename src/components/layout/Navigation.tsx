'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavigationProps {
    mobile?: boolean;
    onClick?: () => void;
}

const Navigation = ({ mobile = false, onClick }: NavigationProps) => {
    const pathname = usePathname();

    const navItems = [
        {
            label: 'Accueil',
            href: '/',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            label: 'Services',
            href: '/services',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            label: 'Équipe',
            href: '/team',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            label: 'Réalisations',
            href: '/portfolio',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            label: 'Contact',
            href: '/contact',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
    ];

    // Variant for staggered animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    if (mobile) {
        return (
            <motion.nav
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col space-y-3"
            >
                {navItems.map((navItem) => {
                    const isActive = pathname === navItem.href;

                    return (
                        <motion.div key={navItem.href} variants={item}>
                            <Link
                                href={navItem.href}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                                    isActive
                                        ? 'bg-primary-dark/20 text-primary border-l-2 border-primary'
                                        : 'text-gray-light hover:bg-dark-2/50 hover:text-foreground'
                                }`}
                                onClick={onClick}
                            >
                                <span className={`${isActive ? 'text-primary' : ''}`}>{navItem.icon}</span>
                                {navItem.label}
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.nav>
        );
    }

    return (
        <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center space-x-1"
        >
            {navItems.map((navItem) => {
                const isActive = pathname === navItem.href;

                return (
                    <motion.div key={navItem.href} variants={item}>
                        <Link
                            href={navItem.href}
                            className={`px-3 py-2 rounded-lg relative group flex items-center gap-2 transition-all duration-300 ${
                                isActive
                                    ? 'text-secondary'
                                    : 'text-gray-light hover:text-foreground'
                            }`}
                            onClick={onClick}
                        >
                            {/* Link indicator with animated glow effect */}
                            {isActive && (
                                <motion.span
                                    layoutId="navbar-indicator"
                                    className="absolute inset-0 rounded-lg bg-dark-2/80 -z-10"
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}

                            {/* Star indicator for active link */}
                            {isActive && (
                                <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_5px_var(--secondary)]" />
                            )}

                            <span className="text-xs">{navItem.icon}</span>
                            <span className="font-medium">{navItem.label}</span>
                        </Link>
                    </motion.div>
                );
            })}
        </motion.nav>
    );
};

export default Navigation;