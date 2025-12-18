"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Adhiran Infotech",
    location: "Chennai",
    period: "Nov 2024 – Present",
    type: "Full-time",
    description: [
      "Built and maintained backend services using Python, Django, and FastAPI.",
      "Integrated AI and LLM-based features to automate internal workflows.",
      "Designed secure REST APIs and improved testing processes.",
    ],
    technologies: ["Python", "FastAPI", "Azure", "LLM"],
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "HYR Global Source",
    location: "Chennai",
    period: "Jan 2024 – Mar 2024",
    type: "Internship",
    description: [
      "Worked on machine learning models for data analysis tasks.",
      "Implemented basic deep learning and neural network solutions.",
      "Assisted in building computer vision and automation pipelines.",
    ],
    technologies: ["ML Algorithms", "DL Frameworks", "Neural Networks", "Computer Vision"],
  },
  {
    id: 3,
    role: "Python Developer Intern",
    company: "Shiash Infotech",
    location: "Chennai",
    period: "Oct 2022 – Dec 2022",
    type: "Internship",
    description: [
      "Developed backend features using Python and Django.",
      "Built and maintained REST APIs for web applications.",
      "Worked with databases and backend integrations.",
    ],
    technologies: ["Django", "REST APIs", "MYSQL", "Python"],
  },
]


export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeId, setActiveId] = useState<number | null>(null)
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

  return (
    <section id="experience" ref={sectionRef} className="pb-16 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Center Timeline Line */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border transition-all duration-1000 hidden md:block ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-primary transition-all duration-[2s] ease-out ${
                isVisible ? "h-full" : "h-0"
              }`}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-0.5 bg-border transition-all duration-1000 md:hidden ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent transition-all duration-[2s] ease-out ${
                isVisible ? "h-full" : "h-0"
              }`}
            />
          </div>

          {/* Experience Cards - Zigzag */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } ${isVisible && isLeft ? "md:translate-x-0" : ""} ${isVisible && !isLeft ? "md:translate-x-0" : ""}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveId(exp.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden pl-10">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-4 top-6 w-2.5 h-2.5 rounded-full -translate-x-1/2 transition-all duration-500 z-10 ${
                        activeId === exp.id
                          ? "bg-primary scale-150 shadow-lg shadow-primary/50"
                          : "bg-foreground scale-100"
                      }`}
                    />
                    <TimelineCard exp={exp} isActive={activeId === exp.id} />
                  </div>

                  {/* Desktop Zigzag Layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                    {isLeft ? (
                      <>
                        {/* Left Card */}
                        <div className="text-right">
                          <TimelineCard exp={exp} isActive={activeId === exp.id} isLeft />
                        </div>
                        {/* Timeline Dot */}
                        <div className="relative">
                          <div
                            className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500 z-10 ${
                              activeId === exp.id
                                ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                                : "bg-card border-2 border-primary"
                            }`}
                          >
                            {activeId === exp.id && (
                              <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Timeline Dot */}
                        <div className="relative flex justify-end">
                          <div
                            className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500 z-10 ${
                              activeId === exp.id
                                ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                                : "bg-card border-2 border-primary"
                            }`}
                          >
                            {activeId === exp.id && (
                              <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                            )}
                          </div>
                        </div>
                        {/* Right Card */}
                        <div className="text-left">
                          <TimelineCard exp={exp} isActive={activeId === exp.id} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  exp,
  isActive,
  isLeft = false,
}: {
  exp: (typeof experiences)[0]
  isActive: boolean
  isLeft?: boolean
}) {
  return (
    <div
      className={`bg-card rounded-xl border p-5 transition-all duration-500 ${
        isActive
          ? "border-primary/50 shadow-xl shadow-primary/10 scale-[1.02]"
          : "border-border"
      } ${isLeft ? "md:ml-auto" : ""}`}
      style={{ maxWidth: "380px" }}
    >
      {/* Type Badge & Period */}
      <div className={`flex items-center gap-3 mb-3 `}>
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
            exp.type === "Full-time" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
          }`}
        >
          {exp.type}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {exp.period}
        </span>
      </div>

      {/* Role & Company */}
      <h3
        className={`text-lg font-bold text-foreground mb-1 transition-colors duration-300 ${
          isActive ? "text-primary" : ""
        } ${isLeft ? "md:text-left" : ""}`}
      >
        {exp.role}
      </h3>
      <p className={`text-muted-foreground text-sm mb-3 ${isLeft ? "md:text-left" : ""}`}>
        {exp.company} • {exp.location}
      </p>

      <ul className={`list-disc list-inside mt-4 mb-4 text-sm text-muted-foreground space-y-1  ${isLeft ? "md:text-left" : ""}`}>
        {exp.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>

      {/* Technologies */}
      <div className={`flex flex-wrap gap-1.5 `}>
        {exp.technologies.map((tech, i) => (
          <span
            key={tech}
            className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
              isActive ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
