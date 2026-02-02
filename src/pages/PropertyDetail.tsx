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
    location: "350 Fifth Avenue, Manhattan, New York",
    price: 1200,
    priceUnit: "/month",
    capacity: "1-4 people",
    size: "250 sq ft",
    images: [privateOfficeImg, coworkingImg, meetingRoomImg],
    description: `Step into your own executive private office in the heart of Manhattan. This fully-furnished space offers everything you need to focus and succeed.

Located in a prestigious building with stunning city views, you'll have 24/7 access to your dedicated workspace, along with access to meeting rooms, a business lounge, and all the support services you need.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Clock, name: "24/7 Access" },
      { icon: Coffee, name: "Kitchen & Lounge" },
      { icon: Car, name: "Parking Available" },
      { icon: Shield, name: "Enterprise Security" },
      { icon: Headphones, name: "Reception Services" },
    ],
    features: [
      "Fully furnished with premium furniture",
      "Floor-to-ceiling windows with city views",
      "Private lock and key access",
      "Personalized signage available",
      "Monthly meeting room credits included",
      "Professional cleaning included",
      "Mail and package handling",
      "IT support on-demand",
    ],
    nearbyTransport: ["Grand Central Station - 5 min walk", "Times Square - 10 min walk"],
    availableFrom: "Available immediately",
  },
  2: {
    id: 2,
    title: "Creative Coworking Hub",
    type: "Coworking",
    location: "123 Creative Lane, Brooklyn, New York",
    price: 350,
    priceUnit: "/month",
    capacity: "1 person (hot desk)",
    size: "Shared space",
    images: [coworkingImg, privateOfficeImg, meetingRoomImg],
    description: `Join our vibrant coworking community in the heart of Brooklyn. Perfect for freelancers, startups, and remote workers looking for a collaborative environment.

Enjoy flexible hot desking with access to all amenities, networking events, and a supportive community of like-minded professionals.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Clock, name: "24/7 Access" },
      { icon: Coffee, name: "Free Coffee & Snacks" },
      { icon: Users, name: "Community Events" },
      { icon: Shield, name: "Secure Access" },
      { icon: Headphones, name: "Phone Booths" },
    ],
    features: [
      "Flexible hot desk seating",
      "Access to all common areas",
      "Weekly networking events",
      "Printing and scanning included",
      "Bike storage available",
      "Pet-friendly workspace",
      "Wellness room access",
      "Discounted meeting room rates",
    ],
    nearbyTransport: ["L Train - 2 min walk", "G Train - 5 min walk"],
    availableFrom: "Available immediately",
  },
  3: {
    id: 3,
    title: "Premium Boardroom",
    type: "Meeting Room",
    location: "555 Market Street, Financial District, San Francisco",
    price: 75,
    priceUnit: "/hour",
    capacity: "12-16 people",
    size: "500 sq ft",
    images: [meetingRoomImg, privateOfficeImg, coworkingImg],
    description: `Make an impression with our premium boardroom in San Francisco's Financial District. Perfect for client presentations, board meetings, and important discussions.

Equipped with the latest video conferencing technology and a dedicated support team to ensure your meeting runs smoothly.`,
    amenities: [
      { icon: Wifi, name: "High-speed WiFi" },
      { icon: Building2, name: "Video Conferencing" },
      { icon: Coffee, name: "Catering Available" },
      { icon: Shield, name: "Private & Secure" },
      { icon: Headphones, name: "AV Support" },
      { icon: Car, name: "Validated Parking" },
    ],
    features: [
      "4K display with wireless presentation",
      "Polycom video conferencing system",
      "Whiteboard and flip charts",
      "Ergonomic executive seating",
      "Natural lighting with blackout options",
      "Catering menus available",
      "Dedicated AV technician on request",
      "Complimentary refreshments",
    ],
    nearbyTransport: ["Montgomery BART - 3 min walk", "Ferry Building - 10 min walk"],
    availableFrom: "Book by the hour",
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
                    <span className="text-3xl font-bold text-foreground">${property.price}</span>
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
                      1-800-FLEXSPACE
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      hello@flexspace.com
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
