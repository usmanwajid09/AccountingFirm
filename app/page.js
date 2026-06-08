"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./components/Button";
import SectionLabel from "./components/SectionLabel";
import CTABanner from "./components/CTABanner";

// SVG Icons for Who We Help
const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 18.4v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 14.15m17.25 0a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 14.15m17.25 0V9a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9v5.15M12 9.75V12m0 0v2.25M12 12h2.25M12 12H9.75" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.38a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 14.37ZM15.59 14.37a6 6 0 0 1-5.84-7.38v4.8M12.75 12h-.008v.008H12.75V12Z" />
  </svg>
);

export default function Home() {
  const stats = [
    { num: "500+", label: "Clients Globally" },
    { num: "2024", label: "Founded" },
    { num: "9", label: "Team Members" },
    { num: "100%", label: "World Coverage" },
  ];

  const whoWeHelp = [
    {
      title: "Limited Companies",
      desc: "Comprehensive corporate accounting, corporation tax returns, VAT filings, payroll management, and statutory accounts for UK SMEs.",
      icon: <BriefcaseIcon />,
      accent: "ia-blue",
      glowClass: "glow-card-hover",
      borderDefault: "border-ia-blue/10",
      textAccent: "text-ia-blue",
      hoverText: "group-hover/card:text-ia-blue",
      bgIcon: "bg-ia-blue-tint border-ia-blue/20 text-ia-blue",
      hoverBgIcon: "group-hover/card:bg-ia-blue group-hover/card:text-ia-navy group-hover/card:shadow-[0_0_15px_rgba(0,245,212,0.4)]",
      topBar: "from-transparent via-ia-blue to-transparent",
      href: "/who-we-help/limited-companies",
    },
    {
      title: "Sole Traders",
      desc: "Hassle-free self-assessment tax returns, digital bookkeeping, and proactive tax-saving advice to keep you HMRC-compliant.",
      icon: <UserIcon />,
      accent: "ia-purple",
      glowClass: "glow-card-purple-hover",
      borderDefault: "border-ia-purple/10",
      textAccent: "text-ia-purple",
      hoverText: "group-hover/card:text-ia-purple",
      bgIcon: "bg-ia-purple/5 border-ia-purple/20 text-ia-purple",
      hoverBgIcon: "group-hover/card:bg-ia-purple group-hover/card:text-ia-navy group-hover/card:shadow-[0_0_15px_rgba(192,132,252,0.4)]",
      topBar: "from-transparent via-ia-purple to-transparent",
      href: "/who-we-help/sole-trader-accounting",
    },
    {
      title: "Partnerships & LLPs",
      desc: "Accurate partnership tax returns (SA800), profit distribution scheduling, capital account tracking, and annual filings.",
      icon: <HandshakeIcon />,
      accent: "ia-coral",
      glowClass: "glow-card-coral-hover",
      borderDefault: "border-ia-coral/10",
      textAccent: "text-ia-coral",
      hoverText: "group-hover/card:text-ia-coral",
      bgIcon: "bg-ia-coral/5 border-ia-coral/20 text-ia-coral",
      hoverBgIcon: "group-hover/card:bg-ia-coral group-hover/card:text-ia-navy group-hover/card:shadow-[0_0_15px_rgba(255,74,107,0.4)]",
      topBar: "from-transparent via-ia-coral to-transparent",
      href: "/who-we-help/partnerships-and-llps",
    },
    {
      title: "Contractors & Freelancers",
      desc: "IR35 compliance advice, dividend planning, VAT returns, and dedicated fixed-fee bookkeeping for independent professionals.",
      icon: <RocketIcon />,
      accent: "ia-blue",
      glowClass: "glow-card-hover",
      borderDefault: "border-ia-blue/10",
      textAccent: "text-ia-blue",
      hoverText: "group-hover/card:text-ia-blue",
      bgIcon: "bg-ia-blue-tint border-ia-blue/20 text-ia-blue",
      hoverBgIcon: "group-hover/card:bg-ia-blue group-hover/card:text-ia-navy group-hover/card:shadow-[0_0_15px_rgba(0,245,212,0.4)]",
      topBar: "from-transparent via-ia-blue to-transparent",
      href: "/who-we-help/contractors-and-freelancers",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
      }
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-ia-navy overflow-hidden py-24 md:py-32">
        {/* Isometric Wireframe Cube Background SVG */}
        <div className="absolute left-[5%] top-[15%] w-[320px] h-[320px] text-ia-blue/5 pointer-events-none select-none z-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
            <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" />
            <line x1="50" y1="15" x2="50" y2="55" />
            <line x1="10" y1="35" x2="50" y2="55" />
            <line x1="90" y1="35" x2="50" y2="55" />
            <line x1="50" y1="55" x2="50" y2="95" />
          </svg>
        </div>

        <div className="container max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 text-left flex flex-col gap-8 relative">
              {/* Giant Text Header with Split Class */}
              <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-glow-teal pointer-events-none select-none z-0" />
              <h1 className="text-[40px] sm:text-[80px] lg:text-[130px] xl:text-[150px] font-extrabold text-ia-white leading-[0.88] tracking-tighter max-w-[1000px] relative uppercase z-10">
                Global{" "}
                <span className="block text-ia-blue">
                  Accountants
                </span>
              </h1>

              <p className="text-[18px] sm:text-[20px] text-ia-text-secondary font-light leading-relaxed max-w-[680px] relative z-10 gsap-reveal">
                Our expert team includes <span className="text-white font-medium">ACCAs, ACAs and CPAs</span> that deliver reliable bookkeeping, compliance, cash flow models, and budgeting services so you can focus entirely on your core business.
              </p>
              
              <div className="mt-4 flex flex-wrap items-center gap-6 gsap-reveal z-10 relative">
                <Button href="/contact" variant="primary">
                  Book an appointment
                </Button>
                <a 
                  href="https://wa.me/447828762984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-ia-blue text-white hover:text-ia-blue py-[12px] px-[24px] rounded-sm font-semibold tracking-wider uppercase text-center transition-all duration-200 cursor-pointer text-[15px] bg-white/5 hover:bg-ia-blue/5"
                >
                  <svg className="w-5 h-5 text-[#25D366] fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.488 5.35 1.489 5.503 0 9.979-4.477 9.982-9.983.001-2.667-1.036-5.176-2.92-7.062C17.17 1.71 14.665.673 12.003.673 6.5 0.673 2.023 5.15 2.02 10.656c-.001 2.054.499 3.69 1.493 5.358L2.53 21.45l5.117-1.341zM17.65 14.86c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.29-.48-2.45-1.52-.9-0.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53H8.3c-.2 0-.53.07-.8.38-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 0.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.15-.27-.23-.57-.38z" />
                  </svg>
                  +44 782 876 2984
                </a>
              </div>
            </div>

            {/* Right Column (4 cols - Paper Airplane Container) */}
            <div className="lg:col-span-4 relative w-full h-[250px] sm:h-[320px] lg:h-[400px] flex items-center justify-center overflow-visible">
              {/* String & Wind SVG overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                {/* Hanging String (Gray Line) */}
                <line 
                  id="hanging-string" 
                  stroke="#64748b" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                
                {/* Wind Swirls (Purple curves) */}
                <path 
                  className="wind-curve wind-curve-1" 
                  d="M -100 80 C 100 30, 200 130, 350 60 C 450 30, 500 100, 600 80" 
                  fill="none" 
                  stroke="#c084fc" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  opacity="0"
                />
                <path 
                  className="wind-curve wind-curve-2" 
                  d="M -100 180 C 80 230, 220 100, 350 200 C 420 260, 480 150, 600 180" 
                  fill="none" 
                  stroke="#a855f7" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  opacity="0"
                />
                <path 
                  className="wind-curve wind-curve-3" 
                  d="M -100 280 C 120 250, 250 340, 380 260 C 450 220, 500 300, 600 280" 
                  fill="none" 
                  stroke="#c084fc" 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  opacity="0"
                />
              </svg>

              <div className="paper-airplane absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[350px] md:h-[220px] pointer-events-none select-none z-10 opacity-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/paper_airplane.png" 
                  alt="Origami Paper Airplane" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Strip ("The Problem") */}
      <section className="bg-ia-bg-light py-24 border-b border-ia-border" id="problem">
        <div className="container max-w-[960px] mx-auto px-6 text-center">
          <div className="gsap-reveal flex flex-col items-center">
            <span className="text-[12px] font-bold text-ia-blue tracking-[0.12em] uppercase mb-4">
              WHY INTERNAL ACCOUNTANTS
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-white mb-6 tracking-tight leading-snug max-w-[800px]">
              A cost-effective, all-in-one alternative to employment that delivers elite global financial support.
            </h2>
            <div className="w-12 h-[3px] bg-ia-blue mb-6" />
            <p className="text-[16px] text-ia-text-secondary font-light max-w-[760px] mx-auto mt-4 leading-relaxed">
              By partnering with us, you eliminate the overhead, recruitment cycles, and expensive software licensing fees of an in-house finance team. We provide a full-service virtual accounting office—covering daily ledgers, VAT/tax compliance, real-time cash flow dashboards, and dedicated partner oversight—for a fraction of the cost of a full-time hire.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Full-screen Ship Section */}
      <section className="ship-section h-[100vh] min-h-[600px] relative overflow-hidden bg-ia-navy flex items-center justify-center">
        {/* Background Ship Image with Scale/Parallax class */}
        <div className="absolute inset-0 w-full h-full z-0 ship-bg-container overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/ship.png" 
            alt="Global operations represented by cargo ship" 
            className="w-full h-full object-cover ship-image" 
          />
          {/* Dimmed Overlays */}
          <div className="absolute inset-0 bg-ia-navy/80 mix-blend-multiply z-1" />
          <div className="absolute inset-0 bg-gradient-to-b from-ia-navy via-transparent to-ia-navy z-1" />
        </div>

        {/* Section Content */}
        <div className="container max-w-[960px] mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center gsap-reveal">
          <span className="text-[14px] font-bold text-ia-blue tracking-[0.2em] uppercase block mb-4 ship-eyebrow">
            Our Global Impact
          </span>
          <h2 className="text-[30px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight leading-[1.1] max-w-[900px] ship-title">
            Seamless Accounting, Bookkeeping, Reporting, Cashflow management, Compliance & HMRC Investigation dealing.
          </h2>
          <div className="w-16 h-[4px] bg-ia-blue mt-8 rounded-full ship-divider" />
        </div>
      </section>

      {/* 4. Scrolling Marquee Banner Section (velocity-linked marquee) */}
      <section className="marquee-section bg-ia-navy py-12 overflow-hidden border-t border-b border-ia-border/30 select-none pointer-events-none">
        {/* Track 1: Left */}
        <div className="marquee-container flex overflow-hidden whitespace-nowrap mb-4">
          <div className="marquee-track-left inline-flex text-[48px] sm:text-[64px] lg:text-[80px] font-extrabold text-ia-blue/10 uppercase tracking-tighter gap-16">
            <span>Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull; Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull;</span>
            <span>Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull; Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull;</span>
          </div>
        </div>
        {/* Track 2: Right */}
        <div className="marquee-container flex overflow-hidden whitespace-nowrap">
          <div className="marquee-track-right inline-flex text-[48px] sm:text-[64px] lg:text-[80px] font-extrabold text-ia-blue/10 uppercase tracking-tighter gap-16">
            <span>Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull; Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull;</span>
            <span>Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull; Accounting Services &bull; Bookkeeping &bull; Financial Advisory &bull; Management Reporting &bull;</span>
          </div>
        </div>
      </section>

      {/* 5. Who We Help Section (Replaces old homepage services grid) */}
      <section className="bg-ia-bg-light py-24 border-b border-ia-border relative overflow-hidden">
        {/* Background drifting parallax leaf */}
        <div className="floating-parallax-leaf absolute right-[5%] top-[15%] w-60 h-60 opacity-[0.015] pointer-events-none z-0 select-none">
          <img src="/images/test_shape_nature_3.png" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16 gsap-reveal">
            <SectionLabel>Who We Help</SectionLabel>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight mb-4">
              Who do we help
            </h2>
            <p className="text-[16px] sm:text-[18px] text-ia-text-secondary leading-relaxed max-w-[720px] font-light">
              We deliver digital-first accounting services built around your specific entity type. Wherever you operate in the world, we keep you compliant and cash-flow optimized.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whoWeHelp.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`relative overflow-hidden bg-gradient-to-br from-ia-bg-light/95 via-ia-navy-alt/75 to-ia-bg-light/50 backdrop-blur-md border ${item.borderDefault} ${item.glowClass} rounded-md p-8 shadow-card transition-all duration-300 flex flex-col h-full text-left group/card`}
              >
                {/* Glowing Top Bar Accent */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.topBar} opacity-40 group-hover/card:opacity-100 transition-opacity duration-300`} />

                {/* Card outline watermark */}
                <div className="absolute -right-8 -bottom-8 w-36 h-36 opacity-[0.015] pointer-events-none transition-all duration-700 ease-out group-hover/card:scale-120 group-hover/card:rotate-12 group-hover/card:opacity-[0.06] z-0 select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/test_shape_nature_${idx % 4}.png`} alt="" className="w-full h-full object-contain" />
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Glowing icon container */}
                  <div className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-6 transition-all duration-300 ${item.bgIcon} ${item.hoverBgIcon}`}>
                    {item.icon}
                  </div>

                  <h3 className={`text-[21px] font-bold text-white leading-snug mb-3 transition-colors duration-300 ${item.hoverText}`}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-ia-text-secondary font-light mb-6 flex-grow leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <Link 
                       href={item.href} 
                       className={`group text-[14px] font-bold ${item.textAccent} inline-flex items-center gap-1.5 transition-all duration-200`}
                    >
                      Get Started <span className="transition-transform duration-200 group-hover/card:translate-x-1 inline-block">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Process Banner Section */}
      <section className="bg-ia-white py-24 text-center">
        <div className="container max-w-[800px] mx-auto px-6 flex flex-col items-center gsap-reveal">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white mb-8 tracking-tight">
            Let's take the hard work out of accounting
          </h2>
          <Button href="/contact" variant="primary">
            Get in touch today
          </Button>
        </div>
      </section>

      {/* 7. Stats Bar */}
      <section className="bg-ia-navy text-ia-white py-16 px-6 relative z-10 border-t border-b border-ia-border/30 overflow-hidden">
        {/* Background drifting parallax leaf */}
        <div className="floating-parallax-leaf absolute right-[8%] top-[10%] w-44 h-44 opacity-[0.012] pointer-events-none z-0 select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/test_shape_nature_2.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container max-w-[1100px] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 md:divide-x divide-ia-border/30 items-center text-center">
            {stats.map((stat, idx) => {
              const numVal = stat.num.replace(/[^0-9]/g, "");
              const suffixVal = stat.num.replace(/[0-9]/g, "");
              return (
                <div key={idx} className="pt-6 md:pt-0 gsap-reveal">
                  <span 
                    className="stat-number block text-[40px] font-bold leading-none mb-2 text-ia-blue"
                    data-target={numVal}
                    data-suffix={suffixVal}
                  >
                    0{suffixVal}
                  </span>
                  <span className="block text-[14px] text-ia-text-light font-light uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <CTABanner />
    </>
  );
}
