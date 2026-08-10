import  { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Lock } from "lucide-react";

// Place it at: src/assets/service.png
import consultImg from "../assets/service.png";

/**
 * ServiceLayout — shared UI shell used by every page in src/pages/
 * (Depression.jsx, AnxietyDisorders.jsx, OCD.jsx, etc.)
 *
 * Each page file just imports this and passes its own content as props —
 * so every service page stays visually identical while living in its
 * own separate file.
 *
 * Same palette + type as the rest of the site:
 *  navy #0F2544  |  heading #424242  |  accent #1D5D9B  |  eyebrow amber-400
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

export default function ServiceLayout({
  icon: Icon,
  title,
  tagline,
  overview,
  whatWeTreat,
  approach,
  confidential,
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white">
      <style>{FONT_IMPORT}</style>

      {/* Hero */}
      <section className="relative bg-[#F6F8FA] py-16 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-[#1D5D9B]/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <Link
            to="/service"
            className="inline-flex items-center gap-1.5 text-[13px] font-['Inter'] font-semibold text-[#1D5D9B] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Services
          </Link>

          <div className="flex justify-center mb-5">
            <span className="w-14 h-14 rounded-2xl bg-[#1D5D9B] flex items-center justify-center shadow-lg">
              <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
            </span>
          </div>

          {confidential && (
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-[11px] font-bold px-3 py-1 rounded-full font-['Inter'] mb-3">
              <Lock className="w-3 h-3" /> Confidential Consultation
            </span>
          )}

          <h1 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            {title}
          </h1>
          <p className="font-['Playfair_Display'] italic text-[#1D5D9B] text-lg mt-3">
            {tagline}
          </p>
        </div>
      </section>

      {/* Content: image + overview side-by-side, full-width sections below */}
      <section className="px-6 md:px-10 lg:px-16 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start mb-12">
            {/* Image */}
            <div className="w-full lg:w-[360px] flex-shrink-0 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(15,37,68,0.14)] border border-[#E7EBF1]">
                {!imgError ? (
                  <img
                    src={consultImg}
                    alt={`${title} consultation with Dr. Archana Singh`}
                    onError={() => setImgError(true)}
                    className="w-full h-[260px] lg:h-[320px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[260px] lg:h-[320px] bg-gradient-to-br from-[#0F2544] to-[#1D5D9B] flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white/60" strokeWidth={1.5} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2544]/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-['Inter'] text-white text-[13px] font-semibold">
                    Dr. Archana Singh
                  </p>
                  <p className="font-['Inter'] text-white/75 text-[11px]">
                    MBBS, M.D. (Psychiatry)
                  </p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <p className="font-['Inter'] text-[15px] leading-relaxed text-[#3A4552] lg:flex-1">
              {overview}
            </p>
          </div>

          <h2 className="font-['Inter'] text-[19px] font-bold text-[#16233B] mb-5">
            What We Treat
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
            {whatWeTreat.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1D5D9B] flex-shrink-0 mt-0.5" />
                <span className="font-['Inter'] text-[14px] text-[#3A4552]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <h2 className="font-['Inter'] text-[19px] font-bold text-[#16233B] mb-3">
            Our Approach
          </h2>
          <p className="font-['Inter'] text-[15px] leading-relaxed text-[#3A4552] mb-12">
            {approach}
          </p>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="text-center sm:text-left">
              <h3 className="font-['Inter'] text-white text-lg font-bold mb-1">
                Ready to talk to Dr. Archana Singh?
              </h3>
              <p className="font-['Inter'] text-[#C4D0E0] text-sm">
                Every consultation is confidential and judgment-free.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 bg-amber-400 hover:bg-amber-500 text-[#16233B] font-['Inter'] font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}