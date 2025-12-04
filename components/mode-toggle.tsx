"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// Toggle de tema como checkbox animado (sun/moon)
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Evitar desajuste de hidratación
  if (!mounted) {
    return (
      <div aria-hidden className="h-7 w-[52px]" />
    )
  }

  const isDark = theme === "dark"

  return (
    <label className="relative inline-flex h-7 w-[56px] cursor-pointer items-center">
      <input
        type="checkbox"
        aria-label="Cambiar tema"
        className="peer sr-only"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      {/* Track */}
      <span
        className="absolute inset-0 rounded-full transition-colors duration-300
        bg-foreground/10 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gold
        peer-checked:bg-gold/20"
      />
      {/* Knob */}
      <span
        className="relative z-[1] ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-card text-foreground
        shadow-sm transition-all duration-300 translate-x-0 peer-checked:translate-x-7"
      >
        <Sun className="h-3.5 w-3.5 opacity-100 transition-opacity duration-200 peer-checked:opacity-0" />
        <Moon className="absolute h-3.5 w-3.5 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
      </span>
    </label>
  )
}
