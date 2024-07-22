"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/DietGharlogo.png";
import profilelogo from "@/assets/ProfileNavbar.png";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="bg-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* Logo */}
            <Link
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} alt="Dietghar Logo" width={80} height={80} />
            </Link>
            {/* My Account Button */}
            <div className="md:hidden flex">
              <button className="flex text-white bg-[#95BB3A] font-medium rounded-full text-sm px-5 py-2 text-center mb-2">
                <Image
                  src={profilelogo}
                  className="w-6 h-6 mr-2"
                  alt="Profile Logo"
                />
                My Account
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } w-full md:flex md:items-center md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8 md:p-0 mt-4 md:mt-0 md:border-0">
                {/* Navbar Links */}
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="how-it-works"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="aboutus"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="contactus"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="success-stories"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="blog"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="faqs"
                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex">
              <button className="flex text-white bg-[#95BB3A] font-medium rounded-full text-sm px-5 py-2 text-center mb-2">
                <Image
                  src={profilelogo}
                  className="w-6 h-6 mr-2"
                  alt="Profile Logo"
                />
                My Account
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
