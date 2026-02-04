import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to find your perfect workspace?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Get started today with a personalized tour. Our workspace experts will help 
          you find the ideal solution for your team.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/listings">
            <Button 
              size="lg" 
              className="bg-card text-foreground hover:bg-card/90 min-w-[180px]"
            >
              Browse Listings
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10 min-w-[180px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Talk to Expert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
