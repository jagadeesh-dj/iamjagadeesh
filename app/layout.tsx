import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jagadeesh D | Python Backend & AI Engineer",
  description:
    "Jagadeesh D is a Python Backend and AI Engineer specializing in FastAPI, Django, machine learning, and scalable backend systems.",
  keywords: [
    "Python Backend Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "FastAPI Developer",
    "Django Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Jagadeesh D" }],
  creator: "Jagadeesh D",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
