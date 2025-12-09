import hero1bg from './hero-1-bg.jpg'
import calender from './calendar.png'
import searchIcon from './search.png'
import stars from './star.png'
import location from './location.png'
import hotel1_1 from './hotel1-1.jpg'
import hotel2_1 from './hotel2-1.jpg'
import hotel3_1 from './hotel3-1.jpg'
import hotel4_1 from './hotel4-1.jpg'
import hotel5_1 from './hotel5-1.jpg'
import hotel6_1 from './hotel6-1.jpg'
import hotel7_1 from './hotel7-1.jpg'
import hotel8_1 from './hotel8-1.jpg'
import hotel1_2 from './hotel1_2.jpg'
import hotel2_2 from './hotel2_2.jpg'
import hotel3_2 from './hotel3_2.jpg'
import hotel4_2 from './hotel4_2.jpg'
import hotel5_2 from './hotel5_2.jpg'
import hotel6_2 from './hotel6_2.jpg'
import hotel7_2 from './hotel7_2.jpg'
import hotel8_2 from './hotel8_2.jpg'
import arrow from './arrows.png'
import arrowRed from './arrowRed.png'
import offerCard_bg1 from './offerCard-bg1.jpg'
import offerCard_bg2 from './offerCard-bg2.jpg'
import offerCard_bg3 from './offerCard-bg3.jpg'
import offerCard_bg4 from './offerCard-bg4.jpg'
import offerCard_bg5 from './offerCard-bg5.jpg'
import offerCard_bg6 from './offerCard-bg6.jpg'
import user1 from './user1.png'
import user2 from './user2.png'
import user3 from './user3.png'
import user4 from './user4.png'
import user5 from './user5.png'
import user6 from './user6.png'


export const assets ={
        hero1bg, calender, searchIcon, stars, location, hotel1_1, hotel2_1, hotel3_1, hotel4_1, hotel5_1, hotel6_1, hotel7_1, hotel8_1, hotel1_2, hotel2_2, hotel3_2, hotel4_2, hotel5_2, hotel6_2, hotel7_2, hotel8_2, arrow, arrowRed,
};

// cities list
export const cities = [
        "Ranchi",
        "Jamshedpur",
        "Dhanbad",
        "Bokaro Steel City",
        "Hazaribagh",
        "Deoghar",
        "Giridih",
        "Ramgarh",
        "Chakradharpur",
        "Medininagar (Daltonganj)",
        "Chirkunda",
        "Phusro",
        "Chaibasa",
        "Gumla",
        "Godda",
        "Sahibganj",
        "Lohardaga",
        "Simdega",
        "Koderma",
        "Jhumri Telaiya",
        "Pakur",
        "Jharia",
        "Mango",
        "Latehar",
        "Garhwa",
        "Khunti",
        "Saraikela",
        "Barhi",
        "Basukinath",
        "Mahagama",
        "Rajmahal",
        "Chhatra (Chatra)"
];

// Dummy rooms data
export const roomsDummyData = [
  {
    _id: "room001",
    images: [hotel1_1, hotel1_2],
    hotel: {
      name: "Serene Palace Hotel",
      address: "Baga Beach Road, Goa"
    },
    pricePerNight: 129
  },

  {
    _id: "room002",
    images: [hotel2_1, hotel2_2],
    hotel: {
      name: "Blue Lagoon Resort",
      address: "Marine Drive, Mumbai"
    },
    pricePerNight: 149
  },

  {
    _id: "room003",
    images: [hotel3_1, hotel3_2],
    hotel: {
      name: "Mountain View Hotel",
      address: "Mall Road, Manali"
    },
    pricePerNight: 99
  },

  {
    _id: "room004",
    images: [hotel4_1, hotel4_2],
    hotel: {
      name: "Royal Heritage Inn",
      address: "Hawa Mahal Road, Jaipur"
    },
    pricePerNight: 179
  },

  {
    _id: "room005",
    images: [hotel5_1, hotel5_2],
    hotel: {
      name: "Ocean Pearl Stay",
      address: "Auroville Beach, Pondicherry"
    },
    pricePerNight: 139
  },

  {
    _id: "room006",
    images: [hotel6_1, hotel6_2],
    hotel: {
      name: "Skyline Grand Hotel",
      address: "MG Road, Bangalore"
    },
    pricePerNight: 159
  },

  {
    _id: "room007",
    images: [hotel7_1, hotel7_2],
    hotel: {
      name: "Lakeview Retreat",
      address: "Dal Lake Boulevard, Srinagar"
    },
    pricePerNight: 119
  },

  {
    _id: "room008",
    images: [hotel8_1, hotel8_2],
    hotel: {
      name: "Golden Sands Resort",
      address: "Candolim Beach, Goa"
    },
    pricePerNight: 189
  }
];

// dummy offers details
export const exclusiveOffers = [
  {
    _id: "summer-escape",
    title: "Summer Escape Package",
    discount: "25",
    description: "Enjoy a complimentary night and daily breakfast",
    expiry: "Aug 31",
    image: offerCard_bg1,
    buttonText: "View Offers",
    link: "/offers/summer-escape"
  },
  {
    _id: "romantic-retreat",
    title: "Romantic Retreat Getaway",
    discount: "30",
    description: "Celebrate love with candlelight dinner and a luxury suite",
    expiry: "Sep 10",
    image: offerCard_bg2,
    buttonText: "Explore Package",
    link: "/offers/romantic-retreat"
  },
  {
    _id: "family-fun",
    title: "Family Fun Package",
    discount: "20",
    description: "Stay longer and enjoy complimentary kids activities",
    expiry: "Oct 5",
    image: offerCard_bg3,
    buttonText: "View Details",
    link: "/offers/family-fun"
  },
  {
    _id: "luxury-spa",
    title: "Luxury Spa Escape",
    discount: "35",
    description: "Rejuvenate with premium spa treatments and breakfast",
    expiry: "Dec 1",
    image: offerCard_bg4,
    buttonText: "Book Now",
    link: "/offers/luxury-spa"
  },
  {
    _id: "business-travel",
    title: "Business Travel Saver",
    discount: "15",
    description: "Exclusive perks for corporate travelers with free upgrades",
    expiry: "Nov 15",
    image: offerCard_bg5,
    buttonText: "Grab Offer",
    link: "/offers/business-travel"
  },
  {
    _id: "adventure-package",
    title: "Adventure Experience Package",
    discount: "40",
    description: "Gear up for thrilling outdoor activities and guided tours",
    expiry: "Sep 25",
    image: offerCard_bg6,
    buttonText: "Discover More",
    link: "/offers/adventure-package"
  }
];


// dummy feedback
export const testimonials = [
  {
    _id: "emma-rodriguez",
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    profile: user1,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that stay gateaway provides."
  },
  {
    _id: "liam-thompson",
    name: "Liam Thompson",
    location: "Sydney, Australia",
    rating: 5,
    profile: user2,
    review:
      "Stay Gateaway made my vacation absolutely seamless. The service, the stay, and the comfort were beyond what I expected."
  },
  {
    _id: "sofia-patel",
    name: "Sofia Patel",
    location: "Mumbai, India",
    rating: 4,
    profile: user3,
    review:
      "Great experience overall! The property was beautiful and the team was incredibly supportive throughout my stay."
  },
  {
    _id: "oliver-martin",
    name: "Oliver Martin",
    location: "Paris, France",
    rating: 5,
    profile: user4,
    review:
      "Exceptional service from start to finish. The booking process was smooth and the accommodation exceeded my expectations."
  },
  {
    _id: "amelia-johnson",
    name: "Amelia Johnson",
    location: "New York, USA",
    rating: 5,
    profile: user5,
    review:
      "One of the best booking experiences I’ve ever had. Everything was perfect — from the location to the hospitality."
  },
  {
    _id: "hiroshi-tanaka",
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    rating: 4,
    profile: user6,
    review:
      "Very professional service and excellent accommodation options. I would definitely book through them again."
  }
];


export default assets;
