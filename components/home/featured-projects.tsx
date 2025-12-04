"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { featuredProjects } from "@/lib/placeholder-data"

export function FeaturedProjects() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)
    const featuredRef = useRef<HTMLDivElement>(null)
    const featuredInView = useInView(featuredRef, { once: false, amount: 0.3 })

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentSlide((prev) => {
            let next = prev + newDirection
            if (next < 0) next = featuredProjects.length - 1
            if (next >= featuredProjects.length) next = 0
            return next
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1)
        }, 6000)
        return () => clearInterval(interval)
    }, [currentSlide]) // Reset timer on slide change

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
        })
    }

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1 + 0.3, duration: 0.5 }
        })
    }

    const project = featuredProjects[currentSlide]

    return (
        <section ref={featuredRef} className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4">
                        Proyectos <span className="text-[#FF6B00]">Destacados</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                        Descubre algunos de los proyectos más innovadores de nuestra comunidad
                    </p>
                </motion.div>

                <div className="relative h-[600px] md:h-[500px] w-full max-w-5xl mx-auto perspective-1000">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 },
                                filter: { duration: 0.4 }
                            }}
                            className="absolute w-full h-full"
                        >
                            <div className="w-full h-full bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row">
                                {/* Image Section */}
                                <div className="relative h-64 md:h-full md:w-1/2 bg-[#111] overflow-hidden group">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[#333]">
                                            <Star size={64} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/80 md:opacity-0" />

                                    <div className="absolute top-6 left-6 z-10">
                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider bg-[#FF6B00] text-white rounded-full uppercase shadow-lg"
                                        >
                                            {project.category}
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative">
                                    {/* Decorative background element */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00] blur-[100px] opacity-5 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                                    <motion.div custom={0} variants={contentVariants} initial="hidden" animate="visible">
                                        <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
                                            {project.title}
                                        </h3>
                                    </motion.div>

                                    <motion.div custom={1} variants={contentVariants} initial="hidden" animate="visible">
                                        <div className="flex items-center mb-6 space-x-3">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#ff9f43] flex items-center justify-center text-white font-bold text-xs">
                                                {project.university.charAt(0)}
                                            </div>
                                            <p className="text-sm font-medium text-white/80">{project.university}</p>
                                        </div>
                                    </motion.div>

                                    <motion.div custom={2} variants={contentVariants} initial="hidden" animate="visible">
                                        <p className="text-[#b3b3b3] mb-8 leading-relaxed text-lg">
                                            {project.description}
                                        </p>
                                    </motion.div>

                                    <motion.div custom={3} variants={contentVariants} initial="hidden" animate="visible">
                                        <Button asChild className="bg-white/5 hover:bg-[#FF6B00] text-white border border-white/10 hover:border-[#FF6B00] rounded-full px-8 py-6 text-base font-medium transition-all duration-300 group w-fit">
                                            <Link href={`/proyectos/${project.id}`} className="flex items-center">
                                                Ver Detalles del Proyecto
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:scale-110 transition-all duration-300"
                            onClick={() => paginate(-1)}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:scale-110 transition-all duration-300"
                            onClick={() => paginate(1)}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                        {featuredProjects.map((_, index) => (
                            <button
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-[#FF6B00]" : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                onClick={() => {
                                    setDirection(index > currentSlide ? 1 : -1)
                                    setCurrentSlide(index)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
