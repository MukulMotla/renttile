import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Wifi, Coffee, ArrowRight } from "lucide-react";
import privateOfficeImg from "@/assets/private-office.jpg";
import coworkingImg from "@/assets/coworking-space.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";

const FeaturedListings = () => {
 const listings = [
  {
    id: 1,
    title: "Executive Private Office",
    type: "Private Office",
    location: "Sector-63, Noida",
    price: 45000,
    priceUnit: "/month",
    capacity: "4-6",
    image: privateOfficeImg,
    amenities: [
      "High-speed WiFi",
      "24/7 Access",
      "Dedicated Cabin",
      "Meeting Room Credits",
      "Power Backup",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Premium Private Office",
    type: "Private Office",
    location: "Sector-62, Noida",
    price: 70000,
    priceUnit: "/month",
    capacity: "8-12",
    image: privateOfficeImg,
    amenities: [
      "Reception Service",
      "High-speed WiFi",
      "24/7 Access",
      "Conference Room",
      "Parking",
    ],
    featured: false,
  },
  {
    id: 3,
    title: "Creative Coworking Space",
    type: "Coworking",
    location: "Sector-18, Noida",
    price: 8500,
    priceUnit: "/month",
    capacity: "1",
    image: coworkingImg,
    amenities: [
      "Hot Desk",
      "Free Tea & Coffee",
      "High-speed WiFi",
      "Community Events",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Dedicated Desk Coworking",
    type: "Coworking",
    location: "Sector-135, Noida",
    price: 12000,
    priceUnit: "/month",
    capacity: "1",
    image: coworkingImg,
    amenities: [
      "Dedicated Desk",
      "Locker",
      "WiFi",
      "Meeting Room Access",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Professional Meeting Room",
    type: "Meeting Room",
    location: "Sector-62, Noida",
    price: 1200,
    priceUnit: "/hour",
    capacity: "6-8",
    image: meetingRoomImg,
    amenities: [
      "LED Screen",
      "Whiteboard",
      "Video Conferencing",
      "Tea/Coffee",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Premium Boardroom",
    type: "Meeting Room",
    location: "Sector-16, Noida",
    price: 2500,
    priceUnit: "/hour",
    capacity: "12-16",
    image: meetingRoomImg,
    amenities: [
      "Video Conferencing",
      "Projector",
      "Catering Support",
      "Whiteboard",
    ],
    featured: true,
  },
];


  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Workspaces
            </h2>
            <p className="text-muted-foreground">
              Handpicked spaces in prime locations
            </p>
          </div>
          <Link to="/listings">
            <Button variant="outline">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Link
              key={listing.id}
              to={`/property/${listing.id}`}
              className="group"
            >
              <article className="bg-card rounded-xl overflow-hidden border border-border card-hover h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {listing.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary" className="absolute top-3 right-3 bg-card/90 text-foreground">
                    {listing.type}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{listing.location}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.amenities.slice(0, 2).map((amenity) => (
                      <span 
                        key={amenity}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {amenity}
                      </span>
                    ))}
                    {listing.amenities.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        +{listing.amenities.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{listing.capacity} people</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-foreground">₹{listing.price}</span>
                      <span className="text-sm text-muted-foreground">{listing.priceUnit}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
