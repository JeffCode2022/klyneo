"use client"

import { useRef, use } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Share2, MapPin, Clock, DollarSign, Calendar, Briefcase, CheckCircle, Upload, ExternalLink } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function OfertaDetalle({ params }: { params: Promise<{ id: string }> }) {
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

  // Simulando datos de la oferta basado en el ID
  const oferta = {
    id: Number.parseInt(id),
    title: "Desarrollador Frontend React",
    description:
      "Buscamos estudiantes de últimos ciclos con conocimientos en React para prácticas en nuestro equipo de desarrollo web. El practicante se integrará a nuestro equipo de desarrollo y participará en proyectos reales para clientes nacionales e internacionales.\n\nSerá una excelente oportunidad para aplicar conocimientos teóricos en un entorno profesional, aprender metodologías ágiles y desarrollar habilidades técnicas y blandas en un ambiente colaborativo.",
    company: "TechPeru Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Tecnología",
    duration: "6 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,200 mensuales",
    modality: "Híbrido",
    schedule: "Lunes a Viernes, 20 horas semanales",
    requirements: [
      "Estudiante de últimos ciclos de Ingeniería de Sistemas, Informática o afines",
      "Conocimientos en React, JavaScript, HTML y CSS",
      "Familiaridad con control de versiones (Git)",
      "Capacidad para trabajar en equipo",
      "Proactividad y capacidad de aprendizaje autónomo",
    ],
    responsibilities: [
      "Desarrollo de interfaces de usuario con React",
      "Implementación de diseños responsivos",
      "Integración con APIs REST",
      "Participación en reuniones de planificación y revisión",
      "Documentación de código y procesos",
    ],
    benefits: [
      "Horario flexible",
      "Posibilidad de contratación posterior",
      "Capacitaciones técnicas",
      "Ambiente de trabajo colaborativo",
      "Oficinas modernas en zona céntrica",
    ],
    deadline: "30 de Abril, 2025",
    contact: {
      name: "María Rodríguez",
      position: "Gerente de Recursos Humanos",
      email: "rrhh@techperu.com",
      phone: "+51 987 654 321",
    },
    company_description:
      "TechPeru Solutions es una empresa líder en desarrollo de software con más de 10 años de experiencia en el mercado peruano e internacional. Nos especializamos en soluciones web y móviles para diversos sectores como finanzas, retail y educación.",
    company_website: "https://www.techperu.com",
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div ref={scrollRef} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image src={oferta.logo || "/placeholder.svg"} alt={oferta.company} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/80"></div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/90 text-background rounded-full">
                {oferta.category}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-background/30 text-foreground backdrop-blur-sm rounded-full">
                Prácticas Pre-Profesionales
              </span>
              {oferta.remuneration && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-dark-red text-foreground rounded-full flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  Remunerado
                </span>
              )}
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-foreground">{oferta.title}</h1>
            <p className="text-gold text-xl mt-2">{oferta.company}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 mb-8 border border-gold/10">
              <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Descripción de la Oferta</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {oferta.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-foreground/70 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <div className="flex items-center text-foreground/70">
                    <MapPin className="h-5 w-5 text-gold mr-2" />
                    <span>Ubicación: {oferta.location}</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Clock className="h-5 w-5 text-gold mr-2" />
                    <span>Duración: {oferta.duration}</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Briefcase className="h-5 w-5 text-gold mr-2" />
                    <span>Modalidad: {oferta.modality}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-foreground/70">
                    <Calendar className="h-5 w-5 text-gold mr-2" />
                    <span>Horario: {oferta.schedule}</span>
                  </div>
                  {oferta.remuneration && (
                    <div className="flex items-center text-foreground/70">
                      <DollarSign className="h-5 w-5 text-gold mr-2" />
                      <span>Remuneración: {oferta.remuneration_amount}</span>
                    </div>
                  )}
                  <div className="flex items-center text-foreground/70">
                    <Calendar className="h-5 w-5 text-gold mr-2" />
                    <span>Fecha límite: {oferta.deadline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Requisitos */}
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 mb-8 border border-gold/10">
              <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Requisitos</h2>

              <ul className="space-y-3">
                {oferta.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsabilidades */}
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 mb-8 border border-gold/10">
              <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Responsabilidades</h2>

              <ul className="space-y-3">
                {oferta.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beneficios */}
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 mb-8 border border-gold/10">
              <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Beneficios</h2>

              <ul className="space-y-3">
                {oferta.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulario de Postulación */}
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 border border-gold/10">
              <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-6">Postular a esta Oferta</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensaje de Presentación</label>
                  <Textarea
                    placeholder="Escribe un mensaje para el reclutador..."
                    className="min-h-[150px] border-gold/20 focus-visible:ring-gold bg-background/50 text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Adjuntar CV</label>
                  <div className="border-2 border-dashed border-gold/20 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gold mx-auto mb-2" />
                    <p className="text-foreground/70 mb-2">Arrastra tu CV o haz clic para seleccionar</p>
                    <input type="file" className="hidden" id="cv-upload" />
                    <label
                      htmlFor="cv-upload"
                      className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-md cursor-pointer hover:bg-gold/20 transition-colors"
                    >
                      Seleccionar Archivo
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gold hover:bg-gold/90 text-background">Enviar Postulación</Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-[#1A2223] rounded-lg shadow-md p-8 border border-gold/10 sticky top-24">
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={oferta.logo || "/placeholder.svg"}
                    alt={oferta.company}
                    fill
                    className="object-cover rounded-full border-4 border-gold"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-1">{oferta.company}</h3>
                <p className="text-gold text-sm mb-4">Empresa de {oferta.category}</p>

                <Button asChild className="w-full bg-gold hover:bg-gold/90 text-background mb-2">
                  <a href={oferta.company_website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visitar Sitio Web
                  </a>
                </Button>

                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir Oferta
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-gold/10">
                <h4 className="font-montserrat font-semibold text-lg text-foreground mb-4">Sobre la Empresa</h4>
                <p className="text-foreground/70 mb-6">{oferta.company_description}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-gold/10">
                <h4 className="font-montserrat font-semibold text-lg text-foreground mb-4">Contacto</h4>
                <ul className="space-y-3">
                  <li className="text-foreground/70">
                    <span className="font-medium text-foreground block">{oferta.contact.name}</span>
                    <span className="text-gold text-sm">{oferta.contact.position}</span>
                  </li>
                  <li className="text-foreground/70">
                    <span className="block">Email: {oferta.contact.email}</span>
                  </li>
                  <li className="text-foreground/70">
                    <span className="block">Teléfono: {oferta.contact.phone}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-gold/10">
                <div className="bg-gold/10 rounded-lg p-4">
                  <h4 className="font-montserrat font-semibold text-foreground mb-2">¡No pierdas esta oportunidad!</h4>
                  <p className="text-foreground/70 text-sm mb-2">Postula antes del {oferta.deadline}</p>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-background">Postular Ahora</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
