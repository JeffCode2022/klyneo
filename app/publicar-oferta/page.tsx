"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, DollarSign, Briefcase, Plus, Minus, Building } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  "Tecnología",
  "Marketing",
  "Análisis de Datos",
  "Diseño",
  "Finanzas",
  "Ingeniería",
  "Recursos Humanos",
  "Derecho",
  "Comunicaciones",
]

const locations = ["Lima, Perú", "Arequipa, Perú", "Cusco, Perú", "Trujillo, Perú", "Otra ubicación"]

const modalities = ["Presencial", "Remoto", "Híbrido"]

const durations = ["3 meses", "4 meses", "5 meses", "6 meses", "Otro período"]

export default function PublicarOfertaPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    modality: "",
    duration: "",
    schedule: "",
    remuneration: true,
    remuneration_amount: "",
    deadline: "",
    company_name: "",
    company_description: "",
    company_website: "",
    contact_name: "",
    contact_position: "",
    contact_email: "",
    contact_phone: "",
  })

  const [requirements, setRequirements] = useState<string[]>([""])
  const [responsibilities, setResponsibilities] = useState<string[]>([""])
  const [benefits, setBenefits] = useState<string[]>([""])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleListChange = (
    index: number,
    value: string,
    listType: "requirements" | "responsibilities" | "benefits",
  ) => {
    if (listType === "requirements") {
      const newRequirements = [...requirements]
      newRequirements[index] = value
      setRequirements(newRequirements)
    } else if (listType === "responsibilities") {
      const newResponsibilities = [...responsibilities]
      newResponsibilities[index] = value
      setResponsibilities(newResponsibilities)
    } else {
      const newBenefits = [...benefits]
      newBenefits[index] = value
      setBenefits(newBenefits)
    }
  }

  const addListItem = (listType: "requirements" | "responsibilities" | "benefits") => {
    if (listType === "requirements") {
      setRequirements([...requirements, ""])
    } else if (listType === "responsibilities") {
      setResponsibilities([...responsibilities, ""])
    } else {
      setBenefits([...benefits, ""])
    }
  }

  const removeListItem = (index: number, listType: "requirements" | "responsibilities" | "benefits") => {
    if (listType === "requirements") {
      const newRequirements = [...requirements]
      newRequirements.splice(index, 1)
      setRequirements(newRequirements)
    } else if (listType === "responsibilities") {
      const newResponsibilities = [...responsibilities]
      newResponsibilities.splice(index, 1)
      setResponsibilities(newResponsibilities)
    } else {
      const newBenefits = [...benefits]
      newBenefits.splice(index, 1)
      setBenefits(newBenefits)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", {
      ...formData,
      requirements,
      responsibilities,
      benefits,
    })
    // Aquí iría la lógica para enviar los datos al servidor
  }

  return (
    <div className="bg-background text-foreground pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-3xl text-foreground mb-4">Publicar Oferta de Prácticas</h1>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="bg-[#1A2223] rounded-lg shadow-lg p-8 border border-gold/10">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Sección: Información Básica */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-gold" />
                    Información Básica
                  </h2>

                  <div className="space-y-6">
                    {/* Título */}
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                        Título de la Oferta *
                      </label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Ej. Desarrollador Frontend React"
                        className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        required
                      />
                    </div>

                    {/* Descripción */}
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                        Descripción *
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe la oferta de prácticas en detalle..."
                        className="min-h-[150px] border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        required
                      />
                    </div>

                    {/* Categoría */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                        Categoría *
                      </label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                      >
                        <SelectTrigger className="border-gold/20 focus:ring-gold bg-background/50 text-foreground">
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent className="bg-deep-black border border-gold/20">
                          {categories.map((category) => (
                            <SelectItem
                              key={category}
                              value={category}
                              className="text-foreground hover:bg-gold/10 focus:bg-gold/10"
                            >
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Sección: Detalles de las Prácticas */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-gold" />
                    Detalles de las Prácticas
                  </h2>

                  <div className="space-y-6">
                    {/* Ubicación y Modalidad */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-foreground mb-2 flex items-center"
                        >
                          <MapPin className="mr-1 h-4 w-4 text-gold" />
                          Ubicación *
                        </label>
                        <Select
                          value={formData.location}
                          onValueChange={(value) => handleSelectChange("location", value)}
                        >
                          <SelectTrigger className="border-gold/20 focus:ring-gold bg-background/50 text-foreground">
                            <SelectValue placeholder="Selecciona una ubicación" />
                          </SelectTrigger>
                          <SelectContent className="bg-deep-black border border-gold/20">
                            {locations.map((location) => (
                              <SelectItem
                                key={location}
                                value={location}
                                className="text-foreground hover:bg-gold/10 focus:bg-gold/10"
                              >
                                {location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="modality"
                          className="block text-sm font-medium text-foreground mb-2 flex items-center"
                        >
                          <Briefcase className="mr-1 h-4 w-4 text-gold" />
                          Modalidad *
                        </label>
                        <Select
                          value={formData.modality}
                          onValueChange={(value) => handleSelectChange("modality", value)}
                        >
                          <SelectTrigger className="border-gold/20 focus:ring-gold bg-background/50 text-foreground">
                            <SelectValue placeholder="Selecciona una modalidad" />
                          </SelectTrigger>
                          <SelectContent className="bg-deep-black border border-gold/20">
                            {modalities.map((modality) => (
                              <SelectItem
                                key={modality}
                                value={modality}
                                className="text-foreground hover:bg-gold/10 focus:bg-gold/10"
                              >
                                {modality}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Duración y Horario */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="duration"
                          className="block text-sm font-medium text-foreground mb-2 flex items-center"
                        >
                          <Calendar className="mr-1 h-4 w-4 text-gold" />
                          Duración *
                        </label>
                        <Select
                          value={formData.duration}
                          onValueChange={(value) => handleSelectChange("duration", value)}
                        >
                          <SelectTrigger className="border-gold/20 focus:ring-gold bg-background/50 text-foreground">
                            <SelectValue placeholder="Selecciona una duración" />
                          </SelectTrigger>
                          <SelectContent className="bg-deep-black border border-gold/20">
                            {durations.map((duration) => (
                              <SelectItem
                                key={duration}
                                value={duration}
                                className="text-foreground hover:bg-gold/10 focus:bg-gold/10"
                              >
                                {duration}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="schedule"
                          className="block text-sm font-medium text-foreground mb-2 flex items-center"
                        >
                          <Clock className="mr-1 h-4 w-4 text-gold" />
                          Horario *
                        </label>
                        <Input
                          id="schedule"
                          name="schedule"
                          value={formData.schedule}
                          onChange={handleChange}
                          placeholder="Ej. Lunes a Viernes, 20 horas semanales"
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                          required
                        />
                      </div>
                    </div>

                    {/* Remuneración */}
                    <div>
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="remuneration"
                          name="remuneration"
                          checked={formData.remuneration}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-gold/20 text-gold focus:ring-gold"
                        />
                        <label
                          htmlFor="remuneration"
                          className="ml-2 block text-sm font-medium text-foreground flex items-center"
                        >
                          <DollarSign className="h-4 w-4 text-gold mr-1" />
                          Prácticas remuneradas
                        </label>
                      </div>

                      {formData.remuneration && (
                        <div>
                          <label
                            htmlFor="remuneration_amount"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Monto de remuneración
                          </label>
                          <Input
                            id="remuneration_amount"
                            name="remuneration_amount"
                            value={formData.remuneration_amount}
                            onChange={handleChange}
                            placeholder="Ej. S/. 1,200 mensuales"
                            className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                          />
                        </div>
                      )}
                    </div>

                    {/* Fecha límite */}
                    <div>
                      <label
                        htmlFor="deadline"
                        className="block text-sm font-medium text-foreground mb-2 flex items-center"
                      >
                        <Calendar className="mr-1 h-4 w-4 text-gold" />
                        Fecha límite de postulación *
                      </label>
                      <Input
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        placeholder="Ej. 30 de Abril, 2025"
                        className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Sección: Requisitos */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6">Requisitos</h2>

                  <div className="space-y-4">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={req}
                          onChange={(e) => handleListChange(index, e.target.value, "requirements")}
                          placeholder={`Requisito ${index + 1}`}
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        />
                        {requirements.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-foreground/50 hover:text-dark-red hover:bg-dark-red/10"
                            onClick={() => removeListItem(index, "requirements")}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-gold/20 text-gold hover:bg-gold/10"
                      onClick={() => addListItem("requirements")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Requisito
                    </Button>
                  </div>
                </div>

                {/* Sección: Responsabilidades */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6">Responsabilidades</h2>

                  <div className="space-y-4">
                    {responsibilities.map((resp, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={resp}
                          onChange={(e) => handleListChange(index, e.target.value, "responsibilities")}
                          placeholder={`Responsabilidad ${index + 1}`}
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        />
                        {responsibilities.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-foreground/50 hover:text-dark-red hover:bg-dark-red/10"
                            onClick={() => removeListItem(index, "responsibilities")}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-gold/20 text-gold hover:bg-gold/10"
                      onClick={() => addListItem("responsibilities")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Responsabilidad
                    </Button>
                  </div>
                </div>

                {/* Sección: Beneficios */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6">Beneficios</h2>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={benefit}
                          onChange={(e) => handleListChange(index, e.target.value, "benefits")}
                          placeholder={`Beneficio ${index + 1}`}
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        />
                        {benefits.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-foreground/50 hover:text-dark-red hover:bg-dark-red/10"
                            onClick={() => removeListItem(index, "benefits")}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-gold/20 text-gold hover:bg-gold/10"
                      onClick={() => addListItem("benefits")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Añadir Beneficio
                    </Button>
                  </div>
                </div>

                {/* Sección: Información de la Empresa */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6 flex items-center">
                    <Building className="mr-2 h-5 w-5 text-gold" />
                    Información de la Empresa
                  </h2>

                  <div className="space-y-6">
                    {/* Nombre de la Empresa */}
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre de la Empresa *
                      </label>
                      <Input
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Ej. TechPeru Solutions"
                        className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        required
                      />
                    </div>

                    {/* Descripción de la Empresa */}
                    <div>
                      <label htmlFor="company_description" className="block text-sm font-medium text-foreground mb-2">
                        Descripción de la Empresa *
                      </label>
                      <Textarea
                        id="company_description"
                        name="company_description"
                        value={formData.company_description}
                        onChange={handleChange}
                        placeholder="Breve descripción de la empresa..."
                        className="min-h-[100px] border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        required
                      />
                    </div>

                    {/* Sitio Web */}
                    <div>
                      <label htmlFor="company_website" className="block text-sm font-medium text-foreground mb-2">
                        Sitio Web
                      </label>
                      <Input
                        id="company_website"
                        name="company_website"
                        value={formData.company_website}
                        onChange={handleChange}
                        placeholder="Ej. https://www.techperu.com"
                        className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                      />
                    </div>
                  </div>
                </div>

                {/* Sección: Información de Contacto */}
                <div>
                  <h2 className="font-montserrat font-semibold text-xl text-foreground mb-6">
                    Información de Contacto
                  </h2>

                  <div className="space-y-6">
                    {/* Nombre y Cargo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact_name" className="block text-sm font-medium text-foreground mb-2">
                          Nombre del Contacto *
                        </label>
                        <Input
                          id="contact_name"
                          name="contact_name"
                          value={formData.contact_name}
                          onChange={handleChange}
                          placeholder="Ej. María Rodríguez"
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contact_position" className="block text-sm font-medium text-foreground mb-2">
                          Cargo *
                        </label>
                        <Input
                          id="contact_position"
                          name="contact_position"
                          value={formData.contact_position}
                          onChange={handleChange}
                          placeholder="Ej. Gerente de Recursos Humanos"
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                          required
                        />
                      </div>
                    </div>

                    {/* Email y Teléfono */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact_email" className="block text-sm font-medium text-foreground mb-2">
                          Email de Contacto *
                        </label>
                        <Input
                          id="contact_email"
                          name="contact_email"
                          type="email"
                          value={formData.contact_email}
                          onChange={handleChange}
                          placeholder="Ej. rrhh@techperu.com"
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contact_phone" className="block text-sm font-medium text-foreground mb-2">
                          Teléfono de Contacto
                        </label>
                        <Input
                          id="contact_phone"
                          name="contact_phone"
                          value={formData.contact_phone}
                          onChange={handleChange}
                          placeholder="Ej. +51 987 654 321"
                          className="border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón de Envío */}
                <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold/90 text-deep-black font-medium">
                  Publicar Oferta
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
