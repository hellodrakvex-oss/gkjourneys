import type { Metadata } from "next";
import { DestinationSections } from "./DestinationSections";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Destinations | GK Journeys",
  description: "Explore our handpicked travel destinations across Kerala, Karnataka, Tamil Nadu, Goa, and North India. Personalized travel planning by GK Journeys, Mysore.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Destinations | GK Journeys",
    description: "Explore our handpicked travel destinations across Kerala, Karnataka, Tamil Nadu, Goa, and North India.",
    url: "/destinations",
  }
};

const destinations = [
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    description:
      "Kerala is a tropical paradise of backwater canals, lush hill stations, Ayurveda retreats, and pristine beaches. From the tea gardens of Munnar to the serene houseboat experiences of Alleppey — Kerala is a journey into nature and soul.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    places: [
      { name: "Munnar", desc: "Rolling tea gardens, mist and cool mountain air" },
      { name: "Alleppey", desc: "Iconic houseboat stays on tranquil backwaters" },
      { name: "Kochi", desc: "Cultural city, fort area, Chinese fishing nets" },
      { name: "Thekkady", desc: "Wildlife sanctuary and spice plantation tours" },
      { name: "Varkala", desc: "Clifftop beach with stunning sea views" },
      { name: "Wayanad", desc: "Tribal culture, waterfalls, and misty forests" },
    ],
    highlights: ["Houseboat Stays", "Ayurveda Retreats", "Tea Garden Visits", "Wildlife Safaris", "Beach Holidays"],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    tagline: "Land of Heritage & Nature",
    description:
      "Karnataka is a rich tapestry of ancient temples, royal palaces, pristine beaches, and wildlife sanctuaries. From the heritage city of Mysore to the misty hills of Chikmagalur — Karnataka offers something for every kind of traveler.",
    image: "https://plus.unsplash.com/premium_photo-1697730494992-7d5a0c46ea52?q=80&w=2000&auto=format&fit=crop",
    places: [
      { name: "Mysore", desc: "Royal palaces, silk markets, and Dasara festival" },
      { name: "Coorg", desc: "Coffee plantations, waterfalls, and misty hills" },
      { name: "Chikmagalur", desc: "Trekking, coffee estates, and Baba Budangiri" },
      { name: "Hampi", desc: "UNESCO World Heritage ruins of the Vijayanagara Empire" },
      { name: "Belur & Halebidu", desc: "Stunning Hoysala temple architecture" },
      { name: "Jog Falls", desc: "India's highest plunge waterfall" },
      { name: "Gokarna", desc: "Pristine beaches and sacred temples" },
      { name: "Murudeshwar", desc: "Tallest Shiva statue and beachside temple" },
      { name: "Dandeli", desc: "River rafting, jungle camps, and wildlife" },
      { name: "Bandipur National Park", desc: "Tiger reserve and wildlife safaris" },
    ],
    highlights: ["Heritage Tours", "Wildlife Safaris", "Beach Getaways", "Coffee Estate Stays", "Trekking Adventures"],
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    tagline: "The Dravidian Soul of India",
    description:
      "Tamil Nadu is where ancient Dravidian culture meets modern dynamism. From towering temple gopurams to misty hill stations and serene backwaters — Tamil Nadu is a journey through time and devotion.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    places: [
      { name: "Ooty", desc: "Queen of Hill Stations — tea gardens and toy train rides" },
      { name: "Kodaikanal", desc: "Princess of Hill Stations with stunning Coaker's Walk" },
      { name: "Madurai", desc: "Meenakshi Temple and vibrant Chettinad culture" },
      { name: "Rameswaram", desc: "Sacred island temple and Ram Setu" },
      { name: "Thanjavur", desc: "Brihadeeswara Temple and classical Carnatic music" },
      { name: "Mahabalipuram", desc: "UNESCO Shore Temple and rock carvings" },
      { name: "Kanyakumari", desc: "Southernmost tip where three seas meet" },
      { name: "Chennai", desc: "Marina Beach, Kapaleeshwarar Temple, and cuisine" },
      { name: "Coimbatore", desc: "Gateway to Ooty with Isha Yoga Centre" },
    ],
    highlights: ["Temple Circuits", "Hill Station Escapes", "Cultural Immersion", "Pilgrimage Tours", "Heritage Trails"],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun, Sand & Soul",
    description:
      "Goa is India's pocket of paradise — where golden beaches meet Portuguese heritage, fresh seafood, vibrant markets, and a spirit that refuses to slow down. Perfect for couples, friends, and families alike.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop",
    places: [
      { name: "North Goa", desc: "Baga, Calangute, Anjuna beaches and vibrant nightlife" },
      { name: "South Goa", desc: "Palolem, Colva beaches — peaceful and pristine" },
      { name: "Old Goa", desc: "Portuguese colonial churches and UNESCO basilicas" },
      { name: "Dudhsagar Falls", desc: "Spectacular four-tiered waterfall in the jungle" },
    ],
    highlights: ["Beach Holidays", "Water Sports", "Heritage Walks", "Seafood Trails", "Honeymoon Packages"],
  },
  {
    id: "north-india",
    name: "North India",
    tagline: "The Grand Story of India",
    description:
      "North India is a land of legends — the snow-capped Himalayas, royal Rajasthan palaces, the Taj Mahal's eternal love story, and the spiritual banks of the Ganges. A journey here is a journey into India's greatest chapters.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop",
    places: [
      { name: "Rajasthan", desc: "Jaipur, Jodhpur, Udaipur — royal palaces and desert safaris" },
      { name: "Himachal Pradesh", desc: "Shimla, Manali, Spiti Valley — mountain magic" },
      { name: "Uttarakhand", desc: "Rishikesh, Haridwar, Mussoorie — spiritual Himalayas" },
      { name: "Delhi & Agra", desc: "Taj Mahal, Red Fort, and Qutub Minar" },
      { name: "Kashmir", desc: "Dal Lake, Gulmarg, Pahalgam — heaven on earth" },
    ],
    highlights: ["Heritage Palaces", "Himalayan Treks", "Golden Triangle", "Desert Safari", "Spiritual Pilgrimages"],
  },
];

export default function DestinationsPage() {
  return (
    <div className="pb-20">
      {/* Page Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop"
            alt="Destinations Hero Background"
            fill
            priority
            quality={80}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 container pb-12">
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase mb-3 block">GK Journeys</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Destinations</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Handpicked locations curated for unforgettable journeys — every destination, personally verified by Krupa.
          </p>
        </div>
      </div>



      {/* Destinations */}
      <DestinationSections destinations={destinations} />
    </div>
  );
}
