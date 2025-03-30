"use client"

import { Users, FileText, BarChart3 } from "lucide-react"

export default function Services() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-gray-200 dark:bg-gray-700 px-6 py-2 mb-4">
            <span className="text-gray-800 dark:text-white font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Accede a toda la información
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Accede a toda la información relevante del Capítulo de manera transparente y en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Membresía Capitular</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Aquí puedes encontrar los documentos enviados por la junta directiva para la evaluación de la membresía
              capitular.
            </p>
            <button
              onClick={() => scrollToSection("membresia")}
              className="block w-full py-3 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md transition-colors"
            >
              Ir al servicio
            </button>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Soportes Financieros</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Aquí puedes encontrar las evidencias de los movimientos financieros realizados por el Capítulo.
            </p>
            <button
              onClick={() => scrollToSection("soportes-financieros")}
              className="block w-full py-3 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md transition-colors"
            >
              Ir al servicio
            </button>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">
              Avances Plan de Gestión
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Aquí puedes encontrar las evidencias del cumplimiento de los indicadores de los diferentes proyectos
              dentro del Plan de Gestión Capitular.
            </p>
            <button
              onClick={() => scrollToSection("avances-pg")}
              className="block w-full py-3 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md transition-colors"
            >
              Ir al servicio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

