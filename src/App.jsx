import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Gestion du scroll pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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

  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = skillsContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    // Restaurer la position du scroll si elle existe
    if (scrollContainer) {
      const savedScroll = localStorage.getItem('skillsScrollLeft');
      if (savedScroll) {
        scrollAmount = parseInt(savedScroll, 10) || 0;
        scrollContainer.scrollLeft = scrollAmount;
      }
    }

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        // Sauvegarder la position du scroll
        localStorage.setItem('skillsScrollLeft', scrollAmount.toString());
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  // Données pour les compétences organisées
  const skillCategories = [
    {
      skills: [
        { name: 'ReactJS', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'NuxtJS', logo: 'https://cdn.worldvectorlogo.com/logos/nuxt-2.svg' },
        { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
        { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { name: 'TailwindCSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' }
      ]
    },
    {
      skills: [
        { name: 'Laravel', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
        { name: 'PHP', logo: 'data:image/png;base64,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' },
      ]
    }
  ];

  // Données pour les projets
  const projects = [
    {
      title: 'Site E-commerce',
      description: 'Plateforme de vente en ligne avec panier et paiement',
      tags: ['NuxtJs', 'Laravel', 'TailwindCss'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://shopitech-two.vercel.app'
    },
    {
      title: 'Application de Vérification',
      description: 'Outil de vérification de certificats',
      tags: ['ReactJs', 'Laravel', 'TailwindCss'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://certif-sure-front.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header simplifié */}
      <header className="fixed w-full bg-white z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="#home" 
              className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-colors"
              onClick={() => setActiveSection('home')}
              style={{ color: '#60a5fa' }}
            >
              MBONGUE William
            </a>
            
            {/* Menu desktop */}
            <nav className="hidden md:flex space-x-6">
              {['about', 'skills', 'projects'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className={`${
                    activeSection === section 
                      ? 'text-blue-400 font-medium' 
                      : 'text-gray-600 hover:text-blue-400'
                  } transition-colors capitalize`}
                  onClick={() => setActiveSection(section)}
                  style={{ color: '#60a5fa' }}
                >
                  {section === 'about' ? 'À propos' : 
                   section === 'skills' ? 'Compétences' : 
                   section === 'projects' ? 'Projets' : 'Contact'}
                </a>
              ))}
            </nav>
            
            {/* Menu mobile */}
            <button 
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Menu mobile ouvert */}
          {navOpen && (
            <nav className="md:hidden mt-4 space-y-3 pb-4">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  onClick={() => {
                    setNavOpen(false);
                    setActiveSection(section);
                  }}
                  className={`block px-4 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'bg-blue-400 text-white' 
                      : 'text-gray-600 hover:bg-blue-50'
                  } transition-colors capitalize`}
                  style={{ color: '#60a5fa' }}
                >
                  {section === 'about' ? 'À propos' : 
                   section === 'skills' ? 'Compétences' : 
                   section === 'projects' ? 'Projets' : 'Contact'}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Contenu principal */}
      <main className="pt-16">
        {/* Section Hero */}
        <section 
          id="home" 
          className="min-h-screen flex items-center bg-blue-50"
        >
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Bonjour, je suis <span className="text-blue-400">William</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
                  Développeur Full Stack
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Je crée des applications web modernes avec des technologies innovantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact" 
                    className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors text-center font-medium"
                    style={{ color: 'white' }}
                    onClick={() => setActiveSection('contact')}
                  >
                    Me contacter
                  </a>
                  <a 
                    href="#projects" 
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors text-center font-medium"
                    style={{ color: '#60a5fa' }}
                    onClick={() => setActiveSection('projects')}
                  >
                    Mes projets
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="William MBONGUE" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section À propos */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              À propos de moi
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 bg-blue-100 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="William MBONGUE" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Qui suis-je ?</h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  Développeur passionné depuis 2 ans, je crée des solutions web performantes 
                  avec une attention particulière pour l'expérience utilisateur.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-1">Nom :</h4>
                    <p className="text-gray-700">MBONGUE WILLIAM</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-1">Email :</h4>
                    <a href="mailto:mbonguefeukou@gmail.com" className="text-gray-700 hover:text-blue-400" style={{ color: 'black' }}>
                      mbonguefeukou@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences */}
        <section id="skills" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Mes Compétences
            </h2>
            <div
              className="relative overflow-hidden py-4 sm:py-6"
              ref={skillsContainerRef}
            >
              <div className="grid md:grid-cols-4 gap-8">
                {skillCategories.flatMap((category, catIdx) =>
                  category.skills.map((skill, skillIdx) => (
                    <div
                      key={catIdx + '-' + skillIdx}
                      className="flex flex-col items-center p-3 hover:bg-blue-100 rounded-full transition-colors mx-2"
                      style={{ minWidth: 140 }}
                    >
                      <div className="w-24 h-24 flex items-center justify-center mb-2">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-18 object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))
                )}
                {/* Dupliquer pour effet infini */}
                {/* {skillCategories.flatMap((category, catIdx) =>
                  category.skills.map((skill, skillIdx) => (
                    <div
                      key={'dup-' + catIdx + '-' + skillIdx}
                      className="flex flex-col items-center p-3 hover:bg-blue-100 rounded-lg transition-colors mx-2 bg-white shadow-sm opacity-50"
                      style={{ minWidth: 140 }}
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-10 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{skill.name}</span>
                    </div>
                  ))
                )} */}
              </div>
            </div>
          </div>
        </section>

        {/* Section Projets */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Mes Projets
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={index}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-blue-100">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-100 text-blue-400 text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact */}
        {/* <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Contactez-moi
            </h2>
            
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded transition-colors font-medium"
                >
                  Envoyer le message
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-blue-100">
                <div className="flex justify-center space-x-6">
                  <a 
                    href="mailto:mbonguefeukou@gmail.com" 
                    className="text-blue-400 hover:text-blue-500"
                    aria-label="Email"
                  >
                    <FaEnvelope size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/feukou-mbongue-13a125346/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/willdevelp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-400 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© {new Date().getFullYear()} William MBONGUE. Tous droits réservés.</p>
          <p className="text-blue-100">Développeur Full Stack - Création de solutions web sur mesure</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
