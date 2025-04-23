import type { Metadata } from 'next';
import { Montserrat, Cinzel, Space_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarsBackground from '@/components/astro/StarsBackground';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap'
});

const cinzel = Cinzel({
    subsets: ['latin'],
    variable: '--font-cinzel',
    display: 'swap',
    weight: ['400', '500', '600', '700']
});

const spaceMono = Space_Mono({
    subsets: ['latin'],
    variable: '--font-space-mono',
    weight: ['400', '700']
});

export const metadata: Metadata = {
    title: 'Astro Communik - Communication Cosmique',
    description: 'Agence de communication cosmique intégrant l&apos;automatisation, l&apos;intelligence artificielle et des workflows stellaires.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <body className={`${montserrat.variable} ${cinzel.variable} ${spaceMono.variable}`}>
        <StarsBackground />
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}