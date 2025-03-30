"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { BarChart2, FileText } from "lucide-react"

export default function ManagementPlan() {
  const [activeTab, setActiveTab] = useState("2025-1")

  const managementLinks = {
    "2025-1": [
      { name: "DCA", url: "https://drive.google.com/drive/folders/1XSABbEd_uZx48cEItvYNIA4W0Kly74N9?usp=drive_link" },
      { name: "DCC", url: "https://drive.google.com/drive/folders/1wqQ5D0V0KLQ9Pre_aT7rk1-u1BpM1Ayi?usp=drive_link" },
      { name: "DCD", url: "https://drive.google.com/drive/folders/1kK2DcORvQy3-snluMx-jeUtSKgQgCZco?usp=drive_link" },
      { name: "DCF", url: "https://drive.google.com/drive/folders/1oukA-PhUIvDFJdStU-cQDJxWIr9fAm3y?usp=drive_link" },
      { name: "DCM", url: "https://drive.google.com/drive/folders/1Xs8L1guyU6nbQr8vLDPL57IoIk-GPpM5?usp=drive_link" },
      {
        name: "Transversales",
        url: "https://drive.google.com/drive/folders/1WmVDuSvhXOcFVmXoHVPU-B320Q7iUfjD?usp=drive_link",
      },
      {
        name: "General",
        url: "https://drive.google.com/drive/folders/1cv1yDFpBGrwhn8FqL3iEla8_VyEuAv-1?usp=drive_link",
      },
    ],
    "2024-2": [
      { name: "DCA", url: "https://drive.google.com/drive/folders/1MtLAuUS0O1InaFQJexNc19ZVIMhE1qna?usp=drive_link" },
      { name: "DCC", url: "https://drive.google.com/drive/folders/123eEVsenQwsBZrjNvKstsZ0f8zoLRxQ2?usp=drive_link" },
      { name: "DCD", url: "https://drive.google.com/drive/folders/1sljAKCz6GXAn1pFHhLaLTqhUFGZ5_3p4?usp=drive_link" },
      { name: "DCF", url: "https://drive.google.com/drive/folders/1QJdphK_0n1SfpZv4-W2l3MpM4LnBWxDi?usp=drive_link" },
      { name: "DCM", url: "https://drive.google.com/drive/folders/1E-h1lgl0Yt0gaAotWxIouEeK3RIKtC2b?usp=drive_link" },
      {
        name: "Transversales",
        url: "https://drive.google.com/drive/folders/1RgYLrbjz1uby7tzjxBWTuFoexu_f6_FZ?usp=drive_link",
      },
      {
        name: "General",
        url: "https://drive.google.com/drive/folders/1BChZHEGWcnXlaQsp2m2EXbhL6SBs9b0Y?usp=drive_link",
      },
    ],
  }

  return (
    <section id="avances-pg" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Avances Plan de Gestión</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aquí puedes encontrar las evidencias del cumplimiento de los indicadores de los diferentes proyectos dentro
            del Plan de Gestión Capitular.
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {managementLinks[period].map((link) => (
                    <div
                      key={link.name}
                      className="bg-white dark:bg-gray-700 p-6 rounded-lg flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        <BarChart2 className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">{link.name}</h3>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm"
                      >
                        <FileText className="h-4 w-4 mr-1" /> Ver avances
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

