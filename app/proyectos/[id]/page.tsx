"use client"

import { useRef, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Share2, Download, MessageCircle, Star, DollarSign, Github, ExternalLink, Heart, Eye } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ProyectoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })

  // Use a memoized transform to prevent re-creation on each render
  const y = useTransform(scrollYProgress, [0, 1], [0, 150], {
    clamp: true,
  })

  // Simulando datos del proyecto basado en el ID
  const project = {
    id: Number.parseInt(id),
    title: "Sistema de Gestión Empresarial con IA",
    description:
      "Plataforma integral para la administración de recursos y procesos empresariales con inteligencia artificial predictiva. Este sistema permite a las organizaciones gestionar eficientemente sus operaciones diarias, desde la administración de personal hasta el seguimiento de proyectos y la gestión financiera.\n\nDesarrollado con tecnologías de vanguardia como React, Node.js y TensorFlow, ofrece una interfaz intuitiva y personalizable que se adapta a las necesidades específicas de cada empresa. Incluye módulos de recursos humanos, contabilidad, inventario, CRM y análisis de datos, todos integrados en una única plataforma segura y escalable.\n\nLa característica diferencial es el sistema de predicción basado en IA que analiza patrones históricos para sugerir mejoras operativas, predecir tendencias y optimizar la toma de decisiones empresariales.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Tecnología",
    university: "Universidad Nacional de Ingeniería",
    rating: 4.8,
    forSale: true,
    price: "$2,500",
    views: 1243,
    likes: 89,
    createdAt: "15 de Marzo, 2025",
    technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "AWS"],
    student: {
      name: "Carlos Mendoza",
      career: "Ingeniería de Sistemas",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    files: [
      {
        name: "Documentación Técnica.pdf",
        type: "pdf",
        size: "2.4 MB",
        preview: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
      },
      {
        name: "Diagrama de Arquitectura.png",
        type: "image",
        size: "1.8 MB",
        preview: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc",
      },
      {
        name: "Manual de Usuario.pdf",
        type: "pdf",
        size: "3.2 MB",
        preview: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      },
    ],
    github: "https://github.com/carlosmendoza/sistema-gestion-ia",
    demo: "https://sistema-gestion-ia.demo.com",
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Image with Parallax */}
      <div ref={scrollRef} className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/70"></div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/90 text-deep-black rounded-full">
                {project.category}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-background/30 text-foreground backdrop-blur-sm rounded-full">
                {project.university}
              </span>
              {project.forSale && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-dark-red text-foreground rounded-full flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  Disponible por {project.price}
                </span>
              )}
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-foreground">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 mb-8 border border-gold/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-montserrat font-semibold text-2xl text-foreground">Descripción</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 text-foreground/50 mr-1" />
                    <span className="text-sm text-foreground/70">{project.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-dark-red mr-1" />
                    <span className="text-sm text-foreground/70">{project.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gold mr-1" />
                    <span className="text-sm text-foreground">{project.rating}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-foreground/70 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-4">Tecnologías utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-gold hover:bg-gold/90 text-deep-black gap-2">
                  <MessageCircle size={18} />
                  Contactar
                </Button>
                {project.forSale && (
                  <Button className="bg-dark-red hover:bg-dark-red/90 text-foreground gap-2">
                    <DollarSign size={18} />
                    Invertir / Comprar
                  </Button>
                )}
                <Button variant="outline" className="gap-2 border-gold text-gold hover:bg-gold/10">
                  <Share2 size={18} />
                  Compartir
                </Button>
              </div>
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="bg-[#1A2223] rounded-lg shadow-md p-8 mb-8 border border-gold/10">
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Enlaces</h2>
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <Button asChild variant="outline" className="gap-2 border-gold text-gold hover:bg-gold/10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                        Repositorio GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild variant="outline" className="gap-2 border-gold text-gold hover:bg-gold/10">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                        Demo en vivo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Files */}
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 border border-gold/10">
              <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Archivos del Proyecto</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.files.map((file, index) => (
                  <motion.div
                    key={index}
                    className="bg-background rounded-lg overflow-hidden shadow-sm border border-gold/10"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-40">
                      <Image src={file.preview || "/placeholder.svg"} alt={file.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-sm text-foreground truncate">{file.name}</p>
                        <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/10">
                          <Download size={18} />
                        </Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-foreground/50 uppercase">{file.type}</p>
                        <p className="text-xs text-foreground/50">{file.size}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 border border-gold/10 sticky top-24">
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={project.student.profileImage || "/placeholder.svg"}
                    alt={project.student.name}
                    fill
                    className="object-cover rounded-full border-4 border-gold"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-1">{project.student.name}</h3>
                <p className="text-gold text-sm mb-1">{project.student.career}</p>
                <p className="text-foreground/70 text-sm">{project.university}</p>
              </div>

              <Button asChild className="w-full bg-gold hover:bg-gold/90 text-deep-black">
                <Link href="/perfil">Ver Perfil</Link>
              </Button>

              <div className="mt-8 pt-8 border-t border-gold/10">
                <h4 className="font-montserrat font-semibold text-lg text-foreground mb-4">Información del Proyecto</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Categoría:</span>
                    <span className="font-medium text-foreground">{project.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Universidad:</span>
                    <span className="font-medium text-foreground">{project.university}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Calificación:</span>
                    <span className="font-medium text-foreground flex items-center">
                      {project.rating}
                      <Star className="h-4 w-4 text-gold ml-1" />
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Archivos:</span>
                    <span className="font-medium text-foreground">{project.files.length}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Publicado:</span>
                    <span className="font-medium text-foreground">{project.createdAt}</span>
                  </li>
                  {project.forSale && (
                    <li className="flex justify-between">
                      <span className="text-foreground/70">Precio:</span>
                      <span className="font-medium text-gold">{project.price}</span>
                    </li>
                  )}
                </ul>
              </div>

              {project.forSale && (
                <div className="mt-8 pt-8 border-t border-gold/10">
                  <h4 className="font-montserrat font-semibold text-lg text-foreground mb-4">Disponible para venta</h4>
                  <p className="text-foreground/70 mb-4">
                    Este proyecto está disponible para inversión o compra. Contacta con el autor para más detalles.
                  </p>
                  <Button className="w-full bg-dark-red hover:bg-dark-red/90 text-foreground">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Invertir / Comprar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
