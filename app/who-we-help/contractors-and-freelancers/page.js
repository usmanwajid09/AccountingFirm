import PageHero from "../../components/PageHero";
import SectionLabel from "../../components/SectionLabel";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";
import Button from "../../components/Button";
import { CheckCircle2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Contractor & Freelancer Accounting | IR35 & Dividend Tax Planning",
  description: "Specialist contractor accountants. We handle IR35 status reviews, dividend planning, fixed-fee bookkeeping, and flat-rate VAT compliance.",
};

export default function ContractorsAndFreelancers() {
  const benefits = [
    "Full IR35 contract reviews and compliance determination advice",
    "Filing of statutory annual accounts and company tax returns (CT600)",
    "Management of personal Self-Assessment tax returns",
    "VAT flat-rate scheme calculations and quarterly submissions",
    "Strategic planning for director salary, dividends, and retained earnings",
    "Digital bookkeeping with Xero and automated bank feeds"
  ];

  const faqs = [
    {
      q: "What is IR35 and how does it affect contractors?",
      a: "IR35 is tax legislation designed to identify 'disguised employees'—individuals who provide services via an intermediary (like a limited company) but who would be treated as employees if they were engaged directly. If your contract is 'inside IR35', you must pay tax and NI at standard employment rates. If 'outside IR35', you can pay yourself tax-efficiently via dividends. We review your contracts and working arrangements to help establish your correct IR35 status."
    },
    {
      q: "Should I trade as a limited company or sole trader as a freelancer?",
      a: "Trading through a limited company is often more tax-efficient once your earnings exceed £40,000 to £50,000, as it allows you to utilize dividends, control when you withdraw profits, and protect your personal assets. However, it involves more administrative work and filing requirements. Sole trader status is simpler to set up and manage, but offers fewer tax planning opportunities. We help you choose the best structure for your situation."
    },
    {
      q: "What is the VAT Flat Rate Scheme?",
      a: "The Flat Rate Scheme simplifies VAT for small businesses. You charge VAT at standard rates (20%) to clients but pay a lower, fixed flat rate (e.g. 14.5% for IT consultants) to HMRC. You cannot reclaim VAT on purchases (except capital assets over £2,000), but the scheme can simplify admin and sometimes result in tax savings. We calculate if this scheme is beneficial for you."
    },
    {
      q: "Can you handle multi-currency accounting for global clients?",
      a: "Yes. Many of our freelance clients work with agencies or companies in the US, Europe, or Asia. We configure Xero to handle multi-currency transactions, automatic exchange rate calculations, and cross-border invoicing compliance."
    }
  ];

  return (
    <>
      <PageHero 
        eyebrow="WHO WE HELP"
        title="Contractor & Freelancer Accounting"
        sub="Maximize your take-home pay and secure your IR35 compliance. We handle your contractor limited company accounts, VAT, dividends, and self-assessments for a fixed fee."
        breadcrumbs={[
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Contractors & Freelancers" }
        ]}
      />

      {/* Overview Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 gsap-reveal text-left">
              <SectionLabel>Independent Professional Accounting</SectionLabel>
              <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-6 tracking-tight leading-tight">
                Tax-efficient corporate structures and contract compliance
              </h2>
              <div className="text-[16px] text-ia-text-secondary font-light space-y-6 leading-relaxed">
                <p>
                  As an independent contractor or freelancer, you are both the worker and the director. Your main goal is to maximize your contract earnings and take-home pay, while ensuring you remain completely compliant with HMRC's strict compliance rules.
                </p>
                <p>
                  Internal Accountants specializes in contractor limited companies. We structure your accounting plan to balance low-salary payouts, dividend drawings, and company expense claims to minimize your overall tax burden.
                </p>
                <p>
                  We keep your books organized using digital automation (Xero and mobile scanning), meaning you only need to spend minutes a month on your bookkeeping.
                </p>
              </div>
            </div>

            {/* Side Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full rounded-md overflow-hidden shadow-card min-h-[360px] border border-ia-border/30 bg-ia-navy-alt p-8 sm:p-10 flex flex-col justify-between">
                <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-glow-teal pointer-events-none select-none z-0" />
                <div className="relative z-10">
                  <h3 className="text-[20px] font-bold text-white mb-6">
                    Contractor Package Features
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-ia-text-light font-light leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-ia-blue shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10 pt-8 border-t border-ia-border/20 mt-8">
                  <Button href="/contact" variant="primary" className="w-full text-center">
                    Get Contractor Quote
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IR35 & VAT Compliance */}
      <section className="bg-ia-bg-light py-24 border-t border-b border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-ia-blue-tint border border-ia-blue/20 rounded-md p-8 shadow-card flex flex-col justify-center text-left">
                <span className="text-[11px] font-bold text-ia-blue uppercase tracking-wider mb-2">
                  TAX ADVANTAGE
                </span>
                <h3 className="text-[22px] font-bold text-white mb-4">
                  IR35 Status Reviews
                </h3>
                <p className="text-[14px] text-ia-text-light font-light leading-relaxed">
                  We conduct detailed reviews of both your written service contracts and actual working practices to verify your IR35 status, ensuring you avoid costly HMRC audits and penalties.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 text-left gsap-reveal">
              <SectionLabel>Contractor Optimizations</SectionLabel>
              <h2 className="text-[30px] sm:text-[34px] font-bold text-white mb-6 tracking-tight">
                Maximizing contract take-home pay
              </h2>
              <p className="text-[16px] text-ia-text-secondary font-light leading-relaxed mb-6">
                Trading through a limited company is highly efficient when managed by experts. We set up tax structures that let you extract your earnings legally with the lowest possible tax rate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-ia-text-light font-light">
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Dividend Planning</strong>
                  Take advantage of the lower personal tax rates on dividends and avoid National Insurance contributions.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Flat Rate VAT</strong>
                  We analyze if HMRC's Flat Rate VAT Scheme will simplify your bookkeeping and increase your contract margin.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Allowable Expenses</strong>
                  Claim tax relief on business travel, software subscriptions, laptops, training courses, and home-office expenses.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Retained Earnings</strong>
                  Leave surplus cash inside your limited company to withdraw tax-efficiently in future tax years or via wind-up schemes.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[32px] font-bold text-white tracking-tight">
              Contractor & Freelancer FAQs
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} className="border border-ia-border/40 rounded-md p-6 bg-ia-navy-alt text-left">
                <h4 className="text-[17px] font-bold text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-ia-blue shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-[14px] text-ia-text-secondary font-light leading-relaxed pl-8">
                  {faq.a}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Maximize your independent contract profit"
        sub="Ditch the administrative burden and partner with specialist contractor accountants."
        btnText="Connect With Us"
      />
    </>
  );
}
