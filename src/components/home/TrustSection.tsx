const TrustSection = () => {
  // Using text logos for well-known companies
  const companies = [
    { name: "Microsoft", style: "font-bold" },
    { name: "PayPal", style: "font-bold italic" },
    { name: "FedEx", style: "font-bold" },
    { name: "Samsung", style: "font-bold tracking-wider" },
    { name: "Spotify", style: "font-bold" },
    { name: "Google", style: "font-medium" },
    { name: "Uber", style: "font-bold" },
    { name: "Slack", style: "font-bold" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Trusted by the world's leading companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <div 
              key={company.name}
              className={`text-xl md:text-2xl text-muted-foreground/50 hover:text-muted-foreground transition-colors ${company.style}`}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
