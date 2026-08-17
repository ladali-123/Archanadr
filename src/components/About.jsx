import { Link } from "react-router-dom";
import about from "../assets/about.jpg";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

export default function ManahHealthAbout() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-12 md:px-12 md:py-16">
      <style>{FONT_IMPORT}</style>

      {/* ---- Subtle bubbles background ---- */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -top-10 left-[6%] h-40 w-40 rounded-full bg-blue-100 blur-2xl" />
        <span className="absolute top-1/3 left-[45%] h-24 w-24 rounded-full bg-blue-50 blur-xl" />
        <span className="absolute bottom-6 left-[18%] h-16 w-16 rounded-full bg-blue-50 blur-lg" />
        <span className="absolute -bottom-16 right-[10%] h-52 w-52 rounded-full bg-blue-50 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ---- Top: Centered page heading ---- */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <h1 className="font-['Inter'] text-3xl font-extrabold leading-tight text-[#424242] sm:text-4xl md:text-5xl">
            Psychiatrist in{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
              Patna, India
            </span>
          </h1>
        </div>

        {/* ---- Content row ---- */}
        <div className="flex flex-col items-stretch gap-12 md:flex-row md:justify-between md:gap-16">
          {/* ---- Left: Image (wider, height matches text column) ---- */}
          <div className="order-2 w-full md:order-1 md:w-1/2">
            <img
              src={about}
              alt="Manah.Health team"
              className="mx-auto h-full max-h-[380px] w-full rounded-3xl border border-slate-100 object-cover shadow-xl md:max-h-none"
            />
          </div>

          {/* ---- Right: About Us text ---- */}
          <div className="order-1 flex w-full flex-col items-center text-center md:order-2 md:w-1/2 
          md:items-start md:text-left">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest
            text-[#E8A33D]">
              <span className="h-[2px] w-6 bg-[#E8A33D]" />
              ABOUT US
            </span>

            <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800 sm:text-base text-justify">
              Dr. Archana Singh is a trusted Neuro-Psychiatrist in Patna, dedicated to providing
              compassionate, evidence-based, and confidential mental healthcare. With expertise
              in treating anxiety, depression, stress, OCD, bipolar disorder, and other mental
              health conditions, she focuses on personalized treatment that helps patients regain
              emotional well-being and improve their quality of life. She believes that mental health
              deserves the same care and attention as physical health,
              ensuring every patient feels heard, supported, and respected throughout their recovery journey.
            </p>

            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-800 sm:text-base text-justify">
              Trusted by over 5,000 families, Dr. Archana Singh offers both online and in-clinic consultations, ensuring accessible,
              personalized, compassionate, and expert mental healthcare support without any judgment, care, or stigma, always.
            </p>



            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                to="/contact"
                className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}