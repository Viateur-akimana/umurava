import Image from "next/image";
import { BackToTop } from "../ui/BackToTop";
import { Button } from "../ui/button";
import Link from "next/link"
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-secondary flex flex-col gap-4 px-8 sm:px-24 py-2 sm:py-12 sm:divide-y divide-white/20">
            <div className="flex items-center justify-between sm:py-8">
                <Image
                    aria-hidden
                    src="/logo_footer.png"
                    alt="File icon"
                    width={40}
                    height={40}
                />
             <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaFacebookF size={18} className="text-[#041738]" />
              </Link>
              <Link href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaGooglePlusG size={18} className="text-[#041738]" />
              </Link>
              <Link href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaLinkedinIn size={18} className="text-[#041738]" />
              </Link>
              <Link href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaYoutube size={18} className="text-[#041738]" />
              </Link>
            </div>
            </div>

            <div className="flex flex-col gap-4  sm:flex-row items-start justify-between sm:py-8">
                <div className="flex flex-col">
                <h4 className="font-bold text-lg text-white mb-4 text-start">Our address</h4>
                    <ul className="space-y-2 text-white">
                <li className="flex items-center gap-2">
                  <span><FaEnvelope /></span>
                  <Link href="mailto:career@tickets.com" className="hover:text-gray-300">
                    career@tickets.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span><FaMapMarkerAlt /></span>
                  89 KG 14 Ave, Kigali
                </li>
                <li className="flex items-center gap-2">
                  <span><FaPhone /></span>
                  <Link href="tel:+250700000" className="hover:text-gray-300">
                    +250 700 000
                  </Link>
                </li>
              </ul>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white text-md sm:text-lg font-semibold">Quick Links</h1>
                    <ul className="flex flex-col sm:gap-2 sm:py-2 text-tertiary">
                        <li><Link href="./">Home</Link></li>
                        <li><Link href="/program">Program</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="./#contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 sm:gap-4">
                    <h1 className="text-white text-md sm:text-lg font-semibold">Join our newsletter to keep up to date with us!</h1>
                    <form className="flex items-center justify-between bg-white p-2 rounded-md">
                        <input className="w-full text-black outline-none sm:p-3" placeholder="Email" />
                        <Button classNames="bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Subscribe" onClick={() => console.log("Subscribed")} />
                    </form>

                </div>
            </div>

            <div className="flex flex-col gap-2  sm:flex-row items-center justify-between text-white text-md sm:text-xs sm:pt-4">
                <p>Copyright &copy; All right reserved USC 2025</p>
                <p>Privacy Policy | Terms and Conditions</p>
                <BackToTop />
            </div>
        </footer>
    )
}
export default Footer;