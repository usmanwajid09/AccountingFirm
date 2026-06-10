import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Annual Accounts Services | Statutory Reporting & Corporate Tax",
  description: "Prepare and file statutory annual accounts with Companies House and HMRC. Ensure full compliance with UK GAAP and FRS disclosures.",
};

export default function AnnualAccounts() {
  const checklist = [
    "Filing of annual accounts with Companies House",
    "Corporation tax returns calculation & submission (CT600)",
    "GAAP and FRS 102/105 disclosure compliance",
    "Preparation of director reports, balance sheets, and P&L",
    "Depreciation, assets, and capital gains adjustments",
    "Accruals and deferred income adjustments",
    "Year-end financial analysis and review meetings",
    "Liaison with external auditors if required",
  ];

  const software = [
    { name: "Xero", logo: "/images/xero_logo.svg" },
    { name: "QuickBooks", logo: "/images/quickbooks_logo.svg" },
    { name: "Sage", logo: "/images/sage_logo.svg" },
  ];

  return (
    <>
      <PageHero
        eyebrow="ANNUAL ACCOUNTS"
        title="Statutory Reporting. Compliant Filings."
        sub="Leave Companies House and HMRC statutory accounts preparation to our Chartered Accountants, ensuring full compliance and peace of mind."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Annual Accounts" }
        ]}
      />

      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% Column */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  What's Included in Our Annual Accounts Service?
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

              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  Why Outsource Your Statutory Accounts?
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    Every active UK limited company has a legal obligation to prepare and submit statutory annual accounts to Companies House and HMRC. The rules regarding disclosures, FRS 102/105 standards, and corporation tax calculations (CT600) are complex. Missing your filing deadline by even a single day results in automatic HMRC penalties.
                  </p>
                  <p>
                    Our ACA/ACCA-accredited team translates your bookkeeping ledgers into final, compliant statutory accounts. We identify tax reliefs (such as capital allowances and business expenses) to legally minimize your corporation tax liability before submissions.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  Software We Work With
                </h2>
                <div className="flex flex-wrap items-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  {software.map((sw, idx) => (
                    <div key={idx} className="flex items-center gap-2">
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

      {/* Related Services */}
      <section className="bg-ia-bg-light py-24 border-t border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <h3 className="text-[22px] font-bold text-white mb-10 text-left tracking-tight">
            You Might Also Be Interested In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                title="Bookkeeping"
                description="Reconcile bank balances, track purchase ledgers, and manage VAT returns. We maintain compliant daily transaction records."
                href="/services/bookkeeping-services"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                title="Management Reporting"
                description="Gain absolute clarity over your numbers. We build cash flow analysis, dashboard reports, and P&L boards."
                href="/services/management-reporting"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
