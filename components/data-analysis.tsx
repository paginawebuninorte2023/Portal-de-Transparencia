import Link from "next/link"
import { PieChart, Settings, Users, DollarSign } from "lucide-react"

export default function DataAnalysis() {
  const analysisOptions = [
    {
      name: "Análisis de Procesos",
      icon: <Settings className="h-16 w-16 text-blue-600" />,
      url: "https://lookerstudio.google.com/reporting/18bfc851-52b3-402d-b383-4f084d2b3c49",
    },
    {
      name: "Asistencia a Asambleas",
      icon: <Users className="h-16 w-16 text-green-600" />,
      url: "https://lookerstudio.google.com/reporting/e7dd7e4d-f276-4216-8088-5980bf595942",
    },
    {
      name: "Finanzas del Capítulo",
      icon: <DollarSign className="h-16 w-16 text-orange-600" />,
      url: "https://lookerstudio.google.com/reporting/58d1f5af-3d92-47ac-9ed0-05632ebd4cd1",
    },
  ]

  return (
    <section id="analisis-datos" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#545454]/10 mb-4">
            <PieChart className="h-8 w-8 text-[#545454] dark:text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Análisis de Datos Capitular
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aquí puedes encontrar las dashboards que analizan los diversos procesos del Capítulo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analysisOptions.map((option) => (
              <Link
                key={option.name}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
              >
                <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-50 dark:bg-gray-600 rounded-lg">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">{option.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
