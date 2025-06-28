"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Building2, TrendingUp } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-12 screen bg-gradient-to-br from-blue-50 via-background to-muted dark:from-background dark:via-muted/50 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-5xl font-bold leading-tight"
              >
                Building Excellence in
                <span className="text-primary block">Construction & Real Estate</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Qualisense Technologies delivers comprehensive construction management and strategic real estate investment solutions across New Brunswick, Canada.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Consultation
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Building2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Construction Management</h3>
                  <p className="text-muted-foreground text-sm">Expert project oversight</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Real Estate Investment</h3>
                  <p className="text-muted-foreground text-sm">Strategic portfolio growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Why Choose Qualisense?</h3>
                  <div className="space-y-4">
                    {[
                      "Proven track record in New Brunswick's construction market",
                      "Comprehensive project management from concept to completion",
                      "Strategic real estate investment expertise",
                      "Technology-driven solutions for optimal results"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="bg-white/20 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero