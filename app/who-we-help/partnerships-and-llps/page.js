import PageHero from "../../components/PageHero";
import SectionLabel from "../../components/SectionLabel";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";
import Button from "../../components/Button";
import { CheckCircle2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Partnership & LLP Accountants | SA800 Tax & Profit Distribution",
  description: "Accurate partnership accounting. We manage SA800 tax returns, LLP statutory accounts, capital accounts tracking, and partner profit allocation.",
};

export default function PartnershipsAndLLPs() {
  const benefits = [
    "Preparation and submission of the Partnership Tax Return (SA800)",
    "Filing of statutory annual accounts for LLPs with Companies House",
    "Real-time tracking of partner capital contributions and drawings",
    "Automated scheduling and calculation of partner profit allocation shares",
    "Coordination with individual partners' Self-Assessment tax filings",
    "Structuring and drafting of tax-efficient LLP partnership agreements"
  ];

  const faqs = [
    {
      q: "How does taxation work for partnerships in the UK?",
      a: "A partnership itself does not pay income tax. Instead, the partnership must submit an annual Partnership Tax Return (SA800) to HMRC showing the business's profits or losses. These profits are then allocated to the partners according to their agreed shares. Each partner must declare their share of profits on their own individual Self-Assessment Tax Return (SA104 page) and pay tax and National Insurance accordingly."
    },
    {
      q: "What is a Limited Liability Partnership (LLP) and how is it taxed?",
      a: "An LLP combines the organizational flexibility of a partnership with the limited liability of a limited company. Legally, the LLP is a corporate body. However, for tax purposes, LLPs are treated as transparent—meaning the partners (members) are taxed individually on their share of the LLP's profits, similar to a standard partnership, rather than the LLP paying Corporation Tax."
    },
    {
      q: "How do capital accounts and drawings work?",
      a: "A partner's capital account represents their equity in the partnership—made up of their initial capital contributions and their share of accumulated profits, minus any drawings (cash taken out of the business). We track these figures in real-time, helping partnerships maintain clean, audited accounts and avoid disputes."
    },
    {
      q: "Can you help set up a new partnership or LLP?",
      a: "Yes. We handle LLP registration with Companies House, set up tax registrations for the partnership and each individual partner with HMRC, implement digital accounting software like Xero, and advise on standard clauses to include in your Partnership Agreement."
    }
  ];

  return (
    <>
      <PageHero 
        eyebrow="WHO WE HELP"
        title="Partnership & LLP Accounting"
        sub="Keep your partnership accounts clear and compliant. We handle SA800 partnership tax filings, LLP Companies House accounts, capital account tracking, and member profit shares."
        breadcrumbs={[
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Partnership & LLP Accounting" }
        ]}
      />

      {/* Overview Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 gsap-reveal text-left">
              <SectionLabel>Collaborative Accounting</SectionLabel>
              <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-6 tracking-tight leading-tight">
                Clear profit division and transparent partner reporting
              </h2>
              <div className="text-[16px] text-ia-text-secondary font-light space-y-6 leading-relaxed">
                <p>
                  Partnerships require careful accounting to balance the interests of multiple stakeholders. Without meticulous tracking of capital contributions, profit allocations, and member drawings, partner relations can become strained, and tax liabilities miscalculated.
                </p>
                <p>
                  At Internal Accountants, we maintain a transparent, neutral general ledger that records all transactions. We manage the annual Partnership Tax Return (SA800), allocate profits strictly according to your partnership agreement, and prepare individual statement schedules for each partner.
                </p>
                <p>
                  For Limited Liability Partnerships (LLPs), we compile statutory annual accounts complying with FRS 102, file them with Companies House, and handle all company secretarial changes.
                </p>
              </div>
            </div>

            {/* Side Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full rounded-md overflow-hidden shadow-card min-h-[360px] border border-ia-border/30 bg-ia-navy-alt p-8 sm:p-10 flex flex-col justify-between">
                <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-glow-coral pointer-events-none select-none z-0" />
                <div className="relative z-10">
                  <h3 className="text-[20px] font-bold text-white mb-6">
                    Partnership Package Features
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-ia-text-light font-light leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-ia-coral shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10 pt-8 border-t border-ia-border/20 mt-8">
                  <Button href="/contact" variant="primary" className="w-full text-center">
                    Request Partner Review
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LLP Statutory Auditing & Capital Tracking */}
      <section className="bg-ia-bg-light py-24 border-t border-b border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-ia-coral/5 border border-ia-coral/20 rounded-md p-8 shadow-card flex flex-col justify-center text-left">
                <span className="text-[11px] font-bold text-ia-coral uppercase tracking-wider mb-2">
                  FINANCIAL ALIGNMENT
                </span>
                <h3 className="text-[22px] font-bold text-white mb-4">
                  Capital Accounts Management
                </h3>
                <p className="text-[14px] text-ia-text-light font-light leading-relaxed">
                  We specialize in setting up and audit-checking capital accounts, current accounts, and drawings ledgers for partnerships, ensuring there is absolute clarity on the equity share and withdrawals of each partner.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 text-left gsap-reveal">
              <SectionLabel>Partnership Operations</SectionLabel>
              <h2 className="text-[30px] sm:text-[34px] font-bold text-white mb-6 tracking-tight">
                Tax transparency and compliance
              </h2>
              <p className="text-[16px] text-ia-text-secondary font-light leading-relaxed mb-6">
                Because partnerships are transparent for tax, individual partners' tax liabilities are linked to partnership profits. We coordinate the business books and individual partner tax filings to deliver absolute tax efficiency:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-ia-text-light font-light">
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">SA800 Filings</strong>
                  Accurate, comprehensive filing of the partnership tax return to HMRC before the January 31st digital deadline.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Individual SA104</strong>
                  We feed allocated partnership profit figures directly into each partner's personal self-assessment.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">LLP Corporate Filings</strong>
                  Statutory accounts preparation, filing, and Confirmation Statement compliance for LLPs.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Agreement Guidance</strong>
                  We review your partnership agreement clauses concerning tax allocations, interest on capital, and salary drawings.
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
              Partnership & LLP FAQs
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} className="border border-ia-border/40 rounded-md p-6 bg-ia-navy-alt text-left">
                <h4 className="text-[17px] font-bold text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-ia-coral shrink-0 mt-0.5" />
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
        title="Establish clear financial lines"
        sub="Talk to our Chartered Accountants today to streamline your partnership's tax and reporting structure."
        btnText="Schedule a Consultation"
      />
    </>
  );
}
