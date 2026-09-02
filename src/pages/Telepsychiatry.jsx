import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Video,
  Sparkles,
} from "lucide-react";

// अपनी इमेज के पाथ सही करें – यदि फ़ाइलें अलग हों तो बदलें
import tele from "../assets/tele.jpg";
import video from "../assets/video.jpg";
import audio from "../assets/audio.jpg";

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
  "Living far from a psychiatrist you trust and prefer",
  "Limited time or mobility to travel for in-clinic visits",
  "Wanting privacy that a home setting can offer",
  "Needing consistent follow-ups without repeated travel",
  "Preferring a comfortable, familiar space to talk openly",
];

const BENEFITS = [
  "Removes travel time and clinic wait times entirely",
  "Makes consistent follow-up care realistic and easy",
  "Offers privacy for those uncomfortable visiting in person",
  "Widens access for patients outside Patna city limits",
  "Keeps care going during travel, illness, or busy periods",
  "Feels more relaxed for children and anxious patients",
  "Allows family members to join sessions when helpful",
  "Maintains the same quality of care as in-clinic visits",
];

const PROCESS = [
  {
    step: "01",
    title: "Easy Online Booking",
    desc: "Choose a convenient time slot and book your session directly through our website or WhatsApp.",
  },
  {
    step: "02",
    title: "Secure Video or Audio Call",
    desc: "Join the consultation from home using a private, secure video or audio call link.",
  },
  {
    step: "03",
    title: "Open, Unhurried Conversation",
    desc: "The psychiatrist listens carefully, just as in an in-clinic visit, without rushing the conversation.",
  },
  {
    step: "04",
    title: "Personalised Care Plan",
    desc: "Together, we build a plan that may include therapy, medication, or lifestyle guidance suited to your life.",
  },
  {
    step: "05",
    title: "Confidentiality & Trust",
    desc: "Every session is private and secure, with the same confidentiality as an in-person visit.",
  },
  {
    step: "06",
    title: "Simple Follow-Up Scheduling",
    desc: "Follow-up sessions can be booked easily online, keeping your care consistent over time.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Video,
    title: "Convenient & Accessible",
    desc: "Quality psychiatric care from wherever you are, without the need to travel.",
  },
  {
    icon: Sparkles,
    title: "15+ Years of Experience",
    desc: "The same experienced care online as you'd receive in-clinic.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Online Booking",
    desc: "Book a video or audio consultation in just a few clicks, at a time that suits you.",
  },
  {
    icon: MessageCircle,
    title: "Confidentiality & Trust",
    desc: "Secure, private sessions with the same discretion as an in-clinic visit.",
  },
  {
    icon: Phone,
    title: "Flexible Session Formats",
    desc: "Choose video or audio, whichever feels more comfortable for you.",
  },
  {
    icon: ArrowRight,
    title: "Consistent, Long-Term Care",
    desc: "Easy follow-ups mean your treatment stays on track, wherever you are.",
  },
];

const FAQS = [
  {
    q: "What is telepsychiatry?",
    a: "It's a psychiatric consultation conducted over video or audio call, offering the same quality of care as an in-clinic visit, from anywhere.",
  },
  {
    q: "Is online consultation as effective as in-person?",
    a: "Yes, telepsychiatry is a well-established, effective way to receive assessment, therapy guidance and medication management.",
  },
  {
    q: "What do I need to join a session?",
    a: "Just a stable internet connection and a private space — a smartphone, tablet or computer works fine.",
  },
  {
    q: "Is my information kept confidential online?",
    a: "Yes, sessions are conducted through secure, private connections with the same confidentiality as in-clinic care.",
  },
  {
    q: "Can I switch between online and in-clinic visits?",
    a: "Yes, you can choose whichever format suits you for each consultation.",
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

export default function Telepsychiatry() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[320px] md:h-[380px] overflow-hidden">
        <img
          src={tele}
          alt="Telepsychiatry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-['Inter'] text-3xl md:text-[44px] font-extrabold text-white mb-3 drop-shadow-md">
            Telepsychiatry
          </h1>
          <p className="font-['Inter'] text-[14px] md:text-base text-white max-w-2xl leading-relaxed drop-shadow-md">
            Quality psychiatric care from the comfort of your own space —
            private, convenient, and just as thorough as an in-clinic
            visit.
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
              const isActive = item.label === "Telepsychiatry";
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
              src={video}
              alt="Telepsychiatry Video Consultation"
              className="w-full h-[280px] md:h-[380px] object-cover object-center"
            />
          </div>

          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Is Telepsychiatry?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Telepsychiatry is psychiatric consultation delivered over a
              secure video or audio call, instead of an in-person clinic
              visit. It offers the same careful listening, assessment and
              treatment planning, just from wherever you are.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              At Dr. Archana Singh Psychiatry, telepsychiatry sessions are conducted
              with the same care, confidentiality and attention as
              in-clinic visits — so distance, mobility or time constraints
              don't stand in the way of getting help.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              Available for adults, teens and children, with video and
              audio options based on your comfort.
            </p>
          </div>

          {/* When to consider */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              When Should You Consider Telepsychiatry?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              If travel, time, mobility or privacy concerns make in-clinic
              visits difficult, telepsychiatry can be a comfortable
              alternative without compromising on care. Common reasons
              people choose it include:
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
              Benefits of{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Telepsychiatry
              </span>
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-6">
              Consistent care shouldn't depend on how far you live or how
              busy your schedule is. Telepsychiatry keeps your treatment on
              track, wherever life takes you.
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
              src={audio}
              alt="Benefits of Telepsychiatry"
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
                Telepsychiatry Process Works
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
                Telepsychiatry
              </span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[14px] text-[#5B6B84] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Distance shouldn't get in the way of good care. We make sure
            every online consultation feels just as thorough and
            supportive as an in-clinic visit.
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