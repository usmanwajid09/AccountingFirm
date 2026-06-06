import Link from "next/link";

export default function Button({ href, variant = "primary", className = "", children, onClick, ...props }) {
  const baseStyle = "group inline-flex items-center justify-center rounded-sm font-semibold tracking-wider uppercase text-center transition-all duration-200 cursor-pointer text-[15px]";
  const variants = {
    primary: "bg-ia-blue text-ia-white hover:bg-ia-blue-dark py-[14px] px-[32px] border-none shadow-sm",
    secondary: "bg-transparent border-2 border-ia-blue text-ia-blue hover:bg-ia-blue hover:text-ia-white py-[12px] px-[30px]",
    inverse: "bg-ia-white text-ia-blue border-none hover:bg-ia-bg-light py-[14px] px-[32px]",
    "text-link": "bg-transparent text-ia-blue font-medium hover:underline p-0 lowercase normal-case tracking-normal",
  };

  const currentStyle = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={currentStyle} {...props}>
          {children}
          {variant === "text-link" && <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={currentStyle} {...props}>
        {children}
        {variant === "text-link" && <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={currentStyle} {...props}>
      {children}
      {variant === "text-link" && <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>}
    </button>
  );
}
