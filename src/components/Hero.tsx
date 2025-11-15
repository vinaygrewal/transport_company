import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Truck size={20} />
            <span className="font-semibold">Professional Logistics Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Trusted Partner in
            <span className="block text-accent">Freight Transportation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Delivering excellence across Canada with reliable, on-time freight services. Your cargo, our commitment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white text-lg px-8 py-6 backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-primary-foreground/20">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Deliveries/Month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/80">On-Time Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
