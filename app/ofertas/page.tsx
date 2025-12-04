"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Filter, X, Search, MapPin, Clock, DollarSign, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { StellarBackground } from "@/components/ui/stellar-background"

const ofertas = [
  {
    id: 1,
    title: "Desarrollador Frontend React",
    description:
      "Buscamos estudiantes de últimos ciclos con conocimientos en React para prácticas en nuestro equipo de desarrollo web.",
    company: "TechPeru Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Tecnología",
    duration: "6 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,200 mensuales",
    modality: "Híbrido",
    requirements: ["React", "JavaScript", "HTML/CSS"],
    deadline: "30 de Abril, 2025",
  },
  {
    id: 2,
    title: "Asistente de Marketing Digital",
    description:
      "Prácticas en el área de marketing digital para estudiantes de comunicaciones o marketing con interés en estrategias digitales.",
    company: "Innova Marketing",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Marketing",
    duration: "3 meses",
    remuneration: true,
    remuneration_amount: "S/. 930 mensuales",
    modality: "Presencial",
    requirements: ["Redes Sociales", "Copywriting", "Diseño Básico"],
    deadline: "15 de Abril, 2025",
  },
  {
    id: 3,
    title: "Analista de Datos Junior",
    description:
      "Oportunidad para estudiantes de estadística, matemáticas o ingeniería con conocimientos en análisis de datos y herramientas BI.",
    company: "DataInsights Perú",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Análisis de Datos",
    duration: "6 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,500 mensuales",
    modality: "Remoto",
    requirements: ["Python", "SQL", "Power BI"],
    deadline: "20 de Abril, 2025",
  },
  {
    id: 4,
    title: "Asistente de Diseño UX/UI",
    description:
      "Prácticas para estudiantes de diseño gráfico o afines con interés en experiencia de usuario e interfaces digitales.",
    company: "CreativeStudio",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Arequipa, Perú",
    category: "Diseño",
    duration: "4 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,000 mensuales",
    modality: "Híbrido",
    requirements: ["Figma", "Adobe XD", "Principios de UX"],
    deadline: "25 de Abril, 2025",
  },
  {
    id: 5,
    title: "Practicante de Contabilidad",
    description:
      "Buscamos estudiantes de contabilidad para prácticas en nuestro departamento financiero con posibilidad de contratación posterior.",
    company: "Finanzas Corporativas SAC",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Finanzas",
    duration: "6 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,100 mensuales",
    modality: "Presencial",
    requirements: ["Excel Avanzado", "Contabilidad Básica", "ERP"],
    deadline: "10 de Abril, 2025",
  },
  {
    id: 6,
    title: "Asistente de Investigación",
    description:
      "Prácticas para estudiantes de ingeniería ambiental interesados en proyectos de sostenibilidad y energías renovables.",
    company: "EcoSolutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Cusco, Perú",
    category: "Ingeniería",
    duration: "5 meses",
    remuneration: false,
    remuneration_amount: "",
    modality: "Presencial",
    requirements: ["Conocimientos en sostenibilidad", "Investigación", "Inglés intermedio"],
    deadline: "5 de Mayo, 2025",
  },
  {
    id: 7,
    title: "Practicante de Recursos Humanos",
    description:
      "Oportunidad para estudiantes de psicología organizacional o administración con interés en gestión del talento.",
    company: "Global Talent Perú",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Recursos Humanos",
    duration: "4 meses",
    remuneration: true,
    remuneration_amount: "S/. 930 mensuales",
    modality: "Híbrido",
    requirements: ["Reclutamiento", "Clima Laboral", "Office"],
    deadline: "18 de Abril, 2025",
  },
  {
    id: 8,
    title: "Asistente Legal",
    description: "Prácticas para estudiantes de derecho con interés en derecho corporativo y propiedad intelectual.",
    company: "Estudio Jurídico Asociados",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Derecho",
    duration: "6 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,300 mensuales",
    modality: "Presencial",
    requirements: ["Derecho Corporativo", "Propiedad Intelectual", "Redacción"],
    deadline: "22 de Abril, 2025",
  },
  {
    id: 9,
    title: "Practicante de Comunicación Corporativa",
    description:
      "Buscamos estudiantes de comunicación para prácticas en nuestro departamento de comunicación interna y externa.",
    company: "Corporación Andina",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Trujillo, Perú",
    category: "Comunicaciones",
    duration: "3 meses",
    remuneration: true,
    remuneration_amount: "S/. 950 mensuales",
    modality: "Híbrido",
    requirements: ["Redacción", "Comunicación Organizacional", "Redes Sociales"],
    deadline: "28 de Abril, 2025",
  },
]

const categories = [
  "Todas",
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

const locations = ["Todas", "Lima, Perú", "Arequipa, Perú", "Cusco, Perú", "Trujillo, Perú"]

const modalities = ["Todas", "Presencial", "Remoto", "Híbrido"]

const durations = ["Todas", "3 meses", "4 meses", "5 meses", "6 meses"]

export default function OfertasPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedLocation, setSelectedLocation] = useState("Todas")
  const [selectedModality, setSelectedModality] = useState("Todas")
  const [selectedDuration, setSelectedDuration] = useState("Todas")
  const [remunerationOnly, setRemunerationOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const ofertasPerPage = 6
  const ofertasRefs = useRef<(HTMLDivElement | null)[]>([])

  const filteredOfertas = ofertas.filter((oferta) => {
    const categoryMatch = selectedCategory === "Todas" || oferta.category === selectedCategory
    const locationMatch = selectedLocation === "Todas" || oferta.location === selectedLocation
    const modalityMatch = selectedModality === "Todas" || oferta.modality === selectedModality
    const durationMatch = selectedDuration === "Todas" || oferta.duration === selectedDuration
    const remunerationMatch = remunerationOnly ? oferta.remuneration : true
    const searchMatch =
      oferta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      oferta.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      oferta.company.toLowerCase().includes(searchQuery.toLowerCase())

    return categoryMatch && locationMatch && modalityMatch && durationMatch && remunerationMatch && searchMatch
  })

  const totalPages = Math.ceil(filteredOfertas.length / ofertasPerPage)
  const indexOfLastOferta = currentPage * ofertasPerPage
  const indexOfFirstOferta = indexOfLastOferta - ofertasPerPage
  const currentOfertas = filteredOfertas.slice(indexOfFirstOferta, indexOfLastOferta)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedLocation, selectedModality, selectedDuration, remunerationOnly, searchQuery])

  useEffect(() => {
    ofertasRefs.current = ofertasRefs.current.slice(0, currentOfertas.length)
  }, [currentOfertas.length])

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen relative pt-28 pb-16">
      <StellarBackground />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-montserrat font-bold text-3xl text-white mb-2">Explorar Ofertas de Prácticas</h1>
            <div className="w-16 h-1 bg-[#FF6B00]"></div>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 md:hidden border-[#FF6B00] text-[#FF6B00]"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <X size={18} /> : <Filter size={18} />}
            Filtros
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
            <Input
              type="text"
              placeholder="Buscar ofertas de prácticas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] focus:border-[#FF6B00] focus:ring-[#FF6B00] text-white placeholder:text-white/50 rounded-xl h-12"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${showFilters ? "block" : "hidden"} md:block`}>
            <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-6 rounded-2xl border border-[rgba(255,255,255,0.1)]">
              <h2 className="font-montserrat font-semibold text-xl text-white mb-6">Filtros</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Categoría</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white">
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
                  <label className="block text-sm font-medium text-white mb-2">Ubicación</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="w-full border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white">
                      <SelectValue placeholder="Selecciona una ubicación" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A2223] border-[rgba(255,255,255,0.1)]">
                      {locations.map((location) => (
                        <SelectItem
                          key={location}
                          value={location}
                          className="text-white hover:bg-[#FF6B00]/10 focus:bg-[#FF6B00]/10"
                        >
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Modalidad</label>
                  <Select value={selectedModality} onValueChange={setSelectedModality}>
                    <SelectTrigger className="w-full border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white">
                      <SelectValue placeholder="Selecciona una modalidad" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A2223] border-[rgba(255,255,255,0.1)]">
                      {modalities.map((modality) => (
                        <SelectItem
                          key={modality}
                          value={modality}
                          className="text-white hover:bg-[#FF6B00]/10 focus:bg-[#FF6B00]/10"
                        >
                          {modality}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Duración</label>
                  <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                    <SelectTrigger className="w-full border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white">
                      <SelectValue placeholder="Selecciona una duración" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A2223] border-[rgba(255,255,255,0.1)]">
                      {durations.map((duration) => (
                        <SelectItem
                          key={duration}
                          value={duration}
                          className="text-white hover:bg-[#FF6B00]/10 focus:bg-[#FF6B00]/10"
                        >
                          {duration}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remunerationOnly"
                    checked={remunerationOnly}
                    onChange={() => setRemunerationOnly(!remunerationOnly)}
                    className="h-4 w-4 rounded border-[rgba(255,255,255,0.3)] bg-transparent text-[#FF6B00] focus:ring-[#FF6B00]"
                  />
                  <label htmlFor="remunerationOnly" className="ml-2 block text-sm text-white">
                    Solo prácticas remuneradas
                  </label>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10 bg-transparent"
                  onClick={() => {
                    setSelectedCategory("Todas")
                    setSelectedLocation("Todas")
                    setSelectedModality("Todas")
                    setSelectedDuration("Todas")
                    setRemunerationOnly(false)
                    setSearchQuery("")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            </div>
          </div>

          {/* Ofertas Grid */}
          <div className="md:w-3/4">
            {currentOfertas.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {currentOfertas.map((oferta, index) => (
                  <motion.div
                    key={oferta.id}
                    ref={(el) => { ofertasRefs.current[index] = el }}
                    variants={item}
                    className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[#FF6B00] hover:translate-y-[-5px] group"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border border-[rgba(255,255,255,0.2)]">
                            <Image
                              src={oferta.logo || "/placeholder.svg"}
                              alt={oferta.company}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-montserrat font-bold text-xl text-white line-clamp-1 group-hover:text-[#FF6B00] transition-colors">
                              {oferta.title}
                            </h3>
                            <p className="text-[#FF6B00] text-sm">{oferta.company}</p>
                          </div>
                        </div>
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/50 rounded-full">
                          {oferta.category}
                        </span>
                      </div>

                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{oferta.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-white/60 text-sm">
                          <MapPin className="h-4 w-4 text-[#FF6B00] mr-2" />
                          <span>{oferta.location}</span>
                        </div>
                        <div className="flex items-center text-white/60 text-sm">
                          <Clock className="h-4 w-4 text-[#FF6B00] mr-2" />
                          <span>Duración: {oferta.duration}</span>
                        </div>
                        <div className="flex items-center text-white/60 text-sm">
                          <Briefcase className="h-4 w-4 text-[#FF6B00] mr-2" />
                          <span>Modalidad: {oferta.modality}</span>
                        </div>
                        {oferta.remuneration && (
                          <div className="flex items-center text-white/60 text-sm">
                            <DollarSign className="h-4 w-4 text-[#FF6B00] mr-2" />
                            <span>Remuneración: {oferta.remuneration_amount}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {oferta.requirements.map((req, i) => (
                          <span key={i} className="px-2 py-1 bg-[rgba(255,255,255,0.1)] text-white/80 rounded-full text-xs">
                            {req}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/40">Hasta: {oferta.deadline}</span>
                        <Button asChild variant="outline" size="sm" className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all rounded-full bg-transparent">
                          <Link href={`/ofertas/${oferta.id}`}>Ver Detalle</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-[rgba(255,255,255,0.03)] rounded-2xl border border-[rgba(255,255,255,0.1)]">
                <p className="text-white/70 text-lg mb-4">
                  No se encontraron ofertas con los filtros seleccionados.
                </p>
                <Button
                  variant="outline"
                  className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10"
                  onClick={() => {
                    setSelectedCategory("Todas")
                    setSelectedLocation("Todas")
                    setSelectedModality("Todas")
                    setSelectedDuration("Todas")
                    setRemunerationOnly(false)
                    setSearchQuery("")
                  }}
                >
                  Ver todas las ofertas
                </Button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[rgba(255,255,255,0.1)] text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] bg-transparent"
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <Button
                      key={number}
                      variant={currentPage === number ? "default" : "outline"}
                      size="sm"
                      className={`rounded-full w-8 h-8 p-0 ${currentPage === number
                        ? "bg-[#FF6B00] text-white border-[#FF6B00]"
                        : "border-[rgba(255,255,255,0.1)] text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] bg-transparent"
                        }`}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[rgba(255,255,255,0.1)] text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] bg-transparent"
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
