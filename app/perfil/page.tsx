"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

// Datos de ejemplo
const userData = {
  name: "Carlos Mendoza",
  career: "Ingeniería en Sistemas",
  university: "Universidad Nacional",
  email: "carlos.mendoza@email.com",
  bio: "Estudiante de último año de Ingeniería en Sistemas con experiencia en desarrollo web y aplicaciones móviles. Apasionado por la tecnología y la innovación.",
  profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  projects: [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      description: "Plataforma integral para la administración de recursos y procesos empresariales",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Tecnología",
    },
    {
      id: 2,
      title: "Análisis Predictivo de Mercados",
      description: "Estudio avanzado de patrones de consumo utilizando inteligencia artificial",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Análisis de Datos",
    },
  ],
}

export default function PerfilPage() {
  const [user, setUser] = useState(userData)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name,
    career: user.career,
    university: user.university,
    email: user.email,
    bio: user.bio,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUser((prev) => ({ ...prev, ...formData }))
    setIsEditing(false)
  }

  const deleteProject = (id: number) => {
    setUser((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id),
    }))
  }

  return (
    <div className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Perfil Header */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-12 border border-border/40">
            <div className="relative h-48 bg-gradient-to-r from-black to-gold/50">
              <div className="absolute -bottom-16 left-8">
                <div className="relative w-32 h-32 rounded-full border-4 border-gold bg-background">
                  <Image
                    src={user.profileImage || "/placeholder.svg"}
                    alt={user.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="pt-20 pb-8 px-8">
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gold/30 focus-visible:ring-gold"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gold/30 focus-visible:ring-gold"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="career" className="block text-sm font-medium text-foreground mb-2">
                        Carrera
                      </label>
                      <Input
                        id="career"
                        name="career"
                        value={formData.career}
                        onChange={handleChange}
                        className="border-gold/30 focus-visible:ring-gold"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-foreground mb-2">
                        Universidad
                      </label>
                      <Input
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="border-gold/30 focus-visible:ring-gold"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-foreground mb-2">
                      Biografía
                    </label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="min-h-[120px] border-gold/30 focus-visible:ring-gold"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-gold hover:bg-gold/90 text-black">
                      Guardar Cambios
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold/10"
                      onClick={() => {
                        setIsEditing(false)
                        setFormData({
                          name: user.name,
                          career: user.career,
                          university: user.university,
                          email: user.email,
                          bio: user.bio,
                        })
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="font-playfair font-bold text-2xl text-foreground mb-1">{user.name}</h1>
                      <p className="text-gold">{user.career}</p>
                      <p className="text-muted-foreground">{user.university}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="gap-2 border-gold text-gold hover:bg-gold/10"
                      onClick={() => setIsEditing(true)}
                    >
                      <Pencil size={16} />
                      Editar Perfil
                    </Button>
                  </div>

                  <div className="mt-8">
                    <h2 className="font-playfair font-semibold text-xl text-foreground mb-3">Biografía</h2>
                    <p className="text-muted-foreground">{user.bio}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Proyectos */}
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border/40">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-playfair font-semibold text-2xl text-foreground">Mis Proyectos</h2>
              <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                <Link href="/subir-proyecto">Subir Nuevo Proyecto</Link>
              </Button>
            </div>

            {user.projects.length > 0 ? (
              <div className="space-y-6">
                {user.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="flex flex-col md:flex-row bg-background rounded-lg border border-border/40 overflow-hidden shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-playfair font-semibold text-xl text-foreground">{project.title}</h3>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-6">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                          <Link href={`/proyectos/${project.id}`}>Ver Proyecto</Link>
                        </Button>
                        <Button asChild variant="outline" className="gap-1 border-gold text-gold hover:bg-gold/10">
                          <Link href={`/editar-proyecto/${project.id}`}>
                            <Pencil size={16} />
                            Editar
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-1 border-red-800 text-red-800 hover:bg-red-800/10"
                          onClick={() => deleteProject(project.id)}
                        >
                          <Trash2 size={16} />
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-6">Aún no has subido ningún proyecto.</p>
                <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                  <Link href="/subir-proyecto">Subir mi primer proyecto</Link>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
