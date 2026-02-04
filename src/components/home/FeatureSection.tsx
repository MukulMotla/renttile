import { Globe, RefreshCw, Headphones, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Work Anywhere",
      description: "Access workspace in 100+ cities worldwide. Your membership travels with you.",
    },
    {
      icon: RefreshCw,
      title: "Flexible Terms",
      description: "No long-term commitments. Scale up or down as your needs change.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work on your schedule with round-the-clock access to your workspace.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our team is always ready to help with anything you need.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for your data and professional reception services.",
    },
    {
      icon: Zap,
      title: "Ready to Go",
      description: "Fully furnished with high-speed WiFi, printers, and all essentials.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Work wherever{" "}
              <span className="relative inline-block">
                business takes you
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 rounded-full -z-10" />
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 100+ locations, you'll always find the perfect space 
              for productive work. Whether you need a quiet corner or a collaborative 
              environment, we've got you covered.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/listings">
              <Button size="lg" className="btn-primary-glow">
                Find a Workspace
              </Button>
            </Link>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-gradient-dark rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
                <div className="text-primary-foreground/70">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
                <div className="text-primary-foreground/70">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">2K+</div>
                <div className="text-primary-foreground/70">Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-foreground/70">Satisfaction</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
              <p className="text-primary-foreground/80 mb-4">
                Join the world's largest network of flexible workspaces
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
