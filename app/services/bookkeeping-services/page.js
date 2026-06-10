import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import SectionLabel from "../../components/SectionLabel";
import BookkeepingROICalculator from "../../components/BookkeepingROICalculator";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Bookkeeping Services",
  description: "Prompt and accurate bookkeeping services. Reconcile bank balances, manage VAT returns, and structure accounts payable ledgers.",
};

export default function BookkeepingServices() {
  const checklist = [
    "Transaction recording and reconciliation",
    "Bank feed management & Open Banking sync",
    "VAT preparation and submission",
    "Supplier and purchase ledger management",
    "Sales ledger management & invoicing support",
    "Monthly financial summary reports",
    "Software integration (Xero, QuickBooks, Sage)",
    "Year-end preparation and auditor support",
  ];

  const software = [
    { name: "Xero", logo: "/images/xero_logo.svg" },
    { name: "QuickBooks", logo: "/images/quickbooks_logo.svg" },
    { name: "Sage", logo: "/images/sage_logo.svg" },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="BOOKKEEPING SERVICES"
        title="Accurate Books. Total Peace of Mind."
        sub="Let Internal Accountants handle the day-to-day so your records are always correct and compliant."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Bookkeeping Services" }
        ]}
      />

      {/* Main Content Layout Grid */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% Column */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              {/* Checklist */}
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  What's Included in Our Bookkeeping Service?
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[16px] text-ia-text-secondary">
                  {checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-ia-blue font-bold text-[18px] leading-none">&bull;</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Story */}
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  Why Outsource Your Bookkeeping?
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    Reconciling receipts and entering invoices is an essential operational chore, but it does not drive revenue. When business owners spend late nights balancing cash streams, they subtract focus from core product development and market expansion.
                  </p>
                  <p>
                    By outsourcing your ledgers to Internal Accountants, you secure professional, audit-proof books that are balanced weekly. Our team handles VAT timelines with precision and ensures all records are in compliance with HMRC rules, giving you absolute security.
                  </p>
                </div>
              </ScrollReveal>

              {/* Software Integration */}
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  Software We Work With
                </h2>
                <div className="flex flex-wrap items-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  {software.map((sw, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={sw.logo} alt={sw.name} className="h-8 max-w-[120px] object-contain" />
                      <span className="text-[15px] font-semibold text-white">{sw.name}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

            </div>

            {/* Right 40% Sidebar */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <SidebarForm />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="bg-ia-bg-light py-24 border-t border-b border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="section-header text-center max-w-[700px] mx-auto mb-16 reveal">
            <SectionLabel>Interactive Tool</SectionLabel>
            <h2 className="text-[32px] md:text-[36px] font-bold text-white tracking-tight">
              Bookkeeping Value & Savings Calculator
            </h2>
          </div>
          <ScrollReveal>
            <BookkeepingROICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services Grid */}
      <section className="bg-ia-bg-light py-24 border-t border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <h3 className="text-[22px] font-bold text-white mb-10 text-left tracking-tight">
            You Might Also Be Interested In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                image="/images/reporting_dashboard.png"
                title="Management Reporting"
                description="Gain absolute clarity over your numbers. We build cash flow analysis, dashboard reports, and P&L boards."
                href="/services/management-reporting"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                image="/images/hero_finance.png"
                title="Budgeting & Financial Planning"
                description="Plan for tomorrow. We build cash runway models, scenario forecasts, and variance analysis reports."
                href="/services/budgeting-financial-planning"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
