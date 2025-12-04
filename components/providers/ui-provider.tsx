"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthModal } from "@/components/auth/auth-modal"

interface UIContextType {
    openAuthModal: (tab: "login" | "register") => void
    closeAuthModal: () => void
    isLoggedIn: boolean
    login: (email: string, role?: "student" | "company") => void
    logout: () => void
    userType: "none" | "student" | "company"
    userName: string
    userEmail: string
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [authModalTab, setAuthModalTab] = useState<"login" | "register">("login")
    const [userType, setUserType] = useState<"none" | "student" | "company">("none")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const router = useRouter()

    // Load state from localStorage on mount
    useEffect(() => {
        const storedUserType = localStorage.getItem("klyneo_userType") as "none" | "student" | "company"
        const storedUserName = localStorage.getItem("klyneo_userName")
        const storedUserEmail = localStorage.getItem("klyneo_userEmail")

        if (storedUserType && storedUserType !== "none") {
            setUserType(storedUserType)
            if (storedUserName) setUserName(storedUserName)
            if (storedUserEmail) setUserEmail(storedUserEmail)
        }
    }, [])

    const openAuthModal = (tab: "login" | "register") => {
        setAuthModalTab(tab)
        setIsAuthModalOpen(true)
    }

    const closeAuthModal = () => {
        setIsAuthModalOpen(false)
    }

    const login = (email: string, role?: "student" | "company") => {
        const normalizedEmail = email.toLowerCase().trim()
        console.log("LOGIN DEBUG:", { email, normalizedEmail, role })

        let newUserType: "student" | "company" = "student"
        let newUserName = "Juan Pérez"
        let newUserEmail = email || "estudiante@klyneo.com"

        // Simple mock logic for demo purposes
        if (normalizedEmail.includes("empresa") || role === "company") {
            newUserType = "company"
            newUserName = "TechPeru Solutions"
            newUserEmail = email || "empresa@klyneo.com"
        }

        setUserType(newUserType)
        setUserName(newUserName)
        setUserEmail(newUserEmail)

        // Save to localStorage
        localStorage.setItem("klyneo_userType", newUserType)
        localStorage.setItem("klyneo_userName", newUserName)
        localStorage.setItem("klyneo_userEmail", newUserEmail)

        closeAuthModal()
        router.push("/dashboard")
    }

    const logout = () => {
        setUserType("none")
        setUserName("")
        setUserEmail("")

        // Clear localStorage
        localStorage.removeItem("klyneo_userType")
        localStorage.removeItem("klyneo_userName")
        localStorage.removeItem("klyneo_userEmail")

        router.push("/")
    }

    return (
        <UIContext.Provider
            value={{
                openAuthModal,
                closeAuthModal,
                isLoggedIn: userType !== "none",
                login,
                logout,
                userType,
                userName,
                userEmail,
            }}
        >
            {children}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={closeAuthModal}
                defaultTab={authModalTab}
                onLogin={(email, role) => login(email, role)}
            />
        </UIContext.Provider>
    )
}

export function useUI() {
    const context = useContext(UIContext)
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider")
    }
    return context
}
