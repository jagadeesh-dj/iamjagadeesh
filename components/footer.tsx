import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold text-foreground mb-2">Jagadeesh D</h3>
            <p className="text-muted-foreground mb-6">
              Python Developer crafting AI-powered backend systems and scalable solutions.
            </p>
            <a
              href="mailto:iamjagadeesh.d@gmail.com"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
            >
              iamjagadeesh.d@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Navigation</h4>
            <nav className="space-y-3">
              {["About","Experience", "Projects","Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/jagadeesh-dj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-foreground text-foreground hover:text-background transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/jagadeesh-dj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-foreground text-foreground hover:text-background transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:iamjagadeesh.d@gmail.com"
                className="p-3 rounded-xl bg-secondary hover:bg-foreground text-foreground hover:text-background transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Jagadeesh D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
