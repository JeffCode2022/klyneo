"use client"

import { Lightbulb, Users, Award, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4">
                        ¿Por qué elegir <span className="text-[#FF6B00]">KLYNEO</span>?
                    </h2>
                    <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                        Conectamos el talento con oportunidades reales en el mercado laboral
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[5px] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,107,0,0.05)] hover:border-[#FF6B00] transition-all duration-300 group"
                    >
                        <div className="mb-6">
                            <Lightbulb className="h-10 w-10 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Conexión Directa</h3>
                        <p className="text-[#b3b3b3] leading-relaxed">
                            Eliminamos intermediarios. Conéctate directamente con las empresas que buscan tu talento fresco y dinámico.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[5px] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,107,0,0.05)] hover:border-[#FF6B00] transition-all duration-300 group"
                    >
                        <div className="mb-6">
                            <Award className="h-10 w-10 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Experiencia Real</h3>
                        <p className="text-[#b3b3b3] leading-relaxed">
                            Tus proyectos académicos valen. Conviértelos en tu portafolio y demuestra tus habilidades prácticas.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[5px] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,107,0,0.05)] hover:border-[#FF6B00] transition-all duration-300 group"
                    >
                        <div className="mb-6">
                            <Sparkles className="h-10 w-10 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Impulso Profesional</h3>
                        <p className="text-[#b3b3b3] leading-relaxed">
                            Mentores, validación de habilidades y visibilidad para acelerar tu entrada al mercado laboral.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
