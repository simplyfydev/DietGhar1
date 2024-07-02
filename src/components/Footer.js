import Image from "next/image";
import logo from "@/assets/DietGharlogo.png";
import { FaApple, FaFacebook, FaLinkedin, FaYoutube,FaPhoneAlt,FaWhatsapp,FaBuilding ,FaMapMarkerAlt,FaClock } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div>
        <footer class="bg-[#4A6213] opacity-90 mb-0">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <h1 className="mb-4 text-white font-montserrat text-xl font-medium leading-lg tracking-4">
              Trusted Health and Nutrition Experts.
              <br />
              We Provide Online Consultation Globally.
            </h1>

            <div class="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                  <div className="w-28 h-28 bg-white rounded-full overflow-hidden flex items-center justify-center mt-8">
                    <Image
                      src={logo}
                      alt="Dietghar Logo"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-3 ">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-white  dark:text-white">
                    Get in Touch
                  </h2>
                  <ul class="text-white font-medium">
                    <li class="mb-4">
                      <a href="#" class="flex hover:underline">
                      <FaBuilding  className="text-xl mr-2 mt-2"/>182, H Block, Sector 63, Noida, <br/>Uttar Pradesh 201301
                      </a>
                    </li>
                    <li class="mb-4">
                      <a
                        href="#"
                        class="flex hover:underline"
                      >
                        <FaMapMarkerAlt className="text-xl mr-2"/>Get Direction
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex hover:underline"
                      >
                        <FaClock className="text-xl mr-2"/>Mon-Sat 10am to 6pm
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-white">
                    Contact Us
                  </h2>
                  <ul class="text-white font-medium">
                    <li class="mb-4">
                      <a
                        href="#"
                        class="flex hover:underline "
                      >
                        <FaPhoneAlt className="mr-2"/>+91 7838249321
                      </a>
                    </li>
                    <li class="mb-4">
                      <a
                        href="#"
                        class="flex hover:underline "
                      >
                         <FaWhatsapp className="mr-2 text-lg" />+91 7838249321
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex hover:underline "
                      >
                        <IoMail className="mr-2 text-xl"/>dietghardev@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Social Media
                  </h2>
                  <ul class="text-white font-medium">
                    <li class="mb-4">
                      <a href="#" class="flex hover:underline">
                        <AiFillInstagram className="mr-2 text-xl"/>
                        Instagram
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" class=" flex hover:underline">
                        <FaFacebook className="mr-2 text-xl"/>
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" class="flex hover:underline">
                        <FaLinkedin className="mr-2 text-xl"/> Linkdein
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex hover:underline">
                        <FaYoutube className="mr-2 text-xl"/>
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="sm:flex sm:items-center sm:justify-between mt-8">
              <span class="flex text-sm sm:text-center ">
                <button className="flex border z-40 bg-black border-black rounded-xl text-bold p-4 mr-4">
                  <FaApple className="text-xl mr-2" />
                  IOS App
                </button>
                <button className="flex border z-40 bg-black border-black rounded-xl text-bold p-4 mr-4">
                  <IoLogoAndroid className="text-xl mr-2" />
                  Android App
                </button>
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" class="text-white">
                  <p>About Us</p>
                </a>
                <a href="#" class="text-white ms-5">
                  <p>Contact Us</p>
                </a>
                <a href="#" class="text-white ms-5">
                  <p>Terms of Service</p>
                </a>
                <a href="#" class="text-white ms-5">
                  <p>Disclaimer</p>
                </a>
                <a href="#" class="text-white ms-5">
                  <p>Privacy</p>
                </a>
                <a href="#" class="text-white ms-5">
                  <p>FAQs</p>
                </a>
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
