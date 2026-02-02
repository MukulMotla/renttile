import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Users, 
  Globe, 
  Award, 
  Target, 
  Heart,
  ArrowRight 
} from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import coworkingImg from "@/assets/coworking-space.jpg";

const About = () => {
  const stats = [
    { value: "4,000+", label: "Locations" },
    { value: "100+", label: "Cities" },
    { value: "2M+", label: "Members" },
    { value: "30+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs. Your success is our success.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Work from anywhere with our worldwide network of premium workspaces.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "We foster connections and collaboration between our members and partners.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service.",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", initial: "SJ" },
    { name: "Michael Chen", role: "Chief Operating Officer", initial: "MC" },
    { name: "Emily Rodriguez", role: "VP of Customer Success", initial: "ER" },
    { name: "David Kim", role: "VP of Real Estate", initial: "DK" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | FlexSpace - Flexible Workspace Solutions</title>
        <meta 
          name="description" 
          content="Learn about FlexSpace's mission to provide flexible workspace solutions worldwide. 30+ years of experience, 4,000+ locations, 2M+ members." 
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="FlexSpace offices" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Empowering the Future of Work
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              For over 30 years, FlexSpace has been revolutionizing how people work. 
              We believe that the right workspace can transform businesses and lives.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FlexSpace was founded in 1989 with a simple vision: to give businesses 
                    the flexibility they need to thrive. What started as a single serviced 
                    office in downtown Manhattan has grown into the world's largest network 
                    of flexible workspaces.
                  </p>
                  <p>
                    Today, we serve millions of members across 100+ cities worldwide. From 
                    startups and freelancers to Fortune 500 companies, our diverse community 
                    shares a common belief: work should fit around life, not the other way around.
                  </p>
                  <p>
                    We're proud to lead the flexible workspace revolution, continuously 
                    innovating to meet the evolving needs of modern businesses. Whether you 
                    need a private office, a coworking desk, or a virtual business address, 
                    FlexSpace has you covered.
                  </p>
                </div>
                <Link to="/listings">
                  <Button className="mt-8 btn-primary-glow">
                    Explore Our Spaces
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={coworkingImg} 
                  alt="Our community" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                  <Building2 className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold">Since 1989</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from the spaces we create to 
                the relationships we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-card p-6 rounded-xl border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the people driving our mission to transform the way the world works.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div 
                  key={member.name}
                  className="bg-card p-6 rounded-xl border border-border text-center group card-hover"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Ready to experience the FlexSpace difference? Find your perfect workspace today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/listings">
                <Button size="lg" className="bg-card text-foreground hover:bg-card/90">
                  Browse Workspaces
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
