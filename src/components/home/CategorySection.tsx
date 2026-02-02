import { Link } from "react-router-dom";
import { Building2, Users, Monitor, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategorySection = () => {
  const categories = [
    {
      id: "office",
      icon: Building2,
      title: "Office Space",
      description: "Private, fully-equipped offices for teams of any size. Complete with furniture, IT, and support.",
      features: ["Fully furnished", "24/7 access", "Business support"],
      color: "bg-primary/10 text-primary",
    },
    {
      id: "coworking",
      icon: Users,
      title: "Coworking",
      description: "Flexible hot desks and dedicated desks in vibrant shared workspaces with networking opportunities.",
      features: ["Community events", "Flexible terms", "Great coffee"],
      color: "bg-chart-2/10 text-chart-2",
    },
    {
      id: "virtual",
      icon: Monitor,
      title: "Virtual Offices",
      description: "Prestigious business address, mail handling, and phone answering—work from anywhere.",
      features: ["Business address", "Mail handling", "Phone answering"],
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      id: "meeting",
      icon: Calendar,
      title: "Meeting Rooms",
      description: "Professional meeting spaces by the hour or day with AV equipment and catering options.",
      features: ["Video conferencing", "Catering available", "Book by hour"],
      color: "bg-chart-4/10 text-chart-4",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Flexible Workspace Designed Around Your Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need a private office, a hot desk, or just a meeting room for an hour, 
            we have the perfect solution.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/listings?type=${category.id}`}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-xl p-6 h-full border border-border card-hover">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
