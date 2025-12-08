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

export const assets ={
        hero1bg, calender, searchIcon, stars, location, hotel1_1, hotel2_1, hotel3_1, hotel4_1, hotel5_1, hotel6_1, hotel7_1, hotel8_1, hotel1_2, hotel2_2, hotel3_2, hotel4_2, hotel5_2, hotel6_2, hotel7_2, hotel8_2,
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

export default assets;
