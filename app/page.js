import ExploreSection from "@/components/ExploreSection";
import { Footer } from "@/components/Footer";
import { Footerend } from "@/components/Footerend";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { SecondHero } from "@/components/SecondHero";
import Image from "next/image";

export default function Home() {
  const destinations1 = [
    {
      id: 1,
      title: "Cappadocia",
      description: "Lorem Ipsum is simply dummy text of the printing and... see more",
      location: "Machu Picchu, Peru",
      price: "$380",
      image: "/a.png",
      rating: 5.0
    },
    {
      id: 2,
      title: "Nice and Cannes",
      description: "Lorem Ipsum is simply dummy text of the printing and... see more",
      location: "French Riviera, France",
      price: "$300",
      image: "/b.png",
      rating: 5.0
    },
    {
      id: 3,
      title: "Seville",
      description: "Lorem Ipsum is simply dummy text of the printing and... see more",
      location: "Seville, Spain",
      price: "$200",
      image: "/c.png",
      rating: 5.0
    }
    
  ];
  const destinations2 = [
    {
      "id": 1,
      "title": "Tokyo",
      "description": "Lorem Ipsum is simply dummy text of the printing and... see more",
      "location": "Tokyo, Japan",
      "price": "$360",
      "image": "/1.jpeg",
      "rating": 5.0
    },
    {
      "id": 2,
      "title": "Rome",
      "description": "Lorem Ipsum is simply dummy text of the printing and... see more",
      "location": "Rome, Italy",
      "price": "$370",
      "image": "/2.jpeg",
      "rating": 5.0
    },
    {
      "id": 3,
      "title": "Barcelona",
      "description": "Lorem Ipsum is simply dummy text of the printing and... see more",
      "location": "Barcelona, Spain",
      "price": "$400",
      "image": "/3.jpeg",
      "rating": 5.0
    },
    {
      "id": 4,
      "title": "Bangkok",
      "description": "Lorem Ipsum is simply dummy text of the printing and... see more",
      "location": "Bangkok, Thailand",
      "price": "$300",
      "image": "/4.jpeg",
      "rating": 5.0
    },
    {
      "id": 5,
      "title": "Sydney",
      "description": "Lorem Ipsum is simply dummy text of the printing and... see more",
      "location": "Sydney, Australia",
      "price": "$300",
      "image": "/5.jpeg",
      "rating": 5.0
    },
    {
      "id": 6,
      "title": "Toronto",
      "description": "Lorem Ipsum is simply dummy text of the printing and... see more",
      "location": "Toronto, Canada",
      "price": "$370",
      "image": "/6.jpeg",
      "rating": 5.0
    }
  ]
  
  return (
   <>
   <Navbar />
   <Hero />
   <ExploreSection destinations={destinations1} />
   <SecondHero />
   <ExploreSection destinations={destinations2} />
   <Newsletter />
   <Footer />
<Footerend />
   </>
  );
}
