import Button from "./Button";

export default function CTABanner({ 
  title = "Ready to take control of your finances?", 
  sub = "Get in touch today and find out how Internal Accountants can simplify your bookkeeping and reporting.",
  btnText = "Get in Touch",
  btnHref = "/contact" 
}) {
  return (
    <section className="bg-ia-blue py-16 md:py-20 text-center relative z-10 overflow-hidden reveal">
      <div className="container max-w-[800px] mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[28px] md:text-[36px] font-bold text-ia-navy leading-tight mb-4">
          {title}
        </h2>
        <p className="text-[17px] text-ia-navy/80 font-light leading-relaxed mb-8 max-w-[620px]">
          {sub}
        </p>
        <Button href={btnHref} className="bg-ia-navy text-white hover:bg-ia-navy-alt border-none shadow-sm">
          {btnText}
        </Button>
      </div>
    </section>
  );
}
