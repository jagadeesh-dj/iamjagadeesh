"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, Sparkles } from "lucide-react"

const skills = [
  "Python",
  "FastAPI",
  "Django",
  "Flask",
  "REST APIs",
  "JWT",
  "OAuth",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "NLP",
  "Computer Vision",
  "LLM Integration",
  "MySQL",
  "MS SQL",
  "Azure",
  "Docker",
  "Git",
  "Pytest",
  "Selenium",
]

const experience = {
  role: "Software Engineer",
  company: "Adhiran Infotech",
  period: "Nov 2024 – Present",
  highlights: ["Backend development", "AI/ML systems", "Automation testing", "REST APIs", "Web scraping"]
  
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Top: About + Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* About */}
            <div className="lg:col-span-8 bg-card rounded-3xl p-8 lg:p-10 border border-border hover-lift">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">About</h2>
              <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
                Software Engineer focused on backend development and{" "}
                <span className="text-gradient">AI-powered systems</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                I specialize in building scalable backend services using Python, FastAPI, and Django, with hands-on
                experience deploying applications on Azure and integrating LLM-based automation to solve real-world
                business problems.
              </p>
            </div>

            {/* Experience – single featured card */}
            <div className="lg:col-span-4 bg-card rounded-3xl p-8 border border-border hover-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Experience</h3>
                </div>

                <p className="text-xs text-primary font-medium mb-2">{experience.period}</p>
                <h4 className="text-lg font-semibold text-foreground mb-1">{experience.role}</h4>
                <p className="text-sm text-muted-foreground mb-4">{experience.company}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {experience.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Education */}
            <div className="lg:col-span-4 bg-card rounded-3xl p-8 border border-border hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Education</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs text-primary font-medium mb-1">2022–2024</p>
                  <p className="font-medium text-foreground">M.Sc Data Science & Business Analytics</p>
                  <p className="text-sm text-muted-foreground">VISTAS</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-primary font-medium mb-1">2019–2022</p>
                  <p className="font-medium text-foreground">Bachelor of Computer Application</p>
                  <p className="text-sm text-muted-foreground">S.I.V.E.T</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="lg:col-span-8 bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-accent/10">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Technical Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <button
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSkill === index
                        ? "bg-foreground text-background scale-105"
                        : "bg-secondary text-foreground hover:bg-foreground hover:text-background"
                    }`}
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
