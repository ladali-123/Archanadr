import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Stethoscope,
  Sparkles,
} from "lucide-react";

// अपनी इमेज के पाथ सही करें – यदि फ़ाइलें अलग हों तो बदलें
import aconsult from "../assets/aconsult.jpg";
import physic from "../assets/physic.jpg";
import improve from "../assets/improve.jpg";

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
  "Persistent sadness, low energy or loss of interest",
  "Excessive worry or racing thoughts that won't settle",
  "Trouble sleeping, concentrating or functioning daily",
  "Sudden mood changes or irritability without a clear cause",
  "Wanting to understand what you're feeling, without judgment",
];

const BENEFITS = [
  "Provides clarity on what you're experiencing and why",
  "Opens the door to the right treatment, faster",
  "Reduces the fear and stigma around seeking help",
  "Improves sleep, focus and everyday functioning",
  "Strengthens relationships at home and at work",
  "Builds long-term emotional resilience",
  "Gives you a plan instead of just worry",
  "Creates a safe space to be heard, fully",
];

const PROCESS = [
  {
    step: "01",
    title: "Caring First Encounter",
    desc: "A cordial, judgment-free first conversation where you can speak freely about what's on your mind.",
  },
  {
    step: "02",
    title: "Active Listening",
    desc: "The psychiatrist listens carefully and asks gentle questions to understand your full picture.",
  },
  {
    step: "03",
    title: "Comprehensive Understanding",
    desc: "We look at your daily life, sleep, relationships and mood patterns for a complete view.",
  },
  {
    step: "04",
    title: "Collaborative Care Plan",
    desc: "Together, we build a plan that may include lifestyle guidance, therapy or medication — explained simply.",
  },
  {
    step: "05",
    title: "Confidentiality & Trust",
    desc: "Everything you share is handled with the utmost care, respect, and total privacy.",
  },
  {
    step: "06",
    title: "Follow-Up & Continuous Support",
    desc: "Healing is a journey. We offer follow-ups to monitor progress and ensure you always feel supported.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Stethoscope,
    title: "Experienced Psychiatrist",
    desc: "Compassionate, clinical care that takes the time to hear your story fully.",
  },
  {
    icon: Sparkles,
    title: "15+ Years of Experience",
    desc: "Extensive experience across mood, anxiety, and stress-related concerns.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Online Booking",
    desc: "Book a consultation online for yourself or a loved one, from anywhere.",
  },
  {
    icon: MessageCircle,
    title: "Confidentiality & Trust",
    desc: "A safe space where your feelings are heard without fear of judgment.",
  },
  {
    icon: Phone,
    title: "Flexible Consultations",
    desc: "Online or in-clinic sessions, whichever feels more comfortable for you.",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Well-being Focus",
    desc: "A dedication to lasting support, not just a single appointment.",
  },
];

const FAQS = [
  {
    q: "What is a psychiatric consultation?",
    a: "It's a first, cordial conversation with a mental health professional to talk through what you're feeling, without fear of judgment.",
  },
  {
    q: "How do I book a consultation online?",
    a: "You can book directly through our website or WhatsApp, and choose an online or in-clinic session.",
  },
  {
    q: "When should I see a psychiatrist?",
    a: "If low mood, anxiety or stress has affected your daily life for more than a couple of weeks, it's worth reaching out.",
  },
  {
    q: "Is online consultation effective?",
    a: "Yes, online consultations are just as thorough and confidential as in-clinic visits.",
  },
  {
    q: "Are psychiatric consultations confidential?",
    a: "Yes, every conversation is completely private, whether it's your first visit or a follow-up.",
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

export default function Psychiatric() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[320px] md:h-[380px] overflow-hidden">
        <img
          src={aconsult}
          alt="Psychiatric Consultation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* ✅ Overlay हटा दिया गया – अब पिक्चर साफ दिखेगी */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-['Inter'] text-3xl md:text-[44px] font-extrabold text-white mb-3 drop-shadow-md">
            Psychiatric Consultation
          </h1>
          <p className="font-['Inter'] text-[14px] md:text-base text-white max-w-2xl leading-relaxed drop-shadow-md">
            A compassionate first encounter with a mental health
            professional. Find hope, comfort, and a brighter tomorrow with
            personalised guidance and care.
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
              const isActive = item.label === "Psychiatric Consultation";
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
              src={physic}
              alt="Psychiatric Consultation Session"
              className="w-full h-[280px] md:h-[380px] object-cover object-center"
            />
          </div>

          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Is a Psychiatric Consultation?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              A psychiatric consultation is similar to a cordial first
              encounter with a mental health professional. We see a
              psychiatrist when our heart feels heavy, when we are overly
              anxious, or when we have trouble controlling our emotions —
              much like we see a doctor when we have a fever or stomachache.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              In this meeting, the psychiatrist listens carefully and talks
              with you about what you are going through, so you can open up
              without worrying about being judged or afraid. Sometimes, the
              doctor may offer easy lifestyle tips, therapy, or medicines
              that can help you feel better.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              At Dr. Archana Singh Psychiatry, you can also book a consultation online,
              so getting help is easy and comfortable — our caring team is
              here to guide you with love and understanding.
            </p>
          </div>

          {/* When to consider */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              When Should You Consider a Consultation?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              When your thoughts or feelings begin to interfere with your
              day-to-day functioning, it may be the right time to reach out.
              A compassionate psychiatrist can be of great assistance if
              these emotions persist or interfere with relationships, work,
              or education. Common concerns we address include:
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
                Intervention
              </span>
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-6">
              Early mental health care is akin to bandaging a small cut
              before it becomes infected. People who receive assistance at
              the right time recover faster and feel happier as a result.
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
              src={improve}
              alt="Benefits of Early Psychiatric Intervention"
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
                Psychiatric Consultation
              </span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[14px] text-[#5B6B84] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Selecting the right psychiatrist is the first step on the path
            to healing. We strive to make sure you feel safe, cared for and
            understood from your very first visit.
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
              {/* ✅ Error fixed – now <a> tags are properly written */}
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