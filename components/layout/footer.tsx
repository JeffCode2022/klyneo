import { Logo } from "@/components/ui/logo"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#222] py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-1 text-2xl font-black tracking-tighter mb-6">
              <span className="text-[#FF6B00]">Kly</span>
              <span className="text-white">neo</span>
            </Link>
            <p className="text-[#888] leading-relaxed mb-6">
              Conectando el futuro laboral con el talento de hoy. Tu puente hacia el éxito profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" title="Facebook" className="text-[#888] hover:text-[#FF6B00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" title="Twitter" className="text-[#888] hover:text-[#FF6B00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" title="Instagram" className="text-[#888] hover:text-[#FF6B00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn" className="text-[#888] hover:text-[#FF6B00] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-white">Plataforma</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/proyectos" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Explorar Proyectos
                </Link>
              </li>
              <li>
                <Link href="/talentos" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Buscar Talentos
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Planes para Empresas
                </Link>
              </li>
              <li>
                <Link href="/historias" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Historias de Éxito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-white">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Guía de Carreras
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Ayuda y Soporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-white">Legales</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] hover:text-[#FF6B00] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222] pt-8 text-center">
          <p className="text-sm text-[#666]">
            &copy; {new Date().getFullYear()} Klyneo Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
