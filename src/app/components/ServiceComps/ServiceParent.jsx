import React from "react";
import Services from "./Services";
import p_one from "../../images/portraitone.png";
import p_two from "../../images/portraitwo.png";
import p_three from "../../images/portraithree.png";
import p_four from "../../images/portraitfour.png";
import p_five from "../../images/portraitfive.png";
import p_six from "../../images/portraitsix.png";
import cleaner from "../../images/cleaner.png";
import p_seven from "../../images/portraitseven.png";
import p_eight from "../../images/portraiteight.png";
import p_nine from "../../images/portraitnine.png";
import p_ten from "../../images/portraiten.png";
import p_el from "../../images/portraiteleven.png";
import p_twelve from "../../images/portraitwelve.png";
import delivery from "../../images/delivery.png";
import design from "../../images/design.png";
import dispatch from "../../images/dispatch.png";
import electrician from "../../images/electrician.png";
import makeup from "../../images/makeup.png";
import plumbing from "../../images/plumbing.png";
import plumbingone from "../../images/plumbingone.png";
import repairs from "../../images/repairs.png";
import salon from "../../images/salon.png";
import tutor from "../../images/tutor.png";

import { CiStar } from "react-icons/ci";

const services = [
  {
    id: 1,
    img: p_three,
    name: "Promise Justice",
    title: "Plumber",
    status: "Available",
    image: plumbingone,
    service: "QuickFix Plumbing Co",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    price: "N5,000",
   
  },
  {
    id: 2,
    img: p_four,
    name: "Chika Kosi",
    title: "Plumber",
    status: "Unvailable",
    image: makeup,
    service: "Charvi’s Makeover",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
  {
    id: 3,
    img: p_five,
    name: "Timi Stephen",
    title: "Plumber",

    status: "Available",
    image: plumbingone,
    service: "Sparkle & Shine Cleaner",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
  {
    id: 4,
    img: p_six,
    name: "Timi Stephen",
    title: "Plumber",

    status: "Available",
    image: cleaner,
    service: "Sparkle & Shine Cleaner",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
  {
    id: 5,
    img: p_seven,
    name: "Promise Justice",
    title: "Plumber",

    status: "Available",
    image: repairs,
    service: "QuickFix Plumbing Co",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
  {
    id: 6,
    img: p_eight,
    name: "Chika Kosi",
    title: "plumbing",
    status: "Unvailable",
    image: makeup,
    service: "Charvi’s Makeover",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
  {
    id: 7,
    img: p_nine,
    name: "Timi Stephen",
    title: "salon",

    status: "Available",
    image: plumbingone,
    service: "Sparkle & Shine Cleaner",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
  {
    id: 8,
    img: p_ten,
    name: "Timi Stephen",
    title: "tutor",

    status: "Available",
    image: cleaner,
    service: "Sparkle & Shine Cleaner",
    location: "Main island, Lagos",
    rating: "3.5",
    reviews: "52",
    time: "5.00",
    price: "N5,000",
  },
];

const ServiceParent = () => {
  return (
    <div
      className="grid  px-3 sm:px-6 md:px-10 w-full
  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  gap-4 sm:gap-6 md:gap-8"
    >
      {services.map((service) => (
        <Services key={service.id} name = {service.name} image={service.image} service={service.service} location={service.location} rating={service.rating} reviews={service.reviews} price={service.price}  />
      ))}
    </div>
  );
};

export default ServiceParent;
