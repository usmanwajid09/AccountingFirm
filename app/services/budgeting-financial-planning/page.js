import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import RunwayCalculator from "../../components/RunwayCalculator";
import ServiceCard from "../../components/ServiceCard";
import SectionLabel from "../../components/SectionLabel";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Budgeting & Financial Planning",
  description: "Establish financial safety rails. We draft scenario budgets, runway calculations, and budget cost variance reviews.",
};

export default function BudgetingPlanning() {
  const checklist = [
    "Multi-scenario budget forecasts",
    "Net burn rate & cash runway auditing",
    "Monthly budget-vs-actual variance analysis",
    "CAPEX return on investment forecasting",
    "Growth & recruitment impact modeling",
    "Solvency risk buffers alerts",
    "Dynamic rolling 12-month projections",
    "Board strategic session briefings",
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="BUDGETING & PLANNING"
        title="Plan Ahead. Grow with Confidence."
        sub="Let Internal Accountants establish visual financial guardrails so you expand your business securely."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Budgeting & Financial Planning" }
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
                  What's Included in Our Planning Service?
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
                  Why Outsource Your Financial Planning?
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    Reconciliation checks tell you where your cash went, but planning maps where it needs to go. Without a dynamic, scenario-based budget model, expanding your payroll or committing capital is a blind risk.
                  </p>
                  <p>
                    We build rolling 12-month projections that adjust with your actual reconciled income. We compute Net Burn rates, alert you when buffer reserves are crossed, and conduct monthly budget-vs-actual variance audits to prevent overhead creep.
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
              Cash Runway Calculator
            </h2>
          </div>
          <ScrollReveal>
            <RunwayCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services Grid */}
      <section className="bg-ia-bg-light py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <h3 className="text-[22px] font-bold text-white mb-10 text-left tracking-tight">
            You Might Also Be Interested In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                title="Bookkeeping Services"
                description="Keep your ledgers accurate and compliance-ready. We manage VAT returns, bank reconciliations, and supplier payments."
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

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
