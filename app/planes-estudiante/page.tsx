"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { StellarBackground } from "@/components/ui/stellar-background"

const plans = [
    {
        name: "Estudiante Básico",
        price: "Gratis",
        description: "Ideal para empezar a explorar oportunidades.",
        features: [
            "10 Postulaciones al mes",
            "Proyectos visibles por 30 días",
            "Acceso a cursos: 'Fundamentos Profesionales'",
            "Insignia: 'Miembro Activo'",
            "Generador de CV Básico",
            "Visibilidad estándar en búsquedas"
        ],
        cta: "Plan Actual",
        popular: false,
    },
    {
        name: "Estudiante Plus",
        price: "S/ 19.90",
        period: "/mes",
        description: "Más oportunidades para mostrar tu talento.",
        features: [
            "40 Postulaciones al mes",
            "Proyectos visibles por 90 días",
            "Acceso a cursos: 'Talleres Técnicos y Soft Skills'",
            "2x Insignias de Habilidades Verificadas",
            "Revisión de Portafolio con IA",
            "Destacado en búsquedas de reclutadores"
        ],
        cta: "Mejorar a Plus",
        popular: true,
        highlight: "Mejor Valor"
    },
    {
        name: "Estudiante Pro",
        price: "S/ 39.90",
        period: "/mes",
        description: "La máxima exposición para tu carrera.",
        features: [
            "Postulaciones Ilimitadas",
            "Proyectos visibles por siempre",
            "Acceso Total: 'Ruta de Aprendizaje Premium'",
            "Insignia: 'Talento Verificado' (Gold)",
            "Mensajes directos a reclutadores (5/mes)",
            "Prioridad en el algoritmo de recomendación",
            "Acceso a eventos de Networking exclusivos"
        ],
        cta: "Ser Pro",
        popular: false,
    },
]

export default function PlanesEstudiantePage() {
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
                        Planes para Estudiantes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Invierte en tu futuro profesional con herramientas exclusivas que te ayudarán a conseguir tus prácticas ideales.
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
                                    Recomendado
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
