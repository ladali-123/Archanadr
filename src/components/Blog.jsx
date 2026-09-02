import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import anxietyImg from "../assets/anxiety.jpg";
import childImg from "../assets/child.jpg";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

// ---- PLACEHOLDER DATA — replace with real blog posts later ----
const BLOG_POSTS = [
  {
    category: "Mental Health",
    title: "Understanding Anxiety: Signs, Causes & When to Seek Help",
    excerpt:
      "A closer look at how anxiety shows up in daily life and the treatment options that actually help.",
    date: "Sep 2026",
    readTime: "5 min read",
    img: anxietyImg,
    link: "/blog/understanding-anxiety",
  },
  {
    category: "Parenting",
    title: "How to Talk to Your Child About Their Mental Health",
    excerpt:
      "Practical, age-appropriate ways parents can open the conversation without causing worry.",
    date: "Sep 2026",
    readTime: "4 min read",
    img: childImg,
    link: "/blog/talk-to-child-about-mental-health",
  },
  {
    category: "De-Addiction",
    title: "Breaking the Cycle: A Guide to Recovery From Addiction",
    excerpt:
      "What a structured de-addiction journey looks like, from first consultation to long-term recovery.",
    date: "Coming Soon",
    readTime: "6 min read",
    img: "https://i.pinimg.com/1200x/1b/40/bf/1b40bf5b364d9a20d0f095b07903d0a8.jpg",
    link: null,
  },
];

function BlogCard({ post }) {
  const isPublished = Boolean(post.link);

  const cardInner = (
    <>
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a40]/70 via-[#2b0a40]/0 to-transparent" />
        <span className="absolute top-4 left-4 bg-white text-[#4a1263] text-[11px]
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

        {isPublished ? (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4a1263]">
            Read More
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4a1263] opacity-60 cursor-not-allowed">
            Read More
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </>
  );

  const cardClasses =
    "group bg-white rounded-2xl overflow-hidden border border-[#E7EBF1] " +
    "shadow-[0_2px_10px_rgba(74,18,99,0.06)] hover:shadow-[0_18px_40px_rgba(74,18,99,0.14)] " +
    "transition-all duration-500 hover:-translate-y-1.5";

  if (isPublished) {
    return (
      <Link to={post.link} className={`block ${cardClasses}`}>
        {cardInner}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardInner}</div>;
}

export default function BlogSection() {
  return (
    <section className="relative bg-[#F8F6FA] py-16 px-6 md:px-10 lg:px-20 overflow-hidden">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-[#4a1263]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-[#4a1263]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#4a1263]" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-[#4a1263] uppercase">
              From Our Blog
            </span>
            <span className="h-px w-8 bg-[#4a1263]" />
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Insights{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
              &amp; Articles
            </span>
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            Thoughtful, easy-to-understand writing on mental health — new
            articles launching soon.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}