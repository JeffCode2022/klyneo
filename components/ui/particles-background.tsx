"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const CONFIG = {
    particleCount: 1500,
    particleSize: 3.0,
    mouseRadius: 150,
}

export function ParticlesBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        let scene: THREE.Scene
        let camera: THREE.PerspectiveCamera
        let renderer: THREE.WebGLRenderer
        let particles: THREE.Points
        let animationFrameId: number

        // State variables
        const mouse = new THREE.Vector2(-9999, -9999)
        const raycaster = new THREE.Raycaster()
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

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

            const geometry = new THREE.BufferGeometry()
            const particlePositions = new Float32Array(CONFIG.particleCount * 3)
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
                const x = (Math.random() - 0.5) * 1200
                const y = (Math.random() - 0.5) * 1000
                const z = (Math.random() - 0.5) * 600

                initialPositions[i3] = x
                initialPositions[i3 + 1] = y
                initialPositions[i3 + 2] = z

                particlePositions[i3] = x
                particlePositions[i3 + 1] = y
                particlePositions[i3 + 2] = z

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
            geometry.setAttribute("random", new THREE.BufferAttribute(randomness, 1))
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

            const material = new THREE.PointsMaterial({
                size: CONFIG.particleSize,
                map: sprite || undefined,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            })

            particles = new THREE.Points(geometry, material)
            scene.add(particles)
        }

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        const onTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
                mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
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
            const initials = particles.geometry.attributes.initialPos.array as Float32Array
            const randomness = particles.geometry.attributes.random.array as Float32Array

            raycaster.setFromCamera(mouse, camera)
            const intersectPoint = new THREE.Vector3()
            raycaster.ray.intersectPlane(plane, intersectPoint)

            for (let i = 0; i < CONFIG.particleCount; i++) {
                const i3 = i * 3
                let px = positions[i3]
                let py = positions[i3 + 1]
                let pz = positions[i3 + 2]

                // Gentle floating movement
                const noiseX = Math.sin(time * 0.3 + randomness[i] * 10) * 0.5
                const noiseY = Math.cos(time * 0.2 + randomness[i] * 20) * 0.5

                // Orbit/Wave motion
                const targetX = initials[i3] + Math.sin(time * 0.5 + i * 0.01) * 20
                const targetY = initials[i3 + 1] + Math.cos(time * 0.3 + i * 0.01) * 20
                const targetZ = initials[i3 + 2] + Math.sin(time * 0.2 + i * 0.02) * 20

                const speed = 0.02
                px += (targetX - px) * speed
                py += (targetY - py) * speed
                pz += (targetZ - pz) * speed

                // Mouse interaction
                const dx = px - intersectPoint.x
                const dy = py - intersectPoint.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < CONFIG.mouseRadius) {
                    const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius
                    const repulsionX = dx * force * 5
                    const repulsionY = dy * force * 5
                    px += repulsionX
                    py += repulsionY
                    pz += force * 10
                }

                px += noiseX
                py += noiseY

                positions[i3] = px
                positions[i3 + 1] = py
                positions[i3 + 2] = pz
            }

            particles.geometry.attributes.position.needsUpdate = true

            // Slow rotation of the entire system
            particles.rotation.y = time * 0.05

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
        <div ref={containerRef} className="absolute inset-0 z-0" />
    )
}
