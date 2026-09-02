import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import mame from "../assets/mame.png";

export default function PsychiatristHero() {
  return (
    <div className="w-full font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');

        .font-display {
          font-family: 'Fraunces', serif;
        }

        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        .wave-path {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          transition: stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1) .15s;
        }

        .wave-drawn {
          stroke-dashoffset: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .wave-path {
            transition: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* पूरा सेक्शन – बैकग्राउंड इमेज के साथ */}
      <section className="relative grid lg:grid-cols-[1.15fr_1fr] min-h-[560px] lg:min-h-screen 
      overflow-hidden">

        {/* बैकग्राउंड इमेज */}
        <img
          src={mame}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-[78%_18%] lg:object-center 
          blur-[1px] lg:blur-none"
        />

        {/* डार्क ओवरले – ताकि सफ़ेद/ऑरेंज टेक्स्ट साफ़ दिखे */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-none" />

        {/* ---------------- LEFT: content ---------------- */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-34 py-16 lg:py-20">

          {/* headline */}
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.85)] lg:[text-shadow:none] lg:drop-shadow-md">
            Best{" "}
            <span className="text-[#f5a623] italic">
              Psychiatrist
            </span>
            <br />
            in Patna
          </h1>

          {/* subheading — mobile pe hidden, desktop pe visible */}
          <p className="hidden lg:block text-white/90 text-base sm:text-base font-medium leading-relaxed max-w-md mb-10 drop-shadow-sm">
            Compassionate, confidential mental health care in a calm and
            supportive space — helping you feel heard, understood, and on
            the path to healing.
          </p>

          {/* CTAs — mobile pe stacked with extra gap, desktop pe side by side */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 lg:gap-4 mb-10 mt-8 lg:mt-0">

            <a
              href="https://wa.me/917543976796"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FB958] transition-colors text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-black/20 w-fit"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white transition-colors font-semibold px-6 py-3 rounded-full w-fit"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
            </Link>

          </div>

          {/* trust row — mobile pe hidden, desktop pe visible */}
          <div className="hidden lg:flex flex-wrap gap-x-6 gap-y-2 text-white/90 text-sm font-medium">

            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Confidential Consultation
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Online &amp; In-Clinic
            </span>

          </div>
        </div>

        {/* ---------------- RIGHT: empty panel ---------------- */}
        <div className="relative z-10 hidden lg:flex flex-col justify-end px-6 py-10 lg:py-20">
          {/* (optional floating card – यहाँ खाली रखा गया है) */}
        </div>

      </section>
    </div>
  );
}