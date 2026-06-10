import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";

const postsDatabase = {
  "top-5-bookkeeping-mistakes-scaling-brands-make": {
    category: "Bookkeeping",
    title: "Top 5 Bookkeeping Mistakes Scaling Brands Make",
    date: "June 4, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    authorName: "Tauseef Ahmad",
    authorRole: "Operations Lead Partner",
    authorImg: "/images/Tauseef ahmad.png",
    content: (
      <>
        <p>
          Maintaining accurate books is the foundation of any successful business. However, as companies grow rapidly, bookkeeping is often the first area to suffer from neglect. Operational leaders become consumed with customer acquisition, leaving transactions unclassified and ledgers unbalanced.
        </p>
        <h2>1. Delaying Bank Reconciliations</h2>
        <p>
          Reconciling your bank feeds weekly ensures that bank balances align with ledger accounts. Waiting until the end of the month, or even the end of the quarter, creates a mountain of work. Transactions are easily forgotten, and audit trails grow cold. Weekly reconciliation prevents errors and highlights credit card leaks immediately.
        </p>
        <h2>2. Mixing Personal and Business Expenses</h2>
        <p>
          This is especially common in startups. Charging personal items to business accounts creates massive compliance risks and complicates HMRC audits. Establish a strict boundary between corporate funds and personal cash flows from day one.
        </p>
        <h2>3. Neglecting Receipt Tracking</h2>
        <p>
          Without proof of purchase, deductible business expenses can be rejected during audits. Relying on paper receipts is an outdated approach. We recommend using tools like Hubdoc or Dext to snap photos of receipts and match them directly to Xero ledgers.
        </p>
        <h2>4. Misclassifying Expenses</h2>
        <p>
          Classifying a capital expense (CAPEX) as an operating cost (OPEX) alters your profit summaries and creates tax reporting errors. Ensure you have clear guidelines or partner advisory checks to maintain consistency.
        </p>
        <h2>5. Delaying Software Setup</h2>
        <p>
          Excel sheets work for the first few months, but scaling brands need structured systems. Transitioning to cloud software like Xero or QuickBooks Online early prevents data loss and makes weekly reconciliations effortless.
        </p>
      </>
    ),
  },
  "cash-flow-vs-net-profit-why-one-can-kill-you": {
    category: "Advisory",
    title: "Cash Flow vs. Net Profit: Why One Can Kill You",
    date: "May 28, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
    authorName: "Usman Tahir",
    authorRole: "Client Services Partner",
    authorImg: "/images/Usman Tahir.png",
    content: (
      <>
        <p>
          It is a common paradox in business: your income statement shows healthy net profits, yet your bank accounts are completely dry. You are profitable on paper, but you struggle to pay suppliers or clear payroll on time.
        </p>
        <h2>The Net Profit Illusion</h2>
        <p>
          Net profit is an accounting calculation. It balances recognized revenues against recognized expenses during a specific period. However, under accrual accounting rules, revenue is recognized when invoices are sent, not when cash is received. If clients take 60 days to pay, your profit report looks great, but your cash reserves are depleted.
        </p>
        <h2>The Cash Flow Reality</h2>
        <p>
          Cash flow is the physical movement of money into and out of your business. It is the absolute lifeblood of operations. A business can survive for months without generating net profit, but it will collapse the day it runs out of cash.
        </p>
        <h2>Managing the Working Capital Gap</h2>
        <p>
          The gap between paying suppliers and receiving client collections is your working capital cycle. To optimize this, implement strict credit terms (e.g., Net 14), send automated collection reminders, and build detailed rolling cash flow forecasts to anticipate low-reserve periods before they happen.
        </p>
      </>
    ),
  },
  "how-to-build-a-dynamic-12-month-financial-forecast": {
    category: "Planning",
    title: "How to Build a Dynamic 12-Month Financial Forecast",
    date: "May 15, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    authorName: "Hamza Zahoor",
    authorRole: "Managing Partner",
    authorImg: "/images/Hamza Zahoor.png",
    content: (
      <>
        <p>
          A dynamic financial forecast is a roadmap for your business. It helps you run scenario analyses, model recruitment plans, and make strategic CAPEX decisions without risking corporate solvency.
        </p>
        <h2>1. Establish Your Baseline</h2>
        <p>
          Begin by collecting 12 months of historic overhead cost data. Separate fixed costs (rent, core payroll, software) from variable costs (marketing spend, inventory purchases). This baseline represents your minimum operating costs.
        </p>
        <h2>2. Build Multi-Scenario Revenue Models</h2>
        <p>
          Do not build a single forecast path. Create three scenarios:
          <strong style={{ color: "var(--ia-blue)", display: "block", marginTop: "8px" }}>
            &bull; Conservative (20% revenue drop - recession buffer)<br />
            &bull; Base Case (expected performance)<br />
            &bull; Optimistic Growth (aggressive expansion)
          </strong>
          This helps you understand the impact of sudden market drops or rapid scaling opportunities before they arise.
        </p>
        <h2>3. Monitor Net Burn & Solvency Runways</h2>
        <p>
          Your net burn rate determines how fast cash reserves decrease. Divide current cash by net burn to identify months of runway remaining. If your runway drops below 6 months, trigger pre-planned cost controls.
        </p>
        <h2>4. Track Variances Monthly</h2>
        <p>
          A forecast is useless if it is not updated. Compare actual reconciled bank ledger items against the budget model monthly. Analyze variances immediately to identify cost leaks and adjust targets for the upcoming quarter.
        </p>
      </>
    ),
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postsDatabase[slug];
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} prepared by partner ${post.authorName} at Internal Accountants.`,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = postsDatabase[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-ia-navy py-24">
      <div className="container max-w-[760px] mx-auto px-6 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-ia-text-secondary mb-10">
          <Link href="/" className="hover:text-ia-blue">Home</Link>
          <span>&gt;</span>
          <Link href="/blog" className="hover:text-ia-blue">Blog</Link>
          <span>&gt;</span>
          <span className="text-ia-text-muted line-clamp-1">{post.title}</span>
        </div>

        {/* Header content */}
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ia-blue bg-ia-blue-tint rounded-[3px] px-2.5 py-1">
              {post.category}
            </span>
          </div>
          <h1 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4 tracking-tight">
            {post.title}
          </h1>
          <div className="text-[14px] text-ia-text-secondary mb-10">
            Published on {post.date} &bull; {post.readTime}
          </div>
        </ScrollReveal>

        {/* Featured Image */}
        <ScrollReveal className="w-full aspect-[16/9] overflow-hidden rounded-md mb-12 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-fit cover desaturate-[5%]"
          />
        </ScrollReveal>

        {/* Article Body */}
        <ScrollReveal className="prose prose-slate max-w-none text-[17px] text-ia-text-secondary leading-[1.75] font-light space-y-6">
          {post.content}
        </ScrollReveal>

        <hr className="my-12 border-ia-border" />

        {/* Author Bio Card */}
        <ScrollReveal className="bg-ia-bg-light border border-ia-border rounded-md p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-ia-border relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.authorImg}
              alt={post.authorName}
              className="w-full h-full object-fit cover desaturate-[5%]"
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-[16px] font-bold text-white">{post.authorName}</h4>
            <span className="block text-[13px] text-ia-blue font-semibold uppercase tracking-wider mb-2">
              {post.authorRole}
            </span>
            <p className="text-[14px] text-ia-text-secondary font-light">
              Expert corporate accountant at Internal Accountants. Managing core finance audits and strategic reviews.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </article>
  );
}
