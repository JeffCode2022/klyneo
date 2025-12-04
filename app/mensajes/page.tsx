"use client"

import { StellarBackground } from "@/components/ui/stellar-background"
import { motion } from "framer-motion"
import { MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MensajesPage() {
    return (
        <div className="min-h-screen relative pt-28 pb-16 px-4">
            <StellarBackground />
            <div className="max-w-7xl mx-auto relative z-10 h-[calc(100vh-200px)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 flex flex-col"
                    >
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-[#FF6B00]" />
                            Mensajes
                        </h2>
                        <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-bold text-white text-sm">Candidato {i}</span>
                                        <span className="text-xs text-white/40">10:30</span>
                                    </div>
                                    <p className="text-xs text-white/60 truncate">Hola, estoy interesado en la oferta...</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Chat Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 flex flex-col justify-center items-center text-center"
                    >
                        <div className="h-20 w-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                            <MessageSquare className="h-10 w-10 text-white/20" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Tus conversaciones</h3>
                        <p className="text-white/60 max-w-sm">
                            Selecciona un chat para comenzar a mensajear con los candidatos.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
