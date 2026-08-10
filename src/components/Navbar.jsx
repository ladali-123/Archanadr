import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import BookNow from "./Booknow";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/service",
    dropdown: [
      { label: "Depression", to: "/service/depression" },
      { label: "Anxiety Disorders", to: "/service/anxiety-disorders" },
      { label: "OCD", to: "/service/ocd" },
      { label: "Bipolar Disorder", to: "/service/bipolar-disorder" },
      { label: "Child & Adolescent Psychiatry", to: "/service/child-adolescent-psychiatry" },
      { label: "De-Addiction & Recovery", to: "/service/de-addiction-recovery" },
      { label: "Sexual Health Counseling", to: "/service/sexual-health-counseling" },
      { label: "View All Services", to: "/service" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];
export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
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
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Dr Archana Kri Logo" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
          <div className="leading-tight">
            <p className="text-base md:text-lg font-bold text-[#0b6aa8] tracking-tight">
              DR. ARCHANA SINGH
            </p>
            <p className="text-xs md:text-sm font-semibold text-gray-600">
              MBBS, PSYCHIATRIST
            </p>
          </div>
        </Link>

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
                    <Link
                      key={sub.label}
                      to={sub.to}
                      onClick={() => setDesktopDropdown(false)}
                      className="block px-4 py-2.5 text-sm text-[#0b6aa8] hover:bg-[#0b6aa8]/5 hover:underline transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="group relative text-lg font-semibold text-[#0b6aa8] transition-colors"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0b6aa8] transition-all duration-200 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Book Now - desktop */}
        <button
          onClick={() => setBookingOpen(true)}
          className="hidden lg:flex items-center gap-2.5 bg-gradient-to-r from-[#0b6aa8] via-[#0f8ac9] to-[#14a4d9] text-white text-base font-bold pl-5 pr-7 py-3.5 rounded-full shadow-lg shadow-[#0b6aa8]/30 hover:shadow-xl hover:shadow-[#0b6aa8]/40 hover:scale-[1.05] active:scale-[0.97] transition-all duration-200 ring-2 ring-white/40"
        >
          <Calendar className="w-5 h-5 shrink-0" />
          Book Now
        </button>

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
                    <Link
                      key={sub.label}
                      to={sub.to}
                      onClick={() => {
                        setMobileDropdown(false);
                        setMobileOpen(false);
                      }}
                      className="block px-8 py-2 text-sm text-[#0b6aa8]/80 hover:text-[#0b6aa8] hover:bg-gray-50 hover:underline transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 text-sm font-semibold text-[#0b6aa8] hover:bg-gray-50 hover:underline transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <button
            onClick={() => {
              setMobileOpen(false);
              setBookingOpen(true);
            }}
            className="mx-5 my-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b6aa8] to-[#14a4d9] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </nav>
      </div>

      <BookNow isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </header>
  );
}