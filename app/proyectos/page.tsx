"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Filter, X, Search, Star, DollarSign, Building } from "lucide-react"
import { motion } from "framer-motion"
import { StellarBackground } from "@/components/ui/stellar-background"
import { peruvianUniversities } from "@/lib/placeholder-data"

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Empresarial con IA",
    description:
      "Plataforma integral para la administración de recursos y procesos empresariales con inteligencia artificial predictiva",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Tecnología",
    university: "Universidad Nacional de Ingeniería",
    rating: 4.8,
    forSale: true,
  },
  {
    id: 2,
    title: "Rediseño UX para Aplicación Financiera",
    description:
      "Rediseño completo de la experiencia de usuario para aplicación móvil de servicios financieros enfocado en accesibilidad",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    category: "Diseño",
    university: "Universidad de Lima",
    rating: 4.5,
    forSale: false,
  },
  {
    id: 3,
    title: "Análisis Predictivo de Mercados Emergentes",
    description:
      "Estudio avanzado de patrones de consumo utilizando inteligencia artificial y big data para mercados emergentes",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Análisis de Datos",
    university: "Universidad Católica del Perú",
    rating: 4.9,
    forSale: true,
  },
  {
    id: 4,
    title: "Plataforma de Aprendizaje Online",
    description:
      "Sistema educativo virtual con herramientas de colaboración y evaluación adaptativa basada en el progreso del estudiante",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    category: "Educación",
    university: "Universidad Pedagógica Nacional",
    rating: 4.7,
    forSale: false,
  },
  {
    id: 5,
    title: "Aplicación de Finanzas Personales",
    description:
      "Herramienta para gestión de presupuestos y análisis de gastos con recomendaciones personalizadas de ahorro",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Finanzas",
    university: "Universidad del Pacífico",
    rating: 4.6,
    forSale: true,
  },
  {
    id: 6,
    title: "Sistema de Monitoreo Ambiental",
    description:
      "Red de sensores IoT para medición de variables ambientales en tiempo real con alertas y análisis de tendencias",
    image: "https://images.unsplash.com/photo-1473662711507-13345cce8f62",
    category: "Ingeniería",
    university: "Universidad de Ingeniería y Tecnología",
    rating: 4.8,
    forSale: false,
  },
  {
    id: 7,
    title: "Plataforma de Marketing Digital",
    description:
      "Sistema integrado para gestión de campañas y análisis de resultados con inteligencia artificial para optimización",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    category: "Marketing",
    university: "Universidad San Ignacio de Loyola",
    rating: 4.4,
    forSale: true,
  },
  {
    id: 8,
    title: "Aplicación de Salud Mental",
    description:
      "Herramienta para seguimiento y mejora del bienestar psicológico con ejercicios personalizados y seguimiento profesional",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    category: "Salud",
    university: "Universidad Peruana Cayetano Heredia",
    rating: 4.9,
    forSale: false,
  },
  {
    id: 9,
    title: "Sistema de Gestión Legal",
    description:
      "Plataforma para administración de casos y documentación jurídica con asistente de IA para búsqueda de precedentes",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    category: "Derecho",
    university: "Universidad de Lima",
    rating: 4.7,
    forSale: true,
  },
]

const categories = [
  "Todas",
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



const universities = [
  "Todas",
  ...peruvianUniversities
]


export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedUniversity, setSelectedUniversity] = useState("Todas")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [forSaleOnly, setForSaleOnly] = useState(false)
  const projectsPerPage = 6
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "Todas" || project.category === selectedCategory
    const universityMatch = selectedUniversity === "Todas" || project.university === selectedUniversity
    const searchMatch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const forSaleMatch = forSaleOnly ? project.forSale : true

    return categoryMatch && universityMatch && searchMatch && forSaleMatch
  })

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedUniversity, searchQuery, forSaleOnly])

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, currentProjects.length)
  }, [currentProjects.length])

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
            <h1 className="font-montserrat font-bold text-3xl text-white mb-2">Explorar Proyectos</h1>
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
              placeholder="Buscar proyectos..."
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
                  <label className="block text-sm font-medium text-white mb-2">Universidad</label>
                  <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                    <SelectTrigger className="w-full border-[rgba(255,255,255,0.1)] focus:ring-[#FF6B00] bg-[rgba(255,255,255,0.05)] text-white">
                      <SelectValue placeholder="Selecciona una universidad" />
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

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="forSaleOnly"
                    checked={forSaleOnly}
                    onChange={() => setForSaleOnly(!forSaleOnly)}
                    className="h-4 w-4 rounded border-[rgba(255,255,255,0.3)] bg-transparent text-[#FF6B00] focus:ring-[#FF6B00]"
                  />
                  <label htmlFor="forSaleOnly" className="ml-2 block text-sm text-white">
                    Solo proyectos disponibles para venta
                  </label>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10 bg-transparent"
                  onClick={() => {
                    setSelectedCategory("Todas")
                    setSelectedUniversity("Todas")
                    setForSaleOnly(false)
                    setSearchQuery("")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="md:w-3/4">
            {currentProjects.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    ref={(el) => { projectRefs.current[index] = el }}
                    variants={item}
                    className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[#FF6B00] hover:translate-y-[-5px] group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-[#FF6B00] text-white rounded-full">
                          {project.category}
                        </span>
                        {project.forSale && (
                          <span className="inline-block px-3 py-1 text-xs font-bold bg-green-500 text-white rounded-full flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            Disponible
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-montserrat font-bold text-xl text-white mb-2 line-clamp-1 group-hover:text-[#FF6B00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-[#FF6B00] mr-2" />
                          <span className="text-xs text-white/70 line-clamp-1">{project.university}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-[#FF6B00] mr-1" />
                          <span className="text-sm text-white">{project.rating}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all rounded-full bg-transparent"
                      >
                        <Link href={`/proyectos/${project.id}`}>Ver Detalle</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-[rgba(255,255,255,0.03)] rounded-2xl border border-[rgba(255,255,255,0.1)]">
                <p className="text-white/70 text-lg mb-4">No se encontraron proyectos con los filtros seleccionados.</p>
                <Button
                  variant="outline"
                  className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10"
                  onClick={() => {
                    setSelectedCategory("Todas")
                    setSelectedUniversity("Todas")
                    setForSaleOnly(false)
                    setSearchQuery("")
                  }}
                >
                  Ver todos los proyectos
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
