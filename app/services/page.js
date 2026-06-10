import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Our Services",
  description: "Explore our outsourced financial accounting, bookkeeping, management dashboard reports, and scenario forecasting models.",
};

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Bookkeeping",
      image: "/images/service_bookkeeping.png",
      href: "/services/bookkeeping-services",
      desc: "Maintain complete global compliance with prompt transaction entries, invoice tracking, and ledger reconciliation. Our qualified CPAs handle your daily bookkeeping entries in real-time.",
    },
    {
      num: "02",
      title: "Management Reporting",
      image: "/images/service_reporting.png",
      href: "/services/management-reporting",
      desc: "Unlock complete visibility over your global cash flow. We compile detailed Profit & Loss statements, balance sheets, and interactive KPI dashboards designed for international directors.",
    },
    {
      num: "03",
      title: "Annual Accounts",
      image: "/images/service_accounts.png",
      href: "/services/annual-accounts",
      desc: "Prepare and file statutory annual accounts with tax authorities worldwide. We ensure full compliance with GAAP and IFRS disclosures.",
    },
    {
      num: "04",
      title: "Self Assessments",
      image: "/images/service_assessments.png",
      href: "/services/self-assessments",
      desc: "Simplify personal tax obligations for executives and contractors. We optimize tax returns to utilize all global reliefs and deductions.",
    },
    {
      num: "05",
      title: "Cashflows",
      image: "/images/service_cashflows.png",
      href: "/services/cashflows",
      desc: "Monitor your liquidity across multiple currencies. We build predictive cash flow models, helping startups manage runways and avoid deficits.",
    },
    {
      num: "06",
      title: "Tax Advisory",
      image: "/images/service_advisory.png",
      href: "/services/tax-advisory",
      desc: "Specialist corporate structure and international tax planning. We advise on transfer pricing, cross-border transactions, and global tax efficiency.",
    },
    {
      num: "07",
      title: "Budgeting",
      image: "/images/service_budgeting.png",
      href: "/services/budgeting-financial-planning",
      desc: "Strategic 12-month multi-scenario forecasting models and cost variance metrics that enable your business to grow with absolute confidence.",
    },
    {
      num: "08",
      title: "HMRC investigations",
      image: "/images/service_investigations.png",
      href: "/services/hmrc-investigations",
      desc: "Secure expert audit defense and strategic representation. We manage all inquiries, correspondence, and disclosures with HMRC to protect your interests and minimize tax exposure.",
    },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="OUR SERVICES"
        title="Accounting Services Tailored to Your Business"
        sub="From day-to-day bookkeeping to strategic financial planning — Internal Accountants has you covered."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* 2. Services List */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="section-header text-left gsap-reveal mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="gsap-reveal text-[32px] md:text-[36px] font-bold text-white tracking-tight">
              Comprehensive Financial Oversight
            </h2>
          </div>

          <div className="flex flex-col gap-12 gsap-stagger-grid">
            {services.map((service, index) => (
              <div key={service.num}>
                <ServiceCard
                  horizontal
                  image={service.image}
                  title={service.title}
                  description={service.desc}
                  href={service.href}
                  stepNumber={service.num}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <CTABanner
        title="Not sure which service is right for you?"
        sub="Let's talk and figure out your ideal bookkeeping or reporting configuration."
        btnText="Let's Talk"
      />
    </>
  );
}
