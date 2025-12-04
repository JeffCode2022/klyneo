import { motion } from "framer-motion"
import { FileText, Eye, Bookmark, Send, Briefcase, MapPin, Clock, ChevronRight, Search, Bell, Settings, BookOpen, Star, TrendingUp, CheckCircle, UserCircle, Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { studentStats, recommendedOffers, recentApplications } from "@/lib/placeholder-data"
import { useUI } from "@/components/providers/ui-provider"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const iconMap: any = {
    FileText: FileText,
    Eye: Eye,
    Bookmark: Bookmark,
    Send: Send,
}

export function StudentDashboard() {
    const { userName } = useUI()
    const [isOfferModalOpen, setIsOfferModalOpen] = useState(false)
    const [selectedOffer, setSelectedOffer] = useState<any>(null)

    const handleOfferClick = (offer: any) => {
        setSelectedOffer(offer)
        setIsOfferModalOpen(true)
    }

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                            <Image
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
                                alt="Profile"
                                width={64}
                                height={64}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-[#0a0a0a]" title="Verificado">
                            <CheckCircle className="h-3 w-3" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white flex items-center gap-2">
                            Hola, <span className="text-[#FF6B00]">{userName || "Estudiante"}</span>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-2 py-0.5 h-6">
                                <CheckCircle className="h-3 w-3 mr-1" /> Verificado
                            </Badge>
                        </h1>
                        <p className="text-white/60 mt-1">Bienvenido a tu panel de control académico y laboral</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white hover:bg-white/10">
                        <Settings className="h-5 w-5" />
                    </Button>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {studentStats.map((stat, index) => {
                    const Icon = iconMap[stat.icon] || FileText
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* My Projects Preview */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <FileText className="h-5 w-5 text-[#FF6B00]" />
                                Mis Proyectos Destacados
                            </h2>
                            <Link href="/proyectos" className="text-[#FF6B00] text-sm hover:underline flex items-center gap-1">
                                Ver todos <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/proyectos/1" className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden hover:border-[#FF6B00]/50 transition-all group h-full"
                                >
                                    <div className="h-32 relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                                            alt="Project"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-3 left-3">
                                            <span className="px-2 py-1 bg-[#FF6B00] text-white text-xs font-bold rounded-md">Tecnología</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-white font-bold mb-1 group-hover:text-[#FF6B00] transition-colors">Sistema de Gestión IA</h3>
                                        <div className="flex items-center justify-between text-xs text-white/50 mt-3">
                                            <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> 1.2k vistas</span>
                                            <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500" /> 4.8</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden hover:border-[#FF6B00]/50 transition-all group flex items-center justify-center min-h-[200px] border-dashed"
                            >
                                <Link href="/subir-proyecto" className="flex flex-col items-center gap-2 text-white/50 hover:text-[#FF6B00] transition-colors w-full h-full justify-center">
                                    <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-colors">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <span className="font-medium">Subir Nuevo Proyecto</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Recommended Offers */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-[#FF6B00]" />
                                Ofertas Recomendadas para Ti
                            </h2>
                            <Link href="/ofertas" className="text-[#FF6B00] text-sm hover:underline flex items-center gap-1">
                                Ver todas <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {recommendedOffers.map((offer, index) => (
                                <motion.div
                                    key={offer.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    onClick={() => handleOfferClick(offer)}
                                    className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 hover:bg-white/5 transition-colors group cursor-pointer mb-4"
                                >
                                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#ff9f43] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                                {offer.company.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                                                    {offer.title}
                                                </h3>
                                                <p className="text-white/70">{offer.company}</p>
                                                <div className="flex flex-wrap gap-3 mt-2 text-sm text-white/50">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" /> {offer.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Briefcase className="h-3 w-3" /> {offer.type}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" /> {offer.posted}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-between gap-2">
                                            <span className="px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium border border-[#FF6B00]/20">
                                                {offer.match} Match
                                            </span>
                                            <p className="text-white font-semibold">{offer.salary}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar - Recent Applications & Profile */}
                <div className="space-y-8">
                    {/* Profile Completion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <h3 className="text-lg font-bold text-white mb-4">Perfil Completado</h3>
                        <div className="flex items-end justify-between mb-2">
                            <span className="text-white/60 text-sm">Nivel Intermedio</span>
                            <span className="text-[#FF6B00] font-bold">75%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-[#FF6B00] h-2 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]"
                            />
                        </div>
                        <Link href="/perfil/estudiante">
                            <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10">
                                Completar Perfil
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Badges & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Star className="h-5 w-5 text-[#FF6B00]" />
                                Mis Insignias & Ranking
                            </h3>
                            <Badge variant="outline" className="border-[#FF6B00]/30 text-[#FF6B00] bg-[#FF6B00]/5">
                                Top 5% Estudiantes
                            </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 transition-colors tooltip-trigger group" title="Miembro Activo">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-yellow-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <span className="text-[10px] text-white/70 text-center leading-tight mt-1">Miembro Activo</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 transition-colors group" title="Perfil Verificado">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                    <UserCircle className="h-6 w-6" />
                                </div>
                                <span className="text-[10px] text-white/70 text-center leading-tight mt-1">Verificado</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 transition-colors opacity-50 grayscale hover:grayscale-0 hover:opacity-100 group">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <span className="text-[10px] text-white/70 text-center leading-tight mt-1">Top Talent</span>
                            </div>
                        </div>

                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            Habilidades Verificadas
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="h-8 w-8 rounded bg-[#61DAFB]/20 flex items-center justify-center p-1.5">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-full h-full" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">React</p>
                                    <p className="text-[10px] text-white/50">Avanzado</p>
                                </div>
                                <CheckCircle className="h-3 w-3 text-green-500 ml-auto" />
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="h-8 w-8 rounded bg-[#F7DF1E]/20 flex items-center justify-center p-1.5">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JS" className="w-full h-full rounded-sm" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">JavaScript</p>
                                    <p className="text-[10px] text-white/50">Experto</p>
                                </div>
                                <CheckCircle className="h-3 w-3 text-green-500 ml-auto" />
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="h-8 w-8 rounded bg-[#339933]/20 flex items-center justify-center p-1.5">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" className="w-full h-full" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">Node.js</p>
                                    <p className="text-[10px] text-white/50">Intermedio</p>
                                </div>
                                <CheckCircle className="h-3 w-3 text-green-500 ml-auto" />
                            </div>
                            <div className="flex items-center justify-center gap-2 p-2 rounded-lg border border-white/10 border-dashed hover:bg-white/5 transition-colors cursor-pointer text-white/40 hover:text-white">
                                <Plus className="h-4 w-4" />
                                <span className="text-xs font-medium">Añadir</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Learning Recommendations */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-[#FF6B00]" />
                            Ruta de Aprendizaje
                        </h3>
                        <p className="text-white/60 text-sm mb-4">Mejora tu perfil con estas habilidades demandadas:</p>
                        <div className="space-y-3">
                            <Link href="/aprendizaje">
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#FF6B00]/30 transition-colors cursor-pointer mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <span className="font-bold text-xs">TS</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">TypeScript Avanzado</p>
                                            <p className="text-white/40 text-xs">Curso • 4h 30m</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-white/30" />
                                </div>
                            </Link>
                            <Link href="/aprendizaje">
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#FF6B00]/30 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
                                            <span className="font-bold text-xs">UX</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Diseño UX/UI</p>
                                            <p className="text-white/40 text-xs">Taller • 2h 15m</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-white/30" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* My Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20" />
                        <h3 className="text-lg font-bold text-white mb-4 relative z-10">Mi Plan</h3>

                        <div className="mb-4 relative z-10">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-white/70 text-sm">Plan Actual</span>
                                <span className="text-blue-400 font-bold text-sm">Básico</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white/70 text-sm">Postulaciones</span>
                                <span className="text-white font-bold text-sm">2/10</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full w-[20%]" />
                            </div>
                            <p className="text-xs text-white/40 mt-2">Renueva en 15 días</p>
                        </div>

                        <Link href="/planes-estudiante">
                            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none relative z-10">
                                Mejorar Plan
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Recent Applications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                    >
                        <h3 className="text-lg font-bold text-white mb-4">Postulaciones Recientes</h3>
                        <div className="space-y-4">
                            {recentApplications.map((app, index) => (
                                <div key={app.id} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-white font-medium text-sm line-clamp-1">{app.role}</h4>
                                        <span className={`text-xs font-medium ${app.statusColor} whitespace-nowrap ml-2`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <p className="text-white/50 text-xs">{app.company}</p>
                                    <p className="text-white/30 text-xs mt-1">{app.date}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/postulaciones">
                            <Button variant="link" className="w-full text-white/50 hover:text-white mt-2 text-sm">
                                Ver todas las postulaciones
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Dialog open={isOfferModalOpen} onOpenChange={setIsOfferModalOpen}>
                <DialogContent className="bg-[#1A1A1A] border-white/10 text-white max-w-2xl">
                    {selectedOffer && (
                        <>
                            <DialogHeader>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#ff9f43] flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">
                                            {selectedOffer.company.charAt(0)}
                                        </div>
                                        <div>
                                            <DialogTitle className="text-2xl font-bold mb-1">{selectedOffer.title}</DialogTitle>
                                            <DialogDescription className="text-white/70 text-base">
                                                {selectedOffer.company}
                                            </DialogDescription>
                                        </div>
                                    </div>
                                    <Badge className="bg-[#FF6B00] text-white border-none text-sm px-3 py-1">
                                        {selectedOffer.match} Match
                                    </Badge>
                                </div>
                            </DialogHeader>

                            <div className="space-y-6 py-4">
                                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                                        <MapPin className="h-4 w-4" /> {selectedOffer.location}
                                    </span>
                                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                                        <Briefcase className="h-4 w-4" /> {selectedOffer.type}
                                    </span>
                                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                                        <Clock className="h-4 w-4" /> {selectedOffer.posted}
                                    </span>
                                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full text-[#FF6B00]">
                                        <TrendingUp className="h-4 w-4" /> {selectedOffer.salary}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg">Descripción del Puesto</h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Estamos buscando un talento apasionado para unirse a nuestro equipo.
                                        Tendrás la oportunidad de trabajar en proyectos innovadores y aprender de los mejores en la industria.
                                        Buscamos a alguien proactivo, con ganas de aprender y que se adapte rápido a los cambios.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg">Requisitos Principales</h4>
                                    <ul className="list-disc list-inside text-white/70 space-y-1">
                                        <li>Estudiante de últimos ciclos de carreras afines.</li>
                                        <li>Conocimientos sólidos en las tecnologías requeridas.</li>
                                        <li>Capacidad para trabajar en equipo y comunicación efectiva.</li>
                                        <li>Inglés intermedio (deseable).</li>
                                    </ul>
                                </div>
                            </div>

                            <DialogFooter className="flex gap-3 sm:justify-end">
                                <Button variant="outline" onClick={() => setIsOfferModalOpen(false)} className="border-white/10 text-white hover:bg-white/10">
                                    Cerrar
                                </Button>
                                <Button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white">
                                    Postular Ahora
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
