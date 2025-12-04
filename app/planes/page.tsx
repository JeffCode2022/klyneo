"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { StellarBackground } from "@/components/ui/stellar-background"

const plans = [
    {
        name: "Startups",
        price: "Gratis",
        description: "Para empresas que recién empiezan a buscar talento.",
        features: [
            "3 ofertas activas simultáneas",
            "Visualización básica de perfiles",
            "Chat con candidatos (limitado)",
            "Badge 'Verificado' básico",
            "Soporte por email"
        ],
        cta: "Empezar Gratis",
        popular: false,
    },
    {
        name: "Growth",
        price: "S/ 199",
        period: "/mes",
        description: "Para empresas en expansión que necesitan agilidad.",
        features: [
            "15 ofertas activas simultáneas",
            "Filtros de IA para candidatos",
            "Chat ilimitado & Videollamadas",
            "Badge 'Great Place to Work'",
            "Analytics de rendimiento de ofertas",
            "Soporte prioritario 24/7",
        ],
        cta: "Mejorar a Growth",
        popular: true,
    },
    {
        name: "Corporate",
        price: "Personalizado",
        description: "Potencia tu marca empleadora a gran escala.",
        features: [
            "Ofertas ilimitadas",
            "Acceso a Base de Datos de Talento",
            "API de integración (ATS)",
            "Account Manager dedicado",
            "Branding personalizado de perfil",
            "Eventos de reclutamiento exclusivos",
        ],
        cta: "Contactar Ventas",
        popular: false,
    },
]

export default function PlanesPage() {
    return (
        <div className="min-h-screen relative pt-28 pb-16 px-4">
            <StellarBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4"
                    >
                        Planes para Empresas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Encuentra el plan perfecto para potenciar tu reclutamiento y conectar con el mejor talento universitario.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`relative bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border rounded-2xl p-8 flex flex-col ${plan.popular
                                ? "border-[#FF6B00] shadow-[0_0_30px_-10px_rgba(255,107,0,0.3)]"
                                : "border-[rgba(255,255,255,0.1)]"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-sm font-bold px-4 py-1 rounded-full">
                                    Más Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    {plan.period && <span className="text-white/60">{plan.period}</span>}
                                </div>
                                <p className="text-white/60 mt-4 text-sm">{plan.description}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? "bg-[#FF6B00]" : "bg-white/20"}`}>
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-white/80 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={`w-full font-bold h-12 rounded-xl transition-all ${plan.popular
                                    ? "bg-[#FF6B00] hover:bg-[#e05e00] text-white shadow-lg shadow-[#FF6B00]/20"
                                    : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
