import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterComponent() {
  return (
    <footer className="relative bg-[#FF6B6B] text-white rounded-[0px]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-bold text-yellow-300">Sobre Nosotros</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Ubicaciones</a></li>
              <li><a href="#" className="hover:underline">Franquicia con Nosotros</a></li>
              <li><a href="#" className="hover:underline">Socios</a></li>
              <li><a href="#" className="hover:underline">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:underline">¡Haz que Fetch! Suceda</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-yellow-300">Recursos</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Opiniones</a></li>
              <li><a href="#" className="hover:underline">Centro de Recursos para Mascotas</a></li>
              <li><a href="#" className="hover:underline">Hoja de Hechos de los Medios</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Noticias</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-yellow-300">Servicios</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Tarjetas de Regalo</a></li>
              <li><a href="#" className="hover:underline">Servicios</a></li>
              <li><a href="#" className="hover:underline">Acceso a Franquiciados</a></li>
              <li><a href="#" className="hover:underline">Términos de Uso</a></li>
              <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-yellow-300">Boletín</h2>
            <p className="mb-4">Regístrate para recibir el Boletín Familiar de Fetch!</p>
            <div className="relative w-full max-w-[300px] flex items-center justify-center">
                <Input
                  type="text"
                  placeholder="Tu correo@example.com"
                  className="h-12 rounded-full bg-white px-6 py-10 text-lg shadow-lg" />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-[65px] w-[65px] rounded-full bg-[#ff6b6b] hover:bg-[#ff5252]">
                  <ArrowRight className=" " />
                </Button>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
