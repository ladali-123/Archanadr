import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import proceed from "../assets/proceed.png";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const IMAGES = [pic1, pic2, pic3, proceed];

export default function Gallery() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-16 py-14 md:py-12">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#4a1263]" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-[#4a1263] uppercase">
              Gallery
            </span>
            <span className="h-px w-8 bg-[#4a1263]" />
          </div>

          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Moments{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#4a1263]">
              & Milestones
            </span>
          </h2>
        </div>

        {/* Responsive grid: stacked on mobile, 4 columns on desktop (unchanged) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-[#E7EBF1] 
              shadow-[0_10px_30px_rgba(74,18,99,0.08)]"
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-50 md:h-52 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}