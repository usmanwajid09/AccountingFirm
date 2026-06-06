import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GSAPAnimation from "./components/GSAPAnimation";
import BackgroundGrid from "./components/BackgroundGrid";

export const metadata = {
  title: {
    default: "Internal Accountants | Global Bookkeeping, Accounting & Compliance",
    template: "%s | Internal Accountants",
  },
  description: "Internal Accountants delivers expert bookkeeping, international compliance, cash flow forecasting, and budgeting services for growing businesses worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex flex-col min-h-screen bg-ia-navy font-sans text-ia-text-primary relative">
        <BackgroundGrid />
        <GSAPAnimation />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
