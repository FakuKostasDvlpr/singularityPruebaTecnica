import { ArrowRight, Calendar, Dog, UserRound } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  return (
    (<section className="relative overflow-hidden bg-transparent py-12 lg:py-20">
      <div className="absolute right-0 top-0 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-yellow-300 opacity-80 lg:h-[600px] lg:w-[600px] lg:translate-x-1/3" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="relative order-2 lg:order-1 lg:w-1/2">
            <div className="relative flex flex-col gap-12 h-full">
              <div className="flex justify-start items-start">
                <Card className="bg-white shadow-lg w-full max-w-[200px] h-[200px] flex items-center justify-center">
                  <CardContent className="flex gap-5 flex-col items-center p-4 lg:p-6">
                    <Calendar color='#C8CFDC' size={80}/>
                    <p className="text-xs lg:text-sm font-medium text-gray-400">Reserva</p>
                  </CardContent>
                </Card>
              </div>
    
              <div className="flex justify-center items-end">
                <Card className="bg-white w-full max-w-[200px] h-[200px] flex items-center justify-center shadow-lg">
                  <CardContent className="flex flex-col items-center p-4 lg:p-6">
                    <img src='Grupo70.svg' className="mb-2 h-24 w-24 lg:h-20 lg:w-20" />
                    <p className="text-xs lg:text-sm font-medium text-gray-400">Conexión</p>
                  </CardContent>
                </Card>
              </div>
    
              <div className="flex justify-start items-start">
                <Card className="bg-white shadow-lg w-full max-w-[200px] h-[200px] flex items-center justify-center">
                  <CardContent className="flex flex-col items-center p-4 lg:p-6">
                    <img src='Grupo71.svg' className="mb-2 h-24 w-24 lg:h-20 lg:w-20" />
                    <p className="text-xs lg:text-sm font-medium text-gray-400">Cuidado</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
    
          <div className="flex w-full max-w-[500px] flex-col justify-center order-1 lg:order-2 lg:w-1/2">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-[#FF6B6B]">Cómo Funciona</h2>
            <p className="mb-6 text-base lg:text-lg text-gray-600">
              Porque cuidar de tu mascota debería ser fácil. Con Fetch! El proceso es tan sencillo como...
            </p>
            <div className="mb-8">
              <h3 className="mb-4 text-base lg:text-lg font-medium text-[#FF6B6B]">
                Ingresa tu Ubicación y Encuentra Nuestros Servicios
              </h3>
              <div className="relative w-full max-w-[300px] flex items-center justify-center">
                <Input
                  type="text"
                  placeholder="Código Postal"
                  className="h-12 rounded-full bg-white px-6 py-12 text-lg shadow-lg" />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-[80px] w-[80px] rounded-full bg-[#ff6b6b] hover:bg-[#ff5252]">
                  <ArrowRight className=" " />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  );
}