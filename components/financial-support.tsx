"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, FileText, ChevronDown } from "lucide-react"

type PeriodKey = "2026-1" | "2025-2" | "2025-1" | "2024-2"

export default function FinancialSupport() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>("2026-1")
  const [isOpen, setIsOpen] = useState(false)

  const periods: { value: PeriodKey; label: string }[] = [
    { value: "2026-1", label: "Periodo 2026-1" },
    { value: "2025-2", label: "Periodo 2025-2" },
    { value: "2025-1", label: "Periodo 2025-1" },
    { value: "2024-2", label: "Periodo 2024-2" },
  ]

  const financialLinks: Record<PeriodKey, { name: string; url: string }[]> = {
    "2026-1": [
      {
        name: "Febrero",
        url: "https://drive.google.com/drive/folders/1WFT3FKZXyhTXaQSaNoUWV328YvKzmw00?usp=drive_link",
      },
      {
        name: "Marzo",
        url: "https://drive.google.com/drive/folders/1YwFHXCNmfLakfKA0_XjzX8Pr8EzYQTPs?usp=drive_link",
      },
      {
        name: "Abril",
        url: "https://drive.google.com/drive/folders/1ZM1tzuhreS-HtmqSng3sckN8IKihhwzd?usp=drive_link",
      },
      {
        name: "Mayo",
        url: "https://drive.google.com/drive/folders/1k4xmAFSykHppiOIA7vxhQ8Q98drUd4nX?usp=drive_link",
      },
    ],
    "2025-2": [
      {
        name: "Septiembre",
        url: "https://drive.google.com/drive/folders/1JuyawRgFgjzS7VHou-_cL95zajDhNgKZ?usp=drive_link",
      },
      {
        name: "Octubre",
        url: "https://drive.google.com/drive/folders/1SxmwNJOynTBU9frdQ-6jTSsuNyMwQcJR?usp=drive_link",
      },
      {
        name: "Noviembre",
        url: "https://drive.google.com/drive/folders/1OqVNJWwYGAeX6xo-Kym45kAnPRldXgko?usp=drive_link",
      },
    ],
    "2025-1": [
      {
        name: "Febrero",
        url: "https://drive.google.com/drive/folders/1xn5BVuZzKC2pUybl-DXLEx8eZGLJ5DCf?usp=drive_link",
      },
      {
        name: "Marzo",
        url: "https://drive.google.com/drive/folders/1QwhMSEvw3jFQqP7jZgidaH-13t_gHT0Q?usp=drive_link",
      },
      {
        name: "Abril",
        url: "https://drive.google.com/drive/folders/18W5ILHjfo3bnOYJju_jMEox_baI10buU?usp=drive_link",
      },
      {
        name: "Mayo",
        url: "https://drive.google.com/drive/folders/1xrtyHXLR7oyC5NET8L2Rkship54ObJCg?usp=drive_link",
      },
      {
        name: "Junio",
        url: "https://drive.google.com/drive/folders/171MgwAubLs3xg6NzMDWzCd07n7h3C7zi?usp=drive_link",
      },
    ],
    "2024-2": [
      {
        name: "Agosto",
        url: "https://drive.google.com/drive/folders/19119zPK6THKVUho6AnVvCJGlkUeU5QbN?usp=drive_link",
      },
      {
        name: "Septiembre",
        url: "https://drive.google.com/drive/folders/1a68-XI4DHlFBV3ESwleEUvr1QkV85ntL?usp=drive_link",
      },
      {
        name: "Octubre",
        url: "https://drive.google.com/drive/folders/16znqgyW0iKPi4FxGZejNZ804onZVnFY8?usp=drive_link",
      },
      {
        name: "Noviembre",
        url: "https://drive.google.com/drive/folders/1wukZyEeNZEj-xF_EJION2zv-XOIdsT0f?usp=drive_link",
      },
      {
        name: "Diciembre",
        url: "https://drive.google.com/drive/folders/1qfpFTsfAQTmYLC9hEoDJ8VgIdKcMZMH1?usp=drive_link",
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
          <div className="flex justify-center mb-8">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-[200px] px-4 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <span className="text-gray-700 dark:text-gray-200">
                  {periods.find((p) => p.value === selectedPeriod)?.label}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
                  {periods.map((period) => (
                    <button
                      key={period.value}
                      onClick={() => {
                        setSelectedPeriod(period.value)
                        setIsOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${
                        selectedPeriod === period.value
                          ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {financialLinks[selectedPeriod].map((link) => (
              <div key={link.name} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-gray-600 dark:text-gray-300" />
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
        </div>
      </div>
    </section>
  )
}
