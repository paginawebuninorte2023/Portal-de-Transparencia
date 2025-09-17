"use client"

import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function MembershipSection() {
  const [selectedPeriod, setSelectedPeriod] = useState("2025-2")

  const membershipLinks = {
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
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccionar periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-2">Periodo 2025-2</SelectItem>
                <SelectItem value="2025-1">Periodo 2025-1</SelectItem>
                <SelectItem value="2024-2">Periodo 2024-2</SelectItem>
              </SelectContent>
            </Select>
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
