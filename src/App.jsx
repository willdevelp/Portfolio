import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Gestion du scroll pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Données pour les compétences
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'ReactJs', level: 75 },
    { name: 'Laravel', level: 80 },
    { name: 'MySQL', level: 90 },
    { name: 'NuxtJs', level: 75 },
    { name: 'PHP', level: 80 },
    { name: 'Git/GitHub', level: 80 }
  ];

  // Données pour les projets
  const projects = [
    {
      title: 'Site E-commerce',
      description: 'Plateforme de vente en ligne avec panier et paiement',
      tags: ['NuxtJs', 'Laravel', 'TailwindCss'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: 'https://shopitech-two.vercel.app'
    },
    {
      title: 'Application de Vérification de certificats',
      description: 'Outil permettant de vérifier l\'authenticité des certificats',
      tags: ['ReactJs', 'Laravel', 'TailwindCss'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: 'https://certif-sure-front.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header amélioré */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-blue-600">
              MonPortfolio
            </a>
            
            {/* Menu desktop */}
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#about" 
                className={`${activeSection === 'about' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                À propos
              </a>
              <a 
                href="#skills" 
                className={`${activeSection === 'skills' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                Compétences
              </a>
              <a 
                href="#projects" 
                className={`${activeSection === 'projects' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                Projets
              </a>
              <a 
                href="#contact" 
                className={`${activeSection === 'contact' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                Contact
              </a>
            </nav>
            
            {/* Menu mobile */}
            <button 
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Menu mobile ouvert */}
          {navOpen && (
            <nav className="md:hidden mt-4 space-y-4 pb-4 bg-white rounded-lg shadow-md p-4">
              <a 
                href="#about" 
                onClick={() => setNavOpen(false)}
                className={`block ${activeSection === 'about' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                À propos
              </a>
              <a 
                href="#skills" 
                onClick={() => setNavOpen(false)}
                className={`block ${activeSection === 'skills' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                Compétences
              </a>
              <a 
                href="#projects" 
                onClick={() => setNavOpen(false)}
                className={`block ${activeSection === 'projects' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                Projets
              </a>
              <a 
                href="#contact" 
                onClick={() => setNavOpen(false)}
                className={`block ${activeSection === 'contact' ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Contenu principal */}
      <main>
        {/* Section Hero améliorée */}
        <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Bonjour, je suis <span className="text-blue-600">MBONGUE WILLIAM</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
                  Développeur Full Stack passionné
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Je crée des applications web modernes, performantes et esthétiques avec les dernières technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors shadow-md text-center"
                    style={{ color: 'white' }}
                  >
                    Me contacter
                  </a>
                  <a 
                    href="#projects" 
                    className="border-2 border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    Voir mes projets
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Profil" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section À propos améliorée */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="border-b-4 border-blue-600 pb-2">À propos de moi</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="À propos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Qui suis-je ?</h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  Passionné par le développement web depuis 2 ans, je mets mon expertise au service de projets innovants.
                  Mon approche combine qualité technique et design soigné pour offrir la meilleure expérience utilisateur.
                </p>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  En dehors du code, j'aime partager mes connaissances et contribuer à des projets open source.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Nom :</h4>
                    <p className="text-gray-700">MBONGUE WILLIAM</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Email :</h4>
                    <p className="text-gray-700">mbonguefeukou@gmail.com</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Âge :</h4>
                    <p className="text-gray-700">18 ans</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Localisation :</h4>
                    <p className="text-gray-700">Douala, Cameroun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences améliorée */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="border-b-4 border-blue-600 pb-2">Mes Compétences</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 px-4 mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Projets améliorée */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="border-b-4 border-blue-600 pb-2">Mes Projets</span>
            </h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {projects.map((project, index) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mb-8" key={index}>
                <div className="">
                  <div 
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
            </div>
          </div>
        </section>

        {/* Section Contact améliorée */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="border-b-4 border-blue-600 pb-2">Contactez-moi</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Parlons de votre projet</h3>
                <p className="mb-6 text-gray-600">
                  Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? 
                  N'hésitez pas à me contacter via le formulaire ou directement par email.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">mbonguefeukou@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                      <FaLinkedin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/feukou-mbongue-13a125346/" className="text-blue-600 hover:underline">linkedin.com/in/feukou-mbongue-13a125346/</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                      <FaGithub size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">GitHub</h4>
                      <a href="https://github.com/willdevelp" className="text-blue-600 hover:underline">github.com/willdevelp</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full text-white"
                    style={{ backgroundColor: '#2563eb', color: 'white' }}
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer amélioré */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold text-white" style={{ color: 'white' }}>MonPortfolio</a>
              <p className="mt-2">Création de solutions web sur mesure</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/willdevelp" className="hover:text-gray-700 transition-colors">
                <FaGithub size={24} color="white" />
              </a>
              <a href="https://www.linkedin.com/in/feukou-mbongue-13a125346/" className="hover:text-gray-700 transition-colors">
                <FaLinkedin size={24} color="white" />
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                <FaTwitter size={24} color="white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;