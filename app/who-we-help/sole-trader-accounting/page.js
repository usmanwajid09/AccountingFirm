import PageHero from "../../components/PageHero";
import SectionLabel from "../../components/SectionLabel";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";
import Button from "../../components/Button";
import Link from "next/link";
import { CheckCircle2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Sole Trader Accounting | Digital Tax & Bookkeeping Services",
  description: "Specialist, fixed-price online accounting and self-assessment tax services for sole traders and self-employed professionals across the UK.",
};

export default function SoleTraderAccounting() {
  const benefits = [
    "Fixed-fee plans with zero hidden costs or surprise bills",
    "Full preparation and filing of your Self-Assessment Tax Return (SA100)",
    "Xero setup and digital bookkeeping reconciliation",
    "Accurate tracking of allowable business expenses to minimize tax",
    "Unlimited telephone and email support with a 3-hour response guarantee",
    "Regular, proactive reviews to prepare for Making Tax Digital (MTD)"
  ];

  const faqs = [
    {
      q: "What is a sole trader and when do I need to register?",
      a: "A sole trader is a self-employed person who is the sole owner of their business. You must register as a sole trader with HMRC as soon as your self-employed earnings exceed £1,000 in a single tax year. You need to register by October 5th following the end of the tax year in which you started self-employment."
    },
    {
      q: "What expenses can I claim as a sole trader?",
      a: "You can claim tax deductions for any expenses incurred 'wholly and exclusively' for your business. This includes office costs (stationery, software), travel expenses (fuel, train tickets, but not commuting), marketing, insurance, and a proportion of home utility bills if you work from home."
    },
    {
      q: "How does Making Tax Digital (MTD) affect sole traders?",
      a: "HMRC's Making Tax Digital (MTD) for Income Tax Self Assessment (ITSA) will require self-employed individuals with qualifying income above £50,000 to keep digital records and submit quarterly updates using compatible software from April 2026, and those earning above £30,000 from April 2027. We ensure your business is fully compatible with digital tools like Xero to satisfy these rules seamlessly."
    },
    {
      q: "Why use an accountant instead of filing self-assessment myself?",
      a: "While you can file your own tax return, using a Chartered Accountant ensures you claim all allowable expenses and reliefs to pay the absolute legal minimum tax. We prevent costly filing errors, manage HMRC deadlines, and provide year-round business growth advice."
    }
  ];

  return (
    <>
      <PageHero 
        eyebrow="WHO WE HELP"
        title="Fixed-Fee Sole Trader Accounting"
        sub="Ditch the spreadsheets and receipt folders. We handle your bookkeeping, self-assessment tax returns, and HMRC compliance for one simple monthly fee."
        breadcrumbs={[
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Sole Trader Accounting" }
        ]}
      />

      {/* Overview Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 gsap-reveal text-left">
              <SectionLabel>Hassle-Free Compliance</SectionLabel>
              <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-6 tracking-tight leading-tight">
                Specialist support for self-employed professionals
              </h2>
              <div className="text-[16px] text-ia-text-secondary font-light space-y-6 leading-relaxed">
                <p>
                  Running your own business is demanding. Spending your evenings sorting through paper receipts and updating spreadsheets is time-consuming and prone to errors. At Internal Accountants, we believe you should focus on doing what you do best.
                </p>
                <p>
                  For a fixed monthly fee, our ACCA/ACA-led team acts as your dedicated finance back-office. We migrate you to Xero, set up automated receipt capture, categorize your transactions, and reconcile your ledgers. When tax season arrives, we prepare and submit your Self-Assessment Tax Return (SA100) ensuring full accuracy and compliance.
                </p>
                <p className="text-[18px] text-ia-blue font-bold tracking-tight italic pt-2">
                  "No hidden costs. No surprise fees. Just crystal-clear numbers."
                </p>
              </div>
            </div>

            {/* Side Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full rounded-md overflow-hidden shadow-card min-h-[360px] border border-ia-border/30 bg-ia-navy-alt p-8 sm:p-10 flex flex-col justify-between">
                <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-glow-purple pointer-events-none select-none z-0" />
                <div className="relative z-10">
                  <h3 className="text-[20px] font-bold text-white mb-6">
                    Our Service Package
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
                    Get an Instant Quote
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Allowed Expenses Spotlight */}
      <section className="bg-ia-bg-light py-24 border-t border-b border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-ia-purple/5 border border-ia-purple/20 rounded-md p-8 shadow-card flex flex-col justify-center text-left">
                <span className="text-[11px] font-bold text-ia-purple uppercase tracking-wider mb-2">
                  TAX ADVANTAGE
                </span>
                <h3 className="text-[22px] font-bold text-white mb-4">
                  Xero & Receipt capture
                </h3>
                <p className="text-[14px] text-ia-text-light font-light leading-relaxed">
                  We supply you with receipt-scanning tools integrated with Xero. Simply snap a photo of any receipt on your phone, and it's instantly uploaded, analyzed, and filed in your accounts. No paper clutter, ever.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 text-left gsap-reveal">
              <SectionLabel>Tax Optimization</SectionLabel>
              <h2 className="text-[30px] sm:text-[34px] font-bold text-white mb-6 tracking-tight">
                How we maximize your allowable tax deductions
              </h2>
              <p className="text-[16px] text-ia-text-secondary font-light leading-relaxed mb-6">
                Many sole traders overpay their tax because they fail to record allowable business expenses. We review your bank transactions quarterly to spot missed deductions and ensure you claim every pound you are legally entitled to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-ia-text-light font-light">
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Working From Home</strong>
                  Claim a proportional amount of your rent, mortgage interest, electricity, heating, and internet.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Travel & Vehicles</strong>
                  Claim travel fares, hotel stays, and flat-rate mileage allowances (45p per mile) for business trips.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Tools & Software</strong>
                  100% tax relief on laptops, phone bills, accounting tools, specialized equipment, and uniforms.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Professional Fees</strong>
                  Deduct costs of business insurance, training courses, professional memberships, and accounting fees.
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
              Sole Trader Accounting FAQs
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
        title="Ready to simplify your Sole Trader taxes?"
        sub="Get expert accounting support and complete peace of mind starting today."
        btnText="Contact Us Now"
      />
    </>
  );
}
