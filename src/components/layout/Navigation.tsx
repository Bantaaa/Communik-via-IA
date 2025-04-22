'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
    mobile?: boolean;
    onClick?: () => void;
}

const Navigation = ({ mobile = false, onClick }: NavigationProps) => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Équipe', href: '/team' },
        { label: 'Réalisations', href: '/portfolio' },
        { label: 'Contact', href: '/contact' },
    ];

    const navClasses = mobile
        ? 'flex flex-col space-y-3'
        : 'flex space-x-6';

    const linkClasses = (isActive: boolean) =>
        `${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition`;

    return (
        <nav className={navClasses}>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={linkClasses(pathname === item.href)}
                    onClick={onClick}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;