import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MapPin,
  Users,
  Search,
  Filter,
  Grid,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";

import privateOfficeImg from "@/assets/private-office.jpg";
import coworkingImg from "@/assets/coworking-space.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import virtualOfficeImg from "@/assets/virtual-office.jpg";

/* ---------------- DATA ---------------- */

const allListings = [
  {
    id: 1,
    title: "Executive Private Office",
    type: "office",
    location: "Sector-63, Noida",
    price: 45000,
    priceUnit: "/month",
    capacity: "4-6",
    image: privateOfficeImg,
    amenities: ["WiFi", "24/7 Access", "Parking"],
    featured: true,
  },
  {
    id: 2,
    title: "Creative Coworking Space",
    type: "coworking",
    location: "Sector-62, Noida",
    price: 9000,
    priceUnit: "/month",
    capacity: "1",
    image: coworkingImg,
    amenities: ["WiFi", "Tea/Coffee", "Community"],
    featured: false,
  },
  {
    id: 3,
    title: "Premium Meeting Room",
    type: "meeting",
    location: "Sector-16, Noida",
    price: 2500,
    priceUnit: "/hour",
    capacity: "12-16",
    image: meetingRoomImg,
    amenities: ["Projector", "AV Support", "Whiteboard"],
    featured: false,
  },
  {
    id: 4,
    title: "Startup Private Cabin",
    type: "office",
    location: "Sector-1, Noida Extension",
    price: 28000,
    priceUnit: "/month",
    capacity: "3-4",
    image: privateOfficeImg,
    amenities: ["WiFi", "Parking", "Power Backup"],
    featured: true,
  },
  {
    id: 5,
    title: "Budget Coworking Desk",
    type: "coworking",
    location: "Techzone-4, Noida Extension",
    price: 6500,
    priceUnit: "/month",
    capacity: "1",
    image: coworkingImg,
    amenities: ["WiFi", "AC", "Housekeeping"],
    featured: false,
  },
  {
    id: 6,
    title: "Managed Office for Teams",
    type: "office",
    location: "Sector-135, Noida Expressway",
    price: 95000,
    priceUnit: "/month",
    capacity: "12-15",
    image: privateOfficeImg,
    amenities: ["Grade-A Building", "Security", "Parking"],
    featured: true,
  },
  {
    id: 7,
    title: "Enterprise Corporate Office",
    type: "office",
    location: "Sector-142, Noida Expressway",
    price: 180000,
    priceUnit: "/month",
    capacity: "25-30",
    image: privateOfficeImg,
    amenities: ["Dedicated Internet", "Reception", "Security"],
    featured: true,
  },
  {
    id: 8,
    title: "Training & Conference Hall",
    type: "meeting",
    location: "Sector-18, Noida",
    price: 3500,
    priceUnit: "/hour",
    capacity: "30-40",
    image: meetingRoomImg,
    amenities: ["Projector", "Mic System", "Refreshments"],
    featured: false,
  },
  {
    id: 9,
    title: "Virtual Office for GST & MCA",
    type: "virtual",
    location: "Sector-18, Noida",
    price: 2500,
    priceUnit: "/month",
    capacity: "N/A",
    image: virtualOfficeImg,
    amenities: ["GST Address", "Mail Handling"],
    featured: true,
  },
];


const workspaceTypes = [
  { id: "all", label: "All Types" },
  { id: "office", label: "Office Space" },
  { id: "coworking", label: "Coworking" },
  { id: "virtual", label: "Virtual Office" },
  { id: "meeting", label: "Meeting Room" },
];

/* ---------------- COMPONENT ---------------- */

const Listings = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [viewMode, setViewMode] = useState("grid");

  // 🔹 typing ke liye
  const [inputValue, setInputValue] = useState(
    searchParams.get("location") || ""
  );

  // 🔹 actual filtering ke liye
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("location") || ""
  );

  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || "all"
  );

  const [priceRange, setPriceRange] = useState([0, 3000]);

  /* ---------------- DEBOUNCE (IMPORTANT) ---------------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValue]);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredListings = useMemo(() => {
    return allListings.filter((listing) => {
      if (selectedType !== "all" && listing.type !== selectedType) return false;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !listing.title.toLowerCase().includes(q) &&
          !listing.location.toLowerCase().includes(q)
        ) {
          return false;
        }
      }

      if (listing.price < priceRange[0] || listing.price > priceRange[1])
        return false;

      return true;
    });
  }, [selectedType, searchQuery, priceRange]);

  const clearFilters = () => {
    setInputValue("");
    setSearchQuery("");
    setSelectedType("all");
    setPriceRange([0, 3000]);
    setSearchParams({});
  };

  /* ---------------- FILTER PANEL JSX ---------------- */
  const filterPanel = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-medium mb-2 block">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Location or workspace name..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Type */}
      <div>
        <label className="text-sm font-medium mb-2 block">Workspace Type</label>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {workspaceTypes.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price */}
      <div>
        <label className="text-sm font-medium mb-2 block">
          Price: ₹{priceRange[0]} – ₹{priceRange[1]}
        </label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={100000}
          step={50}
        />
      </div>

      <Button variant="outline" onClick={clearFilters} className="w-full">
        <X className="w-4 h-4 mr-2" />
        Clear Filters
      </Button>
    </div>
  );

  /* ---------------- UI ---------------- */

  return (
    <>
      <Helmet>
        <title>Browse Workspaces</title>
      </Helmet>

      <Layout>
        <section className="py-10 container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-72">{filterPanel}</aside>

            {/* Listings */}
            <div className="flex-1">
              <div className="flex justify-between mb-6">
                <p>{filteredListings.length} results</p>

                <div className="flex gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      {filterPanel}
                    </SheetContent>
                  </Sheet>

                  <button onClick={() => setViewMode("grid")}>
                    <Grid />
                  </button>
                  <button onClick={() => setViewMode("list")}>
                    <List />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredListings.map((item) => (
                  <Link key={item.id} to={`/property/${item.id}`}>
                    <div className="border rounded-xl overflow-hidden">
                      <img src={item.image} className="h-48 w-full object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </p>
                        <p className="mt-2 font-bold">
                          ₹{item.price}
                          <span className="text-sm">{item.priceUnit}</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Listings;
