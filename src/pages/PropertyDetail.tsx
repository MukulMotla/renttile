import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Users,
  Wifi,
  Coffee,
  Car,
  Clock,
  Phone,
  Mail,
  Check,
  ArrowLeft,
  Calendar,
  Building2,
  Shield,
  Headphones,
} from "lucide-react";
import privateOfficeImg from "@/assets/private-office.jpg";
import coworkingImg from "@/assets/coworking-space.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";

// Sample property data
const properties = {
  1: {
    id: 1,
    title: "Executive Private Office",
    type: "Private Office",
    location: "Sector-63, Noida",
    price: 45000,
    priceUnit: "/month",
    capacity: "4–6 people",
    size: "300 sq ft",
    images: [privateOfficeImg, coworkingImg, meetingRoomImg],
    description: `Get a fully furnished executive private office in Sector-63, Noida — ideal for startups and growing teams.

This space offers privacy, premium interiors, and 24/7 access in a prime IT hub. Perfect for businesses looking for a professional environment with modern amenities.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Clock, name: "24/7 Access" },
      { icon: Coffee, name: "Pantry Area" },
      { icon: Car, name: "Parking Available" },
      { icon: Shield, name: "Access Control Security" },
      { icon: Headphones, name: "Reception Support" },
    ],
    features: [
      "Fully furnished private cabin",
      "Dedicated air conditioning",
      "Power backup",
      "Meeting room credits included",
      "Professional housekeeping",
      "Mail & courier handling",
      "Company signage allowed",
      "High-speed internet included",
    ],
    nearbyTransport: [
      "Noida Electronic City Metro – 7 min",
      "NH-24 – 5 min drive",
    ],
    availableFrom: "Available immediately",
  },

  2: {
    id: 2,
    title: "Creative Coworking Space",
    type: "Coworking",
    location: "Sector-62, Noida",
    price: 9000,
    priceUnit: "/month",
    capacity: "1 person",
    size: "Shared workspace",
    images: [coworkingImg, privateOfficeImg, meetingRoomImg],
    description: `Work in a vibrant coworking space located in Sector-62, Noida — ideal for freelancers, remote workers, and startups.

Enjoy flexible seating, a collaborative atmosphere, and all essential business amenities at an affordable price.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Clock, name: "24/7 Access" },
      { icon: Coffee, name: "Tea & Coffee" },
      { icon: Users, name: "Community Events" },
      { icon: Shield, name: "Secure Entry" },
      { icon: Headphones, name: "Phone Booths" },
    ],
    features: [
      "Hot desk seating",
      "Meeting room access",
      "Printing & scanning",
      "Startup-friendly environment",
      "Networking opportunities",
      "Power backup",
      "Air-conditioned workspace",
      "Daily housekeeping",
    ],
    nearbyTransport: [
      "Noida Sector-62 Metro – 5 min",
      "Fortis Hospital – 3 min",
    ],
    availableFrom: "Available immediately",
  },

  3: {
    id: 3,
    title: "Premium Meeting Room",
    type: "Meeting Room",
    location: "Sector-16, Noida",
    price: 2500,
    priceUnit: "/hour",
    capacity: "12–16 people",
    size: "500 sq ft",
    images: [meetingRoomImg, privateOfficeImg, coworkingImg],
    description: `Host impactful meetings in this premium meeting room located in Sector-16, Noida.

Perfect for client meetings, board discussions, and presentations with modern AV setup and professional support.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Building2, name: "LED Screen & Projector" },
      { icon: Coffee, name: "Refreshments Available" },
      { icon: Shield, name: "Private & Secure" },
      { icon: Headphones, name: "AV Support" },
      { icon: Car, name: "Parking Available" },
    ],
    features: [
      "Large conference table",
      "Video conferencing setup",
      "Whiteboard & markers",
      "Central air conditioning",
      "Professional seating",
      "On-demand catering",
      "Reception assistance",
      "Hourly booking available",
    ],
    nearbyTransport: [
      "Noida Sector-16 Metro – 4 min",
      "Sector-18 Market – 6 min",
    ],
    availableFrom: "Book by the hour",
  },
   4: {
    id: 4,
    title: "Startup Private Cabin",
    type: "Private Office",
    location: "Sector-1, Noida Extension",
    price: 28000,
    priceUnit: "/month",
    capacity: "3–4 people",
    size: "220 sq ft",
    images: [privateOfficeImg, coworkingImg, meetingRoomImg],
    description: `A compact and affordable private office in Noida Extension, perfect for startups and small teams.

This space offers privacy with all essential amenities at a budget-friendly price.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Clock, name: "24/7 Access" },
      { icon: Car, name: "Parking Available" },
      { icon: Shield, name: "CCTV Security" },
    ],
    features: [
      "Fully furnished cabin",
      "Dedicated AC",
      "Power backup",
      "Meeting room access",
      "Startup-friendly pricing",
    ],
    nearbyTransport: [
      "Gaur City Chowk – 4 min",
      "NH-24 – 8 min",
    ],
    availableFrom: "Available immediately",
  },

  // ================== 5 ==================
  5: {
    id: 5,
    title: "Professional Coworking Desk",
    type: "Coworking",
    location: "Techzone-4, Noida Extension",
    price: 6500,
    priceUnit: "/month",
    capacity: "1 person",
    size: "Shared workspace",
    images: [coworkingImg, privateOfficeImg, meetingRoomImg],
    description: `Affordable coworking desk in Noida Extension for freelancers, students, and remote workers.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Coffee, name: "Tea & Coffee" },
      { icon: Shield, name: "Secure Entry" },
    ],
    features: [
      "Hot desk seating",
      "Air-conditioned workspace",
      "Power backup",
      "Daily housekeeping",
    ],
    nearbyTransport: [
      "Upcoming Metro Station – 6 min",
    ],
    availableFrom: "Available immediately",
  },

  // ================== 6 ==================
  6: {
    id: 6,
    title: "Small Private Office",
    type: "Private Office",
    location: "Sector-63, Noida",
    price: 45000,
    priceUnit: "/month",
    capacity: "5–6 people",
    size: "320 sq ft",
    images: [privateOfficeImg, coworkingImg, meetingRoomImg],
    description: `A ready-to-move private office in Central Noida, ideal for growing teams.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Clock, name: "24/7 Access" },
      { icon: Headphones, name: "Reception Support" },
      { icon: Shield, name: "Access Control" },
    ],
    features: [
      "Fully furnished office",
      "Meeting room credits",
      "Professional housekeeping",
      "Power backup",
    ],
    nearbyTransport: [
      "Noida Electronic City Metro – 6 min",
      "NH-24 – 4 min",
    ],
    availableFrom: "Available immediately",
  },

  // ================== 7 ==================
  7: {
    id: 7,
    title: "Managed Office for Teams",
    type: "Private Office",
    location: "Sector-135, Noida Expressway",
    price: 95000,
    priceUnit: "/month",
    capacity: "12–15 people",
    size: "750 sq ft",
    images: [privateOfficeImg, coworkingImg, meetingRoomImg],
    description: `Premium managed office in a Grade-A IT building on Noida Expressway.`,
    amenities: [
      { icon: Wifi, name: "Enterprise Internet" },
      { icon: Car, name: "Reserved Parking" },
      { icon: Building2, name: "Grade-A Building" },
      { icon: Shield, name: "24/7 Security" },
    ],
    features: [
      "Customizable layout",
      "Dedicated meeting rooms",
      "Cafeteria access",
      "IT & facility support",
    ],
    nearbyTransport: [
      "Sector-135 Metro – 5 min",
      "Expressway Entry – 2 min",
    ],
    availableFrom: "Available immediately",
  },

  // ================== 8 ==================
  8: {
    id: 8,
    title: "Enterprise Corporate Office",
    type: "Private Office",
    location: "Sector-142, Noida Expressway",
    price: 180000,
    priceUnit: "/month",
    capacity: "25–30 people",
    size: "1600 sq ft",
    images: [privateOfficeImg, coworkingImg, meetingRoomImg],
    description: `Large enterprise-grade office space for MNCs and large teams.`,
    amenities: [
      { icon: Wifi, name: "Dedicated Internet Line" },
      { icon: Building2, name: "Corporate Tower" },
      { icon: Shield, name: "24/7 Security" },
      { icon: Headphones, name: "Reception Desk" },
    ],
    features: [
      "Custom branding allowed",
      "Multiple cabins & meeting rooms",
      "Server room provision",
      "Facility management support",
    ],
    nearbyTransport: [
      "Sector-142 Metro – 3 min",
    ],
    availableFrom: "Available immediately",
  },

  // ================== 9 ==================
  9: {
    id: 9,
    title: "Training & Conference Hall",
    type: "Meeting Room",
    location: "Sector-18, Noida",
    price: 3500,
    priceUnit: "/hour",
    capacity: "30–40 people",
    size: "1200 sq ft",
    images: [meetingRoomImg, privateOfficeImg, coworkingImg],
    description: `Spacious conference hall suitable for training sessions, seminars, and corporate events.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Building2, name: "Projector & Screen" },
      { icon: Headphones, name: "Mic & Sound System" },
      { icon: Coffee, name: "Refreshments" },
    ],
    features: [
      "Flexible seating layout",
      "Central AC",
      "Reception support",
      "Hourly booking",
    ],
    nearbyTransport: [
      "Sector-18 Metro – 3 min",
      "Atta Market – 2 min",
    ],
    availableFrom: "Book by the hour",
  },

  // ================== 10 ==================
  10: {
    id: 10,
    title: "Virtual Office for GST & MCA",
    type: "Virtual Office",
    location: "Sector-18, Noida",
    price: 2500,
    priceUnit: "/month",
    capacity: "N/A",
    size: "Virtual",
    images: [privateOfficeImg],
    description: `Professional virtual office address for GST registration and company incorporation.`,
    amenities: [
      { icon: Mail, name: "Mail Handling" },
      { icon: Phone, name: "Call Handling (Optional)" },
      { icon: Shield, name: "GST & MCA Compliance" },
    ],
    features: [
      "Prime business address",
      "GST registration support",
      "Mail & courier handling",
    ],
    nearbyTransport: [
      "Sector-18 Metro – 2 min",
    ],
    availableFrom: "Available immediately",
  },
};


const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties[Number(id) as keyof typeof properties];

  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property not found</h1>
          <Link to="/listings">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Listings
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{property.title} | FlexSpace</title>
        <meta name="description" content={property.description.substring(0, 160)} />
      </Helmet>

      <Layout>
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <Link 
              to="/listings" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Listings
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <section className="bg-muted pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:row-span-2">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-64 md:h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src={property.images[1]}
                  alt={`${property.title} view 2`}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src={property.images[2]}
                  alt={`${property.title} view 3`}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <Badge className="mb-3">{property.type}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {property.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {property.capacity}
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-4">About this space</h2>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {property.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">What's included</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {property.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-foreground">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.map((amenity) => (
                        <div 
                          key={amenity.name}
                          className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                        >
                          <amenity.icon className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="mt-6">
                    <div className="bg-muted rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        <MapPin className="w-5 h-5 inline mr-2" />
                        {property.location}
                      </h3>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">Nearby Transport</h4>
                        {property.nearbyTransport.map((transport) => (
                          <p key={transport} className="text-muted-foreground text-sm">
                            • {transport}
                          </p>
                        ))}
                      </div>

                      {/* Placeholder for map */}
                      <div className="mt-6 h-64 bg-border rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Interactive map coming soon</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl border border-border p-6 shadow-lg">
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">₹{property.price}</span>
                    <span className="text-muted-foreground">{property.priceUnit}</span>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-medium text-foreground">{property.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="font-medium text-foreground">{property.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-medium text-foreground">{property.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-medium text-primary">{property.availableFrom}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button className="w-full btn-primary-glow" size="lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Tour
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Request Quote
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
                    <p className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      +91 7011520785
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      hello@rentTile.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PropertyDetail;
