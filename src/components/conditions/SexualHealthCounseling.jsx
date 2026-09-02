import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, ArrowRight, HeartHandshake, Lock } from "lucide-react";

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
  "Low sexual desire or interest that causes personal distress",
  "Difficulty with arousal or performance-related anxiety",
  "Pain or discomfort during intimacy",
  "Relationship strain linked to sexual concerns",
  "Anxiety, shame, or embarrassment around sexual health topics",
  "Sexual side effects related to medication or a medical condition",
];

const TREATMENT_APPROACH = [
  {
    step: "01",
    title: "Confidential, Private Consultation",
    desc: "A judgment-free space to discuss concerns openly, without embarrassment or fear of being dismissed.",
  },
  {
    step: "02",
    title: "Ruling Out Medical Causes",
    desc: "Many sexual health concerns have underlying medical or medication-related causes, which are carefully assessed first.",
  },
  {
    step: "03",
    title: "Psychological Assessment",
    desc: "Anxiety, past experiences, relationship dynamics, and stress are explored, since these often play a central role.",
  },
  {
    step: "04",
    title: "Individual or Couples Counselling",
    desc: "Therapy is tailored to the individual or, where relevant, involves partners to address concerns collaboratively.",
  },
  {
    step: "05",
    title: "Medical or Medication Review",
    desc: "Where appropriate, medication is reviewed or adjusted, and coordination with other specialists is arranged if needed.",
  },
  {
    step: "06",
    title: "Ongoing, Discreet Follow-Up",
    desc: "Progress is reviewed at a pace that respects your comfort, with complete discretion throughout.",
  },
];

export default function SexualHealthCounseling() {
  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO (full image) ---------------- */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1600&q=80"
          alt="Sexual Health Counseling"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a40]/90 via-[#2b0a40]/40 to-[#2b0a40]/10" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <HeartHandshake className="w-4.5 h-4.5 text-white" strokeWidth={2} />
              </span>
              <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Conditions We Treat
              </span>
            </div>
            <h1 className="font-['Inter'] text-4xl md:text-[52px] font-extrabold text-white leading-tight mb-4">
              Sexual Health Counseling
            </h1>
            <p className="font-['Inter'] text-[15px] md:text-lg text-white/85 max-w-2xl leading-relaxed">
              Private, respectful support for sexual health concerns —
              addressed with the same clinical care as any other aspect of
              your wellbeing.
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
              const isActive = item.label === "Sexual Health Counseling";
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

          {/* Confidentiality note */}
          <div className="mt-6 flex items-start gap-2.5 bg-[#F8F6FA] border border-[#E1E6ED] rounded-xl p-4">
            <Lock className="w-4 h-4 text-[#4a1263] shrink-0 mt-0.5" />
            <p className="font-['Inter'] text-[12.5px] leading-relaxed text-[#5B6B84]">
              This consultation is treated with the highest level of
              confidentiality, in-clinic and online.
            </p>
          </div>

          {/* Contact card in sidebar */}
          <div className="mt-4 bg-gradient-to-br from-[#5a1a7a] to-[#2b0a40] rounded-2xl p-6">
            <h3 className="font-['Inter'] text-white text-[15px] font-bold mb-1.5">
              Talk to someone today
            </h3>
            <p className="font-['Inter'] text-[#E4D3EC] text-[12.5px] mb-4 leading-relaxed">
              Confidential, judgment-free support — online or in-clinic.
            </p>
            <div className="flex flex-col gap-2.5">
              {/* FIXED: Added missing <a> tag */}
              <a
                href="tel:+917543976796"
                className="flex items-center gap-2 text-white font-['Inter'] text-[13px] font-semibold"
              >
                <Phone className="w-3.5 h-3.5" /> +91 7543976796
              </a>
              {/* FIXED: Added missing <a> tag */}
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
              What Is Sexual Health Counseling?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Sexual health concerns are common, but often go unaddressed
              due to hesitation or embarrassment. Sexual health counseling
              provides a confidential space to discuss issues related to
              desire, performance, intimacy, and relationship dynamics.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              These concerns can stem from psychological, relational, or
              medical factors — often a combination. At Manah Psychiatry,
              they are addressed with the same clinical care and privacy as
              any other health concern.
            </p>
          </div>

          {/* Symptoms */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              Common Concerns Addressed
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              A consultation may help if you're experiencing:
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
              How We Approach Sexual Health Counseling
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-8">
              Our approach balances medical evaluation with psychological
              support, always led by your comfort and pace.
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