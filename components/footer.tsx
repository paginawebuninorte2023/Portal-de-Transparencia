"use client"

import Image from "next/image"
import { Mail } from "lucide-react"

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Versiones%20Logo%20PT%20BLANCO%20CL-mMDQ5gtv7mN9vJ1IAKWZpJf3U5HC7l.png"
                alt="Portal de Transparencia"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold">Portal de Transparencia</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Aquí encontrarás toda la documentación relevante de la gestión actual, incluyendo datos de membresía,
              finanzas y avances de gestión de proyectos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("avances-pg")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Avances PG
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("membresia")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Membresía
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("soportes-financieros")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Soportes Financieros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("analisis-datos")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Análisis de Datos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <div className="flex items-center space-x-3 mb-2 bg-[#2a2a2a] p-3 rounded-lg">
              <Mail className="h-5 w-5 text-gray-300" />
              <a
                href="mailto:interventoría_uninorte@aneiap.co"
                className="text-gray-300 hover:text-white transition-colors"
              >
                interventoría_uninorte@aneiap.co
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 UNINORTE - Portal de Transparencia. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
