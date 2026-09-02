import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Baby,
  Sparkles,
} from "lucide-react";

// अपनी इमेज के पाथ सही करें – यदि फ़ाइलें अलग हों तो बदलें
import adol from "../assets/adol.jpg";
import group from "../assets/group.jpg";
import teen from "../assets/teen.jpg";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const SERVICE_CATEGORY = [
  { label: "Women's Mental Health", to: "/service/womens-mental-health" },
  { label: "Psychiatric Consultation", to: "/service/psychiatric-consultation" },
  { label: "Comprehensive Mental Health Assessment", to: "/service/comprehensive-assessment" },
  { label: "Medication Management", to: "/service/medication-management" },
  { label: "Neuropsychiatric Care", to: "/service/neuropsychiatric-care" },
  { label: "Child & Adolescent Psychiatry", to: "/service/child-adolescent-psychiatry" },
  { label: "Telepsychiatry", to: "/service/telepsychiatry" },
];

const CONCERNS = [
  "Difficulty focusing, sitting still, or following instructions",
  "Persistent sadness, withdrawal, or loss of interest in a child or teen",
  "Meltdowns, anger outbursts, or defiant behaviour",
  "Anxiety around school, friendships, or performance",
  "Delays in speech, learning, or social development",
];

const BENEFITS = [
  "Helps children build healthy emotional foundations early",
  "Improves school performance and peer relationships",
  "Reduces family stress from unmanaged behavioural issues",
  "Catches developmental delays before they compound",
  "Builds coping skills that last into adulthood",
  "Strengthens parent-child communication and trust",
  "Prevents small concerns from becoming bigger struggles",
  "Gives parents a clear, guided path forward",
];

const PROCESS = [
  {
    step: "01",
    title: "Warm, Child-Friendly First Meeting",
    desc: "A gentle first conversation designed to put your child at ease, not overwhelm them.",
  },
  {
    step: "02",
    title: "Understanding the Full Picture",
    desc: "We talk with you and, where appropriate, your child about behaviour, mood, school and home life.",
  },
  {
    step: "03",
    title: "Developmental & Behavioural Assessment",
    desc: "Age-appropriate tools help clarify whether concerns are developmental, emotional or behavioural.",
  },
  {
    step: "04",
    title: "Family-Involved Care Plan",
    desc: "Together, we build a plan that may include therapy, parent guidance, school coordination or medication.",
  },
  {
    step: "05",
    title: "Confidentiality & Trust",
    desc: "Your child's comfort and privacy are respected at every step of the process.",
  },
  {
    step: "06",
    title: "Ongoing Growth Monitoring",
    desc: "Regular follow-ups to track progress as your child grows and circumstances change.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Baby,
    title: "Child-Centred Approach",
    desc: "Care built around how children and teens actually communicate and feel safe.",
  },
  {
    icon: Sparkles,
    title: "15+ Years of Experience",
    desc: "Extensive experience with ADHD, anxiety, autism spectrum and behavioural concerns.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Online Booking",
    desc: "Book a consultation online for your child, at a time that fits your family.",
  },
  {
    icon: MessageCircle,
    title: "Confidentiality & Trust",
    desc: "A safe space for both parents and children to speak openly.",
  },
  {
    icon: Phone,
    title: "Flexible Consultations",
    desc: "Online or in-clinic sessions, whichever feels easier for your family.",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Developmental Support",
    desc: "Care that grows with your child, not a one-time fix.",
  },
];

const FAQS = [
  {
    q: "At what age can a child start seeing a psychiatrist?",
    a: "Children of any age can be evaluated, with the approach adjusted based on their developmental stage.",
  },
  {
    q: "Will my child need medication?",
    a: "Not always. Many concerns are managed with therapy and behavioural strategies, with medication considered only when needed.",
  },
  {
    q: "Can I stay in the room during the consultation?",
    a: "Yes, parents are welcome, and some portions may also involve speaking with your child alone, based on comfort and age.",
  },
  {
    q: "How do I know if my child needs an evaluation?",
    a: "If behaviour, mood or development is affecting daily life, school, or relationships, it's worth a consultation.",
  },
  {
    q: "Is the consultation confidential?",
    a: "Yes, with age-appropriate boundaries respected for both the child and the family.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border border-[#E1E6ED] rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-['Inter'] text-[14.5px] font-semibold text-[#16233B] pr-4">
          {item.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-[#4a1263] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84] px-5 pb-4">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function Adolescent() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[320px] md:h-[380px] overflow-hidden">
        <img
          src={adol}
          alt="Child & Adolescent Psychiatry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-['Inter'] text-3xl md:text-[44px] font-extrabold text-white mb-3 drop-shadow-md">
            Child & Adolescent Psychiatry
          </h1>
          <p className="font-['Inter'] text-[14px] md:text-base text-white max-w-2xl leading-relaxed drop-shadow-md">
            Gentle, age-appropriate care that helps children and teens
            navigate behavioural, emotional and developmental concerns.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <h3 className="font-['Inter'] text-[13px] font-bold tracking-[0.15em] text-[#8592A3] uppercase mb-3">
            Services Category
          </h3>
          <nav className="flex flex-col gap-1.5 border border-[#E1E6ED] rounded-xl overflow-hidden p-2">
            {SERVICE_CATEGORY.map((item) => {
              const isActive = item.label === "Child & Adolescent Psychiatry";
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center justify-between gap-2 px-4 py-3.5 rounded-lg text-[13.5px] leading-snug font-['Inter'] font-medium transition-colors ${
                    isActive
                      ? "bg-[#4a1263] text-white"
                      : "text-[#3A4A61] border-b border-[#EEF1F5] last:border-b-0 hover:bg-[#F8F6FA]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div>
          {/* Main image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-[0_10px_30px_rgba(74,18,99,0.10)]">
            <img
              src={teen}
              alt="Child & Adolescent Psychiatry Consultation"
              className="w-full h-[280px] md:h-[380px] object-cover object-center"
            />
          </div>

          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Is Child & Adolescent Psychiatry?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Child and adolescent psychiatry focuses on the emotional,
              behavioural and developmental concerns unique to growing minds
              — from ADHD and anxiety to mood changes, learning difficulties
              and social struggles.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              At Dr. Archana Singh Psychiatry, every consultation is approached gently,
              with age-appropriate communication that puts your child at
              ease while giving parents clear, honest guidance.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              Consultations are available online or in-clinic in Patna, for
              children, teens and their families.
            </p>
          </div>

          {/* When to consider */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              When Should You Consider a Consultation?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              If your child's behaviour, mood or development has been
              worrying you for more than a few weeks, or is affecting school
              and relationships, it's worth reaching out. Common concerns we
              address include:
            </p>
            <ul className="space-y-3">
              {CONCERNS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#4a1263] shrink-0 mt-0.5" />
                  <span className="font-['Inter'] text-[14px] text-[#3A4A61]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="bg-[#F8F6FA] px-6 md:px-10 lg:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight mb-4">
              Benefits of Early{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Support
              </span>
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-6">
              Addressing concerns early gives children the tools to thrive
              — at home, in school, and in their friendships — before small
              struggles grow into bigger ones.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4a1263] shrink-0 mt-0.5" />
                  <span className="font-['Inter'] text-[13.5px] text-[#3A4A61] leading-snug">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(74,18,99,0.10)]">
            <img
              src={group}
              alt="Benefits of Early Child Support"
              className="w-full h-[300px] md:h-[350px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight">
              How Our{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Consultation Process Works
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PROCESS.map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="shrink-0 w-11 h-11 rounded-lg bg-[#4a1263] text-white font-['Inter'] font-bold text-sm flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-['Inter'] text-[16px] font-bold text-[#16233B] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="bg-[#F8F6FA] px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight">
              Why Choose Us for{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Child & Adolescent Psychiatry
              </span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[14px] text-[#5B6B84] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Choosing the right psychiatrist for your child is a big
            decision. We make sure your child feels safe, and you feel
            informed, at every step.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#E7EBF1] p-6 shadow-[0_2px_10px_rgba(74,18,99,0.06)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#4a1263]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#4a1263]" strokeWidth={2} />
                  </div>
                  <h3 className="font-['Inter'] text-[15px] font-bold text-[#16233B] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight mb-8">
              Frequently Asked{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {FAQS.map((item, i) => (
                <FAQItem
                  key={item.q}
                  item={item}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#5a1a7a] to-[#2b0a40] rounded-2xl p-8">
            <h3 className="font-['Inter'] text-white text-xl font-bold mb-2">
              Still have any questions?
            </h3>
            <p className="font-['Inter'] text-[#E4D3EC] text-sm mb-6">
              Feel free to contact us and get satisfactory answers.
            </p>
            <div className="flex flex-col gap-3">
              {/* FIXED: Properly opened <a> tags */}
              <a
                href="tel:+917543976796"
                className="flex items-center gap-2.5 text-white font-['Inter'] text-sm font-semibold"
              >
                <Phone className="w-4 h-4" /> +91 7543976796
              </a>
              <a
                href="https://wa.me/917543976796"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Inter'] font-semibold text-sm px-5 py-3 rounded-full transition-colors w-fit mt-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}