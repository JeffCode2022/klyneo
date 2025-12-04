"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useUI } from "@/components/providers/ui-provider"

const CONFIG = {
    particleCount: 2200,
    particleSize: 3.5,
    mouseRadius: 130,
    idleThreshold: 2500,
    formSpeed: 0.04,
    textToForm: "K",
}

export function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = useState(false)
    const { isLoggedIn, openAuthModal } = useUI()

    const handleHeroAction = () => {
        if (isLoggedIn) {
            // Redirect to dashboard or show message
            window.location.href = "/dashboard"
        } else {
            openAuthModal("register")
        }
    }

    useEffect(() => {
        setIsMounted(true)
        if (!containerRef.current) return

        let scene: THREE.Scene
        let camera: THREE.PerspectiveCamera
        let renderer: THREE.WebGLRenderer
        let particles: THREE.Points
        let animationFrameId: number

        // State variables for animation
        const mouse = new THREE.Vector2(-9999, -9999)
        const raycaster = new THREE.Raycaster()
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
        let lastMouseMoveTime = Date.now()
        let isIdle = false

        // Helper functions
        const createSmokeTexture = () => {
            const canvas = document.createElement("canvas")
            canvas.width = 32
            canvas.height = 32
            const ctx = canvas.getContext("2d")
            if (!ctx) return null

            const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
            gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.5)")
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, 32, 32)
            return new THREE.CanvasTexture(canvas)
        }

        const getTextPoints = (text: string) => {
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")
            if (!ctx) return []

            const width = 450
            const height = 450
            canvas.width = width
            canvas.height = height
            ctx.fillStyle = "#FFFFFF"
            ctx.font = "bold 320px Arial"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.fillText(text, width / 2, height / 2)

            const imageData = ctx.getImageData(0, 0, width, height)
            const data = imageData.data
            const points = []
            const step = 4

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    if (data[(y * width + x) * 4 + 3] > 128) {
                        points.push({
                            x: (x - width / 2) * 1.6,
                            y: -(y - height / 2) * 1.6,
                            z: 0,
                        })
                    }
                }
            }
            return points
        }

        const init = () => {
            scene = new THREE.Scene()
            scene.fog = new THREE.FogExp2(0x050505, 0.002)

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
            camera.position.z = 400

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(window.devicePixelRatio)

            if (containerRef.current) {
                containerRef.current.innerHTML = ""
                containerRef.current.appendChild(renderer.domElement)
            }

            const sprite = createSmokeTexture()
            const kPoints = getTextPoints(CONFIG.textToForm)

            const geometry = new THREE.BufferGeometry()
            const particlePositions = new Float32Array(CONFIG.particleCount * 3)
            const targetPositions = new Float32Array(CONFIG.particleCount * 3)
            const initialPositions = new Float32Array(CONFIG.particleCount * 3)
            const randomness = new Float32Array(CONFIG.particleCount)
            const colors = new Float32Array(CONFIG.particleCount * 3)

            const palette = [
                new THREE.Color("#FF6B00"), // Naranja Klyneo
                new THREE.Color("#FF8C00"), // Naranja Oscuro
                new THREE.Color("#FFD700"), // Oro
                new THREE.Color("#FFFFFF"), // Blanco
                new THREE.Color("#FF4500"), // Rojo Naranja
            ]

            const tempColor = new THREE.Color()

            for (let i = 0; i < CONFIG.particleCount; i++) {
                const i3 = i * 3
                const x = (Math.random() - 0.5) * 900
                const y = (Math.random() - 0.5) * 700
                const z = (Math.random() - 0.5) * 400

                initialPositions[i3] = x
                initialPositions[i3 + 1] = y
                initialPositions[i3 + 2] = z

                particlePositions[i3] = x
                particlePositions[i3 + 1] = y
                particlePositions[i3 + 2] = z

                if (i < kPoints.length) {
                    targetPositions[i3] = kPoints[i].x
                    targetPositions[i3 + 1] = kPoints[i].y
                    targetPositions[i3 + 2] = kPoints[i].z
                } else {
                    const angle = Math.random() * Math.PI * 2
                    const radius = 280 + Math.random() * 120
                    targetPositions[i3] = Math.cos(angle) * radius
                    targetPositions[i3 + 1] = Math.sin(angle) * radius
                    targetPositions[i3 + 2] = (Math.random() - 0.5) * 100
                }
                randomness[i] = Math.random()

                const randomPaletteColor = palette[Math.floor(Math.random() * palette.length)]
                tempColor.copy(randomPaletteColor)
                tempColor.offsetHSL(0, 0, (Math.random() - 0.5) * 0.1)

                colors[i3] = tempColor.r
                colors[i3 + 1] = tempColor.g
                colors[i3 + 2] = tempColor.b
            }

            geometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))
            geometry.setAttribute("initialPos", new THREE.BufferAttribute(initialPositions, 3))
            geometry.setAttribute("targetPos", new THREE.BufferAttribute(targetPositions, 3))
            geometry.setAttribute("random", new THREE.BufferAttribute(randomness, 1))
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

            const material = new THREE.PointsMaterial({
                size: CONFIG.particleSize,
                map: sprite || undefined,
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            })

            particles = new THREE.Points(geometry, material)
            scene.add(particles)
        }

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            lastMouseMoveTime = Date.now()
            isIdle = false
        }

        const onTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
                mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
                lastMouseMoveTime = Date.now()
                isIdle = false
            }
        }

        const onWindowResize = () => {
            if (!camera || !renderer) return
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            const time = Date.now() * 0.001
            if (!particles) return

            const positions = particles.geometry.attributes.position.array as Float32Array
            const targets = particles.geometry.attributes.targetPos.array as Float32Array
            const initials = particles.geometry.attributes.initialPos.array as Float32Array
            const randomness = particles.geometry.attributes.random.array as Float32Array

            if (Date.now() - lastMouseMoveTime > CONFIG.idleThreshold) {
                isIdle = true
            }

            raycaster.setFromCamera(mouse, camera)
            const intersectPoint = new THREE.Vector3()
            raycaster.ray.intersectPlane(plane, intersectPoint)

            for (let i = 0; i < CONFIG.particleCount; i++) {
                const i3 = i * 3
                let px = positions[i3]
                let py = positions[i3 + 1]
                let pz = positions[i3 + 2]

                const noiseX = Math.sin(time * 0.5 + randomness[i] * 10) * 0.5
                const noiseY = Math.cos(time * 0.3 + randomness[i] * 20) * 0.5

                let targetX, targetY, targetZ

                if (isIdle) {
                    targetX = targets[i3]
                    targetY = targets[i3 + 1]
                    targetZ = targets[i3 + 2]
                } else {
                    targetX = initials[i3] + Math.sin(time + i * 0.1) * 25
                    targetY = initials[i3 + 1] + Math.cos(time + i * 0.1) * 25
                    targetZ = initials[i3 + 2]
                }

                const speed = isIdle ? CONFIG.formSpeed : 0.02
                px += (targetX - px) * speed
                py += (targetY - py) * speed
                pz += (targetZ - pz) * speed

                const dx = px - intersectPoint.x
                const dy = py - intersectPoint.y
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.mouseRadius) {
                    const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius
                    const repulsionX = dx * force * 5
                    const repulsionY = dy * force * 5
                    px += repulsionX
                    py += repulsionY
                    pz += force * 20
                }

                px += noiseX
                py += noiseY

                positions[i3] = px
                positions[i3 + 1] = py
                positions[i3 + 2] = pz
            }

            particles.geometry.attributes.position.needsUpdate = true

            if (!isIdle) {
                particles.rotation.y = Math.sin(time * 0.1) * 0.05
            } else {
                particles.rotation.y *= 0.95
            }

            renderer.render(scene, camera)
        }

        init()
        animate()

        window.addEventListener("resize", onWindowResize)
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("touchmove", onTouchMove, { passive: false })

        return () => {
            window.removeEventListener("resize", onWindowResize)
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("touchmove", onTouchMove)
            cancelAnimationFrame(animationFrameId)
            if (renderer) renderer.dispose()
            if (scene) scene.clear()
        }
    }, [])

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#050505]">
            {/* 3D Canvas Container */}
            <div ref={containerRef} className="absolute inset-0 z-0" />

            {/* UI Overlay */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center pointer-events-auto">
                <div className="hero-content text-center px-4 max-w-8xl pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-montserrat font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"
                    >
                        <span className="block whitespace-normal md:whitespace-nowrap">
                            Conectando <span className="text-[#FF6B00] italic">Talento Joven</span>
                        </span>
                        <span className="block">
                            con Grandes Oportunidades
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-montserrat font-light text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        La plataforma líder que transforma proyectos académicos en experiencias profesionales reales. Encuentra tu
                        primer empleo demostrando lo que sabes hacer.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
                    >
                        <button
                            onClick={handleHeroAction}
                            className={`
                                ${isLoggedIn ? 'bg-transparent border-2 border-[#FF6B00] hover:bg-[#FF6B00]' : 'bg-[#FF6B00] hover:bg-[#ff8533]'}
                                text-white rounded-full px-8 py-3 text-lg md:px-12 md:py-4 md:text-xl font-bold 
                                shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)]
                                hover:scale-105 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider
                            `}
                        >
                            {isLoggedIn ? "Continuar al Dashboard" : "Empezar Ahora"}
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
