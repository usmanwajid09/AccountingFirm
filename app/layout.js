import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundGrid from "./components/BackgroundGrid";

export const metadata = {
  metadataBase: new URL("https://www.internalaccountants.com"),
  title: {
    default: "Internal Accountants | Global Bookkeeping, Accounting & Compliance",
    template: "%s | Internal Accountants",
  },
  description: "Internal Accountants delivers expert bookkeeping, international compliance, cash flow forecasting, and budgeting services for growing businesses worldwide.",
  openGraph: {
    title: "Internal Accountants | Global Bookkeeping, Accounting & Compliance",
    description: "Expert bookkeeping, international compliance, cash flow forecasting, and budgeting services for growing businesses worldwide.",
    url: "https://www.internalaccountants.com",
    siteName: "Internal Accountants",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 360,
        height: 350,
        alt: "Internal Accountants Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Accountants | Global Bookkeeping, Accounting & Compliance",
    description: "Expert bookkeeping, international compliance, cash flow forecasting, and budgeting services for growing businesses worldwide.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen bg-ia-navy font-sans text-ia-text-primary relative">
        <BackgroundGrid />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
