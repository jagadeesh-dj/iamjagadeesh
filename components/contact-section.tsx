"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { Mail, MapPin, Linkedin, Github, Send, Loader2, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  { name: "Email", href: "mailto:iamjagadeesh.d@gmail.com", icon: Mail, label: "iamjagadeesh.d@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jagadeesh-dj/", icon: Linkedin, label: "linkedin.com/in/jagadeesh" },
  { name: "GitHub", href: "https://github.com/jagadeesh-dj", icon: Github, label: "github.com/jagadeesh" },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Something went wrong")
      }

      toast.success("Message sent successfully!")
      ;(e.target as HTMLFormElement).reset()
    } catch (error: any) {
      toast.error(`Failed to send message: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-16">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Let’s connect and discuss <span className="text-gradient"> opportunities</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Links */}
            <div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between p-5 rounded-2xl border border-border hover:border-foreground hover:bg-secondary/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-secondary group-hover:bg-foreground transition-colors">
                        <link.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{link.name}</p>
                        <p className="font-medium text-foreground">{link.label}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 mt-8 p-5 rounded-2xl bg-secondary/50">
                <div className="p-3 rounded-xl bg-card">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                  <p className="font-medium text-foreground">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className={`h-12 bg-secondary/50 border-border rounded-xl transition-all duration-300 ${
                        focusedField === "firstName" ? "border-primary ring-2 ring-primary/20" : ""
                      }`}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      className={`h-12 bg-secondary/50 border-border rounded-xl transition-all duration-300 ${
                        focusedField === "lastName" ? "border-primary ring-2 ring-primary/20" : ""
                      }`}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className={`h-12 bg-secondary/50 border-border rounded-xl transition-all duration-300 ${
                    focusedField === "email" ? "border-primary ring-2 ring-primary/20" : ""
                  }`}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                />

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`bg-secondary/50 border-border rounded-xl resize-none transition-all duration-300 ${
                    focusedField === "message" ? "border-primary ring-2 ring-primary/20" : ""
                  }`}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                />

                <Button
                  type="submit"
                  className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
