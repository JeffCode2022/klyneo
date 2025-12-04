"use client"

import { motion } from "framer-motion"
import { Search, Filter, Briefcase, MapPin, Calendar, MoreVertical, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StellarBackground } from "@/components/ui/stellar-background"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const applications = [
    {
        id: 1,
        role: "Practicante de Desarrollo Web",
        company: "Agencia Creativa Lima",
        location: "Lima, Perú (Híbrido)",
        date: "02 Dic 2025",
        status: "En revisión",
        statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
        icon: Clock,
    },
    {
        id: 2,
        role: "Asistente de Marketing Digital",
        company: "Retail Peru S.A.",
        location: "Remoto",
        date: "28 Nov 2025",
        status: "Entrevista programada",
        statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
        icon: CheckCircle,
    },
    {
        id: 3,
        role: "Junior Python Developer",
        company: "DataScience Corp",
        location: "San Isidro, Lima",
        date: "25 Nov 2025",
        status: "Rechazado",
        statusColor: "text-red-400 bg-red-400/10 border-red-400/20",
        icon: XCircle,
    },
    {
        id: 4,
        role: "Diseñador UX/UI Trainee",
        company: "Innova Digital",
        location: "Miraflores, Lima",
        date: "20 Nov 2025",
        status: "Visto por empresa",
        statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        icon: Eye,
    },
]

import { Eye } from "lucide-react"

export default function PostulacionesPage() {
    return (
        <div className="min-h-screen relative pt-28 pb-16 px-4">
            <StellarBackground />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-2"
                        >
                            Mis Postulaciones
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60"
                        >
                            Seguimiento de tus procesos de selección
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-3"
                    >
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                            <Input
                                placeholder="Buscar por rol o empresa..."
                                className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-[#FF6B00]"
                            />
                        </div>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            <Filter className="h-4 w-4 mr-2" /> Filtros
                        </Button>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {applications.map((app, index) => {
                        const StatusIcon = app.icon
                        return (
                            <motion.div
                                key={app.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-xl p-6 hover:border-[#FF6B00]/30 transition-all group"
                            >
                                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                                    <div className="flex gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                            <Briefcase className="h-6 w-6 text-white/70" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                                                {app.role}
                                            </h3>
                                            <p className="text-white/70 font-medium">{app.company}</p>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/50">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" /> {app.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" /> Aplicado el {app.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:items-end gap-3 w-full md:w-auto pl-16 md:pl-0">
                                        <Badge className={`px-3 py-1 ${app.statusColor} border hover:bg-transparent`}>
                                            <StatusIcon className="h-3 w-3 mr-1.5" />
                                            {app.status}
                                        </Badge>

                                        <div className="flex gap-2">
                                            <Link href={`/ofertas/${app.id}`}>
                                                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                                                    Ver Oferta
                                                </Button>
                                            </Link>
                                            <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                                                Detalles
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
