"use client"

import { motion } from "framer-motion"
import { Building, Wrench, TrendingUp, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construction Management",
      description: "Comprehensive project oversight from planning to completion",
      features: [
        "Project planning and scheduling",
        "Quality control and assurance",
        "Budget management and cost control",
        "Contractor coordination",
        "Safety compliance and monitoring"
      ],
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Renovation Oversight",
      description: "Expert management of renovation and restoration projects",
      features: [
        "Renovation planning and design",
        "Permit acquisition and compliance",
        "Skilled trades coordination",
        "Timeline and budget optimization",
        "Quality inspection and approval"
      ],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Real Estate Investment",
      description: "Strategic property investment and portfolio management",
      features: [
        "Market analysis and research",
        "Property acquisition strategies",
        "Portfolio optimization",
        "Investment risk assessment",
        "Property management services"
      ],
      color: "purple"
    }
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive solutions across construction management, renovation oversight, and real estate investment to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className={`bg-${service.color}-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className={`text-${service.color}-600`} size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`text-${service.color}-600 mt-0.5 flex-shrink-0`} size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services