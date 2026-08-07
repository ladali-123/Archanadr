
import { BadgeCheck } from "lucide-react";

/**
 * Why Choose Us — Dr. Archana Singh, Psychiatrist, Patna
 * Same palette + type as Services / Approach sections:
 *  navy #0F2544  |  heading #424242  |  accent #1D5D9B  |  eyebrow amber-400
 * No photo — laid out as a premium checklist grid with a stat strip.
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const REASONS = [
  {
    title: "13+ Years Of Clinical Expertise",
    desc: "Dr. Archana Singh brings over a decade of hands-on experience treating a wide range of psychiatric conditions across all age groups.",
  },
  {
    title: "Recognized Excellence In Mental Healthcare",
    desc: "Felicitated with state-level honors, Dr. Singh is acknowledged as one of the most trusted psychiatrists in Patna by both peers and patients.",
  },
  {
    title: "Specialized In Child & Adolescent Psychiatry",
    desc: "From ADHD and autism to learning disabilities, Dr. Singh offers focused care for neurodevelopmental and behavioral issues in children.",
  },
  {
    title: "Personalized & Confidential Care",
    desc: "Every patient receives a treatment plan tailored to their needs, delivered with compassion, confidentiality, and professional integrity.",
  },
  {
    title: "Multidisciplinary Team Support",
    desc: "A team of 5+ mental health professionals work alongside Dr. Singh to provide integrated, well-rounded psychiatric care.",
  },
  {
    title: "Trusted By 5,000+ Families",
    desc: "With 4,859+ patients successfully treated, Dr. Singh is trusted across Patna for empathetic, evidence-based mental healthcare.",
  },
];

function ReasonCard({ reason, index }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-[#E7EBF1] p-6 transition-all duration-300 hover:border-[#1D5D9B]/40 hover:shadow-[0_14px_34px_rgba(15,37,68,0.10)] hover:-translate-y-1">
      <span className="absolute top-5 right-6 font-['Playfair_Display'] italic text-3xl font-semibold text-[#0F2544]/[0.05] group-hover:text-[#1D5D9B]/[0.08] transition-colors select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-start gap-3.5 relative">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1D5D9B] flex items-center justify-center mt-0.5 shadow-sm">
          <BadgeCheck className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
        </span>
        <div>
          <h3 className="font-['Inter'] text-[15.5px] font-bold text-[#16233B] mb-1.5">
            {reason.title}
          </h3>
          <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#3A4552]">
            {reason.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#F6F8FA] py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-[#1D5D9B]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              Here's Why Patients Trust Us
            </span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Why{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#E8A33D]">
              Choose Us?
            </span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}