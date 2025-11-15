import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import truckPhoto from "@/assets/truck-photo.jpg";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Freight Jet Logistics
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in the transportation industry, Freight Jet Logistics has established itself as a trusted partner for businesses across Canada. We pride ourselves on delivering exceptional service, reliability, and value.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our modern fleet and experienced drivers ensure that your cargo arrives safely and on time, every time. We combine cutting-edge technology with personalized service to meet the unique needs of each client.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Licensed & Insured</h4>
                  <p className="text-muted-foreground">Fully compliant with all Canadian transportation regulations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Modern Fleet</h4>
                  <p className="text-muted-foreground">Well-maintained vehicles equipped with the latest safety features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                  <p className="text-muted-foreground">Professional drivers and logistics specialists dedicated to your success</p>
                </div>
              </div>
            </div>

            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
              Partner With Us
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={truckPhoto} 
                alt="Freight Jet Logistics Truck" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
