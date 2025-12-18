"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, Sparkles, Download } from "lucide-react"

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
  highlights: [
    "Backend development",
    "AI/ML systems",
    "Automation testing",
    "REST APIs",
    "Web scraping"
  ],
  description: [
    "Developed and maintained scalable backend services using Python, Django, and FastAPI.",
    "Implemented AI/ML-powered automation tools and integrated LLM-based solutions to streamline workflows.",
    "Designed and deployed secure REST APIs and automated testing pipelines, reducing manual effort by 40%.",
    "Conducted data extraction and web scraping projects for business intelligence insights."
  ]
};

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
            <div className="lg:col-span-7 bg-card rounded-3xl p-8 lg:p-10 border border-border hover-lift">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">About</h2>
              <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-3">
                Software Engineer focused on backend development and{" "}
                <span className="text-gradient">AI-powered systems</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
                I specialize in building scalable backend services using Python, FastAPI, and Django, with hands-on
                experience deploying applications on Azure and integrating LLM-based automation to solve real-world
                business problems.            
              </p>
              <a
                href="/JAGADEESHD_RESUME.pdf"
                download
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                          bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-5 mt-5"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
            {/* Education */}
            <div className="lg:col-span-5 bg-card rounded-3xl p-8 border border-border hover-lift">
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

            {/* Experience – single featured card */}
            {/* <div className="lg:col-span-5 bg-card rounded-3xl p-8 border border-border hover-lift flex flex-col justify-between">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Experience</h3>
                </div>

                <p className="text-xs text-primary font-medium mb-2">{experience.period}</p>
                <h4 className="text-lg font-semibold text-foreground mb-1">{experience.role}</h4>
                <p className="text-sm text-muted-foreground mb-1">{experience.company}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
               
                    <ul className="list-disc list-inside mt-4 text-sm text-muted-foreground space-y-1">
                      {experience.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
              </div>
            </div> */}
          </div>

          {/* Education + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Skills */}
            <div className="lg:col-span-full bg-card rounded-3xl p-8 border border-border">
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
