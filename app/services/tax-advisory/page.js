import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import SectionLabel from "../../components/SectionLabel";
import RDCalculator from "../../components/RDCalculator";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Tax Advisory & Planning Services | UK Corporate Structure",
  description: "Bespoke corporate tax planning and advice. We structure group entities, claim R&D tax relief, and audit capital allowances legally.",
};

export default function TaxAdvisory() {
  const checklist = [
    "Corporate structure and group reorganization advice",
    "Research & Development (R&D) Tax Credits preparation",
    "EIS and SEIS compliance for startup investment capital",
    "Cross-border tax planning and transfer pricing structures",
    "Capital allowances auditing (Full Expensing relief)",
    "International VAT compliance and customs structure advice",
    "Business Asset Disposal Relief exit strategy planning",
    "Director salary and dividend tax-efficiency planning",
  ];

  return (
    <>
      <PageHero
        eyebrow="TAX ADVISORY"
        title="Strategic Structuring. Global Tax Efficiency."
        sub="Proactive tax solutions for growing SMEs. We structure corporate tax plans, cross-border operations, and capital reliefs."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Tax Advisory" }
        ]}
      />

      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% Column */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  What's Included in Our Tax Advisory Service?
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
                  Protect Your Operating Margins
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    Tax should not be an afterthought handled only when submitting end-of-year tax returns. Proactive corporate tax planning protects your hard-earned profits and frees up cash flow to invest in hires, product development, or expansion.
                  </p>
                  <p>
                    Our ACA/CTA-qualified advisors review your business model, corporate structures, and capital plans. We help you navigate R&D claims, set up tax-efficient employee share schemes (EMI), maximize capital allowances, and structure group companies to minimize double taxation globally.
                  </p>
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
              R&D Tax Credit Calculator
            </h2>
          </div>
          <ScrollReveal>
            <RDCalculator />
          </ScrollReveal>
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
                image="/images/card_folders.png"
                title="Annual Accounts"
                description="Prepare and file statutory annual accounts with Companies House. We compile CT600 tax returns with precision."
                href="/services/annual-accounts"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                image="/images/reporting_dashboard.png"
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
