"use client"

import { StellarBackground } from "@/components/ui/stellar-background"
import { motion } from "framer-motion"
import { Calendar, Video, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EntrevistasPage() {
    return (
        <div className="min-h-screen relative pt-28 pb-16 px-4">
            <StellarBackground />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-montserrat font-bold text-4xl text-white mb-4">
                        Calendario de Entrevistas
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Gestiona tus reuniones y entrevistas con candidatos.
                    </p>
                </motion.div>

                <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-12 text-center">
                    <div className="h-20 w-20 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="h-10 w-10 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Agenda Inteligente</h2>
                    <p className="text-white/60 max-w-md mx-auto mb-8">
                        Pronto podrás sincronizar tu calendario y programar entrevistas automáticas con los candidatos seleccionados.
                    </p>
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                        Ver Demo
                    </Button>
                </div>
            </div>
        </div>
    )
}
