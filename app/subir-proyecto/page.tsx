"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X, DollarSign, LinkIcon, Github } from "lucide-react"
import { motion } from "framer-motion"
import { StellarBackground } from "@/components/ui/stellar-background"

import { peruvianUniversities } from "@/lib/placeholder-data"

const categories = [
  "Tecnología",
  "Diseño",
  "Análisis de Datos",
  "Educación",
  "Finanzas",
  "Ingeniería",
  "Marketing",
  "Salud",
  "Derecho",
]

const universities = peruvianUniversities

export default function SubirProyectoPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    university: "",
    github: "",
    demo: "",
    forSale: false,
    price: "",
    technologies: "",
  })

  const [files, setFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)

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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    console.log("Files:", files)
    // Aquí iría la lógica para enviar los datos al servidor
  }

  return (
    <div className="min-h-screen relative pt-28 pb-16">
      <StellarBackground />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-3xl text-white mb-4">Subir Proyecto</h1>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto"></div>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-[rgba(255,255,255,0.1)]">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Título */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                    Título del Proyecto *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ej. Sistema de Gestión Empresarial con IA"
                    className="border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/40 rounded-xl h-12"
                    required
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                    Descripción *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe tu proyecto en detalle..."
                    className="min-h-[200px] border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/40 rounded-xl"
                    required
                  />
                </div>

                {/* Categoría y Universidad */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                      Categoría *
                    </label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger className="border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white rounded-xl h-12">
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A2223] border-[rgba(255,255,255,0.1)]">
                        {categories.map((category) => (
                          <SelectItem
                            key={category}
                            value={category}
                            className="text-white hover:bg-[#FF6B00]/10 focus:bg-[#FF6B00]/10"
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-white mb-2">
                      Universidad *
                    </label>
                    <Select
                      value={formData.university}
                      onValueChange={(value) => handleSelectChange("university", value)}
                    >
                      <SelectTrigger className="border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white rounded-xl h-12">
                        <SelectValue placeholder="Selecciona tu universidad" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A2223] border-[rgba(255,255,255,0.1)]">
                        {universities.map((university) => (
                          <SelectItem
                            key={university}
                            value={university}
                            className="text-white hover:bg-[#FF6B00]/10 focus:bg-[#FF6B00]/10"
                          >
                            {university}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Tecnologías */}
                <div>
                  <label htmlFor="technologies" className="block text-sm font-medium text-white mb-2">
                    Tecnologías utilizadas
                  </label>
                  <Input
                    id="technologies"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder="Ej. React, Node.js, TensorFlow (separadas por comas)"
                    className="border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/40 rounded-xl h-12"
                  />
                </div>

                {/* Enlaces */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="github"
                      className="block text-sm font-medium text-white mb-2 flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Repositorio GitHub
                    </label>
                    <Input
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/usuario/proyecto"
                      className="border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/40 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo" className="block text-sm font-medium text-white mb-2 flex items-center">
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Demo en vivo
                    </label>
                    <Input
                      id="demo"
                      name="demo"
                      value={formData.demo}
                      onChange={handleChange}
                      placeholder="https://mi-proyecto.com"
                      className="border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/40 rounded-xl h-12"
                    />
                  </div>
                </div>

                {/* Mercado de ideas */}
                <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="forSale"
                      name="forSale"
                      checked={formData.forSale}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-[rgba(255,255,255,0.3)] bg-transparent text-[#FF6B00] focus:ring-[#FF6B00]"
                    />
                    <label
                      htmlFor="forSale"
                      className="ml-2 block text-sm font-medium text-white flex items-center"
                    >
                      <DollarSign className="h-4 w-4 text-[#FF6B00] mr-1" />
                      Disponible para venta o inversión
                    </label>
                  </div>

                  {formData.forSale && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <label htmlFor="price" className="block text-sm font-medium text-white mb-2">
                        Precio o inversión requerida
                      </label>
                      <Input
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Ej. $2,500"
                        className="border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white placeholder:text-white/40 rounded-xl h-12"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Subida de Archivos */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Archivos del Proyecto</label>
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${dragActive ? "border-[#FF6B00] bg-[#FF6B00]/10" : "border-[rgba(255,255,255,0.1)] hover:border-[#FF6B00]/50"
                      }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-full h-40 mb-6">
                        <Image
                          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
                          alt="Subir archivos"
                          fill
                          className="object-cover rounded-lg opacity-30"
                        />
                      </div>

                      <Upload className="h-12 w-12 text-[#FF6B00] mb-4" />
                      <p className="text-white mb-2">Arrastra y suelta archivos aquí, o</p>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="text-[#FF6B00] font-medium hover:underline">Selecciona archivos</span>
                        <input id="file-upload" type="file" multiple className="sr-only" onChange={handleFileChange} />
                      </label>
                      <p className="text-xs text-white/50 mt-4">
                        Formatos soportados: PDF, PNG, JPG, DOCX (Máx. 10MB)
                      </p>
                    </div>
                  </div>

                  {/* Lista de Archivos */}
                  {files.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <p className="text-sm font-medium text-white">Archivos seleccionados:</p>
                      <div className="max-h-60 overflow-y-auto space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)]"
                          >
                            <span className="text-sm truncate max-w-[80%] text-white">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-white/50 hover:text-red-500 hover:bg-red-500/10"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Botón de Envío */}
                <Button type="submit" size="lg" className="w-full bg-[#FF6B00] hover:bg-[#ff8533] text-white font-bold text-lg rounded-full h-14 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all">
                  Publicar Proyecto
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
