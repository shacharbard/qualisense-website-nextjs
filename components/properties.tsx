"use client"

import { motion } from "framer-motion"
import { MapPin, Home, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Downtown Moncton Office Complex",
      type: "Commercial",
      location: "Moncton, NB",
      value: "$2.8M",
      roi: "+12.5%",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Prime commercial property in downtown core with high occupancy rates."
    },
    {
      id: 2,
      title: "Fredericton Residential Portfolio",
      type: "Residential",
      location: "Fredericton, NB",
      value: "$1.9M",
      roi: "+8.3%",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Collection of premium residential properties in desirable neighborhoods."
    },
    {
      id: 3,
      title: "Saint John Industrial Park",
      type: "Industrial",
      location: "Saint John, NB",
      value: "$3.2M",
      roi: "+15.2%",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Strategic industrial properties with excellent transportation access."
    },
    {
      id: 4,
      title: "Bathurst Mixed-Use Development",
      type: "Mixed-Use",
      location: "Bathurst, NB",
      value: "$1.5M",
      roi: "+10.7%",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Innovative mixed-use development combining retail and residential spaces."
    }
  ]

  const stats = [
    {
      icon: Home,
      value: "25+",
      label: "Properties Owned",
      color: "blue"
    },
    {
      icon: DollarSign,
      value: "$12M+",
      label: "Portfolio Value",
      color: "green"
    },
    {
      icon: TrendingUp,
      value: "11.2%",
      label: "Average ROI",
      color: "purple"
    },
    {
      icon: MapPin,
      value: "8",
      label: "NB Locations",
      color: "orange"
    }
  ]

  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Real Estate Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our strategic real estate investments across New Brunswick, demonstrating our commitment to sustainable growth and market leadership.
          </p>
        </motion.div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full bg-${stat.color}-500/10 flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`text-${stat.color}-600`} size={32} />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Properties */}
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={600}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{property.type}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{property.roi}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{property.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin size={16} className="mr-2" />
                    {property.location}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{property.description}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Property Value</span>
                      <div className="text-2xl font-bold">{property.value}</div>
                    </div>
                    <Button>View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Investment Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">Our Investment Approach</h3>
                <p className="text-xl mb-8 opacity-90">
                  We focus on strategic acquisitions in high-growth areas across New Brunswick, leveraging our construction expertise to add value through improvements and optimal property management.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Strategic</div>
                    <div className="opacity-90">Location Selection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Value-Add</div>
                    <div className="opacity-90">Improvements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Long-term</div>
                    <div className="opacity-90">Growth Focus</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Properties