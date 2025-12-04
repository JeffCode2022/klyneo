"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, DollarSign, Briefcase, Edit, Eye, Users, CheckCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

// Datos de ejemplo
const misOfertas = [
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
    deadline: "30 de Abril, 2025",
    status: "active",
    postulaciones: 12,
    postulantes: [
      {
        id: 1,
        name: "Ana García",
        university: "Universidad Nacional de Ingeniería",
        career: "Ingeniería de Sistemas",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        status: "pending",
      },
      {
        id: 2,
        name: "Carlos Mendoza",
        university: "Universidad de Lima",
        career: "Ingeniería de Software",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        status: "accepted",
      },
      {
        id: 3,
        name: "Lucía Ramírez",
        university: "Universidad Católica del Perú",
        career: "Ciencias de la Computación",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        status: "rejected",
      },
    ],
  },
  {
    id: 2,
    title: "Asistente de Marketing Digital",
    description:
      "Prácticas en el área de marketing digital para estudiantes de comunicaciones o marketing con interés en estrategias digitales.",
    company: "TechPeru Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Marketing",
    duration: "3 meses",
    remuneration: true,
    remuneration_amount: "S/. 930 mensuales",
    modality: "Presencial",
    deadline: "15 de Abril, 2025",
    status: "active",
    postulaciones: 8,
    postulantes: [
      {
        id: 4,
        name: "Miguel Torres",
        university: "Universidad San Ignacio de Loyola",
        career: "Marketing",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        status: "pending",
      },
      {
        id: 5,
        name: "Valeria Sánchez",
        university: "Universidad de Lima",
        career: "Comunicaciones",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        status: "pending",
      },
    ],
  },
  {
    id: 3,
    title: "Analista de Datos Junior",
    description:
      "Oportunidad para estudiantes de estadística, matemáticas o ingeniería con conocimientos en análisis de datos y herramientas BI.",
    company: "TechPeru Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    location: "Lima, Perú",
    category: "Análisis de Datos",
    duration: "6 meses",
    remuneration: true,
    remuneration_amount: "S/. 1,500 mensuales",
    modality: "Remoto",
    deadline: "20 de Abril, 2025",
    status: "closed",
    postulaciones: 15,
    postulantes: [
      {
        id: 6,
        name: "Javier López",
        university: "Universidad Nacional de Ingeniería",
        career: "Ingeniería Estadística",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        status: "accepted",
      },
      {
        id: 7,
        name: "Daniela Flores",
        university: "Universidad Católica del Perú",
        career: "Matemáticas",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        status: "rejected",
      },
    ],
  },
]

export default function MisOfertasPage() {
  const [activeTab, setActiveTab] = useState("activas")
  const [selectedOferta, setSelectedOferta] = useState<number | null>(null)

  const activeOfertas = misOfertas.filter((oferta) => oferta.status === "active")
  const closedOfertas = misOfertas.filter((oferta) => oferta.status === "closed")

  const handleSelectOferta = (id: number) => {
    setSelectedOferta(id === selectedOferta ? null : id)
  }

  return (
    <div className="bg-background text-foreground pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-montserrat font-bold text-3xl text-foreground mb-2">Mis Ofertas de Prácticas</h1>
            <div className="w-16 h-1 bg-gold"></div>
          </div>
          <Button asChild className="bg-gold hover:bg-gold/90 text-deep-black">
            <Link href="/publicar-oferta">
              <Briefcase className="mr-2 h-4 w-4" />
              Publicar Nueva Oferta
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="activas" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8 bg-[#1A2223] border border-gold/10">
            <TabsTrigger value="activas" className="data-[state=active]:bg-gold data-[state=active]:text-deep-black">
              Ofertas Activas ({activeOfertas.length})
            </TabsTrigger>
            <TabsTrigger value="cerradas" className="data-[state=active]:bg-gold data-[state=active]:text-deep-black">
              Ofertas Cerradas ({closedOfertas.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activas">
            <div className="space-y-8">
              {activeOfertas.map((oferta) => (
                <motion.div
                  key={oferta.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#1A2223] rounded-lg overflow-hidden shadow-lg border border-gold/10"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border border-gold/20">
                          <Image
                            src={oferta.logo || "/placeholder.svg"}
                            alt={oferta.company}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-montserrat font-bold text-xl text-foreground">{oferta.title}</h3>
                          <p className="text-gold text-sm">{oferta.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button asChild variant="outline" size="sm" className="border-gold text-gold hover:bg-gold/10">
                          <Link href={`/ofertas/${oferta.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="border-gold text-gold hover:bg-gold/10">
                          <Link href={`/editar-oferta/${oferta.id}`}>
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <p className="text-foreground/70 text-sm mb-4">{oferta.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-foreground/70 text-sm">
                        <MapPin className="h-4 w-4 text-gold mr-2" />
                        <span>{oferta.location}</span>
                      </div>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <Clock className="h-4 w-4 text-gold mr-2" />
                        <span>{oferta.duration}</span>
                      </div>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <Briefcase className="h-4 w-4 text-gold mr-2" />
                        <span>{oferta.modality}</span>
                      </div>
                      {oferta.remuneration && (
                        <div className="flex items-center text-foreground/70 text-sm">
                          <DollarSign className="h-4 w-4 text-gold mr-2" />
                          <span>{oferta.remuneration_amount}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gold mr-2" />
                        <span className="text-foreground font-medium">{oferta.postulaciones} postulaciones</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gold text-gold hover:bg-gold/10"
                        onClick={() => handleSelectOferta(oferta.id)}
                      >
                        {selectedOferta === oferta.id ? "Ocultar postulantes" : "Ver postulantes"}
                      </Button>
                    </div>

                    {selectedOferta === oferta.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gold/10"
                      >
                        <h4 className="font-montserrat font-semibold text-lg text-foreground mb-4">Postulantes</h4>

                        <div className="space-y-4">
                          {oferta.postulantes.map((postulante) => (
                            <div
                              key={postulante.id}
                              className="flex items-center justify-between p-4 bg-deep-black/50 rounded-lg border border-gold/10"
                            >
                              <div className="flex items-center">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                                  <Image
                                    src={postulante.avatar || "/placeholder.svg"}
                                    alt={postulante.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h5 className="font-medium text-foreground">{postulante.name}</h5>
                                  <p className="text-xs text-foreground/70">
                                    {postulante.career} - {postulante.university}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                {postulante.status === "pending" ? (
                                  <>
                                    <Button size="sm" className="bg-gold hover:bg-gold/90 text-deep-black">
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Aceptar
                                    </Button>
                                    <Button size="sm" className="bg-dark-red hover:bg-dark-red/90 text-foreground">
                                      <XCircle className="h-4 w-4 mr-1" />
                                      Rechazar
                                    </Button>
                                  </>
                                ) : postulante.status === "accepted" ? (
                                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                                    Aceptado
                                  </span>
                                ) : (
                                  <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs">
                                    Rechazado
                                  </span>
                                )}

                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="border-gold text-gold hover:bg-gold/10"
                                >
                                  <Link href={`/perfil/${postulante.id}`}>Ver Perfil</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}

              {activeOfertas.length === 0 && (
                <div className="text-center py-16 bg-[#1A2223] rounded-lg border border-gold/10">
                  <p className="text-foreground/70 text-lg mb-4">No tienes ofertas activas en este momento.</p>
                  <Button asChild className="bg-gold hover:bg-gold/90 text-deep-black">
                    <Link href="/publicar-oferta">Publicar Nueva Oferta</Link>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="cerradas">
            <div className="space-y-8">
              {closedOfertas.map((oferta) => (
                <motion.div
                  key={oferta.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#1A2223] rounded-lg overflow-hidden shadow-lg border border-gold/10 opacity-80"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border border-gold/20">
                          <Image
                            src={oferta.logo || "/placeholder.svg"}
                            alt={oferta.company}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-montserrat font-bold text-xl text-foreground mr-2">{oferta.title}</h3>
                            <span className="px-2 py-1 bg-white/10 text-foreground/70 rounded-full text-xs">
                              Cerrada
                            </span>
                          </div>
                          <p className="text-gold text-sm">{oferta.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button asChild variant="outline" size="sm" className="border-gold text-gold hover:bg-gold/10">
                          <Link href={`/ofertas/${oferta.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <p className="text-foreground/70 text-sm mb-4">{oferta.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-foreground/70 text-sm">
                        <MapPin className="h-4 w-4 text-gold mr-2" />
                        <span>{oferta.location}</span>
                      </div>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <Clock className="h-4 w-4 text-gold mr-2" />
                        <span>{oferta.duration}</span>
                      </div>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <Briefcase className="h-4 w-4 text-gold mr-2" />
                        <span>{oferta.modality}</span>
                      </div>
                      {oferta.remuneration && (
                        <div className="flex items-center text-foreground/70 text-sm">
                          <DollarSign className="h-4 w-4 text-gold mr-2" />
                          <span>{oferta.remuneration_amount}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gold mr-2" />
                        <span className="text-foreground font-medium">
                          {oferta.postulaciones} postulaciones recibidas
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gold text-gold hover:bg-gold/10"
                        onClick={() => handleSelectOferta(oferta.id)}
                      >
                        {selectedOferta === oferta.id ? "Ocultar postulantes" : "Ver postulantes"}
                      </Button>
                    </div>

                    {selectedOferta === oferta.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gold/10"
                      >
                        <h4 className="font-montserrat font-semibold text-lg text-foreground mb-4">Postulantes</h4>

                        <div className="space-y-4">
                          {oferta.postulantes.map((postulante) => (
                            <div
                              key={postulante.id}
                              className="flex items-center justify-between p-4 bg-deep-black/50 rounded-lg border border-gold/10"
                            >
                              <div className="flex items-center">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                                  <Image
                                    src={postulante.avatar || "/placeholder.svg"}
                                    alt={postulante.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h5 className="font-medium text-foreground">{postulante.name}</h5>
                                  <p className="text-xs text-foreground/70">
                                    {postulante.career} - {postulante.university}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                {postulante.status === "accepted" ? (
                                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                                    Aceptado
                                  </span>
                                ) : (
                                  <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs">
                                    Rechazado
                                  </span>
                                )}

                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="border-gold text-gold hover:bg-gold/10"
                                >
                                  <Link href={`/perfil/${postulante.id}`}>Ver Perfil</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}

              {closedOfertas.length === 0 && (
                <div className="text-center py-16 bg-[#1A2223] rounded-lg border border-gold/10">
                  <p className="text-foreground/70 text-lg mb-4">No tienes ofertas cerradas en este momento.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
