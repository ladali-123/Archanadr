

// Place these 4 files in src/assets/ (as you already have them)
import healthLogo from "../assets/health.png";
import practoLogo from "../assets/practo.png";
import lybrateLogo from "../assets/lybrate.png";
import justLogo from "../assets/just.png";

/**
 * Patient Experience And Reviews — Dr. Archana Singh, Psychiatrist, Patna
 * Same palette + type as the rest of the site:
 *  navy #0F2544  |  heading #424242  |  accent #1D5D9B  |  eyebrow amber-400
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const PLATFORMS = [
  {
    text: "Book Appointments Online via HealthPlix",
    logo: healthLogo,
    url: "https://book-appointment.healthplix.com/dr-dr-archana-singh-psychiatry-ashiana-nagar--patna",
  },
  {
    text: "Patient Experiences Shared on Practo",
    logo: practoLogo,
    url: "https://www.practo.com/patna/doctor/dr-archana-singh-psychiatrist",
  },
  {
    text: "Verified Psychiatrist With Recommendations",
    logo: lybrateLogo,
    // TODO: replace with Dr. Archana Singh's exact Lybrate profile URL once available
    url: "https://www.google.com/maps/search/Manah+Institute+of+Psychiatry+%26+Behavioral+Science+Patna",
  },
  {
    text: "Well Rated on JustDial",
    logo: justLogo,
    url: "https://www.justdial.com/Patna/Manah-Institute-Of-Psychiatry-Behavioral-Science-Opposite-Jagat-Enclave-Ashiana-Nagar/0612PX612-X612-150513175519-H9J6_BZDET",
  },
];

function PlatformCard({ platform }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E7EBF1]
       p-6 h-[190px] transition-all duration-300 hover:border-[#1D5D9B]/40 hover:shadow-[0_14px_34px_rgba(15,37,68,0.10)] hover:-translate-y-1"
    >
      <p className="font-['Inter'] text-[14px] font-semibold text-[#16233B] leading-snug">
        {platform.text}
      </p>
      <div className="flex items-center justify-center bg-white border border-[#E7EBF1] rounded-xl
       py-5 px-4 mt-4">
        <img
          src={platform.logo}
          alt={platform.text}
          className="h-8 md:h-10 w-auto max-w-full object-contain"
        />
      </div>
    </a>
  );
}

export default function PatientReviews() {
  return (
    <section className="relative bg-[#eceff1] py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 bg-[#1D5D9B]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-16 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              Verified Across Platforms
            </span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Patient{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#E8A33D]">
              Experience &amp; Reviews
            </span>
          </h2>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORMS.map((platform) => (
            <PlatformCard key={platform.url} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}