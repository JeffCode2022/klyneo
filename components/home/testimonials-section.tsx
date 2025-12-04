"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { testimonials } from "@/lib/placeholder-data"

export function TestimonialsSection() {
    const testimonialsRef = useRef<HTMLDivElement>(null)
    const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 })

    return (
        <section ref={testimonialsRef} className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4">
                            Lo Que Dicen de <span className="text-[#FF6B00]">Nosotros</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                            Experiencias de estudiantes y empresas que han utilizado nuestra plataforma
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[5px] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] relative"
                            >
                                <div className="absolute top-4 right-6 text-4xl text-white/20 font-serif">
                                    "
                                </div>
                                <p className="text-[#ddd] mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border border-[#FF6B00]/30">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#FF6B00]">{testimonial.name}</p>
                                        <p className="text-sm text-[#b3b3b3]">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
