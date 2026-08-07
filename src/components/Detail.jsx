import { Mail, Phone } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="w-full bg-[#0b6aa8] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4
       px-4 sm:px-6 py-3 sm:py-2 min-h-[52px] sm:min-h-[44px]">
        {/* Email - left */}
        <a
          href="mailto:contact@drprakharjain.com"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity self-start sm:self-auto"
        >
          <Mail className="w-4 h-4 shrink-0" />
          <span className="break-all">contact@drArchanaSingh.com</span>
        </a>

        {/* Phone numbers - center */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:flex-1 sm:justify-center">
          <Phone className="w-4 h-4 shrink-0" />
          <a href="tel:+917543976796" className="hover:opacity-90 transition-opacity whitespace-nowrap">
            +91 7543976796
          </a>
          <span>/</span>
          <a href="tel:+917759945555" className="hover:opacity-90 transition-opacity whitespace-nowrap">
            +91 7759945555
          </a>
        </div>

        {/* Spacer to balance layout on desktop so phone stays visually centered */}
        <div className="hidden sm:block sm:w-[220px] shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
}