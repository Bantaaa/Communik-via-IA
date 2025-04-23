export default function ServicesPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Découvrez comment nous pouvons transformer votre communication grâce à l&apos;IA et l&apos;automatisation.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Branding */}
                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="text-3xl">🎨</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Branding</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Notre approche de branding intègre l&apos;intelligence artificielle pour créer des identités de marque uniques et mémorables qui résonnent avec votre audience cible.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Conception de logo assistée par IA</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Charte graphique et identité visuelle</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Analyse de positionnement de marque</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-gray-200 rounded-lg aspect-video"></div>
                            </div>
                        </div>
                    </div>

                    {/* Site Creation */}
                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="text-3xl">💻</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Création de Sites Web</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Nous concevons des sites web intelligents et optimisés pour la conversion, avec une attention particulière à l&apos;expérience utilisateur et la performance.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sites vitrines et e-commerce</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Optimisation SEO et expérience utilisateur</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Intégration d&apos;outils d&apos;IA et d&apos;automatisation</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-gray-200 rounded-lg aspect-video"></div>
                            </div>
                        </div>
                    </div>

                    {/* Add AI Strategy and Automation sections similarly */}
                </div>
            </section>
        </div>
    );
}