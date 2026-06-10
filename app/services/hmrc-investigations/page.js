import PageHero from "../../components/PageHero";
import SidebarForm from "../../components/SidebarForm";
import ServiceCard from "../../components/ServiceCard";
import CTABanner from "../../components/CTABanner";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "HMRC Investigations & Audit Defense | Tax Enquiry Accountants",
  description: "Secure professional representation for HMRC tax enquiries, audits, and disputes. We manage disclosures, penalty mitigation, and disputes.",
};

export default function HMRCInvestigations() {
  const checklist = [
    "Direct strategic liaison and correspondence with HMRC officers",
    "Comprehensive review of audit scope and preparation of evidence",
    "VAT, PAYE, and Corporation Tax enquiry defense",
    "HMRC disclosure statement preparation and review",
    "Negotiation and mitigation of potential HMRC tax penalties",
    "IR35 (off-payroll working) audit protection and review",
    "Dispute resolution and formal tax appeal management",
    "Pre-emptive tax audit health check reviews",
  ];

  return (
    <>
      <PageHero
        eyebrow="HMRC INVESTIGATIONS"
        title="Expert Audit Defense. Protected Interests."
        sub="Secure professional representation and strategic correspondence handling during HMRC tax audits and enquiries."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "HMRC Investigations" }
        ]}
      />

      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 60% Column */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              <ScrollReveal>
                <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">
                  What's Included in Our HMRC Defense Service?
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
                  Protect Your Business During Audits
                </h2>
                <div className="text-[16px] text-ia-text-secondary font-normal space-y-6 leading-relaxed">
                  <p>
                    Receiving an enquiry letter from HMRC is a daunting experience. Whether it is a routine checking audit, a VAT dispute, or a detailed review of your corporate structure, handling it yourself without expert representation can lead to inflated tax assessments, penalties, or legal issues.
                  </p>
                  <p>
                    We manage the entire process. Our tax specialists handle all phone calls, letters, and meetings with HMRC tax officers. We verify that HMRC acts within its statutory boundaries, review your bookkeeping evidence, draft strategic disclosures, and negotiate penalty mitigations to minimize your exposure.
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

      {/* Related Services */}
      <section className="bg-ia-bg-light py-24 border-t border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <h3 className="text-[22px] font-bold text-white mb-10 text-left tracking-tight">
            You Might Also Be Interested In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                title="Annual Accounts"
                description="Prepare and file statutory limited company accounts. We ensure full GAAP and company tax return compliance."
                href="/services/annual-accounts"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                title="Tax Advisory"
                description="Bespoke tax optimization, research & development tax relief, and corporate restructuring advisory."
                href="/services/tax-advisory"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
