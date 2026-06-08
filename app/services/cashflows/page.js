import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Cashflow Management & Forecasting Services | Runway Optimization",
  description: "Monitor and project cash flow. We build rolling 13-week cash forecasts, burn rate models, and multi-currency scenario plans for startups and SMEs.",
};

export default function Cashflows() {
  const checklist = [
    "Rolling 13-week and 12-month cash flow forecasts",
    "Burn rate analysis and capital runway estimations",
    "Accounts receivable aging analysis and recovery strategy",
    "Accounts payable planning to protect working capital",
    "Multi-currency cash balance tracking and hedging advice",
    "Capital expenditure (CapEx) feasibility studies",
    "Scenario modeling (Best-case vs. Worst-case plans)",
    "Working capital cycle optimization",
  ];

  const software = [
    { name: "Xero", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Xero_logo.svg" },
    { name: "QuickBooks", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Quickbooks_Logo.svg" },
  ];

  return (
    <>
      <PageHero
        eyebrow="CASHFLOW MANAGEMENT"
        title="Liquidity Control. Predictable Runway."
        sub="Optimize your operational runway. We build real-time multi-currency cash flow models and predictive balance sheets."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Cashflows" }
        ]}
      />

      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% Column */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  What's Included in Our Cashflow Service?
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
                  Never Run Out of Cash
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    A company can be profitable on paper but still fail if it runs out of cash. Startups and scaling businesses face constant challenges managing supplier payment schedules, outstanding invoices, payroll, and capital investments across different currencies.
                  </p>
                  <p>
                    We build rolling cash flow models that import transaction data from your bank feeds in real-time. By modeling when sales cash actually lands and when expenses depart, we calculate your true runway, burn rate, and identify cash deficits months before they happen, giving you time to adjust.
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

      {/* Related Services */}
      <section className="bg-ia-bg-light py-24 border-t border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <h3 className="text-[22px] font-bold text-white mb-10 text-left tracking-tight">
            You Might Also Be Interested In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                image="/images/bookkeeping_concept.png"
                title="Budgeting & Financial Planning"
                description="Strategic 12-month multi-scenario forecasting models and cost variance metrics that enable growth."
                href="/services/budgeting-financial-planning"
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
