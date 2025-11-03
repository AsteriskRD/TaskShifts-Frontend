import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Logo.svg";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Providers", href: "/providers" },
        { name: "Marketplace", href: "/marketplace" },
    ];

    return (
        <footer className="w-fullz bg-black text-white px-4 py-10 lg:pb-10 pb-50 relative">
            <div className="max-w-7xl mx-auto">
                {/* ---------- FIRST ROW ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mb-10">
                    {/* Logo Column */}
                    <div>
                        <Image
                            src={Logo}
                            alt="TaskShift Logo"
                            width={100}
                            height={100}
                        />
                    </div>

                    {/* Navbar Links Column */}
                    <div>
                        <h3 className="font-bold mb-4 underline">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-blue-400 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-bold mb-4 underline">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Locations
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Email us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Call us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Users Column */}
                    <div>
                        <h3 className="font-bold mb-4 underline">For Users</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Sign Up as Client
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Join as Provider
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Pricing Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-bold mb-4 underline">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Copyright
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="font-bold mb-4">
                            Want to keep hearing from us?
                        </h3>
                        <form className="space-y-2 relative w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 text-black rounded-full bg-accent-50 outline-none"
                            />
                            <button
                                type="submit"
                                className="w-auto bg-secondary-600 hover:bg-secondary-300 cursor-pointer px-4 py-2 rounded-full transition-colors absolute right-0"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* ---------- SECOND ROW ---------- */}
                <div className="p-8 bg-primary-900 absolute -bottom-10 left-0 w-full">
                    <div className="flex flex-col md:flex-row justify-center gap-8 items-center space-y-4 md:space-y-0">
                        {/* Social Icons */}
                        <div className="flex space-x-6">
                            <Link
                                href="https://facebook.com"
                                className="hover:text-blue-400"
                            >
                                <FaFacebook size={20} />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                className="hover:text-blue-400"
                            >
                                <FaTwitter size={20} />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                className="hover:text-blue-400"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                className="hover:text-blue-400"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} TaskShift Technologies.
                        </div>

                        {/* Additional Links */}
                        <div className="flex flex-col md:flex-row text-sm text-gray-400 justify-center items-center gap-4">
                            <Link href="/" className="hover:text-blue-400">
                                All Rights Reserved
                            </Link>
                            <Link href="/" className="hover:text-blue-400">
                                Sitemap
                            </Link>
                            <Link href="/" className="hover:text-blue-400">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
