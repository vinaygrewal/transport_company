import logo from "@/assets/freight-jet-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Freight Jet Logistics" className="h-12 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in freight transportation across Canada.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Freight Transportation</li>
              <li>Cross-Border Shipping</li>
              <li>Expedited Delivery</li>
              <li>Logistics Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Phone: +1 (647) 995-4877</li>
              <li>Email: Freightjetlogistics@gmail.com</li>
              <li>140 Derry Rd E, Mississauga, ON L5T 2Y5</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Freight Jet Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
