"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  // Nav items configuration for DRY code
  const navItems = [
    {
      title: "About",
      type: "dropdown",
      items: [
        { title: "Overview", href: "/about/overview" },
        { title: "Leadership", href: "/about/leadership" },
        { title: "Vision & Mission", href: "/about/vision" },
        { title: "Campus", href: "/about/campus" },
      ],
    },
    {
      title: "Academics",
      type: "dropdown",
      items: [
        { title: "Schools & Departments", href: "/academics/schools" },
        { title: "Undergraduate Programs", href: "/academics/undergraduate" },
        { title: "Postgraduate Programs", href: "/academics/postgraduate" },
        { title: "PhD Programs", href: "/academics/phd" },
      ],
    },
    { title: "Admission", href: "/admission", type: "link" },
    { title: "Research", href: "/research", type: "link" },
    { title: "Placements", href: "/placements", type: "link" },
    { title: "Contact", href: "/contact", type: "link" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/logo.png"
            alt="University Logo"
            width={48}
            height={48}
            className="h-14 w-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <Link
            href="/"
            className="font-medium text-gray-800 hover:text-[#FF5C00] transition-colors px-4"
          >
            Home
          </Link>

          {navItems.map((item, index) =>
            item.type === "dropdown" ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className="font-medium text-gray-800 hover:text-[#FF5C00] transition-colors flex items-center outline-none px-4">
                  {item.title} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <AnimatePresence>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <DropdownMenuContent className="w-56 bg-white rounded-md shadow-lg">
                      {item.items.map((subItem, subIndex) => (
                        <DropdownMenuItem
                          key={subIndex}
                          className="hover:bg-gray-50 focus:bg-gray-50"
                        >
                          <Link href={subItem.href} className="w-full py-2">
                            {subItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </motion.div>
                </AnimatePresence>
              </DropdownMenu>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="font-medium text-gray-800 hover:text-[#FF5C00] transition-colors px-4"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Apply Now Button (Desktop) */}
        <div className="hidden lg:block">
          <Button className="bg-[#FF5C00] hover:bg-[#E05000] text-white font-medium px-6 py-2 rounded-md transition-colors">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-none hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md p-0">
            <div className="flex flex-col h-full py-8 px-6">
              <div className="mb-8 flex items-center">
                <Image
                  src="/logo.png"
                  alt="University Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>

              <nav className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="py-3 px-2 text-lg font-medium hover:text-[#FF5C00] transition-colors"
                >
                  Home
                </Link>

                {navItems.map((item, index) =>
                  item.type === "dropdown" ? (
                    <details
                      key={index}
                      className="group border-b border-gray-100"
                    >
                      <summary className="flex cursor-pointer items-center justify-between py-3 px-2 text-lg font-medium hover:text-[#FF5C00] list-none">
                        {item.title}
                        <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pl-4 pb-2 space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2 text-gray-600 hover:text-[#FF5C00] transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={index}
                      href={item.href}
                      className="py-3 px-2 text-lg font-medium hover:text-[#FF5C00] transition-colors border-b border-gray-100"
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-auto pt-6">
                <Button className="w-full bg-[#FF5C00] hover:bg-[#E05000] text-white font-medium py-3 px-6 rounded-md transition-colors">
                  Apply Now
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
