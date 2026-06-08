import PageHero from "../../components/PageHero";
import SectionLabel from "../../components/SectionLabel";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";
import Button from "../../components/Button";
import { CheckCircle2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Limited Company Accounting | UK SMEs Corporate Tax & Payroll",
  description: "Specialist Limited Company accounting services. We handle corporation tax (CT600), VAT returns, payroll (PAYE), and statutory filings for UK businesses.",
};

export default function LimitedCompanies() {
  const benefits = [
    "Full annual statutory accounts prepared in compliance with FRS 102/105",
    "Corporation Tax calculation and return submission (CT600)",
    "VAT returns preparation and submissions via MTD software",
    "Monthly payroll (PAYE), payslip generation, and pension auto-enrolment",
    "Director salary vs. dividend optimization tax reviews",
    "Company secretarial support, including annual Confirmation Statements"
  ];

  const faqs = [
    {
      q: "What are the key tax obligations for a UK limited company?",
      a: "A limited company must: 1. Pay Corporation Tax on profits (due 9 months and 1 day after the accounting year ends). 2. Submit a CT600 Corporation Tax Return (due 12 months after the year-end). 3. File Statutory Accounts with Companies House (due 9 months after the year-end). 4. Submit a Confirmation Statement annually to verify corporate details. 5. Handle VAT returns quarterly if turnover exceeds £90,000."
    },
    {
      q: "How should directors pay themselves to optimize tax?",
      a: "UK directors typically optimize their tax liability by taking a small salary up to the primary National Insurance threshold (around £12,570) to preserve state pension credits without paying NI, and taking the remainder of their income as dividends, which carry lower tax rates and are exempt from National Insurance."
    },
    {
      q: "What is the difference between a Sole Trader and a Limited Company?",
      a: "A limited company is a separate legal entity from its owners, meaning you have limited liability; personal assets are protected if the business fails. Companies also have more tax planning options (e.g. retaining profits inside the company, taking dividends). A sole trader is personally liable for all business debts, and all business profits are taxed as personal income in the year they are earned."
    },
    {
      q: "Can you help migrate our corporate bookkeeping to Xero?",
      a: "Yes. We specialize in seamless software migrations. We set up Xero, map your chart of accounts, set up bank feeds, integrate receipt scanners, and train your staff, ensuring a smooth transition with zero disruption to daily trading."
    }
  ];

  return (
    <>
      <PageHero 
        eyebrow="WHO WE HELP"
        title="Limited Company Accounting"
        sub="Complete financial compliance and accounting services. We handle your statutory accounts, corporation tax, VAT, and payroll, keeping your SME compliant and optimized."
        breadcrumbs={[
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Limited Company Accounting" }
        ]}
      />

      {/* Overview Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 gsap-reveal text-left">
              <SectionLabel>Corporate Financial Control</SectionLabel>
              <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-6 tracking-tight leading-tight">
                Accurate statutory filing and strategic tax planning
              </h2>
              <div className="text-[16px] text-ia-text-secondary font-light space-y-6 leading-relaxed">
                <p>
                  Running a limited company involves rigorous regulatory deadlines. Missing filings with Companies House or HMRC leads to immediate fines, damage to credit ratings, and directors' liability.
                </p>
                <p>
                  Internal Accountants takes over the administrative weight. We act as your virtual finance team. Our Chartered Accountants compile your statutory end-of-year accounts, file your corporation tax returns, submit quarterly VAT returns, and manage your monthly payroll and pension contributions. 
                </p>
                <p>
                  More importantly, we meet with you regularly to review dividend policies, tax-efficient investments, capital allowances, and cash flow forecasts to ensure your structure matches your expansion goals.
                </p>
              </div>
            </div>

            {/* Side Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full rounded-md overflow-hidden shadow-card min-h-[360px] border border-ia-border/30 bg-ia-navy-alt p-8 sm:p-10 flex flex-col justify-between">
                <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-glow-teal pointer-events-none select-none z-0" />
                <div className="relative z-10">
                  <h3 className="text-[20px] font-bold text-white mb-6">
                    Corporate Package Features
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
                    Speak with a Partner
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Tax Optimizations */}
      <section className="bg-ia-bg-light py-24 border-t border-b border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-ia-blue-tint border border-ia-blue/20 rounded-md p-8 shadow-card flex flex-col justify-center text-left">
                <span className="text-[11px] font-bold text-ia-blue uppercase tracking-wider mb-2">
                  DIRECTOR PROTECTION
                </span>
                <h3 className="text-[22px] font-bold text-white mb-4">
                  IR35 & Payroll Support
                </h3>
                <p className="text-[14px] text-ia-text-light font-light leading-relaxed">
                  We handle the setup of director payroll, employee auto-enrolment pensions, Construction Industry Scheme (CIS) filings, and review contractual arrangements to ensure full compliance with HMRC's strict IR35 off-payroll working rules.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 text-left gsap-reveal">
              <SectionLabel>Corporate Efficiency</SectionLabel>
              <h2 className="text-[30px] sm:text-[34px] font-bold text-white mb-6 tracking-tight">
                Strategic corporate tax planning
              </h2>
              <p className="text-[16px] text-ia-text-secondary font-light leading-relaxed mb-6">
                Corporate tax is one of your business's largest annual cash outflows. We proactively identify legal methods to lower your taxable corporate profits before your year-end approaches:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-ia-text-light font-light">
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Capital Allowances</strong>
                  Claim 100% first-year allowances (Full Expensing) on new machinery, IT equipment, tools, and office furnishings.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Pension Contributions</strong>
                  Deduct employer pension contributions directly from company profits as an allowable business expense.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">R&D Tax Relief</strong>
                  Claim corporation tax relief or cash credits if your company is developing new products, software, or processes.
                </div>
                <div className="p-4 bg-ia-navy border border-ia-border rounded-md">
                  <strong className="text-white block mb-1">Tax-Efficient Benefits</strong>
                  Provide directors and staff with tax-efficient perks such as electric company cars and relevant life insurance.
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
              Limited Company FAQs
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
        title="Optimize your company's tax position"
        sub="Partner with Internal Accountants for elite corporate accounting."
        btnText="Contact Our Partners"
      />
    </>
  );
}
