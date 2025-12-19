"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo.svg";
import dashboard from "../../assets/pie-chart.svg";
import profileIcon from "../../assets/profile-icon.svg";
import history from "../../assets/history.png";
import message from "../../assets/messages.svg";
import analytics from "../../assets/analytics.png";
import headphones from "../../assets/headphones.png";
import settings from "../../assets/settings.svg";
import logout from "../../assets/logout.svg";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className={`bg-white text-blue w-80 py-28 pl-20 pr-8 min-h-screen
      md:block ${isOpen ? "block" : "hidden"} md:relative fixed h-full`}
    >
      <button className="md:hidden mb-4" onClick={toggle}>
        {isOpen ? "Close" : "Menu"}
      </button>

      <nav className="flex flex-col gap-4 w-full mb-59">
        <Link className="w-full flex justify-center items-center mb-7" href="/">
          <Image width={100} src={logo} alt="logo" />
        </Link>
        <Link
          className="flex justify-start gap-2 items-center bg-primary-500 rounded-md px-5 py-2 text-white"
          href="/client/dashboard"
        >
          <Image width={20} src={dashboard} alt="logo" /> <p>Dashboard</p>
        </Link>
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/client/profile"
        >
          <Image width={20} src={profileIcon} alt="logo" /> <p>My Profile</p>
        </Link>
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/client/bookings"
        >
          <Image width={20} src={history} alt="logo" /> <p>Booking History</p>
        </Link>
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/client/messages"
        >
          <Image width={20} src={message} alt="logo" /> <p>Messages</p>
        </Link>
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/client/payment"
        >
          <Image width={20} src={analytics} alt="logo" /> <p>Payment Method</p>
        </Link>
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/client/reviews"
        >
          <Image width={20} src={analytics} alt="logo" /> <p>Reviews</p>
        </Link>
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/client/notification"
        >
          <Image width={20} src={analytics} alt="logo" /> <p>Notification</p>
        </Link>
      </nav>

      <nav className="flex flex-col gap-4 w-full">
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/"
        >
          <Image width={20} src={headphones} alt="logo" /> <p>Customer Support</p>
        </Link>        
        
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2"
          href="/"
        >
          <Image width={20} src={settings} alt="logo" /> <p>Settings</p>
        </Link>        
        
        <Link
          className="flex justify-start gap-2 items-center rounded-md px-5 py-2 text-red-500"
          href="/"
        >
          <Image width={20} src={logout} alt="logo" /> <p>Log Out</p>
        </Link>
      </nav>
    </aside>
  );
}
