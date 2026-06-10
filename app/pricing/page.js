import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Pricing Packages | Fixed Monthly Fees",
  description: "Explore our fixed-fee accounting and bookkeeping packages: Basic (£69/mo), Standard (£99/mo), and Advanced (£149/mo) with no hidden surprises.",
};

export default function Pricing() {
  const FilledBlueCheck = () => (
    <div className="w-5 h-5 rounded-full bg-ia-blue flex items-center justify-center shrink-0">
      <svg className="w-3.5 h-3.5 text-ia-navy" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );

  const FilledGoldCheck = () => (
    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
      <svg className="w-3.5 h-3.5 text-ia-navy" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );

  const basicFeatures = [
    "Annual Accounts",
    "Corporation Tax Return",
    "SATR (1 Director)",
    "Simple Payroll for 1 Employee",
    "Unlimited Query Support",
    "Filings",
  ];

  const standardFeatures = [
    "Bookkeeping",
    "Annual Accounts",
    "VAT Return",
    "Payroll / CIS",
    "SATR (2 Directors)",
    "Software Support",
    "Filings",
    "Confirmation Statement",
    "Query Support",
  ];

  const advancedFeatures = [
    "Bookkeeping",
    "Annual Accounts",
    "VAT Returns",
    "SATR",
    "Management Accounts",
    "Payroll / CIS",
    "Software Migration",
    "Balance Sheet Health Check",
    "CGT Returns",
    "HMRC Investigation Support",
    "Software Support",
    "Filings",
    "Confirmation Statement",
    "Restitution Services",
    "Budgeting & Financing",
    "Cashflow Management",
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="OUR PRICING"
        title="Transparent, Fixed Monthly Fees"
        sub="Simple, predictable pricing structured to support your business as it grows, with no hidden surprises."
        breadcrumbs={[{ label: "Pricing" }]}
      />

      {/* 2. Packages Grid */}
      <section className="bg-ia-white py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-glow-teal pointer-events-none select-none z-0" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-glow-purple pointer-events-none select-none z-0" />

        <div className="container max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="section-header text-center max-w-[700px] mx-auto mb-20 gsap-reveal">
            <SectionLabel>Our Service Packages</SectionLabel>
            <h2 className="text-[32px] md:text-[38px] font-bold text-white tracking-tight leading-tight">
              Pricing Packages Tailored to Your Growth
            </h2>
            <p className="text-[16px] text-ia-text-secondary mt-4 font-light">
              Choose the level of financial oversight your company needs. Switch packages anytime as your business scales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start gsap-stagger-grid">
            
            {/* 1. BASIC CARD */}
            <ScrollReveal className="h-full">
              <div className="bg-ia-navy-alt border border-ia-border rounded-xl p-8 flex flex-col h-full shadow-card hover:border-ia-blue/30 transition-all duration-300 group/card min-h-[750px]">
                {/* Header block */}
                <div className="mb-8 text-center pb-6 border-b border-ia-border">
                  <h3 className="text-[18px] font-bold text-ia-blue uppercase tracking-widest mb-3">
                    Basic
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-[44px] font-extrabold text-white leading-none">£69</span>
                    <span className="text-[14px] text-ia-text-secondary font-light">/month</span>
                  </div>
                  <p className="text-[14px] text-ia-text-secondary font-light min-h-[40px] leading-relaxed">
                    Perfect for sole traders & small limited companies
                  </p>
                </div>

                {/* Features list */}
                <div className="flex-grow">
                  <ul className="flex flex-col gap-4 text-left mb-8">
                    {basicFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[14px] text-ia-text-light font-light">
                        <FilledBlueCheck />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Footnote */}
                  <p className="text-[12px] text-ia-text-muted italic mt-4 mb-8">
                    Note: +£200 for 2nd Director SATR
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <Link
                    href="/contact?service=General%20Enquiry&message=Hi,%20I%20am%20interested%20in%20the%20Basic%20package%20(£69/month)."
                    className="w-full inline-flex items-center justify-center bg-ia-blue text-ia-navy font-bold py-3.5 px-6 rounded-[4px] text-[15px] uppercase tracking-wider shadow-sm hover:bg-ia-blue-dark transition-all duration-200"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. STANDARD CARD (MOST POPULAR) */}
            <ScrollReveal className="h-full relative lg:-translate-y-4">
              {/* Popular Tag */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-ia-navy text-[11px] font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider z-20 shadow-md flex items-center gap-1">
                <span>★</span> Most Popular
              </div>

              <div className="bg-ia-navy-alt border-2 border-amber-400/90 rounded-xl p-8 flex flex-col h-full shadow-[0_0_30px_rgba(251,191,36,0.12)] hover:border-amber-400 transition-all duration-300 relative z-10 min-h-[750px]">
                {/* Header block */}
                <div className="mb-8 text-center pb-6 border-b border-ia-border">
                  <h3 className="text-[18px] font-bold text-amber-400 uppercase tracking-widest mb-3">
                    Standard
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-[44px] font-extrabold text-white leading-none">£99</span>
                    <span className="text-[14px] text-ia-text-secondary font-light">/month</span>
                  </div>
                  <p className="text-[14px] text-ia-text-secondary font-light min-h-[40px] leading-relaxed">
                    Ideal for growing businesses with full needs compliance
                  </p>
                </div>

                {/* Features list */}
                <div className="flex-grow">
                  <ul className="flex flex-col gap-4 text-left mb-8">
                    {standardFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[14px] text-ia-text-light font-light">
                        <FilledGoldCheck />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <Link
                    href="/contact?service=Bookkeeping%20Services&message=Hi,%20I%20am%20interested%20in%20the%20Standard%20package%20(£99/month)."
                    className="w-full inline-flex items-center justify-center bg-amber-400 text-ia-navy font-bold py-3.5 px-6 rounded-[4px] text-[15px] uppercase tracking-wider shadow-sm hover:bg-amber-500 transition-all duration-200"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. ADVANCED CARD */}
            <ScrollReveal className="h-full">
              <div className="bg-ia-navy-alt border border-ia-border rounded-xl p-8 flex flex-col h-full shadow-card hover:border-ia-blue/30 transition-all duration-300 group/card min-h-[750px]">
                {/* Header block */}
                <div className="mb-8 text-center pb-6 border-b border-ia-border">
                  <h3 className="text-[18px] font-bold text-ia-blue uppercase tracking-widest mb-3">
                    Advanced
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-[44px] font-extrabold text-white leading-none">£149</span>
                    <span className="text-[14px] text-ia-text-secondary font-light">/month</span>
                  </div>
                  <p className="text-[14px] text-ia-text-secondary font-light min-h-[40px] leading-relaxed">
                    Complete financial management for ambitious businesses
                  </p>
                </div>

                {/* Features list */}
                <div className="flex-grow">
                  <ul className="flex flex-col gap-4 text-left mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4">
                    {advancedFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[14px] text-ia-text-light font-light py-0.5">
                        <FilledBlueCheck />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <Link
                    href="/contact?service=Management%20Reporting&message=Hi,%20I%20am%20interested%20in%20the%20Advanced%20package%20(£149/month)."
                    className="w-full inline-flex items-center justify-center bg-ia-blue text-ia-navy font-bold py-3.5 px-6 rounded-[4px] text-[15px] uppercase tracking-wider shadow-sm hover:bg-ia-blue-dark transition-all duration-200"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <CTABanner
        title="Need a custom configuration?"
        sub="We can structure tailored packages for group businesses or enterprises with complex requirements. Let's review."
        btnText="Contact Our Partners"
      />
    </>
  );
}
