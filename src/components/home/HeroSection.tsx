import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Users, Monitor, Calendar, Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [activeTab, setActiveTab] = useState("office");

  const tabs = [
    { id: "office", label: "Office Space", icon: Building2 },
    { id: "coworking", label: "Coworking", icon: Users },
    { id: "virtual", label: "Virtual Offices", icon: Monitor },
    { id: "meeting", label: "Meeting Rooms", icon: Calendar },
  ];

  const handleSearch = () => {
    navigate(`/listings?type=${activeTab}&location=${location}`);
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern coworking space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <div className="mb-8 animate-slide-up">
            <p className="text-primary-foreground/80 text-sm font-medium mb-3 uppercase tracking-wider">
              Flexible Workspace Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Office space{" "}
              <span className="relative inline-block">
                your way
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary rounded-full -z-10" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Find the perfect workspace for your team. From private offices to coworking, 
              we have solutions that flex with your business.
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-card rounded-xl shadow-2xl p-4 md:p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter city or area..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button 
                onClick={handleSearch}
                size="lg" 
                className="h-12 px-8 btn-primary-glow"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
