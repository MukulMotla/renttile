import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Building2, 
  Users, 
  Monitor, 
  Calendar,
  ChevronDown 
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Office Space", href: "/listings?type=office", icon: Building2 },
    { name: "Coworking", href: "/listings?type=coworking", icon: Users },
    { name: "Virtual Offices", href: "/listings?type=virtual", icon: Monitor },
    { name: "Meeting Rooms", href: "/listings?type=meeting", icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RentTile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Workspaces
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-card">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <item.icon className="w-5 h-5 text-primary" />
                              <span className="font-medium text-foreground">{item.name}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/listings" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Browse Listings
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Phone CTA */}
            <a 
              href="tel:+91 7011520785" 
              className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7011520785</span>
            </a>

            {/* Contact Button */}
            <Button className="hidden sm:flex btn-primary-glow">
              Get a Quote
            </Button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="py-4 border-t border-border animate-fade-in">
            <div className="flex gap-2 max-w-2xl mx-auto">
              <Input 
                placeholder="Search by city or workspace type..." 
                className="flex-1"
              />
              <Button>Search</Button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{item.name}</span>
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3 space-y-2">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <Button className="w-full mt-4">Get a Quote</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
