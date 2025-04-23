export default function TeamPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Notre Équipe</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Des experts passionnés par l&apos;IA et l&apos;automatisation au service de votre communication.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-square bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">Sophie Martin</h3>
                                <p className="text-blue-600 mb-4">Directrice & Stratège IA</p>
                                <p className="text-gray-600 mb-4">
                                    Experte en intelligence artificielle avec plus de 10 ans d&apos;expérience dans la communication digitale.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-square bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">Thomas Dubois</h3>
                                <p className="text-blue-600 mb-4">Lead Développeur</p>
                                <p className="text-gray-600 mb-4">
                                    Architecte logiciel spécialisé dans l&apos;automatisation et l&apos;intégration des technologies d&apos;IA.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-square bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">Emma Blanc</h3>
                                <p className="text-blue-600 mb-4">Directrice Créative</p>
                                <p className="text-gray-600 mb-4">
                                    Spécialiste du branding et de l&apos;UX design avec une approche centrée sur l&apos;innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}