import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import SectionLabel from "../../components/SectionLabel";
import DividendTaxCalculator from "../../components/DividendTaxCalculator";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Self Assessment Services | Personal Income Tax Returns",
  description: "Simplify your personal tax obligations. We calculate income tax liabilities, optimize reliefs, and file HMRC SA100 Self-Assessment forms on time.",
};

export default function SelfAssessments() {
  const checklist = [
    "Calculation of personal income tax liability",
    "Filing of HMRC SA100 and supplementary forms",
    "Allowable business expenses review and deduction claims",
    "Employment, self-employment, and dividend income schedules",
    "Rental property income and capital gains calculations",
    "Foreign income and double taxation relief compliance",
    "Pension contribution and gift aid tax relief claims",
    "HMRC Payment on Account scheduling and advice",
  ];

  const software = [
    { name: "Xero", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Xero_logo.svg" },
    { name: "HMRC MTD", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sage_Group_logo.svg" }, // Sage/HMRC mock
  ];

  return (
    <>
      <PageHero
        eyebrow="SELF ASSESSMENTS"
        title="Personal Tax Returns. Optimized Reliefs."
        sub="Ensure your SA100 Self-Assessment is prepared accurately, optimizing allowances and submitted on time to HMRC."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Self Assessments" }
        ]}
      />

      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% Column */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  What's Included in Our Self Assessment Service?
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
                  Avoid the January Tax Rush
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    Completing a personal Self-Assessment tax return is stressful, especially when balancing dividend income from your business, property rentals, interest, and capital gains. If you file late or report figures incorrectly, HMRC issues immediate fines and triggers interest charges on outstanding tax.
                  </p>
                  <p>
                    Our tax experts collect your financial records, audit your allowable deductions (such as working-from-home allowances, travel, and pension reliefs), and prepare your tax return. We submit the paperwork directly to HMRC and advise you on upcoming Payment on Account schedules to protect your personal cash flow.
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
              Dividend Tax Calculator
            </h2>
          </div>
          <ScrollReveal>
            <DividendTaxCalculator />
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
                description="Compile statutory limited company accounts and CT600 tax returns. We coordinate company books and personal filings."
                href="/services/annual-accounts"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                image="/images/bookkeeping_concept.png"
                title="Bookkeeping"
                description="Ditch the receipt piles. We manage daily bookkeeping transactions, VAT returns, and reconciliations."
                href="/services/bookkeeping-services"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
