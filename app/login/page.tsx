"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { useUI } from "@/components/providers/ui-provider"

export default function LoginPage() {
  const { login } = useUI()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    login(formData.email)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 bg-[#050505] overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 mx-auto max-w-md px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="font-montserrat font-bold text-3xl text-white mb-2">Iniciar Sesión</h1>
              <div className="w-12 h-1 bg-[#FF6B00] mx-auto mb-4 rounded-full"></div>
              <p className="text-white/60 font-light">Bienvenido de nuevo a KLYNEO</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                  Correo Electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-12"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                  Contraseña
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-12 pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#FF6B00] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex justify-end mt-2">
                  <Link href="/recuperar-password" className="text-xs text-[#FF6B00] hover:text-[#ff8533] hover:underline transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#FF6B00] hover:bg-[#ff8533] text-white font-bold h-12 rounded-full shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300">
                Iniciar Sesión
              </Button>
            </form>

            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm">
                ¿No tienes una cuenta?{" "}
                <Link href="/registro" className="text-[#FF6B00] font-semibold hover:text-[#ff8533] hover:underline transition-colors">
                  Registrarse
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
