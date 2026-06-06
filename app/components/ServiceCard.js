import Button from "./Button";
import Link from "next/link";

export default function ServiceCard({ image, title, description, href, horizontal = false, stepNumber }) {
  
  // Custom 3D Isometric Photo Frame Component
  const IsometricPhotoFrame = () => (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto shrink-0 group select-none">
      {/* Clipped image face */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          WebkitClipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* SVG 3D Cube Overlay Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Hexagon Border */}
        <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="var(--ia-blue)" strokeWidth="1.5" />
        {/* 3D Face Dividers */}
        <line x1="50" y1="50" x2="50" y2="100" stroke="var(--ia-blue)" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="0" y2="25" stroke="var(--ia-blue)" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="100" y2="25" stroke="var(--ia-blue)" strokeWidth="1.5" />
      </svg>
    </div>
  );

  const watermarkIdx = stepNumber 
    ? (parseInt(stepNumber) - 1) % 4 
    : (title ? title.charCodeAt(0) % 4 : 0);

  if (horizontal) {
    // Services Overview Page Horizontal Layout
    return (
      <div className="relative flex flex-col md:flex-row bg-ia-navy-alt rounded-md shadow-card glow-card-purple-hover hover:bg-white transition-all duration-300 overflow-hidden items-center p-8 md:p-12 gap-8 md:gap-12 text-left w-full border border-ia-border/40 group/card">
        
        {/* Absolute Background Leaf Watermark */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-[0.035] pointer-events-none transition-all duration-700 ease-out group-hover/card:scale-125 group-hover/card:rotate-12 group-hover/card:opacity-[0.07] z-0 select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/test_shape_nature_${watermarkIdx}.png`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Left: 3D Photo Frame */}
        <div className="w-full md:w-[35%] flex justify-center shrink-0 relative z-10">
          <IsometricPhotoFrame />
        </div>

        {/* Right: Content details */}
        <div className="w-full md:w-[65%] flex flex-col justify-center gap-4 relative z-10">
          {stepNumber && (
            <span className="text-[11px] font-bold text-ia-blue group-hover/card:text-ia-border-strong tracking-[0.15em] uppercase transition-colors duration-300">
              SERVICE {stepNumber}
            </span>
          )}
          <h3 className="text-[28px] md:text-[36px] font-bold text-ia-blue group-hover/card:text-ia-navy tracking-tight leading-none transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[16px] text-white/90 group-hover/card:text-ia-navy/80 font-light leading-relaxed max-w-[640px] transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4">
            <Link 
              href={href}
              className="inline-flex items-center justify-center bg-ia-blue text-ia-navy group-hover/card:bg-ia-navy group-hover/card:text-white hover:bg-ia-blue-dark transition-all duration-200 font-bold px-8 py-3.5 rounded-[4px] text-[15px] uppercase tracking-wider shadow-sm"
            >
              {title}
            </Link>
          </div>
        </div>

      </div>
    );
  }

  // Home Page Grid Vertical Layout (using 3D Photoframe on top)
  return (
    <div className="relative overflow-hidden bg-ia-navy-alt border border-ia-border hover:bg-white rounded-md p-8 pt-10 shadow-card glow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full text-left gsap-reveal group/card">
      
      {/* Absolute Background Leaf Watermark */}
      <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-[0.03] pointer-events-none transition-all duration-700 ease-out group-hover/card:scale-120 group-hover/card:rotate-[15deg] group-hover/card:opacity-[0.06] z-0 select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/test_shape_nature_${watermarkIdx}.png`}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3D Photoframe Header */}
      {image && (
        <div className="mb-6 flex justify-center w-full relative z-10">
          <IsometricPhotoFrame />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-[20px] font-bold text-white group-hover/card:text-ia-navy leading-snug mb-3 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[15px] text-ia-text-secondary group-hover/card:text-ia-navy/80 font-light mb-6 flex-grow leading-relaxed transition-colors duration-300">
          {description}
        </p>
        <div className="mt-auto">
          <Link 
            href={href} 
            className="text-[14px] font-bold text-ia-blue group-hover/card:text-ia-navy hover:text-ia-blue-dark inline-flex items-center gap-1 hover:underline transition-colors duration-300"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
