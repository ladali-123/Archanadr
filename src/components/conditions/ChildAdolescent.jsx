import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Baby } from "lucide-react";

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
  "Difficulty focusing, sitting still, or following instructions",
  "Persistent sadness, withdrawal, or loss of interest in usual activities",
  "Frequent meltdowns, anger outbursts, or defiant behaviour",
  "Excessive worry around school, friendships, or separation from parents",
  "Delays in speech, learning, or social interaction",
  "Sudden changes in sleep, appetite, or academic performance",
];

const TREATMENT_APPROACH = [
  {
    step: "01",
    title: "Age-Appropriate First Meeting",
    desc: "A gentle, unhurried first conversation designed to put your child at ease, using language and pacing suited to their age.",
  },
  {
    step: "02",
    title: "Understanding Home, School & Peer Context",
    desc: "We talk with you and, where appropriate, your child about behaviour patterns across different settings — not just one snapshot.",
  },
  {
    step: "03",
    title: "Developmental & Behavioural Assessment",
    desc: "Age-appropriate, validated tools help clarify whether concerns are developmental, emotional, or behavioural in nature.",
  },
  {
    step: "04",
    title: "Family-Involved Care Plan",
    desc: "Treatment often works best with parents involved — through therapy, parent guidance, school coordination, or medication where needed.",
  },
  {
    step: "05",
    title: "Skill-Building for the Child",
    desc: "Age-appropriate strategies are taught to help children manage emotions, build focus, and navigate social situations.",
  },
  {
    step: "06",
    title: "Ongoing Growth Monitoring",
    desc: "Children change quickly. Regular follow-ups track progress and adjust the plan as your child grows.",
  },
];

export default function ChildAdolescent() {
  return (
    <div className="w-full font-sans bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      {/* ---------------- HERO (full image) ---------------- */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80"
          alt="Child & Adolescent Psychiatry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a40]/90 via-[#2b0a40]/40 to-[#2b0a40]/10" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Baby className="w-4.5 h-4.5 text-white" strokeWidth={2} />
              </span>
              <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Conditions We Treat
              </span>
            </div>
            <h1 className="font-['Inter'] text-4xl md:text-[52px] font-extrabold text-white leading-tight mb-4">
              Child & Adolescent Psychiatry
            </h1>
            <p className="font-['Inter'] text-[15px] md:text-lg text-white/85 max-w-2xl leading-relaxed">
              Gentle, age-appropriate care that helps children and teens
              navigate emotional, behavioural and developmental concerns.
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

          {/* Contact card in sidebar */}
          <div className="mt-6 bg-gradient-to-br from-[#5a1a7a] to-[#2b0a40] rounded-2xl p-6">
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
              What Is Child & Adolescent Psychiatry?
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-4">
              Child and adolescent psychiatry focuses on the emotional,
              behavioural and developmental concerns unique to growing
              minds — from ADHD and anxiety to mood changes, learning
              difficulties and social struggles.
            </p>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84]">
              Children and teens don't always have the words to describe
              what they're feeling, so evaluation and treatment are
              approached differently than with adults — gently, and with
              close involvement of parents or caregivers.
            </p>
          </div>

          {/* Symptoms */}
          <div className="mb-12">
            <h2 className="font-['Inter'] text-2xl md:text-[28px] font-extrabold text-[#424242] mb-4">
              Common Signs & Symptoms
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-5">
              Concerns can show up differently depending on age, but common
              signs worth a consultation include:
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
              How We Treat Child & Adolescent Concerns
            </h2>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#5B6B84] mb-8">
              Every child is different, so our approach adapts to age,
              temperament and family context — while keeping the child's
              comfort at the centre of the process.
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