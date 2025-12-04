"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
    defaultTab?: "login" | "register"
    onLogin: (email: string, role?: "student" | "company") => void
}

export function AuthModal({ isOpen, onClose, defaultTab = "login", onLogin }: AuthModalProps) {
    const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState<"student" | "company">("student")

    useEffect(() => {
        if (isOpen) {
            setActiveTab(defaultTab)
            setEmail("")
            setPassword("")
            setRole("student")
        }
    }, [isOpen, defaultTab])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (activeTab === "register") {
            onLogin(email, role)
        } else {
            onLogin(email)
        }
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-[5px]"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-[450px] bg-[rgba(20,20,20,0.85)] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] m-4"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 text-[#b3b3b3] hover:text-[#FF6B00] transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Tabs */}
                        <div className="flex border-b border-[rgba(255,255,255,0.1)] mb-8">
                            <button
                                onClick={() => setActiveTab("login")}
                                className={`flex-1 pb-4 text-base font-semibold transition-all relative ${activeTab === "login" ? "text-white" : "text-[#b3b3b3]"
                                    }`}
                            >
                                Iniciar Sesión
                                {activeTab === "login" && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B00]"
                                    />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab("register")}
                                className={`flex-1 pb-4 text-base font-semibold transition-all relative ${activeTab === "register" ? "text-white" : "text-[#b3b3b3]"
                                    }`}
                            >
                                Registrarse
                                {activeTab === "register" && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B00]"
                                    />
                                )}
                            </button>
                        </div>

                        {/* Forms */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {activeTab === "login" ? (
                                    <motion.form
                                        key="login"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5"
                                    >
                                        <div className="space-y-2">
                                            <label className="block text-sm text-[#b3b3b3]">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                placeholder="tu@email.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full p-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white outline-none focus:border-[#FF6B00] focus:bg-[rgba(255,255,255,0.08)] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm text-[#b3b3b3]">Contraseña</label>
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full p-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white outline-none focus:border-[#FF6B00] focus:bg-[rgba(255,255,255,0.08)] transition-all"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full p-3.5 mt-2 bg-[#FF6B00] text-white rounded-lg font-bold hover:bg-[#ff8533] hover:-translate-y-[2px] transition-all shadow-lg"
                                        >
                                            Ingresar
                                        </button>
                                        <div className="text-center text-sm text-[#b3b3b3] mt-2">
                                            ¿No tienes cuenta?{" "}
                                            <span
                                                onClick={() => setActiveTab("register")}
                                                className="text-[#FF6B00] font-semibold cursor-pointer hover:underline"
                                            >
                                                Regístrate gratis
                                            </span>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.form
                                        key="register"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5"
                                    >
                                        <div className="space-y-2">
                                            <label className="block text-sm text-[#b3b3b3]">Nombre Completo</label>
                                            <input
                                                type="text"
                                                placeholder="Ej. Juan Pérez"
                                                required
                                                className="w-full p-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white outline-none focus:border-[#FF6B00] focus:bg-[rgba(255,255,255,0.08)] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm text-[#b3b3b3]">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                placeholder="tu@email.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full p-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white outline-none focus:border-[#FF6B00] focus:bg-[rgba(255,255,255,0.08)] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm text-[#b3b3b3]">Contraseña</label>
                                            <input
                                                type="password"
                                                placeholder="Crea una contraseña segura"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full p-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white outline-none focus:border-[#FF6B00] focus:bg-[rgba(255,255,255,0.08)] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm text-[#b3b3b3]">Perfil</label>
                                            <select
                                                value={role}
                                                onChange={(e) => setRole(e.target.value as "student" | "company")}
                                                className="w-full p-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#b3b3b3] outline-none focus:border-[#FF6B00] focus:bg-[rgba(255,255,255,0.08)] transition-all"
                                            >
                                                <option value="student" className="bg-[#141414]">Soy Estudiante</option>
                                                <option value="company" className="bg-[#141414]">Soy Empresa</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full p-3.5 mt-2 bg-[#FF6B00] text-white rounded-lg font-bold hover:bg-[#ff8533] hover:-translate-y-[2px] transition-all shadow-lg"
                                        >
                                            Crear Cuenta
                                        </button>
                                        <div className="text-center text-sm text-[#b3b3b3] mt-2">
                                            ¿Ya tienes cuenta?{" "}
                                            <span
                                                onClick={() => setActiveTab("login")}
                                                className="text-[#FF6B00] font-semibold cursor-pointer hover:underline"
                                            >
                                                Inicia sesión
                                            </span>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
