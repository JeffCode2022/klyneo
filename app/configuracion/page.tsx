"use client"

import { StellarBackground } from "@/components/ui/stellar-background"
import { motion } from "framer-motion"
import { Settings, User, Bell, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConfiguracionPage() {
    return (
        <div className="min-h-screen relative pt-28 pb-16 px-4">
            <StellarBackground />
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-montserrat font-bold text-3xl text-white mb-8"
                >
                    Configuración de Cuenta
                </motion.h1>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <User className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Perfil de Empresa</h3>
                                <p className="text-white/60 text-sm">Gestiona la información pública de tu empresa</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">Editar</Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                                <Bell className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Notificaciones</h3>
                                <p className="text-white/60 text-sm">Elige qué alertas recibir</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">Configurar</Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                                <Lock className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Seguridad</h3>
                                <p className="text-white/60 text-sm">Contraseña y autenticación</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">Gestionar</Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
