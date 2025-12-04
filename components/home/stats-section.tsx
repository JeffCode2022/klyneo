"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { stats } from "@/lib/placeholder-data"

export function StatsSection() {
    const statsRef = useRef<HTMLDivElement>(null)
    const statsInView = useInView(statsRef, { once: false, amount: 0.3 })

    return (
        <section ref={statsRef} className="py-24 bg-[rgba(255,107,0,0.05)] border-y border-[rgba(255,255,255,0.1)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4">
                            Nuestro Impacto en <span className="text-[#FF6B00]">Números</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-[rgba(255,255,255,0.03)] backdrop-blur-[5px] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,107,0,0.05)] hover:border-[#FF6B00]/30 transition-all duration-300"
                            >
                                <p className="text-5xl md:text-6xl font-black text-[#FF6B00] mb-2">{stat.value}</p>
                                <p className="text-white text-lg font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
