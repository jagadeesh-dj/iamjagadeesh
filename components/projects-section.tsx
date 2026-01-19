"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "HRMS System",
    category: "Backend / AI",
    description:
      "HR management platform that handles payroll processing, attendance tracking, leave management, and reporting. Features an AI-powered LLM assistant to answer HR queries, automate workflows, and improve internal efficiency across departments.",
    technologies: ["Flask", "FastAPI", "Celery", "Redis", "MySQL"],
    link: "https://github.com/jagadeesh-dj/HRMS",
  },
  {
    id: 2,
    title: "OCR System",
    category: "Computer Vision / AI",
    description:
      "OCR system that detects and recognizes text from images and documents using CRAFT for text detection and CRNN with CTC Loss for text recognition. Supports multi-language documents, structured text extraction, and outputs results for further analysis or processing.",
    technologies: ["Streamlit", "FastAPI", "CRNN", "CRAFT", "ONNX Runtime", "Python", "OpenCV", "Tesseract"],
    link: "https://github.com/jagadeesh-dj/OCR-System",
  },
  {
    id: 3,
    title: "Multimodal RAG Assistant",
    category: "AI / LLM / Retrieval",
    description:
      "Multimodal Retrieval-Augmented Generation system that processes text, tables, charts, and diagrams. Uses IBM Docling and Visual Language Models to retrieve relevant information and answer complex questions across documents, enabling intelligent document understanding and knowledge extraction.",
    technologies: ["LangChain", "RAG", "Docling", "Visual Language Models", "Python", "MongoDB", "OpenAI LLMs"],
    link: "https://github.com/jagadeesh-dj/VisionRAG  ",
  }
];




export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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
    <section id="projects" ref={sectionRef} className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-gradient">Projects</span>
          </h2> */}
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">Projects</p>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Things I've built with passion and purpose.</p>
        </div>

        {/* Top Border Line */}
        <div className={`h-px bg-border mb-2 transition-all duration-1000 ${isVisible ? "w-full" : "w-0"}`} />

        {/* Projects List */}
        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <div
              key={project.id}
              // href={project.link}
              className={`group flex items-center justify-between py-8 transition-all duration-700  ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex-1">
                {/* Number and Category */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-muted-foreground font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-300 ${
                    hoveredId === project.id ? "translate-x-2" : ""
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description - shows on hover */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredId === project.id ? "max-h-55 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow Button */}
              <a
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-6 ${
                  hoveredId === project.id
                    ? "bg-foreground border-foreground rotate-0"
                    : "bg-transparent border-border -rotate-45"
                }`}
                href={project.link}

              >
                <ArrowUpRight
                  className={`w-5 h-5 transition-colors duration-300 ${
                    hoveredId === project.id ? "text-background" : "text-foreground"
                  }`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
