"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pencil,
  Trash2,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Users,
  Plus,
  X,
  Save,
  Facebook,
  ExternalLink,
  Clock,
  DollarSign,
  Award,
  Check,
} from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

// Datos de ejemplo para el perfil de empresa
const companyData = {
  name: "TechPeru Solutions",
  slogan: "Innovación tecnológica para el futuro",
  industry: "Tecnología y Desarrollo de Software",
  size: "50-100 empleados",
  foundedYear: "2010",
  website: "https://www.techperu.com",
  email: "contacto@techperu.com",
  phone: "+51 (01) 123-4567",
  location: {
    address: "Av. Javier Prado Este 2465",
    city: "Lima",
    region: "Lima",
    country: "Perú",
    postalCode: "15046",
  },
  description:
    "TechPeru Solutions es una empresa líder en desarrollo de software con más de 10 años de experiencia en el mercado peruano e internacional. Nos especializamos en soluciones web y móviles para diversos sectores como finanzas, retail y educación. Nuestro equipo está formado por profesionales altamente capacitados y apasionados por la tecnología, comprometidos con ofrecer soluciones innovadoras y de alta calidad a nuestros clientes.\n\nEn TechPeru Solutions creemos en el poder de la tecnología para transformar negocios y mejorar la vida de las personas. Trabajamos con las últimas tecnologías y metodologías ágiles para garantizar resultados excepcionales en cada proyecto.",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
  coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  socialLinks: {
    linkedin: "https://linkedin.com/company/techperu",
    twitter: "https://twitter.com/techperu",
    facebook: "https://facebook.com/techperu",
    instagram: "https://instagram.com/techperu",
  },
  culture: {
    mission:
      "Transformar ideas en soluciones tecnológicas innovadoras que impulsen el crecimiento y éxito de nuestros clientes.",
    vision:
      "Ser reconocidos como líderes en innovación tecnológica en Latinoamérica, creando un impacto positivo en la sociedad a través de nuestras soluciones.",
    values: [
      "Innovación constante",
      "Excelencia técnica",
      "Trabajo en equipo",
      "Compromiso con el cliente",
      "Responsabilidad social",
      "Aprendizaje continuo",
    ],
  },
  benefits: [
    "Horario flexible",
    "Capacitaciones técnicas continuas",
    "Programa de mentoría",
    "Eventos de integración",
    "Seguro médico privado",
    "Bonos por desempeño",
  ],
  recruitmentProcess: [
    "Revisión de CV y portafolio",
    "Entrevista técnica inicial",
    "Prueba técnica práctica",
    "Entrevista con el equipo",
    "Entrevista final con RRHH",
    "Propuesta laboral",
  ],
  team: [
    {
      id: 1,
      name: "María Rodríguez",
      position: "Gerente de Recursos Humanos",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      email: "maria.rodriguez@techperu.com",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "Director de Tecnología",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      email: "carlos.mendoza@techperu.com",
    },
    {
      id: 3,
      name: "Ana López",
      position: "Directora de Proyectos",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      email: "ana.lopez@techperu.com",
    },
  ],
  activeOffers: [
    {
      id: 1,
      title: "Desarrollador Frontend React",
      description:
        "Buscamos estudiantes de últimos ciclos con conocimientos en React para prácticas en nuestro equipo de desarrollo web.",
      location: "Lima, Perú",
      category: "Tecnología",
      duration: "6 meses",
      remuneration: true,
      remuneration_amount: "S/. 1,200 mensuales",
      modality: "Híbrido",
      deadline: "30 de Abril, 2025",
      applications: 12,
    },
    {
      id: 2,
      title: "Asistente de Marketing Digital",
      description:
        "Prácticas en el área de marketing digital para estudiantes de comunicaciones o marketing con interés en estrategias digitales.",
      location: "Lima, Perú",
      category: "Marketing",
      duration: "3 meses",
      remuneration: true,
      remuneration_amount: "S/. 930 mensuales",
      modality: "Presencial",
      deadline: "15 de Abril, 2025",
      applications: 8,
    },
  ],
  pastInterns: [
    {
      name: "Javier Torres",
      university: "Universidad Nacional de Ingeniería",
      period: "Enero - Junio 2023",
      position: "Desarrollador Backend",
      testimonial:
        "Mi experiencia en TechPeru fue excelente. Aprendí mucho sobre desarrollo backend y metodologías ágiles. El equipo siempre estuvo dispuesto a ayudarme y guiarme.",
    },
    {
      name: "Lucía Ramírez",
      university: "Universidad de Lima",
      period: "Julio - Diciembre 2022",
      position: "Diseñadora UX/UI",
      testimonial:
        "Las prácticas en TechPeru me permitieron aplicar mis conocimientos en proyectos reales y aprender de profesionales con mucha experiencia. Definitivamente recomendaría esta empresa para prácticas.",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Sistema de Gestión Financiera para BancoPerú",
      description:
        "Desarrollo de una plataforma integral para la gestión de operaciones financieras con módulos de análisis predictivo y seguridad avanzada.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      year: "2022",
    },
    {
      id: 2,
      name: "Aplicación Móvil para RetailMax",
      description:
        "Diseño y desarrollo de una aplicación móvil para mejorar la experiencia de compra y fidelización de clientes con funcionalidades de realidad aumentada.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      year: "2021",
    },
    {
      id: 3,
      name: "Plataforma Educativa para UniDigital",
      description:
        "Implementación de un sistema de aprendizaje en línea con herramientas colaborativas y evaluación adaptativa para mejorar la experiencia educativa.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      year: "2020",
    },
  ],
  certifications: [
    {
      name: "ISO 9001:2015",
      description: "Certificación de Gestión de Calidad",
      year: "2021",
    },
    {
      name: "AWS Partner",
      description: "Socio certificado de Amazon Web Services",
      year: "2020",
    },
    {
      name: "Microsoft Gold Partner",
      description: "Socio Gold de Microsoft en Desarrollo de Aplicaciones",
      year: "2019",
    },
  ],
}

export default function CompanyProfilePage() {
  const [company, setCompany] = useState(companyData)
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("info")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)

  const handleEditProfile = () => {
    setIsEditing(true)
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Aquí iría la lógica para guardar los cambios en el servidor
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    // Restablecer los datos originales
  }

  const handleLogoUpload = () => {
    fileInputRef.current?.click()
  }

  const handleCoverUpload = () => {
    coverInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "logo" | "cover") => {
    if (e.target.files && e.target.files.length > 0) {
      // Aquí iría la lógica para subir la imagen al servidor
      console.log(`Archivo ${type} seleccionado:`, e.target.files[0])
    }
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Portada y Logo */}
        <div className="relative mb-24">
          <div className="h-64 md:h-80 rounded-xl overflow-hidden">
            <Image src={company.coverImage || "/placeholder.svg"} alt="Portada" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

            {isEditing && (
              <button
                className="absolute bottom-4 right-4 bg-gold text-black p-2 rounded-full hover:bg-gold/90 transition-colors"
                onClick={handleCoverUpload}
              >
                <Pencil size={16} />
              </button>
            )}
            <input
              type="file"
              ref={coverInputRef}
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "cover")}
            />
          </div>

          <div className="absolute -bottom-16 left-8 md:left-12">
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-xl border-4 border-gold bg-background">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                fill
                className="object-cover rounded-lg"
              />
              {isEditing && (
                <button
                  className="absolute bottom-0 right-0 bg-gold text-black p-2 rounded-full hover:bg-gold/90 transition-colors"
                  onClick={handleLogoUpload}
                >
                  <Pencil size={16} />
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "logo")}
              />
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2">
            {isEditing ? (
              <>
                <Button
                  variant="default"
                  className="bg-gold hover:bg-gold/90 text-black gap-2"
                  onClick={handleSaveProfile}
                >
                  <Save size={16} />
                  Guardar Cambios
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 gap-2"
                  onClick={handleCancelEdit}
                >
                  <X size={16} />
                  Cancelar
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 gap-2"
                onClick={handleEditProfile}
              >
                <Pencil size={16} />
                Editar Perfil
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda - Información de la Empresa */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-xl shadow-md p-6 border border-border">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Información de la Empresa</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-foreground">{company.name}</h3>
                  <p className="text-gold italic">{company.slogan}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="bg-secondary border-border">
                      {company.industry}
                    </Badge>
                    <Badge variant="outline" className="bg-secondary border-border">
                      {company.size}
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <Globe className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Sitio Web</p>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-gold transition-colors"
                      >
                        {company.website}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Correo Electrónico</p>
                      <a href={`mailto:${company.email}`} className="text-foreground hover:text-gold transition-colors">
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <Phone className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <a href={`tel:${company.phone}`} className="text-foreground hover:text-gold transition-colors">
                        {company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="text-foreground">{company.location.address}</p>
                      <p className="text-foreground">
                        {company.location.city}, {company.location.region}
                      </p>
                      <p className="text-foreground">
                        {company.location.country}, {company.location.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Fundada en</p>
                      <p className="text-foreground">{company.foundedYear}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-card rounded-xl shadow-md p-6 border border-border">
              <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Redes Sociales</h2>

              <div className="space-y-3">
                {company.socialLinks.linkedin && (
                  <a
                    href={company.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {company.socialLinks.twitter && (
                  <a
                    href={company.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </a>
                )}

                {company.socialLinks.facebook && (
                  <a
                    href={company.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </a>
                )}

                {company.socialLinks.instagram && (
                  <a
                    href={company.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>

            {/* Certificaciones */}
            <div className="bg-card rounded-xl shadow-md p-6 border border-border">
              <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Certificaciones</h2>

              <div className="space-y-4">
                {company.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                      <p className="text-xs text-gold">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipo de Contacto */}
            <div className="bg-card rounded-xl shadow-md p-6 border border-border">
              <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Equipo de Contacto</h2>

              <div className="space-y-4">
                {company.team.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{member.name}</h3>
                      <p className="text-xs text-gold">{member.position}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs text-muted-foreground hover:text-gold transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha - Contenido Principal */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="info" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Sobre Nosotros
                </TabsTrigger>
                <TabsTrigger value="culture" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Cultura
                </TabsTrigger>
                <TabsTrigger value="offers" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Ofertas
                </TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                  Proyectos
                </TabsTrigger>
              </TabsList>

              {/* Sobre Nosotros */}
              <TabsContent value="info" className="space-y-6">
                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Sobre Nosotros</h2>

                  {isEditing ? (
                    <Textarea
                      value={company.description}
                      onChange={(e) => setCompany((prev) => ({ ...prev, description: e.target.value }))}
                      className="min-h-[200px]"
                    />
                  ) : (
                    <div className="text-foreground/80 leading-relaxed whitespace-pre-line">{company.description}</div>
                  )}
                </div>

                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Proceso de Selección</h2>

                  <div className="space-y-4">
                    <p className="text-foreground/80">
                      Nuestro proceso de selección está diseñado para identificar a los mejores talentos que se alineen
                      con nuestra cultura y valores. Conoce los pasos:
                    </p>

                    <div className="relative pl-6 border-l-2 border-gold/30">
                      {company.recruitmentProcess.map((step, index) => (
                        <div key={index} className="mb-4 relative">
                          <div className="absolute -left-3 top-1.5 h-4 w-4 rounded-full bg-gold flex items-center justify-center">
                            <span className="text-xs text-black font-bold">{index + 1}</span>
                          </div>
                          <p className="text-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Testimonios de Practicantes</h2>

                  <div className="space-y-6">
                    {company.pastInterns.map((intern, index) => (
                      <div key={index} className="bg-secondary p-6 rounded-lg border border-border">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-montserrat text-lg font-bold text-foreground">{intern.name}</h3>
                            <p className="text-gold">{intern.position}</p>
                            <p className="text-sm text-muted-foreground">{intern.university}</p>
                            <p className="text-sm text-muted-foreground">{intern.period}</p>
                          </div>
                          <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-gold" />
                          </div>
                        </div>
                        <p className="text-foreground/80 italic">"{intern.testimonial}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Cultura */}
              <TabsContent value="culture" className="space-y-6">
                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Nuestra Cultura</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-montserrat text-xl font-bold text-foreground mb-2">Misión</h3>
                      {isEditing ? (
                        <Textarea
                          value={company.culture.mission}
                          onChange={(e) =>
                            setCompany((prev) => ({
                              ...prev,
                              culture: { ...prev.culture, mission: e.target.value },
                            }))
                          }
                          className="min-h-[100px]"
                        />
                      ) : (
                        <p className="text-foreground/80">{company.culture.mission}</p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-montserrat text-xl font-bold text-foreground mb-2">Visión</h3>
                      {isEditing ? (
                        <Textarea
                          value={company.culture.vision}
                          onChange={(e) =>
                            setCompany((prev) => ({
                              ...prev,
                              culture: { ...prev.culture, vision: e.target.value },
                            }))
                          }
                          className="min-h-[100px]"
                        />
                      ) : (
                        <p className="text-foreground/80">{company.culture.vision}</p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-montserrat text-xl font-bold text-foreground mb-2">Valores</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {company.culture.values.map((value, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-gold font-bold">{index + 1}</span>
                            </div>
                            <p className="text-foreground">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                    Beneficios para Practicantes
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {company.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-gold" />
                        </div>
                        <p className="text-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Ofertas */}
              <TabsContent value="offers" className="space-y-6">
                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-playfair text-2xl font-bold text-foreground">Ofertas Activas</h2>
                    <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                      <Link href="/publicar-oferta">
                        <Plus className="mr-2 h-4 w-4" />
                        Nueva Oferta
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {company.activeOffers.length > 0 ? (
                      company.activeOffers.map((offer) => (
                        <motion.div
                          key={offer.id}
                          className="bg-secondary rounded-lg overflow-hidden shadow-sm border border-border"
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-montserrat text-xl font-bold text-foreground">{offer.title}</h3>
                                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                                    {offer.category}
                                  </Badge>
                                </div>
                                <p className="text-foreground/80 mb-4">{offer.description}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="flex items-center text-foreground/70 text-sm">
                                <MapPin className="h-4 w-4 text-gold mr-2" />
                                <span>{offer.location}</span>
                              </div>
                              <div className="flex items-center text-foreground/70 text-sm">
                                <Clock className="h-4 w-4 text-gold mr-2" />
                                <span>{offer.duration}</span>
                              </div>
                              <div className="flex items-center text-foreground/70 text-sm">
                                <Briefcase className="h-4 w-4 text-gold mr-2" />
                                <span>{offer.modality}</span>
                              </div>
                              {offer.remuneration && (
                                <div className="flex items-center text-foreground/70 text-sm">
                                  <DollarSign className="h-4 w-4 text-gold mr-2" />
                                  <span>{offer.remuneration_amount}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Users className="h-5 w-5 text-gold mr-2" />
                                <span className="text-foreground font-medium">{offer.applications} postulaciones</span>
                              </div>
                              <div className="flex gap-2">
                                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                                  <Link href={`/ofertas/${offer.id}`}>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Ver Detalle
                                  </Link>
                                </Button>
                                {isEditing && (
                                  <>
                                    <Button
                                      asChild
                                      variant="outline"
                                      className="border-gold text-gold hover:bg-gold/10"
                                    >
                                      <Link href={`/editar-oferta/${offer.id}`}>
                                        <Pencil size={16} className="mr-2" />
                                        Editar
                                      </Link>
                                    </Button>
                                    <Button
                                      variant="outline"
                                      className="border-red-500 text-red-500 hover:bg-red-500/10"
                                    >
                                      <Trash2 size={16} className="mr-2" />
                                      Eliminar
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-montserrat text-lg font-bold text-foreground mb-2">
                          No hay ofertas activas
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Actualmente no tienes ofertas de prácticas publicadas.
                        </p>
                        <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                          <Link href="/publicar-oferta">Publicar Nueva Oferta</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Proyectos */}
              <TabsContent value="projects" className="space-y-6">
                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Proyectos Destacados</h2>

                  <div className="space-y-6">
                    {company.projects.map((project) => (
                      <motion.div
                        key={project.id}
                        className="flex flex-col md:flex-row bg-secondary rounded-lg border border-border overflow-hidden shadow-sm"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-full md:w-2/3 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-montserrat text-xl font-bold text-foreground">{project.name}</h3>
                                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                                  {project.year}
                                </Badge>
                              </div>
                              <p className="text-foreground/80 mb-4">{project.description}</p>
                            </div>
                          </div>
                          {isEditing && (
                            <div className="flex gap-3">
                              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                                <Pencil size={16} className="mr-2" />
                                Editar
                              </Button>
                              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
                                <Trash2 size={16} className="mr-2" />
                                Eliminar
                              </Button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
