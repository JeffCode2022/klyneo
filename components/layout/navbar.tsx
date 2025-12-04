"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Upload, LogIn, UserCircle, Briefcase, Building, LogOut, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useUI } from "@/components/providers/ui-provider"

export default function Navbar() {
  const pathname = usePathname()
  const { openAuthModal, userType, logout, userName } = useUI()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-[1000] w-full transition-all duration-300 border-b font-montserrat",
        scrolled
          ? "bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] border-[rgba(255,255,255,0.1)] py-4"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href={userType !== "none" ? "/dashboard" : "/"} className="flex items-center gap-1 text-2xl font-extrabold tracking-tighter">
            <span className="text-[#FF6B00]">Kly</span>
            <span className="text-white">neo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {userType === "student" && (
              <>
                <Link
                  href="/proyectos"
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-[#FF6B00] relative group",
                    isActive("/proyectos") ? "text-[#FF6B00]" : "text-white/90",
                  )}
                >
                  Explorar Proyectos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/ofertas"
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-[#FF6B00] relative group",
                    isActive("/ofertas") ? "text-[#FF6B00]" : "text-white/90",
                  )}
                >
                  Explorar Ofertas
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </>
            )}

            {userType === "company" && (
              <>
                <Link
                  href="/proyectos"
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-[#FF6B00] relative group",
                    isActive("/proyectos") ? "text-[#FF6B00]" : "text-white/90",
                  )}
                >
                  Explorar Talentos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/publicar-oferta"
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-[#FF6B00] relative group",
                    isActive("/publicar-oferta") ? "text-[#FF6B00]" : "text-white/90",
                  )}
                >
                  Publicar Oferta
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </>
            )}



            {userType === "none" ? (
              <div className="flex items-center gap-4 ml-4">
                <button
                  onClick={() => openAuthModal("login")}
                  className="font-semibold text-white hover:text-[#FF6B00] transition-colors"
                >
                  Ingresar
                </button>
                <button
                  onClick={() => openAuthModal("register")}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.4)] hover:bg-[#ff8533] hover:-translate-y-0.5 transition-all uppercase tracking-wide border-none cursor-pointer"
                >
                  Registrarse
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4 ml-4">
                {userType === "student" && (
                  <Link
                    href="/subir-proyecto"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[#FF6B00] relative group hidden lg:flex",
                      isActive("/subir-proyecto") ? "text-[#FF6B00]" : "text-white/80",
                    )}
                  >
                    <Upload className="mr-1 h-4 w-4 inline" />
                    Subir Proyecto
                  </Link>
                )}

                <Link href="/dashboard" className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] px-5 py-2 rounded-full border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] hover:border-[#FF6B00] transition-all">
                  <UserCircle className="h-5 w-5" />
                  <span className="text-sm font-medium text-white">Dashboard</span>
                </Link>

                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] rounded-full bg-gradient-to-tr from-[#FF6B00] to-[#ff9f43] flex items-center justify-center font-bold text-sm text-white">
                    {userName ? userName.slice(0, 2).toUpperCase() : "?"}
                  </div>
                  <span className="text-white text-sm font-medium hidden lg:block">{userName || "Usuario"}</span>
                </div>

                <button onClick={logout} className="text-[#666] hover:text-white transition-colors" title="Salir">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-4 border-t border-white/10 mt-4 overflow-hidden bg-[#050505]/95 backdrop-blur-xl rounded-b-xl px-4"
            >
              {userType !== "none" && (
                <>
                  <Link
                    href="/proyectos"
                    className={cn(
                      "flex items-center py-2 text-base font-semibold transition-colors hover:text-[#FF6B00]",
                      isActive("/proyectos") ? "text-[#FF6B00]" : "text-white/90",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Explorar Proyectos
                  </Link>
                  <Link
                    href="/ofertas"
                    className={cn(
                      "flex items-center py-2 text-base font-semibold transition-colors hover:text-[#FF6B00]",
                      isActive("/ofertas") ? "text-[#FF6B00]" : "text-white/90",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Explorar Ofertas
                  </Link>
                </>
              )}

              {userType === "none" ? (
                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={() => { openAuthModal("login"); setIsMenuOpen(false); }}
                    className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 transition-all uppercase tracking-wide"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { openAuthModal("register"); setIsMenuOpen(false); }}
                    className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.4)] hover:bg-[#ff8533] transition-all uppercase tracking-wide"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <Link href="/dashboard" className="flex items-center gap-2 text-white" onClick={() => setIsMenuOpen(false)}>
                    <UserCircle className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <button
                    className="flex items-center gap-2 text-white/70 hover:text-[#FF6B00]"
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                  >
                    <LogOut className="h-5 w-5" />
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div >
    </header >
  )
}
