import  { useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";


 

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

// ---- PLACEHOLDER DATA — replace with real blog posts later ----
const BLOG_POSTS = [
  {
    category: "Mental Health",
    title: "Understanding Anxiety: Signs, Causes & When to Seek Help",
    excerpt:
      "A closer look at how anxiety shows up in daily life and the treatment options that actually help.",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    category: "Parenting",
    title: "How to Talk to Your Child About Their Mental Health",
    excerpt:
      "Practical, age-appropriate ways parents can open the conversation without causing worry.",
    date: "Coming Soon",
    readTime: "4 min read",
  },
  {
    category: "De-Addiction",
    title: "Breaking the Cycle: A Guide to Recovery From Addiction",
    excerpt:
      "What a structured de-addiction journey looks like, from first consultation to long-term recovery.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
];

function BlogCard({ post }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E7EBF1] 
    shadow-[0_2px_10px_rgba(15,37,68,0.06)] hover:shadow-[0_18px_40px_rgba(15,37,68,0.14)] 
    transition-all duration-500 hover:-translate-y-1.5">
      {/* image placeholder — swap for a real thumbnail once posts exist */}
      <div className="relative h-48 bg-gradient-to-br from-[#0F2544] to-[#1D5D9B] 
      flex items-center justify-center overflow-hidden">
        <span className="font-['Playfair_Display'] italic text-white/25 text-4xl select-none">
          Aa
        </span>
        <span className="absolute top-4 left-4 bg-amber-400 text-[#16233B] text-[11px]
         font-bold px-3 py-1 rounded-full font-['Inter']">
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 font-['Inter'] text-[12px] text-[#9AA6B5]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-['Inter'] text-[17px] font-bold text-[#16233B] leading-snug mb-2.5">
          {post.title}
        </h3>
        <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84] mb-4">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1D5D9B] opacity-60 cursor-not-allowed">
          Read More
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleNotify = (e) => {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your mailing list / backend later
    console.log("Notify me:", email);
    setSubscribed(true);
  };

  return (
    <section className="relative bg-[#F6F8FA] py-16 px-6 md:px-10 lg:px-16 overflow-hidden">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-[#1D5D9B]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              From Our Blog
            </span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Insights{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
              &amp; Articles
            </span>
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            Thoughtful, easy-to-understand writing on mental health — new
            articles launching soon.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        {/* Notify-me strip instead of a "View All" button since there's nothing to view yet */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] px-8 py-9 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="font-['Inter'] text-white text-xl md:text-2xl font-bold mb-1.5">
              Our blog is launching soon
            </h3>
            <p className="font-['Inter'] text-[#C4D0E0] text-sm">
              Leave your email and we'll notify you the moment new articles
              go live.
            </p>
          </div>

          {subscribed ? (
            <p className="font-['Inter'] text-white font-semibold text-sm bg-white/10 px-5 py-3 rounded-full">
              🎉 You're on the list — thank you!
            </p>
          ) : (
            <form
              onSubmit={handleNotify}
              className="flex w-full md:w-auto items-center gap-2 bg-white rounded-full p-1.5 shadow-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 md:w-56 font-['Inter'] text-[13.5px] text-[#16233B] placeholder:text-[#9AA6B5] px-4 py-2 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-amber-400 hover:bg-amber-500 text-[#16233B] font-['Inter'] font-semibold text-[13px] px-5 py-2.5 rounded-full transition-colors"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}