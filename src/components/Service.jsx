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
 * Each card links to its dedicated detail page.
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
    img: "https://i.pinimg.com/1200x/96/12/90/9612903d15b8e5c29bf13e2c0034f1bd.jpg",
    path: "/service/womens-mental-health",
  },
  {
    icon: Stethoscope,
    title: "Psychiatric Consultation",
    desc: "Thorough evaluation and personalised treatment planning for a wide range of mental health concerns.",
    img: "https://i.pinimg.com/736x/68/cc/c3/68ccc3950b2dfb37029a66afd743f93a.jpg",
    path: "/service/psychiatric-consultation",
  },
  {
    icon: ClipboardList,
    title: "Comprehensive Mental Health Assessment",
    desc: "Detailed diagnostic assessments to understand symptoms and build the right treatment path.",
    img: "https://i.pinimg.com/1200x/eb/97/ad/eb97adeb2e8afbb70007ab76c9dc59d1.jpg",
    path: "/service/comprehensive-assessment",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Ongoing monitoring and adjustment of medication for safe, effective long-term treatment.",
    img: "https://i.pinimg.com/1200x/21/02/38/2102382ed4fd86fb21a78aeae406b4fd.jpg",
    path: "/service/medication-management", // make sure this route exists
  },
  {
    icon: Brain,
    title: "Neuropsychiatric Care",
    desc: "Care for conditions where neurological and psychiatric symptoms overlap, with an integrated approach.",
    img: "https://i.pinimg.com/736x/fd/53/95/fd53950c299df21e7dd7a231cec167f1.jpg",
    path: "/service/neuropsychiatric-care",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Psychiatry",
    desc: "Age-appropriate diagnosis and therapy for behavioural, emotional and developmental concerns in children.",
    img: "https://i.pinimg.com/736x/6f/17/3d/6f173dae4f2dc32afa3afd33c1b800a5.jpg",
    path: "/service/child-adolescent-psychiatry",
  },
];

const CONDITIONS = [
  {
    icon: CloudRain,
    title: "Depression",
    desc: "Personalised treatment plans combining therapy, medication and lifestyle guidance to overcome persistent sadness and fatigue.",
    img: "https://i.pinimg.com/1200x/d3/d0/2c/d3d02c682b42b1eeac3fbb623fb97199.jpg",
    path: "/service/conditions/depression",
  },
  {
    icon: Wind,
    title: "Anxiety Disorders",
    desc: "Helping patients manage excessive worry and physical symptoms through cognitive behavioral therapy and stress reduction.",
    img: "https://i.pinimg.com/736x/01/fa/b3/01fab3e5a3fd2e707c3a3c8b0b893792.jpg",
    path: "/service/conditions/anxiety-disorders",
  },
  {
    icon: RefreshCw,
    title: "OCD",
    desc: "Structured therapy to help patients manage intrusive thoughts and compulsive behaviours effectively.",
    img: "https://i.pinimg.com/1200x/b7/22/8d/b7228df1672423b562bae96b61bdf9b3.jpg",
    path: "/service/conditions/ocd",
  },
  {
    icon: Waves,
    title: "Bipolar Disorder",
    desc: "Long-term mood stabilisation combining medication management with family counselling and support.",
    img: "https://i.pinimg.com/736x/71/de/f4/71def4c4786878b9753664aa7b45e13b.jpg",
    path: "/service/conditions/bipolar-disorder",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Psychiatry",
    desc: "Early diagnosis and behavioural support for children and teens facing emotional or developmental challenges.",
    img: "https://i.pinimg.com/1200x/e3/9e/65/e39e65a290512dbaa4ad994cc92b2ab4.jpg",
    path: "/service/conditions/child-adolescent-psychiatry",
  },
  {
    icon: Wine,
    title: "De-Addiction & Recovery",
    desc: "De-addiction counselling, detox support and rehabilitation services for substance dependency.",
    img: "https://i.pinimg.com/736x/b6/4c/19/b64c19ba88e3b5db7e3bca48c83c3563.jpg",
    path: "/service/conditions/de-addiction-recovery",
  },
  {
    icon: HeartHandshake,
    title: "Sexual Health Counseling",
    desc: "Confidential evaluation and treatment of sexual health concerns in a judgment-free space.",
    img: "https://i.pinimg.com/736x/21/2c/c6/212cc64b4677dfcbf0371cf54eade619.jpg",
    path: "/service/conditions/sexual-health-counseling",
    confidential: true,
  },
  {
    icon: Moon,
    title: "Insomnia & Sleep Disorders",
    desc: "Assessment and treatment of sleep difficulties that affect mood, energy and daily functioning.",
    img: "https://i.pinimg.com/1200x/f0/9c/3d/f09c3d07630973f705dce0dead16250d.jpg",
    path: "/service/conditions/insomnia-sleep-disorders",
  },
  {
    icon: AlertTriangle,
    title: "PTSD & Trauma",
    desc: "Trauma-informed therapy to help process distressing experiences and reduce their hold on daily life.",
    img: "https://i.pinimg.com/736x/17/b9/23/17b923583e2b1e5c13775ca2c465ebd4.jpg",
    path: "/service/conditions/ptsd-trauma",
  },
];

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#E7EBF1]
     shadow-[0_2px_10px_rgba(74,18,99,0.06)] hover:shadow-[0_18px_40px_rgba(74,18,99,0.16)]
      transition-all duration-500 hover:-translate-y-1.5">
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

        {/* Fallback if image breaks */}
        <div
          style={{ display: "none" }}
          className="w-full h-full items-center justify-center bg-gradient-to-br from-[#5a1a7a]
           to-[#2b0a40]"
        >
          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>

        {item.confidential && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/90
           backdrop-blur-sm text-[#4a1263] text-[11px] font-semibold px-2.5 py-1 rounded-full">
            Confidential
          </span>
        )}
      </div>

      <div className="pt-6 pb-7 px-5">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-[#4a1263]/10 flex items-center justify-center">
            <Icon className="w-[18px] h-[18px] text-[#4a1263]" strokeWidth={2} />
          </div>
          <h3 className="font-['Inter'] text-[16px] font-bold text-[#16233B]">
            {item.title}
          </h3>
        </div>

        <p className="font-['Inter'] text-[13.5px] leading-relaxed text-[#5B6B84] mb-4">
          {item.desc}
        </p>

        {/* ✅ Each card routes to its dedicated detail page */}
        <Link
          to={item.path}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4a1263] group-hover:text-[#c9a227] transition-colors"
        >
          Know more
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState("services");
  const items = active === "services" ? SERVICES : CONDITIONS;

  return (
    <section className="relative bg-[#F8F6FA] py-10 px-8 md:px-20 lg:px-24">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute top-10 right-0 w-72 h-72 bg-[#4a1263]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#c9a227]" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-[#c9a227] uppercase">
              What We Treat
            </span>
            <span className="h-px w-8 bg-[#c9a227]" />
          </div>

          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Services We{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
              Provide
            </span>
          </h2>

          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            15+ years of experience across mental health, de-addiction, child
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
                    ? "bg-[#4a1263] text-white border-[#4a1263] shadow-md"
                    : "bg-white text-[#3A4A61] border-[#E1E6ED] hover:border-[#c9a227] hover:text-[#4a1263]"
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
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#5a1a7a] via-[#6b2591] to-[#4a1263] px-8 py-9 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#4a1263]/25">
          <div className="text-center md:text-left">
            <h3 className="font-['Inter'] text-white text-xl md:text-2xl font-bold mb-1.5">
              Not sure which service you need?
            </h3>
            <p className="font-['Inter'] text-[#E4D3EC] text-sm">
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
              className="flex items-center gap-2 border border-[#e8c85a] text-[#e8c85a] hover:bg-[#e8c85a] hover:text-[#2b0a40] font-['Inter'] font-semibold text-sm px-5 py-3 rounded-full transition-colors"
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