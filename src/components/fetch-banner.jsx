import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FetchBanner() {
  return (
    <div className="relative overflow-hidden bg-transparent py-12">
      <div className="absolute left-0 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-yellow-300 opacity-80" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] translate-x-1/4 rounded-full bg-yellow-300 opacity-80" />

      <div className="container relative mx-auto px-4 w-full max-w-[960px]">
        <Card className="overflow-hidden bg-[#4285f4]">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <div className="relative shrink-0">
                <div className="absolute mb left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300" />
                <img
                  src="dog-11313.png"
                  alt="Chihuahua dog looking at camera"
                  width={220}
                  height={220}
                  className="relative object-cover"
                  style={{
                    clipPath: "circle(100% at 50% 50%)", 
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                <h2 className="mb-4 text-2xl font-bold text-yellow-300 md:text-3xl">
                  Conecta con los animales, transforma vidas
                </h2>
                <p className="mb-6 max-w-2xl text-white">
                  Si amas a los animales y quieres hacer una diferencia, únete como Cuidador de Mascotas. Aquí te damos todo el apoyo que necesitas para crecer, aprender y cuidar a tus nuevos amigos peludos.
                </p>
                <Button
                  className="rounded-full bg-white px-8 text-[#FE7150] hover:bg-gray-100"
                  size="lg"
                >
                  Únete a Nosotros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
