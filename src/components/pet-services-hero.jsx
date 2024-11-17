import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function PetServicesHero() {
  const [zipCode, setZipCode] = useState('')

  const services = [
    { src: "/dog (1).svg", title: 'Paseos caninos' },
    { src: "/Grupo63.svg", title: 'Cuidado en casa' },
    { src: "/Grupo64.svg", title: 'Estancia nocturna' },
    { src: "/Grupo65.svg", title: 'Más servicios' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="relative flex flex-col items-center min-h-screen overflow-hidden bg-white px-4">
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
          height="320">
          <path
            fill="#2563EB"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container relative gap-[120px] md:gap-[280px] z-10 mx-auto flex flex-col items-center justify-center py-16 lg:flex-row lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-lg text-center lg:text-left space-y-6 lg:space-y-8">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-[#ff6b6b] lg:text-5xl">
            Un espacio seguro y amoroso para tu mascota.
          </motion.h1>
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-lg text-gray-600 lg:text-xl">
              Cuidado personalizado, lleno de amor.
            </p>
            <p className="text-lg text-gray-600 lg:text-xl">
              Descubre servicios creados para ellos.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="mb-4 text-lg text-[#ff6b6b] lg:text-lg">
              Ingresa tu ubicación para comenzar.
            </p>
            <div className="relative w-full flex items-center justify-center  ">
              <Input
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="h-12 rounded-full bg-white px-6 py-12 text-lg shadow-lg" />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-[80px] w-[80px] rounded-full bg-[#ff6b6b] hover:bg-[#ff5252]">
                <ArrowRight className=" " />
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="transform transition-all">
              <Card
                className="flex h-48 w-48 flex-col items-center justify-center space-y-4 rounded-2xl bg-white p-4 shadow-lg lg:h-[220px] lg:w-[220px] lg:p-6">
                <img src={service.src} alt={service.title} className="h-10 w-10 lg:h-16 lg:w-16" />
                <h3 className="text-center text-base font-medium text-gray-800 lg:text-lg">
                  {service.title}
                </h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
