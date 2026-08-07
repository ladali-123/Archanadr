
import {
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  CheckCircle2,
  Brain,
} from "lucide-react";
import mame from "../assets/mame.png";

export default function PsychiatristHero() {
 

  return (
    <div className="w-full font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }

        .wave-path {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          transition: stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1) .15s;
        }
        .wave-drawn { stroke-dashoffset: 0; }

        @media (prefers-reduced-motion: reduce) {
          .wave-path { transition: none; stroke-dashoffset: 0; }
        }
      `}</style>

      {/* पूरा सेक्शन – अब बैकग्राउंड इमेज के साथ */}
      <section className="relative grid lg:grid-cols-[1.15fr_1fr] min-h-screen overflow-hidden">
        {/* बैकग्राउंड इमेज – पूरे सेक्शन को कवर करेगी */}
        <img
          src={mame}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* डार्क ओवरले – टेक्स्ट को पढ़ने योग्य बनाने के लिए */}
        <div className="absolute inset-0 " />

        {/* ---------------- LEFT: content ---------------- */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-28 py-16 lg:py-20">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#E7A23A]" />
            <span className="text-[#E7A23A] text-xs tracking-[0.25em] uppercase font-semibold">
              Patna &middot; Neuro-Psychiatry Clinic
            </span>
          </div>

          {/* headline */}
          <h1 className="font-display text-[#F7F2E9] text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold mb-3">
            Best <span className="text-[#E7A23A] italic">Psychiatrist</span>
            <br />
            in Patna
          </h1>

          {/* signature brainwave */}
         

          {/* credentials */}
          <p className="text-[#D9E6E2] text-base sm:text-lg font-medium mb-8">
            MBBS, M.D. (Psychiatry), PDF, EMH (USA)
          </p>
        

          {/* rating strip */}
          <div className="flex items-center gap-4 mb-10 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 max-w-md">
            <div className="h-12 w-12 shrink-0 rounded-full ring-2 ring-[#E7A23A] flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#E7A23A]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#F7F2E9] font-semibold">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#E7A23A] text-[#E7A23A]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-[#B9CCC6] text-sm">
                Trusted by 5,000+ families in Patna
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FB958] transition-colors
               text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-black/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 border border-[#E7A23A] text-[#E7A23A] hover:bg-[#E7A23A] hover:text-[#0E2731] transition-colors font-semibold px-6 py-3 rounded-full"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
            </a>
          </div>

          {/* trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-[#B9CCC6] text-sm">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Confidential Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Online &amp; In-Clinic
            </span>
          </div>
        </div>

        {/* ---------------- RIGHT: empty panel (transparent) with quote ---------------- */}
        <div className="relative z-10 flex flex-col justify-end px-6 py-10 lg:py-20">
          {/* floating quote card – अब बाईं तरफ भी शिफ्ट कर सकते हैं, लेकिन यहाँ रखा है */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 max-w-xs ml-auto">
            
          </div>
        </div>
      </section>
    </div>
  );
}