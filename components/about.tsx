"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, Target, Users } from "lucide-react"
import Image from "next/image"

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver exceptional construction management and real estate investment solutions that exceed client expectations while contributing to community development.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "To be the premier construction and real estate company in New Brunswick, known for innovation, quality, and sustainable growth.",
      color: "green"
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Integrity, excellence, innovation, and client satisfaction drive everything we do, ensuring lasting partnerships and successful outcomes.",
      color: "purple"
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Qualisense Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the principles of quality, innovation, and excellence, we've established ourselves as a leading force in construction management and real estate investment across New Brunswick.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6"
              >
                <div className={`bg-${value.color}-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`text-${value.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-left">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h3>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <Image
                      src="/livne pic 1.png"
                      alt="Livne Gan"
                      width={192}
                      height={192}
                      className="rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Livne Gan</h4>
                  <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    With extensive experience in construction management and real estate development, Livne leads Qualisense with a vision for excellence and innovation. His strategic approach has positioned the company as a leader in New Brunswick's construction and real estate markets.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <Image
                      src="/Shahar-Pic.png"
                      alt="Shahar Bard"
                      width={192}
                      height={192}
                      className="rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Shahar Bard</h4>
                  <p className="text-primary font-semibold mb-4">COO & Technology Officer</p>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    Shahar brings a unique blend of operational excellence and technological innovation to Qualisense. His expertise in integrating cutting-edge technology with traditional construction practices ensures our projects are delivered efficiently and to the highest standards.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About