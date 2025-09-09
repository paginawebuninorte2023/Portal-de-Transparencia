"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contacto"
      className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#545454]/10 mb-4">
            <MessageSquare className="h-8 w-8 text-[#545454] dark:text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ¿Tienes alguna sugerencia o recomendación? Déjanos tu mensaje y nos pondremos en contacto contigo.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-700 shadow-xl rounded-xl overflow-hidden border-none">
          <CardHeader className="bg-[#545454]/5 dark:bg-[#545454]/20">
            <CardTitle className="text-2xl text-gray-800 dark:text-white">Formulario de Contacto</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Completa el formulario para enviarnos tus comentarios o sugerencias.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 dark:border-gray-600 focus:border-[#545454] dark:focus:border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 dark:border-gray-600 focus:border-[#545454] dark:focus:border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="border-gray-300 dark:border-gray-600 focus:border-[#545454] dark:focus:border-gray-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#545454] hover:bg-[#3a3a3a] text-white transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" /> Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
