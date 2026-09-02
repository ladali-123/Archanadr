import  { useState } from "react";
import { ArrowRight } from "lucide-react";

// Put your image at: src/assets/proceed.png (or update the path below)
import proceedImg from "../assets/proceed.png";

/**
 * Our Approach & Procedure — Dr. Archana Singh, Psychiatrist, Patna
 * Palette matches logo: purple #4a1263 | heading #424242 | accent gold #c9a227
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const STEPS = [
  {
    title: "Initial Psychiatric Evaluation",
    desc: "We begin with a detailed consultation that includes clinical interviews, psychological screening, and family history to understand emotional, behavioral, and cognitive challenges.",
  },
  {
    title: "Accurate Diagnosis",
    desc: "Based on clinical observation and diagnostic criteria, we identify the specific condition — whether it's depression, anxiety, ADHD, schizophrenia, or a developmental disorder.",
  },
  {
    title: "Personalized Treatment Plan",
    desc: "Each treatment is customised to fit the patient's age, condition, and lifestyle. Plans may include medication, psychotherapy, behavioral interventions, and family support.",
  },
  {
    title: "Psychotherapy & Counseling",
    desc: "Depending on the diagnosis, we offer evidence-based therapies such as Cognitive Behavioral Therapy (CBT), Rational Emotive Behavior Therapy (REBT), mindfulness-based practices, and play therapy for children.",
  },
  {
    title: "Medication Management",
    desc: "If required, medications are prescribed and monitored regularly to ensure safety, effectiveness, and minimal side effects.",
  },
  {
    title: "Family Involvement",
    desc: "We actively engage families in the treatment process, especially in pediatric and adolescent cases. Parental training and family therapy are provided to create a supportive home environment.",
  },
  {
    title: "Progress Monitoring",
    desc: "Follow-up sessions help us track progress, refine treatment plans, and address emerging needs. Periodic assessments ensure continuous improvement.",
  },
  {
    title: "Long-Term Wellness Planning",
    desc: "Our care doesn't end with symptom relief. We help patients build long-term coping strategies, lifestyle changes, and relapse prevention plans for sustained mental well-being.",
  },
];

function StepIcon() {
  return (
    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4a1263] flex items-center justify-center mt-0.5 shadow-sm">
      <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
    </span>
  );
}

export default function ApproachSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative bg-white py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 bg-[#4a1263]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-[#c9a227]/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header row: text (eyebrow + heading + intro) on left, image on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-4">
          <div className="lg:flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#c9a227]" />
              <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-[#c9a227] uppercase">
                How We Help
              </span>
            </div>
            <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight mb-5">
              Our Approach{" "}
              <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
                &amp; Procedure
              </span>
            </h2>
            <p className="font-['Inter'] text-[15px] leading-relaxed text-[#3A4552] text-justify">
              <span className="font-semibold text-[#16233B]">
                Dr. Archana Singh
              </span>
              , a trusted{" "}
              <span className="text-[#4a1263] font-medium ">
                psychiatrist in Patna
              </span>
              , follows a structured and compassionate approach designed to
              understand the root cause of your concerns and guide you
              toward long-term mental wellness:
              Every treatment plan is personalized to your needs, combining expert care, evidence-based therapies,
               and continuous support to help you build resilience and achieve lasting mental well-being.
            </p>
          </div>

          <div className="relative w-full lg:w-[380px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(74,18,99,0.14)] border border-[#E7EBF1]">
              {!imgError ? (
                <img
                  src={proceedImg}
                  alt="Dr. Archana Singh consulting a patient"
                  onError={() => setImgError(true)}
                  className="w-full h-[270px] object-cover"   // ✅ height 240px → 270px (हल्का सा बढ़ा)
                />
              ) : (
                <div className="w-full h-[270px] bg-gradient-to-br from-[#4a1263] to-[#8e2f8f] 
                flex items-center justify-center">
                  <span className="font-['Inter'] text-white/70 text-xs px-4 text-center">
                    Add your image at src/assets/proceed.png
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a40]/35 via-transparent to-transparent" />
            </div>

            {/* small stat chip */}
            <div className="flex items-center gap-2.5 bg-white rounded-xl shadow-lg border border-[#E7EBF1] px-4 py-2.5 -mt-6 ml-5 relative z-10 w-fit">
              <div className="w-7 h-7 rounded-full bg-[#4a1263] flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="font-['Inter'] text-[14px] font-extrabold text-[#16233B] leading-none">
                  15+ Years
                </p>
                <p className="font-['Inter'] text-[10.5px] text-[#5B6B84] mt-0.5">
                  Clinical Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps — full-width, 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 pt-2">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-3.5">
              <StepIcon />
              <div>
                <h3 className="font-['Inter'] text-[15.5px] font-bold text-[#16233B] mb-1">
                  {step.title}
                </h3>
                <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#3A4552]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}