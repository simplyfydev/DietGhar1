import Image from "next/image";
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
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="relative bg-[#4A6213] mb-0">
          <div className="relative bg-opacity-90 before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-20 before:z-0" style={{ backgroundImage: "url(../assets/FooterBack.png)" }}></div>
          <div className="relative z-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <h1 className="text-white text-center font-montserrat text-3xl font-medium leading-lg mb-12">
                Trusted Health and Nutrition Experts. We Provide Online
                Consultation Globally.
              </h1>

              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <Link href="#" className="flex items-center">
                    <div className="w-40 h-40 bg-white rounded-full overflow-hidden flex items-center justify-center mt-5">
                      <Image
                        src={logo}
                        alt="Dietghar Logo"
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3">
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-white">
                      Get in Touch
                    </h2>
                    <ul className="text-white font-medium">
                      <li className="mb-4">
                        <a href="#" className="flex hover:underline">
                          <FaPhoneAlt className="text-xl mr-2 mt-2" />
                          +91 7838249321
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="flex hover:underline">
                          <FaWhatsapp className="text-xl mr-2" />
                          +91 7838249321
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="flex hover:underline">
                          <IoMail className="text-xl mr-2" />
                          support@dietghar.com
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:underline">
                          <FaClock className="text-xl mr-2" />
                          Mon-Sat 10am to 6pm
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Social Media
                    </h2>
                    <ul className="text-white font-medium">
                      <li className="mb-4">
                        <a href="#" className="flex hover:underline">
                          <AiFillInstagram className="mr-2 text-xl" />
                          Instagram
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="flex hover:underline">
                          <FaFacebook className="mr-2 text-xl" />
                          Facebook
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="flex hover:underline">
                          <FaLinkedin className="mr-2 text-xl" /> LinkedIn
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:underline">
                          <FaYoutube className="mr-2 text-xl" />
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="">
                      <li className="mb-4">
                        <button>
                          <Image src={btn1} />
                        </button>
                      </li>
                      <li className="">
                        <button className="">
                          <Image src={btn2} />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sm:flex items-center justify-center mt-8">
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
          </div>
        </footer>
      </div>
      <div className="bg-white w-full h-6 text-black text-center">
        Copyright @ DietGhar
      </div>
    </>
  );
}
