"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Properties from "@/components/properties"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Properties />
      <Contact />
      <Footer />
    </motion.div>
  )
}