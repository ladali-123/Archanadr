import  { useState } from "react";
import {
  Brain,
  Wine,
  Puzzle,
  ShieldCheck,
  CloudRain,
  Wind,
  Activity,
  RefreshCw,
  Waves,
  Pill,
  Zap,
  BookOpen,
  HeartHandshake,
  Users,
  MessageCircle,
  Lock,
  ArrowRight,
  Phone,
} from "lucide-react";

/**
 * Services We Provide — Dr. Archana Singh, Psychiatrist, Patna
 * Palette + type pulled from the existing site (navy / gold / whatsapp-green),
 * not a fresh palette — this section is built to sit directly under the
 * "About Us" block already on the page.
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const CATEGORIES = [
  {
    id: "common",
    label: "Common Mental Health",
    icon: Brain,
  },
  {
    id: "addiction",
    label: "De-Addiction & Recovery",
    icon: Wine,
  },
  {
    id: "child",
    label: "Child & Neurodevelopmental",
    icon: Puzzle,
  },
  {
    id: "specialized",
    label: "Specialized Care",
    icon: ShieldCheck,
  },
];

const SERVICES = [
  // ---- Common Mental Health ----
  {
    category: "common",
    icon: CloudRain,
    title: "Depression",
    desc: "Personalised treatment plans combining therapy, medication and lifestyle guidance to overcome persistent sadness and fatigue.",
    img: "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "common",
    icon: Wind,
    title: "Anxiety Disorders",
    desc: "Helping patients manage excessive worry and physical symptoms through cognitive behavioral therapy and stress reduction.",
    img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "common",
    icon: Activity,
    title: "Panic Attacks",
    desc: "Evidence-based interventions to reduce the frequency and severity of sudden panic episodes.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "common",
    icon: RefreshCw,
    title: "OCD",
    desc: "Structured therapy to help patients manage intrusive thoughts and compulsive behaviours effectively.",
    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "common",
    icon: Waves,
    title: "Bipolar Disorder",
    desc: "Long-term mood stabilisation combining medication management with family counselling and support.",
    img: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "common",
    icon: Brain,
    title: "Schizophrenia",
    desc: "Comprehensive psychiatric care and rehabilitation for thought disorders, with ongoing family guidance.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },

  // ---- De-Addiction & Recovery ----
  {
    category: "addiction",
    icon: Wine,
    title: "Alcohol Abuse",
    desc: "De-addiction counselling, detox support and rehabilitation services for alcohol dependency.",
    img: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "addiction",
    icon: Pill,
    title: "Addiction (Drug, Gaming, Internet)",
    desc: "Therapy and recovery programs for substance, gaming, internet and other behavioural addictions.",
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
  },

  // ---- Child & Neurodevelopmental ----
  {
    category: "child",
    icon: Puzzle,
    title: "Autism Spectrum",
    desc: "Early diagnosis and behaviour therapy support for children on the autism spectrum to enhance social and communication skills.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "child",
    icon: Zap,
    title: "ADHD",
    desc: "Medication and behavioural management to improve focus, reduce impulsivity and support functioning in children and adults.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "child",
    icon: BookOpen,
    title: "Learning Disability",
    desc: "Customised therapy and educational planning to support children struggling with specific learning disorders like dyslexia.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  },

  // ---- Specialized Care ----
  {
    category: "specialized",
    icon: HeartHandshake,
    title: "Sexual Disorders",
    desc: "Confidential evaluation and treatment of erectile dysfunction, premature ejaculation, low libido and related concerns.",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    confidential: true,
  },
  {
    category: "specialized",
    icon: Users,
    title: "Psychiatric Rehabilitation",
    desc: "Structured programs to help patients regain daily functioning, independence and confidence after acute illness.",
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "specialized",
    icon: MessageCircle,
    title: "Cognitive Behavioral Therapy",
    desc: "One-on-one CBT sessions to reframe negative thought patterns and build lasting coping strategies.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#E7EBF1] 
    shadow-[0_2px_10px_rgba(15,37,68,0.06)] hover:shadow-[0_18px_40px_rgba(15,37,68,0.16)] transition-all duration-500 hover:-translate-y-1.5">
      <div className="relative h-60 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* fallback if the unsplash id ever breaks */}
        <div
          style={{ display: "none" }}
          className="w-full h-full items-center justify-center bg-gradient-to-br from-[#1B3B63] to-[#0F2544]"
        >
          <Icon className="w-10 h-10 text-[#E8A33D]" strokeWidth={1.5} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2544]/80 via-[#0F2544]/0 to-transparent" />

        {service.confidential && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#0F2544] text-[11px] font-semibold px-2.5 py-1 rounded-full">
            <Lock className="w-3 h-3" /> Confidential
          </span>
        )}

        <div className="absolute -bottom-6 left-5 w-12 h-12 rounded-xl bg-[#E8A33D] flex items-center justify-center shadow-lg ring-4 ring-white">
          <Icon className="w-6 h-6 text-[#0F2544]" strokeWidth={2} />
        </div>
      </div>

      <div className="pt-10 pb-7 px-5">
        <h3 className="font-['Inter'] text-[17px] font-bold text-[#16233B] mb-2">
          {service.title}
        </h3>
        <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84] mb-4">
          {service.desc}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F2544] group-hover:text-[#424242] transition-colors"
        >
          Know more
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState("common");
  const filtered = SERVICES.filter((s) => s.category === active);

  return (
    <section className="relative bg-[#F6F8FA] py-20 px-6 md:px-10 lg:px-16">
      <style>{FONT_IMPORT}</style>

      {/* faint background accent, matches hero's soft blue blob language */}
      <div className="pointer-events-none absolute top-10 right-0 w-72 h-72 bg-[#1B3B63]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-[#E8A33D]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading, matching hero's "— PATNA · NEURO-PSYCHIATRY CLINIC" language */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#E8A33D]" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              What We Treat
            </span>
            <span className="h-px w-8 bg-[#E8A33D]" />
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Services We{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#E8A33D]">
              Provide
            </span>
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            13+ years of experience across mental health, de-addiction, child
            development and confidential sexual health care — every
            consultation private, judgment-free and evidence-based.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-11">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            const count = SERVICES.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold font-['Inter'] transition-all duration-300 border ${
                  isActive
                    ? "bg-[#1D5D9B] text-white border-[#1D5D9B] shadow-md"
                    : "bg-white text-[#3A4A61] border-[#E1E6ED] hover:border-[#E8A33D] hover:text-[#1D5D9B]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-[#E8A33D]" : "text-[#9AA6B5]"}`}
                />
                {cat.label}
                <span
                  className={`text-[11px] font-bold rounded-full px-1.5 ${
                    isActive
                      ? "bg-[#E8A33D] text-[#0F2544]"
                      : "bg-[#F0F2F5] text-[#8592A3]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-[fadeIn_0.4s_ease]"
        >
          {filtered.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom CTA banner — echoes the stats band gradient already on the page */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] px-8 py-9 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="font-['Inter'] text-white text-xl md:text-2xl font-bold mb-1.5">
              Not sure which service you need?
            </h3>
            <p className="font-['Inter'] text-[#C4D0E0] text-sm">
              Every conversation stays confidential — online or in-clinic.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917543976796"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Inter'] font-semibold text-sm px-5 py-3 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" /> WhatsApp Now
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-[#E8A33D] text-[#E8A33D] hover:bg-[#E8A33D] hover:text-[#0F2544] font-['Inter'] font-semibold text-sm px-5 py-3 rounded-full transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}