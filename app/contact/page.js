import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the partners at Internal Accountants. Contact our regional offices in London, Birmingham, and East Anglia, or request a visual accounts review.",
};

export default function Contact() {
  const offices = [
    {
      title: "London Office",
      address: ["Central London"],
      phone: "+44 782 876 2984",
      email: "london@internalaccountants.com",
    },
    {
      title: "East Anglia Office",
      address: ["19c Diss Business Park", "Hopper Way, Diss", "IP22 4GT"],
      phone: "01379 213 790",
      email: "hello@internalaccountants.com",
    },
    {
      title: "Birmingham Office",
      address: ["126 Colmore Row", "Birmingham", "B3 3AP"],
      phone: "0333 444 3350",
      email: "midlands@internalaccountants.com",
    },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="We'd Love to Hear From You"
        sub="Whether you have a question or are ready to get started, our team is here to help."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 2. Contact Grid & Content */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Form (60% / 7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="mb-8">
                  <SectionLabel>Send Us a Message</SectionLabel>
                  <h2 className="text-[28px] font-bold text-white tracking-tight">
                    Let's Talk About Your Books
                  </h2>
                </div>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Right: Contact Details Card (40% / 5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={100} className="h-full">
                <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 lg:p-10 flex flex-col justify-between h-full shadow-card">
                  <div>
                    <h3 className="text-[20px] font-bold text-white mb-8">
                      Contact Details
                    </h3>

                    <div className="flex flex-col gap-8">
                      {/* Phone */}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-ia-navy-alt border border-ia-border rounded-md flex items-center justify-center text-ia-blue shrink-0 shadow-sm">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[12px] font-semibold text-ia-text-muted uppercase tracking-wider mb-0.5">
                            Phone Support
                          </span>
                          <div className="flex items-center gap-3">
                            <a 
                              href="tel:+447828762984" 
                              className="text-[16px] font-bold text-white hover:text-ia-blue transition-colors duration-200"
                            >
                              +44 782 876 2984
                            </a>
                            <a 
                              href="https://wa.me/447828762984" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-[#25D366] hover:text-[#128C7E] flex items-center transition-colors"
                              aria-label="WhatsApp"
                            >
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.488 5.35 1.489 5.503 0 9.979-4.477 9.982-9.983.001-2.667-1.036-5.176-2.92-7.062C17.17 1.71 14.665.673 12.003.673 6.5 0.673 2.023 5.15 2.02 10.656c-.001 2.054.499 3.69 1.493 5.358L2.53 21.45l5.117-1.341zM17.65 14.86c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.29-.48-2.45-1.52-.9-0.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53H8.3c-.2 0-.53.07-.8.38-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 0.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.15-.27-.23-.57-.38z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-ia-navy-alt border border-ia-border rounded-md flex items-center justify-center text-ia-blue shrink-0 shadow-sm">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[12px] font-semibold text-ia-text-muted uppercase tracking-wider mb-0.5">
                            Email Enquiries
                          </span>
                          <a 
                            href="mailto:partners@internalaccountants.com" 
                            className="text-[16px] font-bold text-white hover:text-ia-blue transition-colors duration-200 break-all"
                          >
                            partners@internalaccountants.com
                          </a>
                        </div>
                      </div>

                      {/* Head Office Address */}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-ia-navy-alt border border-ia-border rounded-md flex items-center justify-center text-ia-blue shrink-0 shadow-sm">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[12px] font-semibold text-ia-text-muted uppercase tracking-wider mb-0.5">
                            London Office (Headquarters)
                          </span>
                          <span className="text-[15px] text-white leading-relaxed font-light">
                            Central London
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-ia-border">
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[15px] font-semibold text-ia-blue hover:text-ia-blue-dark hover:underline transition-all duration-200"
                    >
                      Connect on LinkedIn <span className="ml-1.5 font-normal">&rarr;</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Regional Offices Section */}
      <section className="bg-ia-bg-light py-24 border-t border-b border-ia-border">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="section-header text-left mb-16 reveal">
            <SectionLabel>Locations</SectionLabel>
            <h2 className="text-[32px] md:text-[36px] font-bold text-white tracking-tight">
              Our Regional Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100} 
                className="bg-ia-navy-alt border border-ia-border rounded-md p-8 shadow-card flex flex-col justify-between hover:shadow-hover hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div>
                  <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-ia-blue shrink-0" />
                    {office.title}
                  </h3>
                  <p className="text-[15px] text-ia-text-secondary font-light leading-relaxed mb-6">
                    {office.address.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-ia-border text-[14px]">
                  <a 
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="text-white hover:text-ia-blue transition-colors font-medium flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-ia-text-muted" />
                    {office.phone}
                  </a>
                  <a 
                    href={`mailto:${office.email}`}
                    className="text-white hover:text-ia-blue transition-colors font-medium flex items-center gap-2 break-all"
                  >
                    <Mail className="w-4 h-4 text-ia-text-muted" />
                    {office.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Map Embed */}
      <section className="bg-ia-bg-light py-0">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12 py-12">
          <ScrollReveal className="overflow-hidden rounded-md border border-ia-border shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.9696950294943!2d1.1171804771545625!3d52.38006324675549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9ba64e42ba6d9%3A0xe543df54bcfa1db8!2sDiss%20Business%20Park!5e0!3m2!1sen!2suk!4v1717498765432!5m2!1sen!2suk"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Internal Accountants HQ Location Map"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
