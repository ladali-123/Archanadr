import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Venus,
  Stethoscope,
  ClipboardList,
  Pill,
  Users,
  Baby,
  Video,
  Frown,
  AlertCircle,
  RefreshCw,
  Activity,
  Ban,
  HeartHandshake,
  Moon,
  ShieldAlert,
} from "lucide-react";
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
      { label: "Women's Mental Health", to: "/service/womens-mental-health", icon: Venus },
      { label: "Psychiatric Consultation", to: "/service/psychiatric-consultation", icon: Stethoscope },
      { label: "Comprehensive Mental Health Assessment", to: "/service/comprehensive-assessment", icon: ClipboardList },
      { label: "Medication Management", to: "/service/medication-management", icon: Pill },
      { label: "Neuropsychiatric Care", to: "/service/neuropsychiatric-care", icon: Users },
      { label: "Child & Adolescent Psychiatry", to: "/service/child-adolescent-psychiatry", icon: Baby },
      { label: "Telepsychiatry", to: "/service/telepsychiatry", icon: Video },
    ],
  },
  {
    label: "Conditions",
    to: "/service",
    dropdown: [
      { label: "Depression", to: "/service/conditions/depression", icon: Frown },
      { label: "Anxiety Disorders", to: "/service/conditions/anxiety-disorders", icon: AlertCircle },
      { label: "OCD", to: "/service/conditions/ocd", icon: RefreshCw },
      { label: "Bipolar Disorder", to: "/service/conditions/bipolar-disorder", icon: Activity },
      { label: "Child & Adolescent Psychiatry", to: "/service/conditions/child-adolescent-psychiatry", icon: Baby },
      { label: "De-Addiction & Recovery", to: "/service/conditions/de-addiction-recovery", icon: Ban },
      { label: "Sexual Health Counseling", to: "/service/conditions/sexual-health-counseling", icon: HeartHandshake },
      { label: "Insomnia & Sleep Disorders", to: "/service/conditions/insomnia-sleep-disorders", icon: Moon },
      { label: "PTSD & Trauma", to: "/service/conditions/ptsd-trauma", icon: ShieldAlert },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];
export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(null);
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
          <img src={logo} alt="Dr Archana Kri Logo" className="h-16 w-16 sm:h-18 sm:w-20 object-contain" />
          <div className="leading-tight">
            <p className="text-base md:text-lg font-bold text-[#4a1263] tracking-tight">
              DR. ARCHANA SINGH
            </p>
            <p className="text-xs md:text-sm font-semibold text-gray-600">
              MBBS, PSYCHIATRIST
            </p>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" ref={dropdownRef}>
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() =>
                    setDesktopDropdown((v) => (v === item.label ? null : item.label))
                  }
                  className="group flex items-center gap-1 text-sm xl:text-base font-semibold text-[#4a1263]
                   transition-colors whitespace-nowrap"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#4a1263] to-[#c9a227] transition-all duration-200 group-hover:w-full" />
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      desktopDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max min-w-[200px] ${
                    item.label === "Services" ? "max-w-[260px]" : "max-w-[300px]"
                  } bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden origin-top transition-all duration-200 ${
                    desktopDropdown === item.label
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col p-2">
                    {item.dropdown.map((sub, idx) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        onClick={() => setDesktopDropdown(null)}
                        className={`flex items-center gap-3 px-3 py-3 text-[15px] font-normal leading-[1.3] text-[#4a1263] hover:bg-[#4a1263]/5 hover:underline transition-colors ${
                          idx !== item.dropdown.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        {sub.icon && <sub.icon className="w-5 h-5 shrink-0 text-[#c9a227]" />}
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="group relative text-sm xl:text-base font-semibold text-[#4a1263] transition-colors whitespace-nowrap"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#4a1263] to-[#c9a227] transition-all duration-200 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Book Now - desktop */}
        <button
          onClick={() => setBookingOpen(true)}
          className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 bg-gradient-to-r from-[#3f0f5c] via-[#8e2f8f] to-[#c9a227] text-white text-sm xl:text-base font-bold pl-4 pr-5 xl:pl-5 xl:pr-7 py-2.5 xl:py-3.5 rounded-full shadow-lg shadow-[#4a1263]/40 hover:shadow-xl hover:shadow-[#4a1263]/50 hover:scale-[1.05] active:scale-[0.97] transition-all duration-200 ring-2 ring-white/40"
        >
          <Calendar className="w-4 h-4 xl:w-5 xl:h-5 shrink-0" />
          Book Appointment
        </button>

        {/* Hamburger - mobile */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-[#4a1263] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile slide panel */}
      <div
        className={`lg:hidden absolute top-full right-0 w-2/3 max-w-xs bg-white shadow-2xl rounded-bl-2xl border-l border-b border-gray-100 origin-top-right transition-all duration-200 max-h-[80vh] overflow-y-auto ${
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
                  onClick={() =>
                    setMobileDropdown((v) => (v === item.label ? null : item.label))
                  }
                  className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#4a1263] hover:bg-gray-50 hover:underline transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileDropdown === item.label ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      onClick={() => {
                        setMobileDropdown(null);
                        setMobileOpen(false);
                      }}
                      className="flex items-center gap-3 px-8 py-2.5 text-sm font-normal text-[#4a1263]/90 hover:text-[#4a1263] hover:bg-gray-50 hover:underline transition-colors"
                    >
                      {sub.icon && <sub.icon className="w-4 h-4 shrink-0 text-[#c9a227]" />}
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
                className="px-5 py-3 text-sm font-semibold text-[#4a1263] hover:bg-gray-50 hover:underline transition-colors"
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
            className="mx-5 my-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#3f0f5c] via-[#8e2f8f] to-[#c9a227] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md active:scale-[0.98] transition-transform"
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