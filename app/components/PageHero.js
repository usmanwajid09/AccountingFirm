import Link from "next/link";

export default function PageHero({ eyebrow, title, sub, breadcrumbs = [] }) {
  return (
    <section 
      className="relative min-h-[340px] py-12 lg:h-[380px] lg:py-0 bg-ia-navy flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/team_boardroom.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Cyber-dark gradient overlay */}
      <div 
        className="absolute inset-0 z-1" 
        style={{
          background: "linear-gradient(135deg, rgba(1, 22, 24, 0.96) 0%, rgba(2, 34, 37, 0.86) 100%)"
        }}
      />

      <div className="container relative z-10 w-full mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="absolute top-[-70px] left-0 right-0 flex justify-center items-center gap-2 text-[13px] text-ia-text-secondary">
          <Link href="/" className="hover:text-ia-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span>&gt;</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-ia-white transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-ia-text-light">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-[800px] text-center mx-auto pt-8">
          {eyebrow && (
            <span className="block text-[12px] font-bold text-ia-blue tracking-[0.12em] uppercase mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-[36px] md:text-[48px] font-bold text-ia-white leading-tight mb-4">
            {title}
          </h1>
          {sub && (
            <p className="text-[17px] text-ia-text-light font-light leading-relaxed">
              {sub}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
