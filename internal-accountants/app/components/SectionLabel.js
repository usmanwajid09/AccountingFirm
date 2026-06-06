export default function SectionLabel({ children, className = "" }) {
  return (
    <span className={`block text-[12px] font-semibold text-ia-blue tracking-[0.12em] uppercase mb-4 ${className}`}>
      {children}
    </span>
  );
}
