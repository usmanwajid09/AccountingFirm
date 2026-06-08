import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Who We Help | Tailored Outsourced Accounting",
  description: "Explore our digital-first, outsourced accounting services designed for Limited Companies, Sole Traders, Partnerships, LLPs, and Contractors globally.",
};

const BriefcaseIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 18.4v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 14.15m17.25 0a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 14.15m17.25 0V9a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9v5.15M12 9.75V12m0 0v2.25M12 12h2.25M12 12H9.75" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.38a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 14.37ZM15.59 14.37a6 6 0 0 1-5.84-7.38v-4.8M12.75 12h-.008v.008H12.75V12Z" />
  </svg>
);

export default function WhoWeHelpOverview() {
  const sections = [
    {
      title: "Limited Companies",
      desc: "Get stress-free end-of-year accounts, corporation tax optimization, accurate VAT filings, and fully managed monthly payroll. Let our Chartered Accountants handle your statutory compliance while you focus on growth.",
      icon: <BriefcaseIcon />,
      href: "/who-we-help/limited-companies",
      glowClass: "glow-card-hover",
      borderDefault: "border-ia-blue/10",
      bgIcon: "bg-ia-blue-tint border-ia-blue/20 text-ia-blue",
      hoverBgIcon: "group-hover:bg-ia-blue group-hover:text-ia-navy group-hover:shadow-[0_0_20px_rgba(0,245,212,0.5)]",
      topBar: "from-transparent via-ia-blue to-transparent",
      tag: "SMEs & Corporate Entities",
    },
    {
      title: "Sole Traders",
      desc: "Say goodbye to receipt-storing headaches and spreadsheets. We provide a complete fixed-fee sole trader accounting service, including Xero set up, digital bookkeeping, and expert self-assessment filings.",
      icon: <UserIcon />,
      href: "/who-we-help/sole-trader-accounting",
      glowClass: "glow-card-purple-hover",
      borderDefault: "border-ia-purple/10",
      bgIcon: "bg-ia-purple/5 border-ia-purple/20 text-ia-purple",
      hoverBgIcon: "group-hover:bg-ia-purple group-hover:text-ia-navy group-hover:shadow-[0_0_20px_rgba(192,132,252,0.5)]",
      topBar: "from-transparent via-ia-purple to-transparent",
      tag: "Self-Employed & Micro-businesses",
    },
    {
      title: "Partnerships & LLPs",
      desc: "From SA800 partnership tax returns to tracking capital contributions and member profit shares, our specialized accountants keep your partnership organized, legally sound, and optimized for tax.",
      icon: <HandshakeIcon />,
      href: "/who-we-help/partnerships-and-llps",
      glowClass: "glow-card-coral-hover",
      borderDefault: "border-ia-coral/10",
      bgIcon: "bg-ia-coral/5 border-ia-coral/20 text-ia-coral",
      hoverBgIcon: "group-hover:bg-ia-coral group-hover:text-ia-navy group-hover:shadow-[0_0_20px_rgba(255,74,107,0.5)]",
      topBar: "from-transparent via-ia-coral to-transparent",
      tag: "Partnerships & LLPs",
    },
    {
      title: "Contractors & Freelancers",
      desc: "Optimize your personal tax liability and secure your IR35 determination status. We build fixed-fee, digital-first corporate setups that manage flat-rate VAT and dividend structures dynamically.",
      icon: <RocketIcon />,
      href: "/who-we-help/contractors-and-freelancers",
      glowClass: "glow-card-hover",
      borderDefault: "border-ia-blue/10",
      bgIcon: "bg-ia-blue-tint border-ia-blue/20 text-ia-blue",
      hoverBgIcon: "group-hover:bg-ia-blue group-hover:text-ia-navy group-hover:shadow-[0_0_20px_rgba(0,245,212,0.5)]",
      topBar: "from-transparent via-ia-blue to-transparent",
      tag: "Independent Professionals",
    },
  ];

  return (
    <>
      <PageHero 
        eyebrow="WHO WE HELP"
        title="Outsourced Accounting Built for Your Business Model"
        sub="We deliver specialized digital finance functions tailored to your exact entity type. Wherever you operate, we ensure compliance and optimize cash flow."
        breadcrumbs={[{ label: "Who We Help" }]}
      />

      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
            <div className="lg:col-span-8 gsap-reveal text-left">
              <SectionLabel>Client Segments</SectionLabel>
              <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
                We handle your accounts. You build the enterprise.
              </h2>
              <p className="text-[16px] text-ia-text-secondary font-light leading-relaxed max-w-[760px]">
                Internal Accountants doesn't offer one-size-fits-all services. We structure our daily ledgers, compliance schedules, and management reporting templates to align precisely with your legal structure, payroll volume, and tax regulations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {sections.map((section, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <div className={`relative overflow-hidden bg-ia-navy-alt border ${section.borderDefault} ${section.glowClass} rounded-md p-8 sm:p-10 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group`}>
                  {/* Glowing Top Accent Bar */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${section.topBar} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Watermark leaf */}
                  <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-[0.01] pointer-events-none transition-all duration-700 group-hover:scale-120 group-hover:rotate-12 group-hover:opacity-[0.04] select-none">
                    <img src={`/images/test_shape_nature_${idx % 4}.png`} alt="" className="w-full h-full object-contain" />
                  </div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-lg border flex items-center justify-center transition-all duration-300 ${section.bgIcon} ${section.hoverBgIcon}`}>
                        {section.icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-ia-text-muted bg-white/5 border border-white/5 py-1 px-3 rounded-full">
                        {section.tag}
                      </span>
                    </div>

                    <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-ia-blue transition-colors">
                      {section.title}
                    </h3>
                    
                    <p className="text-[15px] text-ia-text-secondary font-light leading-relaxed mb-8 flex-grow">
                      {section.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto pt-6 border-t border-ia-border/20 flex justify-between items-center">
                    <Link 
                      href={section.href} 
                      className="inline-flex items-center gap-1.5 text-[14px] font-bold text-ia-blue hover:text-ia-blue/80 transition-colors"
                    >
                      Explore Services &rarr;
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-[13px] font-semibold text-ia-text-light hover:text-white transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Value Proposition */}
          <ScrollReveal className="bg-ia-bg-light border border-ia-border rounded-md p-8 sm:p-12 text-left relative overflow-hidden">
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-glow-purple pointer-events-none select-none z-0" />
            <div className="relative z-10 max-w-[800px]">
              <span className="text-[12px] font-bold text-ia-purple tracking-[0.15em] uppercase mb-4 block">
                INTEGRATED ACCOUNTING
              </span>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-4">
                Ready to digitize and delegate your finance function?
              </h3>
              <p className="text-[16px] text-ia-text-secondary font-light leading-relaxed mb-8">
                Regardless of your business type, our ACCA/ACA-led team will set up and migrate you to Xero, reconcile transactions daily, handle your statutory tax filing deadlines, and give you real-time visibility through custom dashboard reporting.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="inline-block bg-ia-purple hover:bg-ia-purple/80 text-ia-navy font-bold uppercase text-[13px] tracking-wider py-4 px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]">
                  Talk to a Partner
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <CTABanner />
    </>
  );
}
