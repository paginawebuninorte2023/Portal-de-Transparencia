"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart2, FileText, ChevronDown } from "lucide-react"

type PeriodKey = "2026-1" | "2025-2" | "2025-1" | "2024-2"

export default function ManagementPlan() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>("2026-1")
  const [isOpen, setIsOpen] = useState(false)

  const periods: { value: PeriodKey; label: string }[] = [
    { value: "2026-1", label: "Periodo 2026-1" },
    { value: "2025-2", label: "Periodo 2025-2" },
    { value: "2025-1", label: "Periodo 2025-1" },
    { value: "2024-2", label: "Periodo 2024-2" },
  ]

  const managementLinks: Record<PeriodKey, { name: string; url: string }[]> = {
    "2026-1": [
      { name: "DCA", url: "https://drive.google.com/drive/folders/1f0_xfIVNFPmdfI3EssXgpU0zEL5wT0RF?usp=drive_link" },
      { name: "DCC", url: "https://drive.google.com/drive/folders/1Bbezib_17zY2zEbpCHOAJuBf0Ze-YQwZ?usp=drive_link" },
      { name: "DCD", url: "https://drive.google.com/drive/folders/1AP2k_5RhlgKF0d7kIdQtJDSzkjmYZSax?usp=drive_link" },
      { name: "DCF", url: "https://drive.google.com/drive/folders/1vEjTklR2Fiyw0MnWdiSy1psW8N9dvyWg?usp=drive_link" },
      { name: "DCM", url: "https://drive.google.com/drive/folders/1JWJnfLyaWDS7cxZJ4ya85jH4eDkCpFR_?usp=drive_link" },
      {
        name: "Transversales",
        url: "https://drive.google.com/drive/folders/1J6Lbe5zzdeTiF-yI2B57x80Lyvvm4R8V?usp=drive_link",
      },
    ],
    "2025-2": [
      { name: "DCA", url: "https://drive.google.com/drive/folders/1JaXsvBI51PLo6NEkF6ZfNg3SIKsDYUOC?usp=drive_link" },
      { name: "DCC", url: "https://drive.google.com/drive/folders/1JehlS4lmb4yjbx_IRUbdOZCXN_hb1_-K?usp=drive_link" },
      { name: "DCD", url: "https://drive.google.com/drive/folders/12R_Vp1F8OCJBH-yuYn-2pfTdR3IKi39q?usp=drive_link" },
      { name: "DCF", url: "https://drive.google.com/drive/folders/1xAUD7nHAwOFBo8SxpxGhhoqRjp0Vpd7L?usp=drive_link" },
      { name: "DCM", url: "https://drive.google.com/drive/folders/1aEo-O64nAspNopxAE7uVmiHVRlOz5jf4?usp=drive_link" },
      {
        name: "Transversales",
        url: "https://drive.google.com/drive/folders/1DvSbTstS3i0lvDU_8r1A0iy3RC8IhVkA?usp=drive_link",
      },
    ],
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {managementLinks[selectedPeriod].map((link) => (
              <div
                key={link.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg flex flex-col items-center shadow-md"
              >
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mb-4">
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
        </div>
      </div>
    </section>
  )
}
