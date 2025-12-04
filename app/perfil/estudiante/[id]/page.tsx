"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Pencil,
    Trash2,
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Globe,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Briefcase,
    Download,
    Plus,
    X,
    Save,
} from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

// Datos de ejemplo para el perfil de estudiante
const studentData = {
    name: "Carlos Mendoza Ramírez",
    career: "Ingeniería en Sistemas",
    university: "Universidad Nacional de Ingeniería",
    email: "carlos.mendoza@email.com",
    phone: "+51 987 654 321",
    location: "Lima, Perú",
    birthdate: "15 de mayo de 1999",
    bio: "Estudiante de último año de Ingeniería en Sistemas con experiencia en desarrollo web y aplicaciones móviles. Apasionado por la tecnología y la innovación. Busco oportunidades para aplicar mis conocimientos en entornos profesionales desafiantes que me permitan crecer y contribuir con soluciones tecnológicas innovadoras.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    socialLinks: {
        github: "https://github.com/carlosmendoza",
        linkedin: "https://linkedin.com/in/carlosmendoza",
        twitter: "https://twitter.com/carlosmendoza",
        instagram: "https://instagram.com/carlosmendoza",
        website: "https://carlosmendoza.dev",
    },
    skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Docker", level: 60 },
    ],
    languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado (C1)" },
        { name: "Portugués", level: "Intermedio (B1)" },
    ],
    education: [
        {
            institution: "Universidad Nacional de Ingeniería",
            degree: "Ingeniería en Sistemas",
            period: "2019 - Presente",
            description: "Especialización en Desarrollo de Software y Ciencia de Datos. Promedio ponderado: 17.5/20",
        },
        {
            institution: "Instituto Tecnológico Superior",
            degree: "Técnico en Programación",
            period: "2017 - 2019",
            description: "Formación técnica en lenguajes de programación y desarrollo web. Graduado con honores.",
        },
    ],
    experience: [
        {
            company: "TechPeru Solutions",
            position: "Practicante de Desarrollo",
            period: "Enero 2023 - Presente",
            description:
                "Desarrollo de aplicaciones web con React y Node.js. Implementación de APIs RESTful y bases de datos MongoDB.",
        },
        {
            company: "StartupLima",
            position: "Desarrollador Frontend (Part-time)",
            period: "Junio 2022 - Diciembre 2022",
            description:
                "Diseño e implementación de interfaces de usuario con React y Tailwind CSS. Colaboración en proyectos de e-commerce.",
        },
    ],
    certifications: [
        {
            name: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            date: "Octubre 2023",
            credential: "AWS-DEV-12345",
        },
        {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            date: "Mayo 2023",
            credential: "PSM-I-98765",
        },
        {
            name: "MongoDB Certified Developer",
            issuer: "MongoDB University",
            date: "Febrero 2023",
            credential: "MCD-54321",
        },
    ],
    projects: [
        {
            id: 1,
            title: "Sistema de Gestión Empresarial",
            description:
                "Plataforma integral para la administración de recursos y procesos empresariales con inteligencia artificial predictiva.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            category: "Tecnología",
            technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
            link: "https://github.com/carlosmendoza/sistema-gestion-ia",
        },
        {
            id: 2,
            title: "Análisis Predictivo de Mercados",
            description:
                "Estudio avanzado de patrones de consumo utilizando inteligencia artificial y big data para mercados emergentes.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            category: "Análisis de Datos",
            technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
            link: "https://github.com/carlosmendoza/analisis-mercados",
        },
        {
            id: 3,
            title: "Aplicación Móvil de Finanzas Personales",
            description:
                "App para gestión de presupuestos y análisis de gastos con recomendaciones personalizadas de ahorro.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            category: "Desarrollo Móvil",
            technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
            link: "https://github.com/carlosmendoza/finanzapp",
        },
    ],
    interests: ["Inteligencia Artificial", "Desarrollo Web", "Ciencia de Datos", "Blockchain", "IoT"],
    availability: {
        lookingForInternship: true,
        availableFrom: "Junio 2024",
        preferredModality: "Híbrido",
        preferredAreas: ["Desarrollo Web", "Inteligencia Artificial", "Análisis de Datos"],
    },
    resume: {
        url: "/path/to/resume.pdf",
        lastUpdated: "15 de marzo, 2024",
    },
}

export default function StudentProfileIdPage({ params }: { params: { id: string } }) {
    const [student, setStudent] = useState(studentData)
    const [activeTab, setActiveTab] = useState("info")

    // Read-only view, so no editing state needed
    const isEditing = false

    return (
        <div className="bg-background min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Portada y Foto de Perfil */}
                <div className="relative mb-24">
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image src={student.coverImage || "/placeholder.svg"} alt="Portada" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>

                    <div className="absolute -bottom-16 left-8 md:left-12">
                        <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-gold bg-background">
                            <Image
                                src={student.profileImage || "/placeholder.svg"}
                                alt={student.name}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button
                            variant="default"
                            className="bg-gold hover:bg-gold/90 text-black gap-2"
                        >
                            <Mail size={16} />
                            Contactar
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Columna Izquierda - Información Personal */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Información Personal</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-montserrat text-xl font-bold text-foreground">{student.name}</h3>
                                    <p className="text-gold">{student.career}</p>
                                    <p className="text-muted-foreground">{student.university}</p>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <div className="flex items-start gap-3 mb-3">
                                        <Mail className="h-5 w-5 text-gold mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Correo Electrónico</p>
                                            <p className="text-foreground">{student.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 mb-3">
                                        <Phone className="h-5 w-5 text-gold mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Teléfono</p>
                                            <p className="text-foreground">{student.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 mb-3">
                                        <MapPin className="h-5 w-5 text-gold mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Ubicación</p>
                                            <p className="text-foreground">{student.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Calendar className="h-5 w-5 text-gold mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Fecha de Nacimiento</p>
                                            <p className="text-foreground">{student.birthdate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                            <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Redes Sociales</h2>

                            <div className="space-y-3">
                                {student.socialLinks.github && (
                                    <a
                                        href={student.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                        <span>GitHub</span>
                                    </a>
                                )}

                                {student.socialLinks.linkedin && (
                                    <a
                                        href={student.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                        <span>LinkedIn</span>
                                    </a>
                                )}

                                {student.socialLinks.twitter && (
                                    <a
                                        href={student.socialLinks.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                                    >
                                        <Twitter className="h-5 w-5" />
                                        <span>Twitter</span>
                                    </a>
                                )}

                                {student.socialLinks.instagram && (
                                    <a
                                        href={student.socialLinks.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                                    >
                                        <Instagram className="h-5 w-5" />
                                        <span>Instagram</span>
                                    </a>
                                )}

                                {student.socialLinks.website && (
                                    <a
                                        href={student.socialLinks.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                                    >
                                        <Globe className="h-5 w-5" />
                                        <span>Sitio Web</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Habilidades */}
                        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-playfair text-lg font-bold text-foreground">Habilidades</h2>
                            </div>

                            <div className="space-y-4">
                                {student.skills.map((skill, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <span className="text-foreground">{skill.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Progress value={skill.level} className="flex-1" />
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Idiomas */}
                        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                            <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Idiomas</h2>

                            <div className="space-y-3">
                                {student.languages.map((language, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-foreground">{language.name}</span>
                                        <span className="text-sm text-gold">{language.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Intereses */}
                        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                            <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Intereses</h2>

                            <div className="flex flex-wrap gap-2">
                                {student.interests.map((interest, index) => (
                                    <Badge key={index} variant="outline" className="bg-gold/10 text-gold border-gold/20">
                                        {interest}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* CV */}
                        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                            <h2 className="font-playfair text-lg font-bold text-foreground mb-4">Currículum</h2>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-foreground">CV_CarlosMendoza.pdf</p>
                                    <p className="text-xs text-muted-foreground">Actualizado: {student.resume.lastUpdated}</p>
                                </div>
                                <Button variant="outline" size="sm" className="gap-1 border-gold text-gold hover:bg-gold/10">
                                    <Download size={14} />
                                    Descargar
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha - Contenido Principal */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid grid-cols-4 mb-6">
                                <TabsTrigger value="info" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                                    Sobre mí
                                </TabsTrigger>
                                <TabsTrigger value="education" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                                    Formación
                                </TabsTrigger>
                                <TabsTrigger value="experience" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                                    Experiencia
                                </TabsTrigger>
                                <TabsTrigger value="projects" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                                    Proyectos
                                </TabsTrigger>
                            </TabsList>

                            {/* Sobre mí */}
                            <TabsContent value="info" className="space-y-6">
                                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                                    <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Sobre mí</h2>
                                    <p className="text-foreground/80 leading-relaxed">{student.bio}</p>
                                </div>

                                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                                    <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Disponibilidad</h2>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="h-5 w-5 text-gold" />
                                                <span className="text-foreground">Buscando prácticas</span>
                                            </div>

                                            <Badge
                                                variant="outline"
                                                className={
                                                    student.availability.lookingForInternship
                                                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                                                        : "bg-red-500/10 text-red-500 border-red-500/20"
                                                }
                                            >
                                                {student.availability.lookingForInternship ? "Sí" : "No"}
                                            </Badge>
                                        </div>

                                        {student.availability.lookingForInternship && (
                                            <>
                                                <div className="flex items-start gap-3">
                                                    <Calendar className="h-5 w-5 text-gold mt-0.5" />
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Disponible desde</p>
                                                        <p className="text-foreground">{student.availability.availableFrom}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <Briefcase className="h-5 w-5 text-gold mt-0.5" />
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Modalidad preferida</p>
                                                        <p className="text-foreground">{student.availability.preferredModality}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-sm text-muted-foreground mb-2">Áreas de interés</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {student.availability.preferredAreas.map((area, index) => (
                                                            <Badge key={index} variant="outline" className="bg-gold/10 text-gold border-gold/20">
                                                                {area}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Formación */}
                            <TabsContent value="education" className="space-y-6">
                                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                                    <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Formación Académica</h2>

                                    <div className="space-y-8">
                                        {student.education.map((edu, index) => (
                                            <div key={index} className="relative pl-6 border-l-2 border-gold/30">
                                                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gold"></div>
                                                <div className="mb-2">
                                                    <h3 className="font-montserrat text-lg font-bold text-foreground">{edu.institution}</h3>
                                                    <p className="text-gold">{edu.degree}</p>
                                                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                                                </div>
                                                <p className="text-foreground/80">{edu.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                                    <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Certificaciones</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {student.certifications.map((cert, index) => (
                                            <div key={index} className="bg-secondary p-4 rounded-lg border border-border">
                                                <h3 className="font-montserrat text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                                                <p className="text-gold mb-2">{cert.issuer}</p>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">{cert.date}</span>
                                                    <span className="text-muted-foreground">ID: {cert.credential}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Experiencia */}
                            <TabsContent value="experience" className="space-y-6">
                                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                                    <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Experiencia Profesional</h2>

                                    <div className="space-y-8">
                                        {student.experience.map((exp, index) => (
                                            <div key={index} className="relative pl-6 border-l-2 border-gold/30">
                                                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gold"></div>
                                                <div className="mb-2">
                                                    <h3 className="font-montserrat text-lg font-bold text-foreground">{exp.position}</h3>
                                                    <p className="text-gold">{exp.company}</p>
                                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                                </div>
                                                <p className="text-foreground/80">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Proyectos */}
                            <TabsContent value="projects" className="space-y-6">
                                <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="font-playfair text-2xl font-bold text-foreground">Mis Proyectos</h2>
                                    </div>

                                    <div className="space-y-6">
                                        {student.projects.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                className="flex flex-col md:flex-row bg-secondary rounded-lg border border-border overflow-hidden shadow-sm"
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
                                                                <h3 className="font-montserrat text-xl font-bold text-foreground">{project.title}</h3>
                                                                <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                                                                    {project.category}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-foreground/80 mb-4">{project.description}</p>
                                                            <div className="flex flex-wrap gap-2 mb-4">
                                                                {project.technologies.map((tech, i) => (
                                                                    <Badge key={i} variant="secondary" className="bg-background/50">
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                                                            <Link href={`/proyectos/${project.id}`}>Ver Proyecto</Link>
                                                        </Button>
                                                        {project.link && (
                                                            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                                    <Github className="mr-2 h-4 w-4" />
                                                                    Repositorio
                                                                </a>
                                                            </Button>
                                                        )}
                                                    </div>
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
