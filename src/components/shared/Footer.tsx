import brandLogo from "@/assets/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaEye } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
const Footer = async () => {
  const res = await fetch(
    "https://blogiz-backend.vercel.app/api/visit/increment",
    {
      cache: "no-store",
    }
  );
  const visitor = await res.json();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="w-[90%] mx-auto  py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:justify-items-center gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
              </div>
              <span className="text-2xl font-bold">Blogiz</span>
            </div>
            <p className="text-slate-300 mb-6">
              Contrary to popular belief, Lorem ipsum is not simply random text.
              It has roots in classical Latin literature.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <FaEye className="w-4 h-4" />
              <span className="text-sm">{visitor.count} views this month</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 px-4 py-2 rounded focus:outline-none"
              />
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center">
                Subscribe
                <HiArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/careers", label: "Careers" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { href: "/help", label: "Help Center" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/faq", label: "FAQ" },
                { href: "/support", label: "Support" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              Copyright © 2024 - All rights reserved by ACME Industries Ltd
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
              ].map(({ icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
