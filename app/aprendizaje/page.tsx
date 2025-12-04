"use client"

import { motion } from "framer-motion"
import { Search, Filter, BookOpen, Clock, Star, PlayCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StellarBackground } from "@/components/ui/stellar-background"
import { Badge } from "@/components/ui/badge"

const courses = [
    {
        id: 1,
        title: "TypeScript Avanzado",
        instructor: "Carlos Ramirez",
        duration: "4h 30m",
        level: "Avanzado",
        rating: 4.8,
        students: 1240,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        category: "Desarrollo",
        progress: 0,
    },
    {
        id: 2,
        title: "Diseño UX/UI Moderno",
        instructor: "Ana Silva",
        duration: "6h 15m",
        level: "Intermedio",
        rating: 4.9,
        students: 850,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        category: "Diseño",
        progress: 35,
    },
    {
        id: 3,
        title: "Introducción a Data Science",
        instructor: "Miguel Torres",
        duration: "8h 00m",
        level: "Principiante",
        rating: 4.7,
        students: 2100,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        category: "Data",
        progress: 0,
    },
    {
        id: 4,
        title: "Gestión Ágil de Proyectos",
        instructor: "Laura Mendez",
        duration: "3h 45m",
        level: "Intermedio",
        rating: 4.6,
        students: 980,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "Negocios",
        progress: 100,
    },
]

export default function AprendizajePage() {
    return (
        <div className="min-h-screen relative pt-28 pb-16 px-4">
            <StellarBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-2"
                        >
                            Ruta de Aprendizaje
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60"
                        >
                            Mejora tus habilidades y destaca tu perfil profesional
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-3"
                    >
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                            <Input
                                placeholder="Buscar cursos..."
                                className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-[#FF6B00]"
                            />
                        </div>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            <Filter className="h-4 w-4 mr-2" /> Filtros
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden hover:border-[#FF6B00]/50 transition-all group"
                        >
                            <div className="relative h-40">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-black/50 backdrop-blur-md border-none text-white hover:bg-black/60">
                                        {course.category}
                                    </Badge>
                                </div>
                                {course.progress > 0 && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                                        <div
                                            className="h-full bg-[#FF6B00]"
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-[#FF6B00] transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-3">{course.instructor}</p>

                                <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {course.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star className="h-3 w-3 text-yellow-500" /> {course.rating}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10">
                                        {course.level}
                                    </span>
                                    <Button size="sm" className={`
                    ${course.progress === 100
                                            ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                            : "bg-[#FF6B00] hover:bg-[#e05e00] text-white"}
                  `}>
                                        {course.progress === 100 ? (
                                            <><CheckCircle className="h-4 w-4 mr-1" /> Completado</>
                                        ) : course.progress > 0 ? (
                                            <><PlayCircle className="h-4 w-4 mr-1" /> Continuar</>
                                        ) : (
                                            "Empezar"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
