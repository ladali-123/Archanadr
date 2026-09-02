import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Pill,
  Sparkles,
} from "lucide-react";

// अपनी इमेज के पाथ सही करें – यदि फ़ाइलें अलग हों तो बदलें
import medic from "../assets/medic.jpg";
import manage from "../assets/manage.jpg";
import happy from "../assets/happy.jpg";

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
  "Starting medication for the first time and feeling unsure about it",
  "Side effects that make it hard to stick to a prescription",
  "Medication that doesn't seem to be working anymore",
  "Wanting to reduce or stop medication safely",
  "Managing multiple medications for overlapping conditions",
];

const BENEFITS = [
  "Ensures the right dose for your specific needs",
  "Reduces unpleasant or unsafe side effects",
  "Prevents dangerous drug interactions",
  "Keeps treatment aligned as your life changes",
  "Builds confidence in your treatment plan",
  "Avoids unnecessary trial-and-error switching",
  "Supports safer long-term medication use",
  "Keeps you and your doctor on the same page",
];

const PROCESS = [
  {
    step: "01",
    title: "Initial Medication Review",
    desc: "We go through your current medications, history and concerns to understand what's working and what isn't.",
  },
  {
    step: "02",
    title: "Symptom & Side-Effect Check",
    desc: "A detailed discussion of how you've been feeling and any side effects you've noticed since starting treatment.",
  },
  {
    step: "03",
    title: "Dose & Plan Adjustment",
    desc: "Where needed, doses are carefully adjusted or alternatives are discussed, always with safety first.",
  },
  {
    step: "04",
    title: "Clear Instructions",
    desc: "You leave knowing exactly what to take, when, and what to watch out for — explained in plain language.",
  },
  {
    step: "05",
    title: "Ongoing Monitoring",
    desc: "Regular follow-ups to track how the medication is working and catch any issues early.",
  },
  {
    step: "06",
    title: "Long-Term Safety",
    desc: "Periodic reviews to ensure your treatment continues to be safe, effective and appropriate over time.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Pill,
    title: "Careful Dose Management",
    desc: "Every prescription is reviewed and adjusted with your safety and comfort as the priority.",
  },
  {
    icon: Sparkles,
    title: "15+ Years of Experience",
    desc: "Extensive experience managing medication across a wide range of psychiatric conditions.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Online Booking",
    desc: "Book a medication review online, at a time that fits your schedule.",
  },
  {
    icon: MessageCircle,
    title: "Confidentiality & Trust",
    desc: "A safe space to be honest about how your medication is really affecting you.",
  },
  {
    icon: Phone,
    title: "Flexible Consultations",
    desc: "Online or in-clinic follow-ups, whichever feels more comfortable for you.",
  },
  {
    icon: ArrowRight,
    title: "Clear Next Steps",
    desc: "Every review ends with a concrete plan, not just a repeat prescription.",
  },
];

const FAQS = [
  {
    q: "What does medication management involve?",
    a: "It's the ongoing process of prescribing, monitoring and adjusting medication to keep treatment safe and effective over time.",
  },
  {
    q: "How often will my medication be reviewed?",
    a: "This depends on your condition and treatment stage, but regular follow-ups are scheduled to monitor progress and side effects.",
  },
  {
    q: "Can I ask about stopping or reducing my medication?",
    a: "Yes, this is discussed openly, and any changes are made gradually and safely under supervision.",
  },
  {
    q: "What if I'm experiencing side effects?",
    a: "Let us know as soon as possible so the dose or medication can be reviewed and adjusted if needed.",
  },
  {
    q: "Do you manage medication alongside therapy?",
    a: "Yes, medication management is often combined with therapy for a more complete, well-rounded treatment plan.",
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

export default function Medication() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[320px] md:h-[380px] overflow-hidden">
        <img
          src={medic}
          alt="Medication Management"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* ✅ Overlay हटा दिया गया – अब पिक्चर साफ दिखेगी */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-['Inter'] text-3xl md:text-[44px] font-extrabold text-white mb-3 drop-shadow-md">
            Medication Management
          </h1>
          <p className="font-['Inter'] text-[14px] md:text-base text-white max-w-2xl leading-relaxed drop-shadow-md">
            Careful, ongoing monitoring and adjustment of medication, so
            your treatment stays safe, effective and right for you.
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
              const isActive = item.label === "Medication Management";
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
              src={manage}
              alt="Medication Management Consultation"
              className="w-full h-[280px] md:h-[380px] object-cover object-center"
            />
          </div>

          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Is Medication Management?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Medication management is the ongoing process of prescribing,
              monitoring and fine-tuning medication so it keeps working for
              you as your life and symptoms change. It's about more than
              writing a prescription — it's careful, continuous care.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              At Dr. Archana Singh Psychiatry, every medication decision is explained in
              plain language, so you understand what you're taking, why it's
              needed, and what to expect. Doses and combinations are
              reviewed regularly to keep treatment safe and effective.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              Consultations and follow-ups are available online or in-clinic
              in Patna, so staying on top of your treatment is simple.
            </p>
          </div>

          {/* When to consider */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              When Should You Consider a Review?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              If your medication doesn't feel right, or you're unsure about
              side effects, dosage, or how long to continue, a review can
              bring clarity and peace of mind. Common reasons people reach
              out include:
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
              Benefits of Proper{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Medication Care
              </span>
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-6">
              Well-managed medication makes treatment smoother, safer and
              more sustainable — helping you feel steady, not just
              medicated.
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
              src={happy}
              alt="Medication Management Benefits"
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
                Medication Review Works
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
                Medication Management
              </span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[14px] text-[#5B6B84] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Getting your medication right takes careful, ongoing attention.
            We make sure every review keeps you safe, informed and heard.
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