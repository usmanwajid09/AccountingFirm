"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Button from "./Button";
import { gsap } from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 'about' or 'services'
  const pathname = usePathname();

  const overlayRef = useRef(null);
  const menuLinksRef = useRef([]);
  const contactRef = useRef(null);
  const logoRef = useRef(null);

  // Scroll listener for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close overlay on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // GSAP animation triggers when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden";

      // Animation: Slide down overlay
      gsap.to(overlayRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
      });

      // Animation: Slide up and fade in links
      gsap.fromTo(
        menuLinksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );

      // Animation: Fade in contact details
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    } else {
      document.body.style.overflow = "";

      // Animation: Slide up and hide overlay
      gsap.to(overlayRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  const toggleSubMenu = (menu) => {
    if (activeSubMenu === menu) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(menu);
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      subItems: [
        { label: "Our Story", href: "/about#story" },
        { label: "Meet the Team", href: "/about#team" },
        { label: "Our Process", href: "/about#process" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "Overview", href: "/services" },
        { label: "Bookkeeping", href: "/services/bookkeeping-services" },
        { label: "Management Reporting", href: "/services/management-reporting" },
        { label: "Budgeting & Financial Planning", href: "/services/budgeting-financial-planning" },
        { label: "Annual Accounts", href: "/services/annual-accounts" },
        { label: "Self Assessments", href: "/services/self-assessments" },
        { label: "Cashflows", href: "/services/cashflows" },
        { label: "Tax Advisory", href: "/services/tax-advisory" },
        { label: "HMRC Investigations", href: "/services/hmrc-investigations" },
      ],
    },
    {
      label: "Who We Help",
      href: "/who-we-help",
      subItems: [
        { label: "Overview", href: "/who-we-help" },
        { label: "Limited Companies", href: "/who-we-help/limited-companies" },
        { label: "Sole Traders", href: "/who-we-help/sole-trader-accounting" },
        { label: "Partnerships & LLPs", href: "/who-we-help/partnerships-and-llps" },
        { label: "Contractors & Freelancers", href: "/who-we-help/contractors-and-freelancers" },
      ],
    },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Sticky Top Header */}
      <header
        className={`fixed top-0 left-0 w-full h-[72px] flex items-center z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-ia-white border-b border-ia-border shadow-nav text-white py-4"
            : "bg-transparent text-ia-white py-6"
        }`}
      >
        <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/"
            ref={logoRef}
            onClick={() => setIsOpen(false)}
            className="logo flex items-center gap-3 shrink-0"
          >
            <img 
              src="/images/logo.png" 
              alt="internal accountants logo" 
              className="h-[40px] w-auto object-contain" 
            />
            <span className="font-bold text-[18px] sm:text-[20px] tracking-wider uppercase text-current font-primary hidden sm:inline-block">
              Internal Accountants
            </span>
          </Link>

          {/* Right Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 focus:outline-none transition-colors duration-200 cursor-pointer ${
              isOpen ? "text-white" : "text-current"
            }`}
            aria-label="Toggle Navigation Menu"
            style={{ zIndex: 1001 }}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Full Screen Slide-Down Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 w-full h-full bg-ia-navy-alt text-ia-white z-40 flex items-start lg:items-center justify-center pointer-events-none opacity-0 select-none overflow-y-auto"
        style={{
          transform: "translateY(-100%)",
          pointerEvents: isOpen ? "auto" : "none",
          select: isOpen ? "auto" : "none",
        }}
      >
        <div className="container max-w-[1300px] mx-auto px-6 md:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center w-full">
          {/* Left Column: Navigation Links (8 columns) */}
          <div className="lg:col-span-8 flex flex-col text-left justify-center">
            <nav className="flex flex-col gap-6 md:gap-8">
              {navLinks.map((link, idx) => {
                const hasSubItems = !!link.subItems;
                const isSubActive = activeSubMenu === link.label.toLowerCase();

                return (
                  <div
                    key={link.label}
                    ref={(el) => (menuLinksRef.current[idx] = el)}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-4">
                      {hasSubItems ? (
                        <button
                          onClick={() => toggleSubMenu(link.label.toLowerCase())}
                          className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[48px] font-bold tracking-tight hover:text-ia-blue transition-colors cursor-pointer text-left flex items-center gap-3"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-8 h-8 transition-transform duration-300 ${
                              isSubActive ? "rotate-180 text-ia-blue" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[48px] font-bold tracking-tight hover:text-ia-blue transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>

                    {/* Submenu Slide-Down */}
                    {hasSubItems && isSubActive && (
                      <div className="pl-6 mt-4 flex flex-col gap-3 border-l-2 border-ia-blue/40 transition-all duration-300">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[18px] sm:text-[20px] text-ia-text-light hover:text-ia-white transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Column: Corporate Contacts / Offices (4 columns) */}
          <div ref={contactRef} className="lg:col-span-4 flex flex-col gap-8 text-left border-t lg:border-t-0 lg:border-l border-ia-border/30 pt-8 lg:pt-0 lg:pl-16">
            <div>
              <span className="block text-[11px] font-bold tracking-[0.15em] text-ia-blue uppercase mb-4">
                Office Information
              </span>
              <h3 className="text-[20px] font-bold mb-6 text-ia-white">
                Contact Our Partners
              </h3>

              <div className="flex flex-col gap-6 text-[15px] font-light text-ia-text-light leading-relaxed">
                {/* London */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-ia-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-ia-white">London Office</h4>
                    <p>Central London</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <a 
                        href="https://wa.me/447828762984" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#25D366] hover:text-[#128C7E] flex items-center gap-2 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.488 5.35 1.489 5.503 0 9.979-4.477 9.982-9.983.001-2.667-1.036-5.176-2.92-7.062C17.17 1.71 14.665.673 12.003.673 6.5 0.673 2.023 5.15 2.02 10.656c-.001 2.054.499 3.69 1.493 5.358L2.53 21.45l5.117-1.341zM17.65 14.86c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.29-.48-2.45-1.52-.9-0.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53H8.3c-.2 0-.53.07-.8.38-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 0.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.15-.27-.23-.57-.38z" />
                        </svg>
                        <span className="hover:underline text-ia-text-light font-light">+44 782 876 2984</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-ia-border/30">
              <Button href="/contact" variant="primary" className="w-full">
                Get in Touch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
