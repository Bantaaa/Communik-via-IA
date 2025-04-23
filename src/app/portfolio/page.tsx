export default function PortfolioPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Nos Réalisations</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Découvrez nos projets récents et comment nous aidons nos clients à transformer leur communication.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-video bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">TechInnov</h3>
                                <p className="text-blue-600 mb-2">Branding & Site Web</p>
                                <p className="text-gray-600 mb-4">
                                    Refonte complète de l'identité visuelle et création d'un site web optimisé pour la génération de leads.
                                </p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-video bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">EcoSolutions</h3>
                                <p className="text-blue-600 mb-2">Stratégie IA & Automatisation</p>
                                <p className="text-gray-600 mb-4">
                                    Mise en place d'un système de qualification de leads par IA et automatisation du processus de vente.
                                </p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-video bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">ModeElégance</h3>
                                <p className="text-blue-600 mb-2">E-commerce & Automatisation</p>
                                <p className="text-gray-600 mb-4">
                                    Création d'une boutique en ligne avec personnalisation automatisée des recommandations produits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}