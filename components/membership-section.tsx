"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

type PeriodKey = "2026-2" | "2026-1" | "2025-2" | "2025-1" | "2024-2"

export default function MembershipSection() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>("2026-2")
  const [isOpen, setIsOpen] = useState(false)

  const periods: { value: PeriodKey; label: string }[] = [
    { value: "2026-2", label: "Periodo 2026-2" },
    { value: "2026-1", label: "Periodo 2026-1" },
    { value: "2025-2", label: "Periodo 2025-2" },
    { value: "2025-1", label: "Periodo 2025-1" },
    { value: "2024-2", label: "Periodo 2024-2" },
  ]

  const membershipLinks: Record<PeriodKey, { name: string; icon: string; url: string }[]> = {
    "2026-2": [
      {
        name: "Académico",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acad%C3%A9mico-CM8vra1dr6rBT3HnW6RdAdmQ8tcN0T.png",
        url: "https://drive.google.com/drive/folders/1mquUwhyEO9t9_6h4jSzD-43kHLBYif2E?usp=drive_link",
      },
      {
        name: "Comunicaciones",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comunicaciones-onbHvS71vNVyXOggyOWSnoJpDGsRGb.png",
        url: "https://drive.google.com/drive/folders/1krT2Bf4QEhgg3AJsmcSn85LSiAalRGw_?usp=drive_link",
      },
      {
        name: "Desarrollo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarrollo-ukIr7hsDlgdr0cvmTI6epa27dgwZ5E.png",
        url: "https://drive.google.com/drive/folders/1aBuE-p0z0gMHIOhfLJDfIva9qipmXJRJ?usp=drive_link",
      },
      {
        name: "Finanzas",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finanzas-3uw1gCQHifl5dW90KzDux84wbM16HF.png",
        url: "https://drive.google.com/drive/folders/1TNzvnq7tRXmlE__9PWlmbRSokaIQbquz?usp=drive_link",
      },
      {
        name: "Mercadeo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercadeo-2ZlPpts94HwcpTgB1Y3X0J9F8KUgBm.png",
        url: "https://drive.google.com/drive/folders/1rJgQ1gIXhgUSM_oOrVUaEADPPrSlfTET?usp=drive_link",
      },
      {
        name: "JDC-IC",
        icon: "/images/UNINORTE-COLOR.png",
        url: "https://drive.google.com/drive/folders/1aXXSJ4aC45HTUVczXmIam5eGkA-ZislH?usp=drive_link",
      },
    ],
    "2026-1": [
      {
        name: "Académico",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acad%C3%A9mico-CM8vra1dr6rBT3HnW6RdAdmQ8tcN0T.png",
        url: "https://drive.google.com/drive/folders/1f0q-0ezhh4lZVi8aVb7aovU6v4uiH9bM?usp=drive_link",
      },
      {
        name: "Comunicaciones",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comunicaciones-onbHvS71vNVyXOggyOWSnoJpDGsRGb.png",
        url: "https://drive.google.com/drive/folders/1cUtjEUayamavtsGn0JrX8V9npflUWoTr?usp=drive_link",
      },
      {
        name: "Desarrollo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarrollo-ukIr7hsDlgdr0cvmTI6epa27dgwZ5E.png",
        url: "https://drive.google.com/drive/folders/12uu_TykuTuLkjizHynNHzWBB65OgUZB2?usp=drive_link",
      },
      {
        name: "Finanzas",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finanzas-3uw1gCQHifl5dW90KzDux84wbM16HF.png",
        url: "https://drive.google.com/drive/folders/1HAqNqcJU5nH1IQEbE1Q_L9INX96ex786?usp=drive_link",
      },
      {
        name: "Mercadeo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercadeo-2ZlPpts94HwcpTgB1Y3X0J9F8KUgBm.png",
        url: "https://drive.google.com/drive/folders/1VfKKNqoMYUgGeI9BvB5oGyowRAMWPHLp?usp=drive_link",
      },
      {
        name: "JDC-IC",
        icon: "/images/UNINORTE-COLOR.png",
        url: "https://drive.google.com/drive/folders/1_P79MLICuHUiWzBmSxX4pLmwMMP9E_jD?usp=drive_link",
      },
    ],
    "2025-2": [
      {
        name: "Académico",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acad%C3%A9mico-CM8vra1dr6rBT3HnW6RdAdmQ8tcN0T.png",
        url: "https://drive.google.com/drive/folders/1zNf-82tKcNwDE49RmG6s-idkIUZzGkyx?usp=drive_link",
      },
      {
        name: "Comunicaciones",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comunicaciones-onbHvS71vNVyXOggyOWSnoJpDGsRGb.png",
        url: "https://drive.google.com/drive/folders/1noDjWHvC8SDpqI8eb35Yc2dAaGOyuTNf?usp=drive_link",
      },
      {
        name: "Desarrollo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarrollo-ukIr7hsDlgdr0cvmTI6epa27dgwZ5E.png",
        url: "https://drive.google.com/drive/folders/1kBEM0rxXgUSrFMcfmmJ1821vTUPj3yHL?usp=drive_link",
      },
      {
        name: "Finanzas",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finanzas-3uw1gCQHifl5dW90KzDux84wbM16HF.png",
        url: "https://drive.google.com/drive/folders/1KTHeLlZLPLTbpmI8fIihrETGihgL3JSB?usp=drive_link",
      },
      {
        name: "Mercadeo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercadeo-2ZlPpts94HwcpTgB1Y3X0J9F8KUgBm.png",
        url: "https://drive.google.com/drive/folders/1zlAX5Up7nd-jnjknHHAwl9Axpid13clU?usp=drive_link",
      },
      {
        name: "JDC-IC",
        icon: "/images/UNINORTE-COLOR.png",
        url: "https://drive.google.com/drive/folders/1sCBWq7xICJeaah4RdWxyiJFLsuP6pElA?usp=drive_link",
      },
    ],
    "2025-1": [
      {
        name: "Académico",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acad%C3%A9mico-CM8vra1dr6rBT3HnW6RdAdmQ8tcN0T.png",
        url: "https://drive.google.com/drive/folders/1CkdfpsnwH8s4reDCOrYufEiLCBh0DYwC?usp=drive_link",
      },
      {
        name: "Comunicaciones",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comunicaciones-onbHvS71vNVyXOggyOWSnoJpDGsRGb.png",
        url: "https://drive.google.com/drive/folders/15OqbbcyYodS0Q9gu1R8Fn2y-y7YODvzu?usp=drive_link",
      },
      {
        name: "Desarrollo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarrollo-ukIr7hsDlgdr0cvmTI6epa27dgwZ5E.png",
        url: "https://drive.google.com/drive/folders/1zhGW7p68fKJElrzpZY5GPtSzpbOFd5PV?usp=drive_link",
      },
      {
        name: "Finanzas",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finanzas-3uw1gCQHifl5dW90KzDux84wbM16HF.png",
        url: "https://drive.google.com/drive/folders/1yTiTffVZO4rMg1EzpGPSOZmTehuTjKTo?usp=drive_link",
      },
      {
        name: "Mercadeo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercadeo-2ZlPpts94HwcpTgB1Y3X0J9F8KUgBm.png",
        url: "https://drive.google.com/drive/folders/1LIxYmywnVP65o8PqQTvyet0KrRhiOATP?usp=drive_link",
      },
    ],
    "2024-2": [
      {
        name: "Académico",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acad%C3%A9mico-CM8vra1dr6rBT3HnW6RdAdmQ8tcN0T.png",
        url: "https://drive.google.com/drive/folders/1RGOKs9AKskb3Zkc7v5WrXytMW8a2m4wH?usp=drive_link",
      },
      {
        name: "Comunicaciones",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comunicaciones-onbHvS71vNVyXOggyOWSnoJpDGsRGb.png",
        url: "https://drive.google.com/drive/folders/1PI11TzyOKntbecVpcdmtyE6pYLRgbOwr?usp=drive_link",
      },
      {
        name: "Desarrollo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarrollo-ukIr7hsDlgdr0cvmTI6epa27dgwZ5E.png",
        url: "https://drive.google.com/drive/folders/1K-PCc-vGxa32SR52LP2PGuJFibK4eLFi?usp=drive_link",
      },
      {
        name: "Finanzas",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finanzas-3uw1gCQHifl5dW90KzDux84wbM16HF.png",
        url: "https://drive.google.com/drive/folders/1RY9anMiBotslsls_JYgeV-x1tgyxC0r8?usp=drive_link",
      },
      {
        name: "Mercadeo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercadeo-2ZlPpts94HwcpTgB1Y3X0J9F8KUgBm.png",
        url: "https://drive.google.com/drive/folders/13Db6hnpylIztZAEGydwdaFWv-c6XbAh1?usp=drive_link",
      },
    ],
  }

  return (
    <section id="membresia" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Membresía Capitular</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aquí puedes encontrar los documentos enviados por la junta directiva para la evaluación de la membresía
            capitular.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {membershipLinks[selectedPeriod].map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16">
                    <Image src={link.icon || "/placeholder.svg"} alt={link.name} fill className="object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{link.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
