import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  CloudRain,
  Sparkles,
} from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const CONDITIONS_CATEGORY = [
  { label: "Depression", to: "/service/depression" },
  { label: "Anxiety Disorders", to: "/service/anxiety-disorders" },
  { label: "OCD", to: "/service/ocd" },
  { label: "Bipolar Disorder", to: "/service/bipolar-disorder" },
  { label: "Child & Adolescent Psychiatry", to: "/service/child-adolescent-psychiatry" },
  { label: "De-Addiction & Recovery", to: "/service/de-addiction-recovery" },
  { label: "Sexual Health Counseling", to: "/service/sexual-health-counseling" },
  { label: "Insomnia & Sleep Disorders", to: "/service/insomnia-sleep-disorders" },
  { label: "PTSD & Trauma", to: "/service/ptsd-trauma" },
];

const SYMPTOMS = [
  "Persistent low mood or sadness lasting most of the day",
  "Loss of interest in activities once enjoyed",
  "Fatigue or low energy, even after rest",
  "Changes in appetite or sleep patterns",
  "Difficulty concentrating or making decisions",
  "Feelings of worthlessness, guilt, or hopelessness",
];

const TREATMENT_APPROACH = [
  {
    step: "01",
    title: "Clinical Evaluation",
    desc: "A structured assessment to understand the severity, duration and specific pattern of your symptoms, along with any contributing factors.",
  },
  {
    step: "02",
    title: "Ruling Out Overlapping Conditions",
    desc: "Depression can overlap with anxiety, thyroid issues, or other medical conditions. We screen carefully to ensure the treatment plan targets the right cause.",
  },
  {
    step: "03",
    title: "Evidence-Based Psychotherapy",
    desc: "Where appropriate, structured talk therapy such as CBT is used to address negative thought patterns and build practical coping strategies.",
  },
  {
    step: "04",
    title: "Medication, When Indicated",
    desc: "For moderate to severe depression, antidepressant medication may be recommended, carefully chosen and monitored for effectiveness and side effects.",
  },
  {
    step: "05",
    title: "Lifestyle & Behavioural Guidance",
    desc: "Sleep, routine, physical activity and social connection are addressed as part of a complete treatment plan, not as an afterthought.",
  },
  {
    step: "06",
    title: "Regular Monitoring & Adjustment",
    desc: "Depression treatment is rarely one-size-fits-all. We track your progress closely and adjust the plan as needed over time.",
  },
];

const WHY_CHOOSE = [
  {
    icon: CloudRain,
    title: "Evidence-Based Treatment",
    desc: "Care grounded in clinical guidelines, not one-size-fits-all prescriptions.",
  },
  {
    icon: Sparkles,
    title: "15+ Years of Experience",
    desc: "Extensive experience treating depression across all severity levels and age groups.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Online Booking",
    desc: "Book a consultation online from home, at a time that works for you.",
  },
  {
    icon: MessageCircle,
    title: "Confidentiality & Trust",
    desc: "A safe, judgment-free space to talk honestly about how you're feeling.",
  },
  {
    icon: Phone,
    title: "Flexible Consultations",
    desc: "Online or in-clinic sessions, whichever feels more comfortable for you.",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Recovery Focus",
    desc: "Care that continues through recovery, not just symptom management.",
  },
];

const FAQS = [
  {
    q: "How is depression diagnosed?",
    a: "Diagnosis is based on a detailed clinical interview covering the duration, severity and pattern of your symptoms, following established diagnostic criteria.",
  },
  {
    q: "Will I definitely need medication?",
    a: "Not always. Mild depression often responds well to therapy and lifestyle changes alone. Medication is considered when symptoms are moderate to severe or persistent.",
  },
  {
    q: "How long does treatment usually take?",
    a: "This varies by individual, but many people notice meaningful improvement within a few weeks of starting appropriate treatment, with full recovery taking longer.",
  },
  {
    q: "Is online treatment for depression effective?",
    a: "Yes, both therapy and medication management can be delivered effectively through secure online consultations.",
  },
  {
    q: "What if I've tried treatment before without success?",
    a: "A fresh, thorough evaluation can often identify what was missed — whether that's an overlapping condition, the wrong treatment approach, or dosage that needs adjustment.",
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

export default function Depression() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO (no image) ---------------- */}
      <section className="relative bg-gradient-to-br from-[#5a1a7a] via-[#4a1263] to-[#2b0a40] py-16 md:py-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20">
            <CloudRain className="w-7 h-7 text-white" strokeWidth={1.75} />
          </div>
          <h1 className="font-['Inter'] text-3xl md:text-[44px] font-extrabold text-white mb-3">
            Depression
          </h1>
          <p className="font-['Inter'] text-[14px] md:text-base text-[#E4D3EC] max-w-2xl mx-auto leading-relaxed">
            Personalised, evidence-based treatment to help you move through
            persistent sadness, fatigue and loss of interest — toward a
            steadier, more hopeful place.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <h3 className="font-['Inter'] text-[13px] font-bold tracking-[0.15em] text-[#8592A3] uppercase mb-3">
            Conditions We Treat
          </h3>
          <nav className="flex flex-col gap-1.5 border border-[#E1E6ED] rounded-xl overflow-hidden p-2">
            {CONDITIONS_CATEGORY.map((item) => {
              const isActive = item.label === "Depression";
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
          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Is Depression?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Depression is a common but serious mood disorder that affects
              how you think, feel, and manage daily activities. It goes
              beyond ordinary sadness — it's a persistent state that can
              affect sleep, appetite, energy, concentration, and the ability
              to find interest or pleasure in life.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              At Manah Psychiatry, depression is treated as a medical
              condition, not a personal failing. With the right evaluation
              and treatment, most people see meaningful improvement.
            </p>
          </div>

          {/* Symptoms */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              Common Signs & Symptoms
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              Depression can present differently from person to person, but
              some signs are common when symptoms last two weeks or longer:
            </p>
            <ul className="space-y-3">
              {SYMPTOMS.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4a1263] shrink-0 mt-0.5" />
                  <span className="font-['Inter'] text-[14px] text-[#3A4A61]">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Treat */}
          <div>
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              How We Treat Depression
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-8">
              Effective depression care rarely relies on a single approach.
              Our process is structured to identify what's actually driving
              your symptoms and build a plan around it — combining
              clinical rigor with a pace that respects where you're at.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {TREATMENT_APPROACH.map((item) => (
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
        </div>
      </div>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="bg-[#F8F6FA] px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] leading-tight">
              Why Choose Us for{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                Depression Treatment
              </span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[14px] text-[#5B6B84] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Recovering from depression takes the right treatment plan and
            steady support. We make sure both are in place from your first
            visit.
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