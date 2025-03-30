"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Calendar, FileText } from "lucide-react"

export default function FinancialSupport() {
  const [activeTab, setActiveTab] = useState("2025-1")

  const financialLinks = {
    "2025-1": [
      { name: "Febrero", url: "#", icon: <Calendar className="h-6 w-6" /> },
      { name: "Marzo", url: "#", icon: <Calendar className="h-6 w-6" /> },
      { name: "Abril", url: "#", icon: <Calendar className="h-6 w-6" /> },
      { name: "Mayo", url: "#", icon: <Calendar className="h-6 w-6" /> },
      { name: "Junio", url: "#", icon: <Calendar className="h-6 w-6" /> },
    ],
    "2024-2": [
      {
        name: "Agosto",
        url: "https://drive.google.com/drive/folders/19119zPK6THKVUho6AnVvCJGlkUeU5QbN?usp=drive_link",
        icon: <Calendar className="h-6 w-6" />,
      },
      {
        name: "Septiembre",
        url: "https://drive.google.com/drive/folders/1a68-XI4DHlFBV3ESwleEUvr1QkV85ntL?usp=drive_link",
        icon: <Calendar className="h-6 w-6" />,
      },
      {
        name: "Octubre",
        url: "https://drive.google.com/drive/folders/16znqgyW0iKPi4FxGZejNZ804onZVnFY8?usp=drive_link",
        icon: <Calendar className="h-6 w-6" />,
      },
      {
        name: "Noviembre",
        url: "https://drive.google.com/drive/folders/1wukZyEeNZEj-xF_EJION2zv-XOIdsT0f?usp=drive_link",
        icon: <Calendar className="h-6 w-6" />,
      },
      {
        name: "Diciembre",
        url: "https://drive.google.com/drive/folders/1qfpFTsfAQTmYLC9hEoDJ8VgIdKcMZMH1?usp=drive_link",
        icon: <Calendar className="h-6 w-6" />,
      },
    ],
  }

  return (
    <section id="soportes-financieros" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Soportes Financieros</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aquí puedes encontrar las evidencias de los movimientos financieros realizados por el Capítulo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="2025-1" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="2025-1" className="px-6 py-2 rounded-md">
                  Periodo 2025-1
                </TabsTrigger>
                <TabsTrigger value="2024-2" className="px-6 py-2 rounded-md">
                  Periodo 2024-2
                </TabsTrigger>
              </TabsList>
            </div>

            {["2025-1", "2024-2"].map((period) => (
              <TabsContent key={period} value={period} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {financialLinks[period].map((link) => (
                    <div
                      key={link.name}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        {link.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">{link.name}</h3>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm"
                      >
                        <FileText className="h-4 w-4 mr-1" /> Ver soportes
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

