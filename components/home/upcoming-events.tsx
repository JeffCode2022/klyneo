"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { upcomingEvents } from "@/lib/placeholder-data"

export function UpcomingEvents() {
    const eventsRef = useRef<HTMLDivElement>(null)
    const eventsInView = useInView(eventsRef, { once: false, amount: 0.3 })

    return (
        <section ref={eventsRef} className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={eventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4">Próximos <span className="text-[#FF6B00]">Eventos</span></h2>
                        <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                            Participa en nuestros eventos virtuales y conecta con empresas y otros estudiantes
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={eventsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="flex flex-col md:flex-row items-center bg-[rgba(255,255,255,0.03)] backdrop-blur-[5px] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 transition-all duration-300"
                            >
                                <div className="bg-[rgba(255,255,255,0.1)] py-2 px-5 rounded-lg text-center min-w-[80px] mb-4 md:mb-0 md:mr-6">
                                    <span className="block text-2xl font-bold text-[#FF6B00]">{event.date.split(' ')[0]}</span>
                                    <span className="block text-xs uppercase text-white/80">{event.date.split(' ')[2].replace(',', '').substring(0, 3)}</span>
                                </div>

                                <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                                    <h4 className="text-xl font-bold text-white mb-1">{event.title}</h4>
                                    <p className="text-[#b3b3b3] text-sm">{event.description}</p>
                                </div>

                                <div className="md:ml-auto">
                                    <Button asChild className="bg-[#FF6B00] hover:bg-[#ff8533] text-white rounded-full px-6 shadow-[0_0_15px_rgba(255,107,0,0.4)] hover:-translate-y-0.5 transition-all">
                                        <Link href={`/eventos/${event.id}`}>
                                            Inscribirse
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative text-center mt-16 flex justify-center items-center">
                        {/* Stellar Smoke Effect */}
                        <div className="absolute w-64 h-20 bg-[#FF6B00] blur-[60px] opacity-20 rounded-full pointer-events-none"></div>

                        <Button
                            asChild
                            className="relative bg-gradient-to-r from-[#FF6B00] to-[#ff9f43] hover:from-[#ff8533] hover:to-[#ffb060] text-white border-none rounded-full px-10 py-6 text-lg font-bold shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_50px_rgba(255,107,0,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            <Link href="/eventos">Ver todos los eventos</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
