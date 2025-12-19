"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import ClientBookingCard from "../components/ClientBookingCard.jsx";

import notification from "../../assets/notification.svg";
import messages from "../../assets/messages.svg";
import gift from "../../assets/gift.svg";
import settings from "../../assets/settings.svg";
import user from "../../assets/user.svg";
import plus from "../../assets/plus.svg";
import totalBooking from "../../assets/total-booking.png";
import upcomingBooking from "../../assets/upcoming-booking.png";
import arrowUp from "../../assets/arrow-up.png";

/* ------------------ CONSTANT DATA ------------------ */

const INITIAL_BOOKINGS = [
  {
    id: 1,
    providerName: "Sarah Johnson",
    rating: "4.9",
    service: "House Cleaning",
    date: "2025-01-20",
    time: "10:00 AM",
    status: "Confirmed",
    location: "Your Home",
  },
  {
    id: 2,
    providerName: "Mike Reynolds",
    rating: "4.7",
    service: "Home Care",
    date: "2025-01-22",
    time: "2:00 PM",
    status: "Pending",
    location: "Your Home",
  },
];

const HEADER_ICONS = [
  { icon: notification, bg: "bg-cyan-100", count: 10, alt: "notification" },
  { icon: messages, bg: "bg-cyan-100", count: 10, alt: "messages" },
  { icon: gift, bg: "bg-purple-100", count: 10, alt: "gift" },
  { icon: settings, bg: "bg-red-100", count: 10, alt: "settings" },
];

/* ------------------ REUSABLE COMPONENTS ------------------ */

function HeaderIcon({ icon, bg, count, alt }) {
  return (
    <div className={`relative p-2 rounded-sm ${bg}`}>
      <span className={`absolute -top-1 -right-1 text-[10px] px-1 rounded-full ${bg}`}>
        {count}
      </span>
      <Image width={20} src={icon} alt={alt} />
    </div>
  );
}

function StatsCard({ title, value, icon }) {
  return (
    <div className="flex-1 bg-white rounded-md shadow-sm p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <Image width={40} src={icon} alt={title} />
      </div>

      <h1 className="text-4xl">{value}</h1>

      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
          <Image width={16} src={arrowUp} alt="trend" />
          <p className="text-green-500 text-sm">34.56%</p>
        </span>
        <Link href="/" className="text-primary-500 underline">
          View More
        </Link>
      </div>
    </div>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */

export default function ClientDashboard() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);

  const cancelBooking = useCallback((id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* ---------------- Header ---------------- */}
      <header className="flex items-center justify-between gap-4">
        {/* Search */}
        <div className="relative bg-white rounded-md w-80 px-3 py-2">
          <input
            type="search"
            placeholder="Search for provider"
            className="w-full placeholder:text-[#484E53]"
          />
          <CiSearch className="absolute right-3 top-2.5 text-[#484E53]" />
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          {HEADER_ICONS.map((item) => (
            <HeaderIcon key={item.alt} {...item} />
          ))}
        </div>

        <div className="h-8 border border-gray-300" />

        {/* User */}
        <p className="text-base">Hello, Timmy P.</p>
        <div className="bg-primary-600 p-2 rounded-full">
          <Image width={20} src={user} alt="user" />
        </div>
      </header>

      {/* ---------------- Intro ---------------- */}
      <section className="flex justify-between items-center my-8">
        <div>
          <h1 className="text-3xl font-bold text-primary-700">
            Welcome back, Timmy
          </h1>
          <p className="text-primary-50">
            Hello, Timmy welcome back to your dashboard
          </p>
        </div>

        <button className="flex items-center gap-3 bg-primary-600 px-5 py-3 rounded-full text-white">
          <Image width={20} src={plus} alt="plus" />
          Book New Service
        </button>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="flex gap-4 flex-wrap mb-8">
        <StatsCard
          title="Total bookings"
          value={8}
          icon={totalBooking}
        />
        <StatsCard
          title="Upcoming bookings"
          value={6}
          icon={upcomingBooking}
        />
        <StatsCard
          title="Overview"
          value="—"
          icon={totalBooking}
        />
      </section>

      {/* ---------------- Active Bookings ---------------- */}
      <section className="bg-white rounded-sm p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl">Active Bookings</h2>
          <Link href="/" className="text-xl">
            View All
          </Link>
        </div>

        {bookings.length === 0 ? (
          <p className="text-gray-600">No bookings yet.</p>
        ) : (
          <div className="grid gap-4">
            {bookings.map((booking) => (
              <ClientBookingCard
                key={booking.id}
                booking={booking}
                onCancel={cancelBooking}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
