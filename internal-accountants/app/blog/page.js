import Link from "next/link";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Blog & Insights",
  description: "Read accounting advice, bookkeeping hacks, HMRC compliance guides, and financial planning articles prepared by our partners.",
};

export default function BlogListing() {
  const posts = [
    {
      slug: "top-5-bookkeeping-mistakes-scaling-brands-make",
      category: "Bookkeeping",
      title: "Top 5 Bookkeeping Mistakes Scaling Brands Make",
      date: "June 4, 2026",
      readTime: "5 min read",
      excerpt: "Reconciliation lags, receipt tracking omissions, and improper general ledger setups can stall growth. Learn how to clean your books.",
      img: "/images/bookkeeping_concept.png",
    },
    {
      slug: "cash-flow-vs-net-profit-why-one-can-kill-you",
      category: "Advisory",
      title: "Cash Flow vs. Net Profit: Why One Can Kill You",
      date: "May 28, 2026",
      readTime: "6 min read",
      excerpt: "An income statement can display healthy gross profit margins while bank accounts run completely dry. Discover how working capital gaps happen.",
      img: "/images/hero_finance.png",
    },
    {
      slug: "how-to-build-a-dynamic-12-month-financial-forecast",
      category: "Planning",
      title: "How to Build a Dynamic 12-Month Financial Forecast",
      date: "May 15, 2026",
      readTime: "7 min read",
      excerpt: "Strategic scenario planning helps companies make capital investments and hire teams safely. Here is our partner's step-by-step forecasting guide.",
      img: "/images/reporting_dashboard.png",
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="BLOG & NEWS"
        title="Insights From the Team at Internal Accountants"
        sub="Expert commentary, practical guides, and industry news for UK businesses."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Listing Grid Section */}
      <section className="bg-ia-white py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post, idx) => (
              <ScrollReveal 
                key={post.slug} 
                delay={idx * 100}
                className="bg-ia-navy-alt border border-ia-border rounded-md overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full aspect-[16/9] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-fit cover desaturate-[5%] hover:scale-[1.05] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow text-left">
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ia-blue bg-ia-blue-tint rounded-[3px] px-2.5 py-1">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-2 leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-ia-blue transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-[13px] text-ia-text-muted mb-4">
                    {post.date} &bull; {post.readTime}
                  </div>
                  <p className="text-[15px] text-ia-text-secondary font-light leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Button href={`/blog/${post.slug}`} variant="text-link">
                      Read More
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pagination */}
          <ScrollReveal className="flex justify-center items-center gap-2 mt-8">
            <span className="w-10 h-10 rounded-sm bg-ia-blue text-ia-navy flex items-center justify-center font-semibold text-[14px]">1</span>
            <span className="w-10 h-10 rounded-sm border border-ia-border text-white flex items-center justify-center font-semibold text-[14px] hover:bg-ia-bg-light cursor-pointer transition-colors">2</span>
            <span className="w-10 h-10 rounded-sm border border-ia-border text-white flex items-center justify-center font-semibold text-[14px] hover:bg-ia-bg-light cursor-pointer transition-colors">Next &rarr;</span>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
