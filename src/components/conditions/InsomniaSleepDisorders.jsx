import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Moon } from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const CONDITIONS_CATEGORY = [
  { label: "Depression", to: "/service/conditions/depression" },
  { label: "Anxiety Disorders", to: "/service/conditions/anxiety-disorders" },
  { label: "OCD", to: "/service/conditions/ocd" },
  { label: "Bipolar Disorder", to: "/service/conditions/bipolar-disorder" },
  { label: "Child & Adolescent Psychiatry", to: "/service/conditions/child-adolescent-psychiatry" },
  { label: "De-Addiction & Recovery", to: "/service/conditions/de-addiction-recovery" },
  { label: "Sexual Health Counseling", to: "/service/conditions/sexual-health-counseling" },
  { label: "Insomnia & Sleep Disorders", to: "/service/conditions/insomnia-sleep-disorders" },
  { label: "PTSD & Trauma", to: "/service/conditions/ptsd-trauma" },
];

const SYMPTOMS = [
  "Difficulty falling asleep, even when tired",
  "Waking frequently during the night or too early",
  "Lying awake with racing or anxious thoughts",
  "Feeling unrefreshed despite a full night's sleep",
  "Daytime fatigue, irritability, or difficulty concentrating",
  "Relying on medication, alcohol, or screens to fall asleep",
];

const TREATMENT_APPROACH = [
  {
    step: "01",
    title: "Detailed Sleep History",
    desc: "We look at your sleep pattern, routine, and any factors — stress, screens, caffeine, mood — that may be affecting your sleep.",
  },
  {
    step: "02",
    title: "Identifying Underlying Causes",
    desc: "Insomnia is often linked to anxiety, depression, or stress. We assess for these, since treating the root cause improves sleep long-term.",
  },
  {
    step: "03",
    title: "Cognitive Behavioural Therapy for Insomnia (CBT-I)",
    desc: "A structured, evidence-based approach that addresses the thoughts and habits keeping sleep disrupted, without relying on medication alone.",
  },
  {
    step: "04",
    title: "Sleep Hygiene & Routine Guidance",
    desc: "Practical adjustments to your environment, schedule, and pre-sleep habits to support more consistent, restful sleep.",
  },
  {
    step: "05",
    title: "Medication, When Necessary",
    desc: "In select cases, short-term medication may be used carefully alongside therapy, with a clear plan to taper as sleep improves.",
  },
  {
    step: "06",
    title: "Follow-Up & Adjustment",
    desc: "Sleep patterns are reviewed over time to fine-tune the approach and ensure improvements are lasting.",
  },
];

export default function InsomniaSleepDisorders() {
  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO (full image) ---------------- */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/66/1a/94/661a949106f195609db3cb0bc15d00eb.jpg"
          alt="Insomnia & Sleep Disorders"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a40]/90 via-[#2b0a40]/40 to-[#2b0a40]/10" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Moon className="w-[18px] h-[18px] text-white" strokeWidth={2} />
              </span>
              <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Conditions We Treat
              </span>
            </div>
            <h1 className="font-['Inter'] text-4xl md:text-[52px] font-extrabold text-white leading-tight mb-4">
              Insomnia & Sleep Disorders
            </h1>
            <p className="font-['Inter'] text-[15px] md:text-lg text-white/85 max-w-2xl leading-relaxed">
              Evidence-based care to help you fall asleep, stay asleep, and
              wake up feeling genuinely rested again.
            </p>
          </div>
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
              const isActive = item.label === "Insomnia & Sleep Disorders";
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

          {/* Contact card in sidebar */}
          <div className="mt-6 bg-gradient-to-br from-[#5a1a7a] to-[#2b0a40] rounded-2xl p-6">
            <h3 className="font-['Inter'] text-white text-[15px] font-bold mb-1.5">
              Talk to someone today
            </h3>
            <p className="font-['Inter'] text-[#E4D3EC] text-[12.5px] mb-4 leading-relaxed">
              Confidential, judgment-free support — online or in-clinic.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+917543976796"
                className="flex items-center gap-2 text-white font-['Inter'] text-[13px] font-semibold"
              >
                <Phone className="w-3.5 h-3.5" /> +91 7543976796
              </a>
              <a
                href="https://wa.me/917543976796"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Inter'] font-semibold text-[12.5px] px-4 py-2.5 rounded-full transition-colors w-fit"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </aside>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div>
          {/* What is it */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              What Are Insomnia & Sleep Disorders?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Insomnia involves persistent difficulty falling asleep,
              staying asleep, or waking too early — even when there's
              enough opportunity to rest. When this happens regularly, it
              affects mood, energy, focus, and overall health.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              Sleep problems are often connected to anxiety, stress, or mood
              disorders, which is why they respond best to an approach that
              looks at the whole picture, not just the symptom of poor
              sleep.
            </p>
          </div>

          {/* Symptoms */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              Common Signs & Symptoms
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              It may be worth a consultation if you regularly experience:
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
              How We Treat Insomnia & Sleep Disorders
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-8">
              Rather than relying on sleeping pills alone, our approach
              focuses on identifying and addressing what's actually
              disrupting your sleep.
            </p>
            <div className="space-y-6">
              {TREATMENT_APPROACH.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 pb-6 border-b border-[#EEF1F5] last:border-b-0 last:pb-0"
                >
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
    </div>
  );
}