"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Properties", href: "#properties" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ]

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/Qualisense new logo copy.png"
                alt="Qualisense Technologies"
                width={112}
                height={112}
                className="object-contain"
              />
              <div>
                <h3 className="text-3xl font-bold tracking-wide">Qualisense</h3>
                <p className="text-muted-foreground text-lg font-medium tracking-wider">Technologies</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Leading construction management and real estate investment company in New Brunswick, delivering excellence through innovation and expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-muted p-3 rounded-lg hover:bg-muted/80 transition-colors duration-200"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1" />
                <div className="text-muted-foreground">
                  <p>611 Darlings Island Road</p>
                  <p>Darlings Island, NB E5N 8B4</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <span className="text-muted-foreground">+1 (506) 639-7346</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary" />
                  <span className="text-muted-foreground whitespace-nowrap">livneg@qualisense-technologies.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary" />
                  <span className="text-muted-foreground whitespace-nowrap">shacharb@qualisense-technologies.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
              Qualisense Technologies. Since 2005.
            </p>
            <p className="text-muted-foreground text-sm">
              © 2024 Qualisense Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer