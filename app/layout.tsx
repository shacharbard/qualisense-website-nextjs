import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Qualisense Technologies - Construction Management & Real Estate Investment | New Brunswick",
  description: "Leading construction management and real estate investment company in New Brunswick, Canada. Expert project oversight, renovation management, and strategic property investments.",
  keywords: "construction management, real estate investment, New Brunswick, renovation oversight, property development, Moncton, Fredericton, Saint John",
  authors: [{ name: "Qualisense Technologies" }],
  openGraph: {
    type: "website",
    title: "Qualisense Technologies - Construction & Real Estate Excellence",
    description: "Leading construction management and real estate investment company in New Brunswick, Canada.",
    url: "https://qualisense.ca",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualisense Technologies - Construction & Real Estate Excellence",
    description: "Leading construction management and real estate investment company in New Brunswick, Canada.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}