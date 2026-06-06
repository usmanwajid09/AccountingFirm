import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Management Reporting",
  description: "Gain absolute clarity over your numbers. We build Profit & Loss statement packs, cash flow analysis worksheets, and dashboard metrics.",
};

export default function ManagementReporting() {
  const checklist = [
    "Monthly Profit & Loss (P&L) statements",
    "Cash Flow statements (Indirect and Direct methods)",
    "Balance Sheet health checks & audits",
    "Key Performance Indicator (KPI) dashboards",
    "Shareholder and Board financial slide decks",
    "Departmental cost allocations and reviews",
    "Real-time cloud dashboard access",
    "Partner advisory meetings and consulting",
  ];

  const software = [
    { name: "Spotlight Reporting", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Xero_logo.svg" }, // placeholder sw indicator
    { name: "Fathom Analytics", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Quickbooks_Logo.svg" },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="MANAGEMENT REPORTING"
        title="Insight-Driven Reports. Smarter Decisions."
        sub="Let Internal Accountants analyze the details so you have clear visual cues to guide business direction."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Management Reporting" }
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
                  What's Included in Our Management Reporting?
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
                  Why Use Management Reporting?
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    General ledger transactions list what payments were completed, but they fail to summarize visual metrics like working capital trends, margins, or cost variance indicators.
                  </p>
                  <p>
                    With our custom reporting packages, you gain C-suite analysis at an affordable rate. We build custom dashboards using leading cloud indicators to monitor exact operational margins and cash targets, providing clear direction for growth.
                  </p>
                </div>
              </ScrollReveal>

              {/* Software Integration */}
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  Reporting Platforms We Integrate
                </h2>
                <div className="flex flex-wrap items-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  {software.map((sw, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[15px] font-semibold text-white">&bull; {sw.name}</span>
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

      {/* Related Services Grid */}
      <section className="bg-ia-bg-light py-24 border-t border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <h3 className="text-[22px] font-bold text-white mb-10 text-left tracking-tight">
            You Might Also Be Interested In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                image="/images/bookkeeping_concept.png"
                title="Bookkeeping Services"
                description="Keep your ledgers accurate and compliance-ready. We manage VAT returns, bank reconciliations, and supplier payments."
                href="/services/bookkeeping-services"
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
