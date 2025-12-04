"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

export function CTASection() {
    const ctaRef = useRef<HTMLDivElement>(null)
    const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 })

    return (
        <section ref={ctaRef} className="py-32 relative z-10 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-12 shadow-2xl"
                >
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-6">
                        ¿Listo para mostrar tu <span className="text-[#FF6B00]">talento</span>?
                    </h2>
                    <p className="text-white/80 mb-10 text-xl font-light max-w-2xl mx-auto">
                        Únete hoy a la comunidad de jóvenes profesionales más grande.
                    </p>
                    <Button asChild size="lg" className="bg-[#FF6B00] hover:bg-[#ff8533] text-white rounded-full px-10 py-6 text-lg font-bold shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:scale-105 transition-all duration-300">
                        <Link href="/registro">Crear mi Cuenta Gratis</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
