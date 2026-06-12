import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import CTABanner from "../components/CTABanner";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "About Us",
  description: "Learn about the partners behind Internal Accountants and our structured process to deliver bookkeeping, reporting, and planning services.",
};

export default function About() {
  const team = [
    {
      name: "Hamza Zahoor",
      title: "Founder & Partner",
      bio: "Leads strategic corporate growth, visual brand development, and tax advisory operations.",
      img: "/images/Hamza Zahoor.png",
      linkedin: "https://www.linkedin.com/in/hamza-taxperts/",
    },
    {
      name: "Tauseef Ahmad",
      title: "Managing Partner",
      bio: "Oversees general ledger management, system migrations, and VAT/reporting timelines.",
      img: "/images/Touseef ahmad.png",
      linkedin: "https://www.linkedin.com/in/tauseef-ahmad-133902209/",
    },
  ];

  const specialists = [
    {
      name: "Sohail Ashraf",
      title: "Payroll Manager",
      qualification: "CMA, BS Accounting & Finance",
      experience: "6+ Years in Payroll & Pension",
      desc: "Manages complex monthly payroll schedules, workplace pensions compliance, and HMRC real-time information filings.",
      img: "/images/sohail_ashraf.jpg",
      glowClass: "glow-card-amber-hover"
    },
    {
      name: "Younas Irfan",
      title: "Senior Accountant",
      qualification: "CMA",
      experience: "5+ Years in Finance Accounting",
      desc: "Specializes in corporate accounts preparation, VAT compliance filing, and comprehensive balance sheet health checks.",
      img: "/images/younas_irfan.jpg",
      glowClass: "glow-card-hover"
    },
    {
      name: "Ali Shan",
      title: "Financial Accountant",
      qualification: "ACCA",
      experience: "3 Years in Audit & Tax",
      desc: "Coordinates tax return filings, year-end accounts disclosures, and HMRC investigation audit support.",
      img: "/images/ali_shan.jpg",
      glowClass: "glow-card-purple-hover"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We start with a free discovery call to understand your business, your current setup, and where you need support.",
    },
    {
      num: "02",
      title: "Tailored Strategy",
      desc: "We design a bespoke financial management plan built around your specific goals, scale, and reporting requirements.",
    },
    {
      num: "03",
      title: "Seamless Onboarding",
      desc: "Our team integrates with your existing software and processes &mdash; no disruption, no steep learning curve.",
    },
    {
      num: "04",
      title: "Ongoing Support",
      desc: "We deliver consistent, proactive support month after month, with regular reporting and open communication.",
    },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero 
        eyebrow="ABOUT US"
        title="Built on Expertise. Driven by Precision."
        sub="Learn who we are, how we work, and what makes Internal Accountants different."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 2. Company Story Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (55% / 7 cols) */}
            <div className="lg:col-span-7 gsap-reveal">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="gsap-reveal text-[32px] md:text-[36px] font-bold text-white mb-6 tracking-tight leading-tight">
                A Firm Founded on Financial Integrity
              </h2>
              <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                <p>
                  Internal Accountants was established by partners Hamza and Tauseef in 2024 to solve a recurring challenge for growing businesses globally: the lack of high-level financial structure. Many SMEs have standard compliance bookkeepers but lack forward-looking insights to scale safely.
                </p>
                <p>
                  We operate as your dedicated internal accounts department. By taking over the day-to-day transaction records, bank reconciliation, and cash balancing, our accredited team of Chartered Accountants (CAs), ACCAs, and CPAs ensure your numbers are always accurate and compliance-ready.
                </p>
                <p>
                  But we go further. We translate those transaction logs into monthly management dashboards and multi-scenario budgets. We give directors the exact evidence-based maps they need to recruit talent, acquire equipment, and balance operating costs globally.
                </p>
                <p className="text-[18px] text-ia-blue font-bold tracking-tight italic pt-2">
                  "Your numbers, handled with care."
                </p>
              </div>
            </div>

            {/* Story Image (45% / 5 cols) with Mask Reveal */}
            <div className="lg:col-span-5">
              <div className="image-reveal-wrapper relative w-full rounded-md overflow-hidden shadow-card min-h-[360px] border border-ia-border">
                {/* Reveal Mask Overlay */}
                <div className="image-reveal-overlay absolute inset-0 bg-ia-purple z-20 pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/team_boardroom.png" 
                  alt="Internal Accountants boardroom planning session" 
                  className="image-reveal-img w-full h-full object-cover min-h-[360px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Meet the Team Section */}
      <section className="bg-ia-bg-light py-24 border-b border-ia-border/30" id="team">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="section-header text-center max-w-[700px] mx-auto mb-16 gsap-reveal">
            <SectionLabel>Meet the Team</SectionLabel>
            <h2 className="text-[32px] md:text-[36px] font-bold text-white tracking-tight">
              The People Behind Your Numbers
            </h2>
            <p className="text-[16px] text-ia-text-secondary mt-4 font-light">
              Our leadership partners and dedicated specialists bring decades of combined accounting, tax compliance, and payroll expertise to your business.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto gsap-stagger-grid mb-20">
            {team.map((partner, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden bg-ia-navy-alt border border-ia-border rounded-md p-8 pt-10 shadow-card ${idx === 0 ? 'glow-card-hover' : 'glow-card-purple-hover'} hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full group`}
              >
                {/* Absolute Background Leaf Watermark */}
                <div className="absolute -right-8 -bottom-8 w-36 h-36 opacity-[0.02] pointer-events-none transition-all duration-700 ease-out group-hover:scale-120 group-hover:rotate-12 group-hover:opacity-[0.05] z-0 select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/test_shape_nature_${idx === 0 ? 0 : 2}.png`}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center h-full flex-grow w-full">
                  {/* Portrait container */}
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 border-2 border-ia-border bg-ia-bg-light flex items-center justify-center relative shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-[18px] font-semibold text-white mb-1">
                    {partner.name}
                  </h3>
                  <span className="block text-[13px] font-bold text-ia-blue uppercase tracking-wider mb-4">
                    {partner.title}
                  </span>
                  <p className="text-[15px] text-ia-text-secondary font-light leading-relaxed mb-6 flex-grow">
                    {partner.bio}
                  </p>

                  {/* LinkedIn Link */}
                  <a 
                    href={partner.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-ia-blue hover:text-ia-blue-dark transition-colors duration-200"
                    aria-label={`${partner.name} LinkedIn`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Specialists Header */}
          <div className="text-center max-w-[700px] mx-auto mb-12 gsap-reveal">
            <h3 className="text-[16px] font-bold text-ia-blue uppercase tracking-widest leading-none">
              Accounting & Payroll Specialists
            </h3>
            <div className="w-12 h-[2px] bg-ia-blue/60 mx-auto mt-4 rounded-full" />
          </div>

          {/* Specialists Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto gsap-stagger-grid">
            {specialists.map((spec, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden bg-ia-navy-alt border border-ia-border rounded-md p-6 pt-8 shadow-card ${spec.glowClass} hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full group`}
              >
                {/* Background Leaf Watermark */}
                <div className="absolute -right-8 -bottom-8 w-28 h-28 opacity-[0.01] pointer-events-none transition-all duration-700 ease-out group-hover:scale-120 group-hover:rotate-12 group-hover:opacity-[0.03] z-0 select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/test_shape_nature_${idx % 3}.png`}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center h-full flex-grow w-full">
                  {/* Portrait Image Container */}
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-5 border-2 border-ia-border/40 bg-ia-navy flex items-center justify-center relative shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:border-ia-blue/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={spec.img}
                      alt={spec.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Ring glow */}
                    <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-[17px] font-semibold text-white mb-1 group-hover:text-ia-blue transition-colors duration-200">
                    {spec.name}
                  </h3>
                  <span className="block text-[12px] font-bold text-ia-text-secondary uppercase tracking-wider mb-2">
                    {spec.title}
                  </span>
                  
                  {/* Qualification Tag */}
                  <div className="inline-block bg-ia-navy px-3 py-1 rounded-full text-[11px] font-medium text-white/90 border border-ia-border/40 mb-4">
                    {spec.qualification}
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-[1px] bg-ia-border/50 mb-4 transition-all duration-300 group-hover:w-16" />

                  <p className="text-[13px] text-ia-text-secondary font-light leading-relaxed mb-4 flex-grow">
                    {spec.desc}
                  </p>

                  <div className="text-[12px] font-medium text-ia-blue mt-auto">
                    {spec.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Life at Internal Accountants (Team Showcase) */}
      <section className="bg-ia-navy border-b border-ia-border/30 py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-glow-teal pointer-events-none select-none z-0" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-glow-purple pointer-events-none select-none z-0" />

        <div className="container max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="section-header text-center max-w-[700px] mx-auto mb-16 gsap-reveal">
            <SectionLabel>Life at Internal Accountants</SectionLabel>
            <h2 className="text-[32px] md:text-[36px] font-bold text-white tracking-tight">
              Our Team in Action
            </h2>
            <p className="text-[16px] text-ia-text-secondary mt-4 font-light">
              Collaborating in real-time at our Central London office to deliver elite corporate accounting services globally.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto gsap-reveal">
            <div className="group/gallery relative rounded-lg overflow-hidden border border-ia-border bg-ia-navy-alt shadow-card flex flex-col md:flex-row items-stretch min-h-[400px]">
              <div className="relative overflow-hidden md:w-3/5 min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/team_pic.jpg" 
                  alt="Internal Accountants team planning session" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/gallery:scale-105"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ia-navy via-ia-navy/20 to-ia-navy/10 opacity-70 z-10" />
              </div>
              {/* Description bar */}
              <div className="p-8 md:w-2/5 bg-ia-navy-alt relative z-20 flex flex-col justify-center border-t md:border-t-0 md:border-l border-ia-border/40">
                <h3 className="text-[20px] font-bold text-white mb-4">
                  Partner Strategy Briefing
                </h3>
                <p className="text-[15px] text-ia-text-secondary font-light leading-relaxed mb-6">
                  Hamza Zahoor leading a client scenario forecasting session with senior financial analysts and compliance officers at the boardroom table.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img className="w-8 h-8 rounded-full border border-ia-border" src="/images/Hamza Zahoor.png" alt="Hamza Zahoor" />
                    <img className="w-8 h-8 rounded-full border border-ia-border" src="/images/Touseef ahmad.png" alt="Tauseef Ahmad" />
                    <img className="w-8 h-8 rounded-full border border-ia-border" src="/images/sohail_ashraf.jpg" alt="Sohail Ashraf" />
                  </div>
                  <span className="text-[12px] font-semibold text-ia-blue uppercase tracking-wider">
                    Expert Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Process Section */}
      <section className="bg-ia-white py-24 relative overflow-hidden" id="process">
        
        {/* Background drifting parallax leaf */}
        <div className="floating-parallax-leaf absolute left-[4%] top-[25%] w-48 h-48 opacity-[0.015] pointer-events-none z-0 select-none">
          <img src="/images/test_shape_nature_0.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container max-w-[900px] mx-auto px-6 relative z-10">
          <div className="section-header text-center max-w-[700px] mx-auto mb-16 gsap-reveal">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="text-[32px] md:text-[36px] font-bold text-white tracking-tight">
              How We Work With You
            </h2>
          </div>

          <div className="process-timeline-container relative flex flex-col gap-10">
            {/* 1. Static timeline vertical line behind the steps */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-ia-border/50 pointer-events-none hidden sm:block z-0" />
            
            {/* 2. Drawing timeline progress bar */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] pointer-events-none hidden sm:block z-0 overflow-hidden">
              <div className="timeline-progress-bar w-full h-0 bg-ia-blue" />
            </div>

            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="timeline-step-row flex gap-6 border-b border-ia-border pb-8 last:border-b-0 last:pb-0 relative z-10"
              >
                {/* Numbered circle left */}
                <div className="timeline-step-circle flex-shrink-0 w-12 h-12 rounded-full border border-ia-border bg-ia-navy-alt text-ia-text-secondary text-[18px] font-bold flex items-center justify-center shadow-sm transition-all duration-300">
                  {step.num}
                </div>
                {/* Description right */}
                <div className="flex flex-col">
                  <h3 className="text-[18px] font-semibold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-ia-text-secondary font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <CTABanner 
        title="Want to know how we can help your business?"
        sub="Book an initial discover review with one of our expert partners today."
        btnText="Get in Touch Today"
      />
    </>
  );
}
