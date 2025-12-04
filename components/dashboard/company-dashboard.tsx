"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Calendar, CheckCircle, Plus, MoreVertical, TrendingUp, Search, Bell, Settings, ChevronRight, UserCheck, Clock, XCircle, Award, ShieldCheck, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { companyStats, companyOffersList, recommendedTalent } from "@/lib/placeholder-data"
import { useUI } from "@/components/providers/ui-provider"

const iconMap: any = {
    Briefcase: Briefcase,
    Users: Users,
    Calendar: Calendar,
    CheckCircle: CheckCircle,
}

export function CompanyDashboard() {
    const { userName } = useUI()

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
                <div>
                    <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
                        Hola, <span className="text-[#FF6B00]">{userName || "Empresa"}</span>
                    </h1>
                    <p className="text-white/60 mt-1">Gestiona tus ofertas y encuentra el mejor talento</p>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/publicar-oferta">
                        <Button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white rounded-full px-6">
                            <Plus className="h-4 w-4 mr-2" /> Publicar Oferta
                        </Button>
                    </Link>
                    <div className="h-8 w-[1px] bg-white/10 mx-2 hidden md:block" />
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Link href="/mensajes">
                        <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                            <MessageSquare className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Link href="/configuracion">
                        <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                            <Settings className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companyStats.map((stat, index) => {
                    const Icon = iconMap[stat.icon] || Briefcase
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[#FF6B00]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(255,107,0,0.3)] group"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-white/60 text-sm font-medium mb-1">{stat.title}</p>
                                    <h3 className="text-3xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                                        {stat.value}
                                    </h3>
                                </div>
                                <div className={`p-3 rounded-xl bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Analytics Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-6"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-[#FF6B00]" />
                        Rendimiento de Ofertas
                    </h2>
                    <select className="bg-white/5 border border-white/10 rounded-lg text-white text-sm px-3 py-1 outline-none focus:border-[#FF6B00]/50">
                        <option>Últimos 30 días</option>
                        <option>Últimos 7 días</option>
                    </select>
                </div>
                <div className="h-48 flex items-end gap-4">
                    {[65, 40, 75, 55, 80, 95, 60].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer">
                            <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden h-full">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="absolute bottom-0 w-full bg-gradient-to-t from-[#FF6B00] to-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xs text-center text-white/40">Día {i + 1}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Active Offers */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Candidate Pipeline Summary */}
                    <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
                        <h2 className="text-xl font-bold text-white mb-6">Pipeline de Candidatos</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
                                <h3 className="text-2xl font-bold text-blue-400">12</h3>
                                <p className="text-sm text-blue-200/70">Nuevos</p>
                            </div>
                            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20 text-center">
                                <h3 className="text-2xl font-bold text-yellow-400">8</h3>
                                <p className="text-sm text-yellow-200/70">En Revisión</p>
                            </div>
                            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
                                <h3 className="text-2xl font-bold text-purple-400">5</h3>
                                <p className="text-sm text-purple-200/70">Entrevista</p>
                            </div>
                            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 text-center">
                                <h3 className="text-2xl font-bold text-green-400">2</h3>
                                <p className="text-sm text-green-200/70">Oferta</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Mis Ofertas Activas</h2>
                            <Link href="/ofertas" className="text-[#FF6B00] text-sm hover:underline flex items-center gap-1">
                                Ver todas <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {companyOffersList.map((offer, index) => (
                                <motion.div
                                    key={offer.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 hover:bg-white/5 transition-colors group"
                                >
                                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                                                    {offer.title}
                                                </h3>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${offer.status === "Activo"
                                                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                    : "bg-white/5 text-white/50 border-white/10"
                                                    }`}>
                                                    {offer.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6 text-sm text-white/60">
                                                <span className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" /> {offer.applicants} postulantes
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <TrendingUp className="h-4 w-4" /> {offer.views} vistas
                                                </span>
                                                <span>{offer.posted}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                                            <Link href={`/ofertas/${offer.id}`} className="flex-1 md:flex-none">
                                                <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10">
                                                    Gestionar
                                                </Button>
                                            </Link>
                                            <Button variant="ghost" size="icon" className="text-white/50 hover:text-white">
                                                <MoreVertical className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar - Interviews & Talent */}
                <div className="space-y-8">
                    {/* Upcoming Interviews */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-[#FF6B00]" />
                                Próximas Entrevistas
                            </h3>
                            <Link href="/entrevistas">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-white">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF6B00]/30 transition-colors cursor-pointer">
                                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
                                    10:00
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-medium text-sm">Ana García</p>
                                    <p className="text-white/40 text-xs">UX Designer • Google Meet</p>
                                </div>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-green-500/20 hover:text-green-400">
                                    <UserCheck className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF6B00]/30 transition-colors cursor-pointer">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                                    14:30
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-medium text-sm">Carlos Ruiz</p>
                                    <p className="text-white/40 text-xs">Frontend Dev • Zoom</p>
                                </div>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-green-500/20 hover:text-green-400">
                                    <UserCheck className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Talento Recomendado</h3>
                            <Link href="/proyectos">
                                <Button variant="ghost" size="sm" className="text-[#FF6B00] hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 p-0 h-auto font-normal">
                                    Ver más
                                </Button>
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {recommendedTalent.map((talent, index) => (
                                <Link href={`/perfil/estudiante/${talent.id}`} key={talent.id}>
                                    <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group mb-2">
                                        <div className="h-10 w-10 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
                                            {/* Placeholder avatar if image fails or just use div */}
                                            <img src={talent.avatar} alt={talent.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-white font-medium text-sm truncate group-hover:text-[#FF6B00] transition-colors">
                                                    {talent.name}
                                                </h4>
                                                <span className="text-xs text-[#FF6B00] font-bold">{talent.match}</span>
                                            </div>
                                            <p className="text-white/50 text-xs truncate">{talent.role}</p>
                                            <p className="text-white/30 text-[10px] mt-1 truncate">{talent.university}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Reputation & Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5 text-[#FF6B00]" />
                            Credenciales de Empresa
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Empresa Verificada</p>
                                    <p className="text-white/50 text-xs">Identidad confirmada</p>
                                </div>
                                <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Users className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Great Place to Work</p>
                                    <p className="text-white/50 text-xs">Cultura validada</p>
                                </div>
                                <Badge variant="outline" className="ml-auto border-purple-500/50 text-purple-400 text-[10px]">
                                    2025
                                </Badge>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer border-dashed">
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                                    <Plus className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">Añadir Certificación</p>
                                    <p className="text-white/40 text-xs">ISO, B-Corp, etc.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-[#FF6B00]/20 to-purple-600/20 backdrop-blur-md border border-[#FF6B00]/20 rounded-xl p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#FF6B00] rounded-full blur-3xl opacity-20" />

                        <h3 className="text-lg font-bold text-white mb-2 relative z-10">Plan Premium</h3>
                        <p className="text-white/70 text-sm mb-4 relative z-10">
                            Destaca tus ofertas y accede a filtros avanzados de candidatos.
                        </p>
                        <Link href="/planes">
                            <Button className="w-full bg-[#FF6B00] hover:bg-[#e05e00] text-white border-none relative z-10">
                                Mejorar Plan
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
