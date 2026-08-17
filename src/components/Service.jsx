import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Venus,
  Stethoscope,
  ClipboardList,
  Pill,
  Brain,
  Baby,
 
  CloudRain,
  Wind,
  RefreshCw,
  Waves,
  Wine,
  HeartHandshake,
  Moon,
  AlertTriangle,
  Phone,
  ArrowRight,
} from "lucide-react";

/**
 * Services We Provide — Dr. Archana Singh, Psychiatrist, Patna
 * Two tabs: "Our Services" and "Conditions We Treat"
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const TABS = [
  { id: "services", label: "Our Services" },
  { id: "conditions", label: "Conditions We Treat" },
];

const SERVICES = [
  {
    icon: Venus,
    title: "Women's Mental Health",
    desc: "Specialised care for hormonal, postpartum and life-stage related mental health concerns in women.",
    img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Stethoscope,
    title: "Psychiatric Consultation",
    desc: "Thorough evaluation and personalised treatment planning for a wide range of mental health concerns.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: ClipboardList,
    title: "Comprehensive Mental Health Assessment",
    desc: "Detailed diagnostic assessments to understand symptoms and build the right treatment path.",
    img: "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Ongoing monitoring and adjustment of medication for safe, effective long-term treatment.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Brain,
    title: "Neuropsychiatric Care",
    desc: "Care for conditions where neurological and psychiatric symptoms overlap, with an integrated approach.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Psychiatry",
    desc: "Age-appropriate diagnosis and therapy for behavioural, emotional and developmental concerns in children.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
];

const CONDITIONS = [
  {
    icon: CloudRain,
    title: "Depression",
    desc: "Personalised treatment plans combining therapy, medication and lifestyle guidance to overcome persistent sadness and fatigue.",
    img: "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wind,
    title: "Anxiety Disorders",
    desc: "Helping patients manage excessive worry and physical symptoms through cognitive behavioral therapy and stress reduction.",
    img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: RefreshCw,
    title: "OCD",
    desc: "Structured therapy to help patients manage intrusive thoughts and compulsive behaviours effectively.",
    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Waves,
    title: "Bipolar Disorder",
    desc: "Long-term mood stabilisation combining medication management with family counselling and support.",
    img: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Psychiatry",
    desc: "Early diagnosis and behavioural support for children and teens facing emotional or developmental challenges.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wine,
    title: "De-Addiction & Recovery",
    desc: "De-addiction counselling, detox support and rehabilitation services for substance dependency.",
    img: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: HeartHandshake,
    title: "Sexual Health Counseling",
    desc: "Confidential evaluation and treatment of sexual health concerns in a judgment-free space.",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    confidential: true,
  },
  {
    icon: Moon,
    title: "Insomnia & Sleep Disorders",
    desc: "Assessment and treatment of sleep difficulties that affect mood, energy and daily functioning.",
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: AlertTriangle,
    title: "PTSD & Trauma",
    desc: "Trauma-informed therapy to help process distressing experiences and reduce their hold on daily life.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border 
    border-[#E7EBF1] shadow-[0_2px_10px_rgba(15,37,68,0.06)] hover:shadow-[0_18px_40px_rgba(15,37,68,0.16)] transition-all duration-500 hover:-translate-y-1.5">
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          onError={(e) => {
            e.currentTarget.style.display = "none";

            if (e.currentTarget.nextElementSibling) {
              e.currentTarget.nextElementSibling.style.display = "flex";
            }
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Fallback if the Unsplash image ever breaks */}
        <div
          style={{ display: "none" }}
          className="w-full h-full items-center justify-center bg-gradient-to-br from-[#1B3B63] to-[#0F2544]"
        >
          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2544]/80 via-[#0F2544]/0 to-transparent" />

        {item.confidential && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#0F2544] text-[11px] 
          font-semibold px-2.5 py-1 rounded-full">
            Confidential
          </span>
        )}
      </div>

      <div className="pt-6 pb-7 px-5">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1D5D9B]/10 flex items-center justify-center">
            <Icon
              className="w-[18px] h-[18px] text-[#1D5D9B]"
              strokeWidth={2}
            />
          </div>

          <h3 className="font-['Inter'] text-[16px] font-bold text-[#16233B]">
            {item.title}
          </h3>
        </div>

        <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84] mb-4">
          {item.desc}
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
  const [active, setActive] = useState("services");
  const items = active === "services" ? SERVICES : CONDITIONS;

  return (
    <section className="relative bg-[#F6F8FA] py-10 px-6 md:px-10 lg:px-12">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute top-10 right-0 w-72 h-72 bg-[#1B3B63]/5 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-[#E8A33D]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
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
            <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
              Provide
            </span>
          </h2>

          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            13+ years of experience across mental health, de-addiction, child
            development and confidential sexual health care — every
            consultation private, judgment-free and evidence-based.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-11">
          {TABS.map((tab) => {
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold font-['Inter'] transition-all duration-300 border ${
                  isActive
                    ? "bg-[#1D5D9B] text-white border-[#1D5D9B] shadow-md"
                    : "bg-white text-[#3A4A61] border-[#E1E6ED] hover:border-[#E8A33D] hover:text-[#1D5D9B]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-[fadeIn_0.4s_ease]"
        >
          {items.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>

        {/* Bottom CTA banner */}
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-['Inter'] font-semibold text-sm px-5 py-3 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Now
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 border border-[#E8A33D] text-[#E8A33D] hover:bg-[#E8A33D] hover:text-[#0F2544] font-['Inter'] font-semibold text-sm px-5 py-3 rounded-full transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}