"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function MembershipSection() {
  const [activeTab, setActiveTab] = useState("2025-1")

  const membershipLinks = {
    "2025-1": [
      {
        name: "Académico",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acad%C3%A9mico-CM8vra1dr6rBT3HnW6RdAdmQ8tcN0T.png",
        url: "#",
      },
      {
        name: "Comunicaciones",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comunicaciones-onbHvS71vNVyXOggyOWSnoJpDGsRGb.png",
        url: "#",
      },
      {
        name: "Desarrollo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarrollo-ukIr7hsDlgdr0cvmTI6epa27dgwZ5E.png",
        url: "#",
      },
      {
        name: "Finanzas",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finanzas-3uw1gCQHifl5dW90KzDux84wbM16HF.png",
        url: "#",
      },
      {
        name: "Mercadeo",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mercadeo-2ZlPpts94HwcpTgB1Y3X0J9F8KUgBm.png",
        url: "#",
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
                  {membershipLinks[period].map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={link.icon || "/placeholder.svg"}
                            alt={link.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">{link.name}</h3>
                    </Link>
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

