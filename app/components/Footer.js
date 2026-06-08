import Link from "next/link";

export default function Footer() {
  const serviceLinks = [
    { label: "Bookkeeping", href: "/services/bookkeeping-services" },
    { label: "Management Reporting", href: "/services/management-reporting" },
    { label: "Budgeting & Financial Planning", href: "/services/budgeting-financial-planning" },
    { label: "All Services Overview", href: "/services" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Who We Help", href: "/who-we-help" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-ia-navy text-ia-white pt-20 pb-8 px-6 md:px-12 relative z-10 border-t border-white/5">
      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="logo flex items-center gap-3 shrink-0">
              <img 
                src="/images/logo.png" 
                alt="internal accountants logo" 
                className="h-[40px] w-auto object-contain" 
              />
              <span className="font-bold text-[18px] sm:text-[20px] tracking-wider uppercase text-white font-primary">
                Internal Accountants
              </span>
            </Link>
            <p className="text-[14px] text-ia-text-light font-light leading-relaxed max-w-[280px]">
              Internal Accountants delivers expert bookkeeping, management reporting, and financial planning for growing businesses nationwide.
            </p>
          </div>

          {/* Column 2: Services Links */}
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold text-ia-text-muted tracking-[0.1em] uppercase mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-[14px] text-ia-text-light hover:text-ia-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold text-ia-text-muted tracking-[0.1em] uppercase mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-[14px] text-ia-text-light hover:text-ia-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold text-ia-text-muted tracking-[0.1em] uppercase mb-6">
              Contact Details
            </h4>
            <div className="flex flex-col gap-3 text-[14px] text-ia-text-light font-light leading-relaxed">
              <p>📍 Central London</p>
              <p className="flex items-center gap-2">
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
                  <span className="hover:underline">+44 782 876 2984</span>
                </a>
              </p>
              <p>✉️ <a href="mailto:partners@internalaccountants.com" className="hover:text-ia-white underline">partners@internalaccountants.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[13px] text-ia-text-secondary">
            &copy; 2026 Internal Accountants Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-ia-text-secondary hover:text-ia-white transition-colors"
              aria-label="LinkedIn"
            >
              {/* LinkedIn SVG Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
