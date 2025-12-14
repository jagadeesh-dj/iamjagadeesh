"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 50
        const y = (e.clientY - rect.top - rect.height / 2) / 50
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay"
    >
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float"
        style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
      />
      <div
        className="absolute bottom-32 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{
          animationDelay: "-3s",
          transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm mb-6 tracking-wide">
            {/* {new Date().getHours() < 12
              ? "Good morning"
              : new Date().getHours() < 18
                ? "Good afternoon"
                : "Good evening"} */}

              Hello
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight text-balance">
            I'm a Python developer building <span className="text-gradient">AI-powered</span> backend systems.
          </h1>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10">
            Specializing in FastAPI, Django, and Machine Learning. I create scalable solutions that transform how
            businesses operate.
          </p>
        </div>

        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 hover:gap-3"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium text-foreground hover:bg-secondary transition-all duration-300"
          >
            About Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
