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
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      href: "/services/bookkeeping-services",
      desc: "Maintain complete global compliance with prompt transaction entries, invoice tracking, and ledger reconciliation. Our qualified CPAs handle your daily bookkeeping entries in real-time.",
    },
    {
      num: "02",
      title: "Management Reporting",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      href: "/services/management-reporting",
      desc: "Unlock complete visibility over your global cash flow. We compile detailed Profit & Loss statements, balance sheets, and interactive KPI dashboards designed for international directors.",
    },
    {
      num: "03",
      title: "Annual Accounts",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      href: "/services/annual-accounts",
      desc: "Prepare and file statutory annual accounts with tax authorities worldwide. We ensure full compliance with GAAP and IFRS disclosures.",
    },
    {
      num: "04",
      title: "Self Assessments",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      href: "/services/self-assessments",
      desc: "Simplify personal tax obligations for executives and contractors. We optimize tax returns to utilize all global reliefs and deductions.",
    },
    {
      num: "05",
      title: "Cashflows",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
      href: "/services/cashflows",
      desc: "Monitor your liquidity across multiple currencies. We build predictive cash flow models, helping startups manage runways and avoid deficits.",
    },
    {
      num: "06",
      title: "Tax Advisory",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      href: "/services/tax-advisory",
      desc: "Specialist corporate structure and international tax planning. We advise on transfer pricing, cross-border transactions, and global tax efficiency.",
    },
    {
      num: "07",
      title: "Budgeting",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=80",
      href: "/services/budgeting-financial-planning",
      desc: "Strategic 12-month multi-scenario forecasting models and cost variance metrics that enable your business to grow with absolute confidence.",
    },
    {
      num: "08",
      title: "HMRC investigations",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
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
        sub="From day-to-day bookkeeping to strategic financial planning, Internal Accountants has you covered."
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
