import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import "@/styles/waves.css"

const navigationItems = [
  { name: 'Inicio', href: '#location' },
  { name: 'Servicios para Mascotas', href: '#blog' },
  { name: 'Cuidado Personalizado', href: '#services' },
  { name: 'Historias Felices', href: '#about' },
  { name: 'Únete a Nuestro Equipo', href: '#franchise' }
]

export function LandingPageJsx({onLogout}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
          }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 208.093 245.229"
                className={`fill-current transition-colors ${isScrolled ? 'text-[#FF6652]' : 'text-white'} hover:text-yellow-300`}
              >
                <g transform="translate(0)">
                  <path d="M210.165,255.243a4.935,4.935,0,0,0,2.637-3.411c1.657-28.372-21.771-66.195-30.207-78.823a52.749,52.749,0,0,0-19.5,13.752s-12.185,8.177-16.508,47.907C169.375,264.183,197.694,259.357,210.165,255.243Z" transform="translate(-100.67 -169.326)" />
                  <path d="M298.061,204.684l-37.336-9.113s-1.064-9.008-11.652-12.709c-7.717-2.7-34.306-17.987-60.468-12.589,9.891,15.055,31.894,52.166,30.154,81.849a13.07,13.07,0,0,1-8.429,10.963,69.014,69.014,0,0,1-21.335,3.4c-13.55,0-30.569-4.167-45.9-20.188-.3,5.091-.472,10.6-.5,16.556-.172,30.732-39.209,59.87-39.209,59.87l-5.2,10.775a141.052,141.052,0,0,0,47.9,56.869,91.161,91.161,0,0,1,8.88-34.817,75.373,75.373,0,0,1,25.174-29.375c1.243-33.873,12.237-43.773,21.409-46.036a9.638,9.638,0,0,1,8.124,1.657,11.725,11.725,0,0,1,4.543,8.776c.471,9.1,5.853,15.5,8.4,18.035a82.749,82.749,0,0,1,11.806,1.942l.341-3.194,2.842-27.6c.482-4.658,4.668-8.584,9.3-9.248,17.6-2.563,56.8-12.986,59.351-55.343C306.554,210.5,302.609,205.8,298.061,204.684Zm-58.17,9.839a4.767,4.767,0,1,1,4.769-4.767A4.768,4.768,0,0,1,239.892,214.523Z" transform="translate(-98.183 -169.126)" />
                  <path d="M263.732,347.119c-1.411-12.008-18.362-21.9-40.266-23.309,0,0-11.63-8.941-12.411-24.373-.128-2.336-1.874-4.659-4.143-4.1-5.853,1.44-15.791,8.954-16.286,43.271,0,0-31.833,16.06-34.134,62.36a139.168,139.168,0,0,0,69.565,19.87l-.285-6.633a6.209,6.209,0,0,1,3.776-5.717l27.115-10.169s12.716.713,18.005-8.833a65.021,65.021,0,0,1,6.994-10.342,4.325,4.325,0,0,0-.2-5.959C275.924,367.838,264.787,356.093,263.732,347.119Zm-16.085,11.623a4.768,4.768,0,1,1,4.773-4.763A4.759,4.759,0,0,1,247.648,358.742Z" transform="translate(-101.18 -175.609)" />
                </g>
              </svg>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-lg font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-[#ff6347]' : 'text-white hover:text-yellow-300'
                    }`}>
                  {item.name}
                </motion.a>
              ))}
              <button className='bg-white hover:bg-red hover:border border-white hover:text-red-400 hover:text-white font-bold text-red-500 rounded-full px-5 hover:cursor-pointer' onClick={() => onLogout()}>LogOut</button>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2">
              <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </motion.button>
          </div>
          <motion.div
            initial={false}
            animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden">
            <div className="py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-yellow-300 transition-colors text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </nav>
      </header>
      <main className="relative min-h-screen z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-32 flex gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 w-full max-w-[1200px] text-center lg:text-left self-center flex-1">
          <div className='flex gap-10 w-full  mx-40 items-start justify-center flex-col'>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}>
              ¡Entendemos a tus <span className='text-8xl'>Mascotas!</span> 
            </motion.h1>
            <motion.p
              className="text-xl w-full max-w-[700px]  md:text-2xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              Más de 17 años cuidando a tus mejores amigos
              En Fetch! Pet Care, somos tus aliados para garantizar que tus mascotas estén sanas, felices y llenas de amor.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg">
                Agenda tu servicio ahora
              </motion.button>
              <a
                href="tel:866.338.2463"
                className="text-white hover:bg-gray-100 px-5 rounded-full transition-all duration-300 hover:bg-opacity-100 text-lg font-medium hover:text-yellow-400  flex items-center justify-center">
                Llámanos al 866.338.2463
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="relative flex justify-center items-center overflow-hidden self-stretch aspect-square w-[693px] ">
          <motion.img
            src="FAVPNG_golden-retriever-labrador-retriever-puppy-pet-sitting-tweed-water-spaniel_fTGr4pkV.png"
            alt="Happy Golden Retriever"
            className="object-contain z-10 clip-circle absolute w-[666px] h-[666px] bottom-0 left-10 origin-bottom-right"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }} />
          <span className='absolute bottom-20 rigth-0 w-[436px] aspect-square bg-[#FFE530] rounded-full z-0'></span>
        </motion.div>
      </main>
      <div class="custom-shape-divider-top-1731551274">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}
