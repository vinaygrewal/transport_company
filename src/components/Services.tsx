import { Card, CardContent } from "@/components/ui/card";
import { Package, MapPin, Clock, Shield, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Freight Transportation",
    description: "Full truckload (FTL) and less-than-truckload (LTL) shipping solutions across Canada.",
  },
  {
    icon: MapPin,
    title: "Cross-Border Shipping",
    description: "Seamless transportation services between Canada and the United States with customs expertise.",
  },
  {
    icon: Clock,
    title: "Expedited Delivery",
    description: "Fast-track shipping options for time-sensitive freight with guaranteed delivery times.",
  },
  {
    icon: Shield,
    title: "Secure Transportation",
    description: "Advanced tracking systems and secure handling for your valuable cargo.",
  },
  {
    icon: TrendingUp,
    title: "Logistics Management",
    description: "Comprehensive supply chain solutions and route optimization for maximum efficiency.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 customer service and real-time updates on your shipments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
