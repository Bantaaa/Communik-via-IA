import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Communiquez intelligemment avec l'IA
                </h1>
                <p className="text-xl mb-6">
                  Transformez votre communication grâce à l'intelligence artificielle et l'automatisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                      href="/services"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition"
                  >
                    Découvrir nos services
                  </Link>
                  <Link
                      href="/contact"
                      className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-full aspect-video relative bg-blue-800 rounded-lg shadow-xl">
                  {/* Placeholder for hero image - can be replaced with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl">Image illustration IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Branding',
                  description: 'Création d\'identité de marque augmentée par l\'IA',
                  icon: '🎨'
                },
                {
                  title: 'Création de sites',
                  description: 'Sites web intelligents et optimisés pour la conversion',
                  icon: '💻'
                },
                {
                  title: 'Stratégie IA',
                  description: 'Intégration de l\'intelligence artificielle dans votre communication',
                  icon: '🧠'
                },
                {
                  title: 'Automatisation',
                  description: 'Workflows intelligents pour optimiser vos processus',
                  icon: '⚙️'
                }
              ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                        href="/services"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      En savoir plus →
                    </Link>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expertise IA',
                  description: 'Notre équipe maîtrise les dernières avancées en intelligence artificielle.'
                },
                {
                  title: 'Solutions sur mesure',
                  description: 'Chaque projet est unique et mérite une approche personnalisée.'
                },
                {
                  title: 'Résultats mesurables',
                  description: 'Nous nous engageons sur des objectifs concrets et mesurables.'
                }
              ].map((point, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre communication ?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment l'IA peut révolutionner votre communication.
            </p>
            <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>
      </div>
  );
}