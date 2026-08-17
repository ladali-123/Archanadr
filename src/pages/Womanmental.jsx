import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

// अपनी इमेज के पाथ सही करें – यदि फ़ाइलें अलग हों तो बदलें
import woman from "../assets/woman.jpg";
import mental from "../assets/mental.jpg";
import benefit from "../assets/benefit.jpg";

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
  "Postpartum depression and anxiety after childbirth",
  "PMDD and hormonal mood swings before periods",
  "Anxiety or low mood during pregnancy",
  "Mood and memory changes during menopause",
  "Burnout from work, caregiving or relationship stress",
];

const BENEFITS = [
  "Promotes better long-term mental health outcomes",
  "Leads to quicker recovery from emotional challenges",
  "Helps build a happier, more stable family life",
  "Reduces stress levels significantly",
  "Improves focus and performance at work or home",
  "Strengthens relationships with partners and children",
  "Builds confidence, resilience and self-trust",
  "Restores a sense of control over daily life",
];

const PROCESS = [
  {
    step: "01",
    title: "Confidential First Conversation",
    desc: "A warm, judgment-free space to talk openly about what you're feeling — no diagnosis, no pressure, just listening.",
  },
  {
    step: "02",
    title: "Understanding Your Life Stage",
    desc: "We look at hormonal, situational and life-stage factors — pregnancy, postpartum, work, family — that shape what you're going through.",
  },
  {
    step: "03",
    title: "Personalised Assessment",
    desc: "A thorough evaluation to understand symptoms clearly and rule out what doesn't need treatment.",
  },
  {
    step: "04",
    title: "Tailored Care Plan",
    desc: "Together, we build a plan that may include therapy, medication where needed, and practical lifestyle guidance.",
  },
  {
    step: "05",
    title: "Confidentiality & Trust",
    desc: "Everything you share stays private. You set the pace of what you're comfortable discussing.",
  },
  {
    step: "06",
    title: "Ongoing Follow-Up",
    desc: "Regular check-ins online or in-clinic to track progress and adjust care as your life changes.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Heart,
    title: "Woman-Centred Care",
    desc: "Treatment that accounts for hormonal and life-stage factors, not a one-size-fits-all approach.",
  },
  {
    icon: Sparkles,
    title: "15+ Years of Experience",
    desc: "Extensive experience treating postpartum, perinatal and hormonal mental health concerns.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Online Booking",
    desc: "Book a consultation online from home, at a time that works around your schedule.",
  },
  {
    icon: MessageCircle,
    title: "Confidentiality & Trust",
    desc: "A safe space where your story is heard without fear of judgment.",
  },
  {
    icon: Phone,
    title: "Flexible Consultations",
    desc: "Online or in-clinic sessions, whichever feels more comfortable for you.",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Support",
    desc: "Care that continues beyond the first visit, built around lasting well-being.",
  },
];

const FAQS = [
  {
    q: "What counts as a women's mental health concern?",
    a: "It includes postpartum depression, PMDD, perinatal anxiety, menopause-related mood changes, and anxiety or depression that presents differently due to hormonal and life-stage factors.",
  },
  {
    q: "Is it safe to seek help during pregnancy?",
    a: "Yes. Care during pregnancy is approached with safety as the top priority, and treatment plans are adjusted accordingly.",
  },
  {
    q: "How do I book a consultation online?",
    a: "You can book directly through our website or WhatsApp, and choose between an online or in-clinic session.",
  },
  {
    q: "Will my consultation stay confidential?",
    a: "Yes, every conversation is completely confidential, whether online or in-clinic.",
  },
  {
    q: "How soon can I expect to feel better?",
    a: "This varies by person, but early intervention generally leads to faster, more stable recovery.",
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
          className={`w-4 h-4 shrink-0 text-[#1D5D9B] transition-transform duration-200 ${
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

export default function Womanmental() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[320px] md:h-[380px] overflow-hidden">
        <img
          src={woman}
          alt="Women's Mental Health"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2544]/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-['Inter'] text-3xl md:text-[44px] font-extrabold text-white mb-3">
            Women's Mental Health
          </h1>
          <p className="font-['Inter'] text-[14px] md:text-base text-[#E7EEF6] max-w-2xl leading-relaxed">
            Compassionate, confidential care for the hormonal, postpartum and
            life-stage related mental health concerns women face — a space
            built to listen first.
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
              const isActive = item.label === "Women's Mental Health";
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center justify-between gap-2 px-4 py-3.5 rounded-lg text-[13.5px] leading-snug font-['Inter'] font-medium transition-colors ${
                    isActive
                      ? "bg-[#1D5D9B] text-white"
                      : "text-[#3A4A61] border-b border-[#EEF1F5] last:border-b-0 hover:bg-[#F6F8FA]"
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
          <div className="rounded-2xl overflow-hidden mb-10 shadow-[0_10px_30px_rgba(15,37,68,0.10)]">
            <img
              src={mental}
              alt="Women's Mental Health Consultation"
              className="w-full h-[280px] md:h-[380px] object-cover object-center"
            />
          </div>

          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Is Women's Mental Health Care?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Women's mental health care focuses on the emotional and
              psychological concerns shaped by hormonal changes, pregnancy,
              postpartum recovery, menopause, and the everyday weight of
              caregiving and work. These experiences don't always fit neatly
              into generic mental health treatment.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              At Manah Psychiatry, every consultation starts with listening.
              Whether you're dealing with postpartum depression, anxiety
              during pregnancy, or mood changes around menopause, our
              approach is built to understand your life stage, not just your
              symptoms.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              Care is available online or in-clinic in Patna, so getting help
              is easy, private, and on your terms.
            </p>
          </div>

          {/* When to consider */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              When Should You Consider a Consultation?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              If your mood, energy or ability to function day-to-day has been
              affected for more than a couple of weeks, it may be time to
              reach out. Some common concerns we address include:
            </p>
            <ul className="space-y-3">
              {CONCERNS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#1D5D9B] shrink-0 mt-0.5" />
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
      <section className="bg-[#F6F8FA] px-6 md:px-10 lg:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight mb-4">
              Benefits of Early{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
                Support
              </span>
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-6">
              Reaching out early makes a real difference. Women who receive
              timely, tailored care recover faster and feel more supported
              through every life stage.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1D5D9B] shrink-0 mt-0.5" />
                  <span className="font-['Inter'] text-[13.5px] text-[#3A4A61] leading-snug">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,37,68,0.10)]">
            <img
              src={benefit}
              alt="Early Support Benefits"
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
              <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
                Process Works
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PROCESS.map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="shrink-0 w-11 h-11 rounded-lg bg-[#1D5D9B] text-white font-['Inter'] font-bold text-sm flex items-center justify-center">
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
      <section className="bg-[#F6F8FA] px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight">
              Why Choose Us for{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
                Women's Mental Health
              </span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[14px] text-[#5B6B84] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Choosing the right psychiatrist is the first step toward healing.
            We make sure you feel safe, cared for, and understood from your
            very first visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#E7EBF1] p-6 shadow-[0_2px_10px_rgba(15,37,68,0.06)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1D5D9B]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1D5D9B]" strokeWidth={2} />
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
              <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
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

          <div className="bg-gradient-to-br from-[#0a5f8c] to-[#0F2544] rounded-2xl p-8">
            <h3 className="font-['Inter'] text-white text-xl font-bold mb-2">
              Still have any questions?
            </h3>
            <p className="font-['Inter'] text-[#C4D0E0] text-sm mb-6">
              Feel free to contact us and get satisfactory answers.
            </p>
            <div className="flex flex-col gap-3">
              {/* ✅ फिक्स किया गया – <a> टैग जोड़ा गया */}
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