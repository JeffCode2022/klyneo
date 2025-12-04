"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/ui/particles-background"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { peruvianUniversities } from "@/lib/placeholder-data"

export default function RegistroPage() {
  const [role, setRole] = useState<"student" | "company">("student")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    career: "",
    university: "",
    industry: "",
    website: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    // Aquí iría la lógica para enviar los datos al servidor
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 bg-[#050505] overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="font-montserrat font-bold text-3xl text-white mb-2">Crear Cuenta</h1>
              <div className="w-12 h-1 bg-[#FF6B00] mx-auto mb-4 rounded-full"></div>
              <p className="text-white/60 font-light">Únete a KLYNEO</p>
            </div>

            <div className="flex justify-center mb-8 bg-white/5 p-1 rounded-full w-fit mx-auto">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${role === "student" ? "bg-[#FF6B00] text-white shadow-lg" : "text-white/60 hover:text-white"
                  }`}
              >
                Estudiante
              </button>
              <button
                type="button"
                onClick={() => setRole("company")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${role === "company" ? "bg-[#FF6B00] text-white shadow-lg" : "text-white/60 hover:text-white"
                  }`}
              >
                Empresa
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                    {role === "student" ? "Nombre Completo" : "Nombre de la Empresa"}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                    {role === "student" ? "Correo Electrónico" : "Correo Corporativo"}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11 pr-10"
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
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                    Confirmar Contraseña
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11 pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#FF6B00] transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {role === "student" ? (
                  <>
                    <div>
                      <label htmlFor="career" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                        Carrera
                      </label>
                      <Input
                        id="career"
                        name="career"
                        value={formData.career}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                        Universidad
                      </label>
                      <Select
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, university: value }))}
                        value={formData.university}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-[#FF6B00] focus:border-[#FF6B00] rounded-lg h-11 w-full">
                          <SelectValue placeholder="Selecciona tu universidad" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-white/10 text-white max-h-[300px]">
                          {peruvianUniversities.map((uni) => (
                            <SelectItem key={uni} value={uni} className="focus:bg-white/10 focus:text-white cursor-pointer">
                              {uni}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                        Sector / Industria
                      </label>
                      <Input
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-white/80 mb-1 ml-1">
                        Sitio Web (Opcional)
                      </label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-lg h-11"
                      />
                    </div>
                  </>
                )}
              </div>

              <Button type="submit" className="w-full bg-[#FF6B00] hover:bg-[#ff8533] text-white font-bold h-12 rounded-full shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300 mt-6 md:w-1/2 md:mx-auto block">
                {role === "student" ? "Crear Cuenta de Estudiante" : "Crear Cuenta de Empresa"}
              </Button>
            </form>

            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-[#FF6B00] font-semibold hover:text-[#ff8533] hover:underline transition-colors">
                  Iniciar Sesión
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
