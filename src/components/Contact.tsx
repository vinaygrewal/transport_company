import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS credentials from environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate EmailJS credentials
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("EmailJS is not configured. Please check your environment variables.");
      console.error("Missing EmailJS credentials. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "Freightjetlogistics@gmail.com",
          phone: formData.phone,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      toast.success("Thank you! We'll contact you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      const errorMessage = error?.text || error?.message || "Unknown error";
      console.error("EmailJS error details:", {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });
      
      if (error?.text?.includes("recipients address is empty") || error?.status === 422) {
        toast.error("EmailJS template error: Please configure the 'To Email' field in your EmailJS template settings.");
      } else {
        toast.error(`Failed to send message: ${errorMessage}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your logistics? Contact us today for a free quote
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (647) 995-4877</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">Freightjetlogistics@gmail.com</p>
                  <p className="text-muted-foreground">Available for quotes & inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">140 Derry Rd E, Mississauga</p>
                  <p className="text-muted-foreground">ON L5T 2Y5, Canada</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your shipping needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
