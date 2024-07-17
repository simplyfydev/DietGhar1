import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/DietGharlogo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import btn1 from "@/assets/googlePlay.png";
import btn2 from "@/assets/AppStore.png";
import footer from "@/assets/FooterBack.png";
export default function Footer() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="absolute -z-10">
          <Image src={footer} />
        </div>
      </div>
      <footer className="bg-[#4A6213] bg-opacity-50">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center font-montserrat text-3xl font-medium leading-lg py-12">
            Trusted Health and Nutrition Experts. We Provide Online Consultation
            Globally.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="w-40 h-40 bg-white rounded-full overflow-hidden flex items-center justify-center mt-5 lg:ml-6">
              <Image
                src={logo}
                alt="Dietghar Logo"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-2">
                <li className="">
                  <Link href="/privacy-policy" className="flex text-gray-300 ">
                    <FaPhoneAlt className="text-lg mr-2 mt-1" />
                    +91 7838249321
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="flex text-gray-300 ">
                    <FaWhatsapp className="text-xl mr-2" />
                    +91 7838249321
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="flex text-gray-300 ">
                    <IoMail className="text-xl mr-2" />
                    support@dietghar.com
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="flex text-gray-300 ">
                    <FaClock className="text-xl mr-2" />
                    Mon-Sat 10am to 6pm
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Social Media
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="http://www.simplyfycrypto.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 "
                  >
                    <AiFillInstagram className="mr-2 text-xl" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.simplyfycrypto.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 "
                  >
                    <FaFacebook className="mr-2 text-xl" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.simplyfycrypto.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 "
                  >
                    <FaYoutube className="mr-2 text-xl" />
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.simplyfycrypto.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 "
                  >
                    <FaLinkedin className="mr-2 text-xl" /> LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            {/* Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4"></h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 ">
                    <Image src={btn1} />
                  </Link>
                </li>
                <li className="ml-1">
                  <Link href="/contact" className="text-gray-300 ">
                    <Image src={btn2} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex items-center justify-center mt-20 py-3">
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-white ml-1 mr-1">
                <p className="text-xs">Terms of Service |</p>
              </a>
              <a href="#" className="text-white ml-1 mr-1">
                <p className="text-xs">Disclaimer |</p>
              </a>
              <a href="#" className="text-white ml-1 mr-1">
                <p className="text-xs">Privacy Policy |</p>
              </a>
              <a href="#" className="text-white ml-1 mr-1">
                <p className="text-xs"> Returns & Refunds</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-6 text-black text-center">
          Copyright @ DietGhar
        </div>
      </footer>
    </>
  );
}
