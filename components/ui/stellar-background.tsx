"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function StellarBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene setup
        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 20

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        containerRef.current.appendChild(renderer.domElement)

        // Create particles
        const particleCount = 700
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)
        const sizes = new Float32Array(particleCount)

        const color1 = new THREE.Color("#FF6B00") // Orange
        const color2 = new THREE.Color("#FFFFFF") // White
        const color3 = new THREE.Color("#FFD700") // Gold

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3
            // Spread particles in a wide volume
            positions[i3] = (Math.random() - 0.5) * 100
            positions[i3 + 1] = (Math.random() - 0.5) * 100
            positions[i3 + 2] = (Math.random() - 0.5) * 50

            // Random colors from palette
            const rand = Math.random()
            let color = color2
            if (rand < 0.33) color = color1
            else if (rand < 0.66) color = color3

            colors[i3] = color.r
            colors[i3 + 1] = color.g
            colors[i3 + 2] = color.b

            sizes[i] = Math.random() * 2
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
        geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

        // Create soft particle texture
        const canvas = document.createElement("canvas")
        canvas.width = 32
        canvas.height = 32
        const ctx = canvas.getContext("2d")
        if (ctx) {
            const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
            gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)")
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.2)")
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, 32, 32)
        }
        const texture = new THREE.CanvasTexture(canvas)

        const material = new THREE.PointsMaterial({
            size: 0.5,
            map: texture,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            sizeAttenuation: true
        })

        const particles = new THREE.Points(geometry, material)
        scene.add(particles)

        // Animation loop
        let time = 0
        let animationFrameId: number

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)
            time += 0.0005

            // Rotate entire system slowly
            particles.rotation.y = time * 0.5
            particles.rotation.x = time * 0.2

            // Gentle wave movement for individual particles
            const positions = particles.geometry.attributes.position.array as Float32Array
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3
                // Add subtle floating motion
                positions[i3 + 1] += Math.sin(time * 5 + positions[i3]) * 0.01
            }
            particles.geometry.attributes.position.needsUpdate = true

            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement)
            }
            geometry.dispose()
            material.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                background: "radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)",
            }}
        />
    )
}
