import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Vous avez un projet en tête ? Parlons-en ensemble et découvrez comment nous pouvons vous aider grâce à l'IA et l'automatisation.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Autres façons de nous contacter</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Address */}
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Notre adresse</h3>
                                <address className="not-italic text-gray-600">
                                    <p>123 Avenue de l'Innovation</p>
                                    <p>75001 Paris, France</p>
                                </address>
                            </div>

                            {/* Email */}
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Email</h3>
                                <p className="text-gray-600">contact@communik-via-ia.com</p>
                            </div>

                            {/* Phone */}
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                                <p className="text-gray-600">+33 1 23 45 67 89</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}