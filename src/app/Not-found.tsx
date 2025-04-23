import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
            <p className="text-lg mb-8 text-center max-w-md">
                Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
                Retour à l&apos;accueil
            </Link>
        </div>
    );
}