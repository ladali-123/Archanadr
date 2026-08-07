import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import logo from "../assets/logo.png";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "General Consultation", href: "#general" },
      { label: "TMS Therapy", href: "#tms" },
      { label: "Ketamine Therapy", href: "#ketamine" },
    ],
  },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between pl-2 lg:pl-0 pr-4 sm:pr-6 py-1 sm:py-1.5">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Dr Archana Kri Logo" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
          <div className="leading-tight">
            <p className="text-base md:text-lg font-bold text-[#0b6aa8] tracking-tight">
              DR. ARCHANA SINGH
            </p>
            <p className="text-xs md:text-sm font-semibold text-gray-600">
              MBBS, PSYCHIATRIST
            </p>
          </div>
        </a>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDesktopDropdown((v) => !v)}
                  className="group flex items-center gap-1 text-lg font-semibold text-[#0b6aa8]
                   transition-colors"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0b6aa8] transition-all duration-200 group-hover:w-full" />
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      desktopDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden origin-top transition-all duration-200 ${
                    desktopDropdown
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2.5 text-sm text-[#0b6aa8] hover:bg-[#0b6aa8]/5 hover:underline transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-lg font-semibold text-[#0b6aa8] transition-colors"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0b6aa8] transition-all duration-200 group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        {/* Book Now - desktop */}
        <a
          href="#book"
          className="hidden lg:flex items-center gap-2.5 bg-gradient-to-r from-[#0b6aa8] via-[#0f8ac9] to-[#14a4d9] text-white text-base font-bold pl-5 pr-7 py-3.5 rounded-full shadow-lg shadow-[#0b6aa8]/30 hover:shadow-xl hover:shadow-[#0b6aa8]/40 hover:scale-[1.05] active:scale-[0.97] transition-all duration-200 ring-2 ring-white/40"
        >
          <Calendar className="w-5 h-5 shrink-0" />
          Book Now
        </a>

        {/* Hamburger - mobile */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-[#0b6aa8] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile slide panel */}
      <div
        className={`lg:hidden absolute top-full right-0 w-2/3 max-w-xs bg-white shadow-2xl rounded-bl-2xl border-l border-b border-gray-100 origin-top-right transition-all duration-200 ${
          mobileOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-2">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileDropdown((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#0b6aa8] hover:bg-gray-50 hover:underline transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileDropdown ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-8 py-2 text-sm text-[#0b6aa8]/80 hover:text-[#0b6aa8] hover:bg-gray-50 hover:underline transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-3 text-sm font-semibold text-[#0b6aa8] hover:bg-gray-50 hover:underline transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="#book"
            className="mx-5 my-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b6aa8] to-[#14a4d9] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}