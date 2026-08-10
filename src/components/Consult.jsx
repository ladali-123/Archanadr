import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaSection() {
  const bgImage =
    "https://i.pinimg.com/1200x/90/00/a7/9000a71ef8d404ccb2e58ea2ee383d89.jpg";

  return (
    <section
      className="relative w-full min-h-[170px] md:h-[170px] bg-cover bg-center  rounded-2xl bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F2544]/60" />

      {/* Decorative Blur */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-6 md:py-0">
        {/* Left Content */}
        <div className="w-full md:w-[72%] lg:w-[75%] text-center md:text-left">
          <h3
            className="text-lg sm:text-xl md:text-[24px] lg:text-[26px] font-semibold italic text-white leading-tight md:whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Understanding Mental Health Is The First Step Toward Feeling Better.
          </h3>

          <p
            className="mt-2 text-sm md:text-base text-white/90"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            If You're Unsure Where To Begin, Feel Free To Reach Out.
          </p>
        </div>

        {/* Button */}
        <div className="shrink-0">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0F2544] font-semibold text-sm md:text-base px-5 md:px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            BOOK A CONSULTATION
            <ArrowRight
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}