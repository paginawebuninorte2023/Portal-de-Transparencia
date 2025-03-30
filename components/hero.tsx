"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-24 h-24 bg-[#545454]/10 rounded-full flex items-center justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Versiones%20Logo%20PT%20BLANCO%20CL-mMDQ5gtv7mN9vJ1IAKWZpJf3U5HC7l.png"
              alt="Portal de Transparencia"
              width={60}
              height={60}
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Portal de <span className="text-[#545454] dark:text-gray-300">Transparencia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            Bienvenido al Portal de Transparencia, una iniciativa de Interventoría Capitular que busca promover la
            transparencia y facilitar a los asociados en tiempo real la información de soporte del Capítulo, incluyendo
            datos de membresía, finanzas y avances de gestión de proyectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#545454] hover:bg-[#3a3a3a] text-white"
              onClick={() => scrollToSection("servicios")}
            >
              Explorar Servicios <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contacto")}>
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

