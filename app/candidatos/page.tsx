"use client"

import { StellarBackground } from "@/components/ui/stellar-background"
import { motion } from "framer-motion"
import { Users, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CandidatosPage() {
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
                        Buscador de Talentos
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Encuentra a los mejores candidatos universitarios para tu empresa.
                    </p>
                </motion.div>

                <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-12 text-center">
                    <div className="h-20 w-20 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="h-10 w-10 text-[#FF6B00]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Base de Datos de Talentos</h2>
                    <p className="text-white/60 max-w-md mx-auto mb-8">
                        Estamos preparando el motor de búsqueda más avanzado para conectar empresas con estudiantes destacados.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white">
                            Notificarme cuando esté listo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
