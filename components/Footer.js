"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-[#FF5C00] font-bold text-2xl">
                Sikkim Global{" "}
              </span>
              <span className="text-white font-medium text-xl ml-1">
                Technical University
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming Education, Transforming India. SGTU is dedicated to
              academic excellence, innovation, and creating future leaders with
              global perspective.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5C00] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5C00] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5C00] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5C00] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5C00] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-[#FF5C00]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  About SGPU
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Admission Process
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Research & Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/placements"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/campus-life"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Campus Life
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Programs
              <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-[#FF5C00]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programs/engineering"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Engineering & Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/management"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Business Management
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/arts"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Arts & Humanities
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/science"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Science & Mathematics
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/health"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Health Sciences
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/law"
                  className="text-gray-400 hover:text-[#FF5C00] transition-colors"
                >
                  Law
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-[#FF5C00]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-[#FF5C00] mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">
                  Tharpu, Melli Road, District: Namchi, Sikkim -737126
                </span>
              </li>
              <li className="flex">
                <Phone className="text-[#FF5C00] mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">1234-567-8922</span>
              </li>
              <li className="flex">
                <Mail className="text-[#FF5C00] mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">info@sgtu.ac.in</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-[#FF5C00] text-white px-5 py-2 rounded-md font-medium hover:bg-orange-700 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SGTU. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#FF5C00] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-gray-400 hover:text-[#FF5C00] text-sm transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-[#FF5C00] text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
