import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Building2,
  Users,
  Monitor,
  Calendar,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri, 8am-6pm ",
      value: "7011520785",
      href: "tel:+91 7011520785",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We reply within 24 hours",
      value: "hello@renttile.com",
      href: "mailto:hello@renttile.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available 24/7",
      value: "Start a chat",
      href: "#",
    },
  ];

  const officeLocations = [
    { city: "Noida", address: "Sector-10 A-30 " },
    { city: "Noida", address: "Sector-63 B-20 Ground Floor" },
    // { city: "London", address: "1 Canada Square, Canary Wharf" },
    // { city: "Singapore", address: "1 Raffles Place, Tower 2" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | RentTile - Get in Touch</title>
        <meta 
          name="description" 
          content="Get in touch with RentTile. We're here to help you find the perfect workspace solution. Contact us by phone, email, or visit one of our offices." 
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our workspaces? Our team is here to help you 
              find the perfect solution for your business.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {method.description}
                    </p>
                    <p className="font-medium text-primary">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in *</Label>
                    <Select 
                      value={formData.interest} 
                      onValueChange={(value) => handleChange("interest", value)}
                    >
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select a workspace type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">
                          <span className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Private Office
                          </span>
                        </SelectItem>
                        <SelectItem value="coworking">
                          <span className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Coworking
                          </span>
                        </SelectItem>
                        <SelectItem value="virtual">
                          <span className="flex items-center gap-2">
                            <Monitor className="w-4 h-4" />
                            Virtual Office
                          </span>
                        </SelectItem>
                        <SelectItem value="meeting">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Meeting Rooms
                          </span>
                        </SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your workspace needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-primary-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Locations & Info */}
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * 24/7 access available for members
                  </p>
                </div>

                {/* Global Offices */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Global Offices
                  </h3>
                  <div className="space-y-4">
                    {officeLocations.map((location) => (
                      <div key={location.city} className="border-b border-border pb-3 last:border-0 last:pb-0">
                        <h4 className="font-medium text-foreground">{location.city}</h4>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ CTA */}
                <div className="bg-gradient-dark rounded-xl p-6 text-primary-foreground">
                  <h3 className="text-lg font-semibold mb-2">
                    Looking for answers?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Check out our frequently asked questions for quick answers to common queries.
                  </p>
                  <Button variant="outline" className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10">
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
