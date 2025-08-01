"use client"

import { useEffect, useRef } from "react"

interface Ripple {
  x: number
  y: number
  size: number
  opacity: number
  id: number
}

export default function RippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripplesRef = useRef<Ripple[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        size: 0,
        opacity: 0.3,
        id: Date.now() + Math.random(),
      }

      ripplesRef.current = [...ripplesRef.current.slice(-5), newRipple]
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update ripples
      ripplesRef.current = ripplesRef.current
        .map((ripple) => ({
          ...ripple,
          size: ripple.size + 2,
          opacity: Math.max(0, ripple.opacity - 0.005),
        }))
        .filter((ripple) => ripple.opacity > 0)

      // Draw ripples
      ripplesRef.current.forEach((ripple) => {
        if (ripple.opacity > 0) {
          const gradient = ctx.createRadialGradient(ripple.x, ripple.y, 0, ripple.x, ripple.y, ripple.size)

          gradient.addColorStop(0, `rgba(147, 51, 234, ${ripple.opacity})`)
          gradient.addColorStop(0.5, `rgba(59, 130, 246, ${ripple.opacity * 0.5})`)
          gradient.addColorStop(1, `rgba(147, 51, 234, 0)`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ mixBlendMode: "screen" }} />
  )
}
