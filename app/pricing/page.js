import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Pricing Packages | Affordable Small Business Accountants",
  description: "Transparent, fixed annual pricing for small business accounting, tax returns, self assessment, and payroll with no hidden fees.",
};

export default function Pricing() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="OUR PRICING"
        title="Affordable Small Business Accountants"
        sub="Accounts & Tax Return From £199 Per Year. Transparent pricing with all statutory filings and advice included."
        breadcrumbs={[{ label: "Pricing" }]}
      />

      {/* 2. Packages Grid */}
      <section className="bg-ia-navy py-24 relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-glow-teal pointer-events-none select-none z-0" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-glow-purple pointer-events-none select-none z-0" />

        <div className="container max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="section-header text-center max-w-[760px] mx-auto mb-16 gsap-reveal">
            <SectionLabel>Transparent Pricing</SectionLabel>
            <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight leading-tight">
              Affordable Small Business Packages
            </h2>
            <p className="text-[16px] sm:text-[18px] text-ia-text-secondary mt-4 font-light leading-relaxed">
              Simple, predictable pricing with all statutory filings and advice included. No surprise fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* CARD 1: Business Package */}
            <ScrollReveal className="h-full">
              <div className="bg-ia-navy-alt/90 backdrop-blur-md border border-ia-border/80 rounded-2xl p-8 flex flex-col h-full shadow-card hover:border-ia-blue/40 transition-all duration-300 relative group/card">
                {/* Top Header Pill */}
                <div className="mb-6 text-center">
                  <span className="inline-block bg-ia-navy border border-slate-700/80 text-white font-bold text-[14px] uppercase tracking-wider px-6 py-2 rounded-full shadow-inner">
                    Business Package
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-ia-blue mb-4 text-center">
                  Package Includes
                </h3>

                <ul className="space-y-3.5 text-[14px] text-ia-text-light font-light mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Accounts Preparation &amp; Filing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Tax Return Preparation &amp; Filing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Dedicated Chartered Accountant</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Unlimited Advice &amp; Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Timely Replies to Queries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Advice on Tax Efficiency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>All Tax Allowances Claimed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Deadline Reminders</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>Secure Document Sharing Portal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ia-blue/20 text-ia-blue flex items-center justify-center shrink-0 font-bold text-[12px]">✓</span>
                    <span>No Surprise Fees</span>
                  </li>
                </ul>

                <Link
                  href="/contact?service=Business%20Package"
                  className="w-full inline-flex items-center justify-center bg-white/5 hover:bg-ia-blue border border-white/20 hover:border-ia-blue text-white hover:text-ia-navy font-bold py-3.5 px-6 rounded-md text-[14px] uppercase tracking-wider transition-all duration-200 text-center mt-auto"
                >
                  Get Started Today
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 2: Business Package Prices (Featured Teal Card) */}
            <ScrollReveal className="h-full relative lg:-translate-y-3">
              <div className="bg-gradient-to-b from-[#0d9488] via-[#0f766e] to-[#115e59] text-white rounded-2xl p-8 flex flex-col h-full shadow-[0_0_40px_rgba(13,148,136,0.35)] border border-[#2dd4bf]/40 relative z-10">
                {/* Popular Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-ia-navy text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>

                <h3 className="text-[22px] font-extrabold text-white mb-6 text-center tracking-tight">
                  Business Package Prices
                </h3>

                {/* Turnover Table */}
                <div className="w-full flex-grow mb-6">
                  <div className="grid grid-cols-2 pb-3 mb-3 border-b border-white/25 text-[14px] font-bold">
                    <span className="underline underline-offset-4">Prices</span>
                    <span className="underline underline-offset-4 text-right">Turnover (Annual)</span>
                  </div>

                  <div className="space-y-2.5 text-[14px]">
                    <div className="grid grid-cols-2 py-1 border-b border-white/10 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£49</span>
                      <span className="text-right text-white/90 font-medium">Dormant Accounts</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 border-b border-white/10 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£199</span>
                      <span className="text-right text-white/90 font-medium">Under 1,000</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 border-b border-white/10 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£299</span>
                      <span className="text-right text-white/90 font-medium">1,000 - 45,000</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 border-b border-white/10 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£349</span>
                      <span className="text-right text-white/90 font-medium">45,000 - 90,000</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 border-b border-white/10 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£449</span>
                      <span className="text-right text-white/90 font-medium">90,000 - 150,000</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 border-b border-white/10 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£499</span>
                      <span className="text-right text-white/90 font-medium">150,000 - 250,000</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 items-center">
                      <span className="font-extrabold text-[16px] text-amber-300">£599</span>
                      <span className="text-right text-white/90 font-medium">250,000 Plus</span>
                    </div>
                  </div>

                  <p className="text-[12px] text-white/70 italic mt-4 text-center">
                    * Prices are Annual
                  </p>
                </div>

                <Link
                  href="/contact?service=Business%20Package"
                  className="w-full inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-ia-navy font-extrabold py-3.5 px-6 rounded-md text-[14px] uppercase tracking-wider shadow-md transition-all duration-200 text-center mt-auto"
                >
                  Choose Package
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 3: Self Assessment & Additional Services */}
            <ScrollReveal className="h-full">
              <div className="bg-ia-navy-alt/90 backdrop-blur-md border border-ia-border/80 rounded-2xl p-8 flex flex-col h-full shadow-card hover:border-ia-blue/40 transition-all duration-300 relative group/card">
                {/* Top Header Pill */}
                <div className="mb-4 text-center">
                  <span className="inline-block bg-ia-navy border border-slate-700/80 text-white font-bold text-[14px] uppercase tracking-wider px-6 py-2 rounded-full shadow-inner">
                    Self Assessment
                  </span>
                </div>

                <div className="mb-6 text-center">
                  <span className="text-[14px] text-ia-text-secondary block font-light">Prices from</span>
                  <span className="text-[32px] font-extrabold text-white">£59</span>
                </div>

                <div className="border-t border-ia-border/60 pt-6 mb-6 flex-grow">
                  <h4 className="text-[16px] font-bold text-ia-blue mb-4 text-center">
                    Additional Business Services
                  </h4>
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-ia-navy/60 border border-ia-border/40">
                      <span className="text-[14px] text-ia-text-light font-medium">Payroll</span>
                      <span className="text-[14px] font-bold text-ia-blue">£5 <span className="text-[12px] text-ia-text-secondary font-normal">/ payslip</span></span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-ia-navy/60 border border-ia-border/40">
                      <span className="text-[14px] text-ia-text-light font-medium">VAT Returns</span>
                      <span className="text-[14px] font-bold text-ia-blue">£29 <span className="text-[12px] text-ia-text-secondary font-normal">/ return</span></span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-ia-navy/60 border border-ia-border/40">
                      <span className="text-[14px] text-ia-text-light font-medium">Confirmation Statement</span>
                      <span className="text-[14px] font-bold text-ia-blue">£39</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact?service=Additional%20Services"
                  className="w-full inline-flex items-center justify-center bg-white/5 hover:bg-ia-blue border border-white/20 hover:border-ia-blue text-white hover:text-ia-navy font-bold py-3.5 px-6 rounded-md text-[14px] uppercase tracking-wider transition-all duration-200 text-center mt-auto"
                >
                  Enquire Now
                </Link>
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

