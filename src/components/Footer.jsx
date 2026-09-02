import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const QUICK_LINKS = [
  { label: "Homepage", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/service" },
  { label: "Our Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

// ✅ Service links – exactly matching the navbar's Services dropdown
const SERVICE_LINKS = [
  { label: "Women's Mental Health", to: "/service/womens-mental-health" },
  { label: "Psychiatric Consultation", to: "/service/psychiatric-consultation" },
  { label: "Comprehensive Mental Health Assessment", to: "/service/comprehensive-assessment" },
  { label: "Medication Management", to: "/service/medication-management" },
  { label: "Neuropsychiatric Care", to: "/service/neuropsychiatric-care" },
  { label: "Child & Adolescent Psychiatry", to: "/service/child-adolescent-psychiatry" },
  { label: "Telepsychiatry", to: "/service/telepsychiatry" },
];

export default function FooterOnly() {
  return (
    <footer className="bg-[#170522] text-white pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-26 mb-6 object-contain rounded-2xl"
            />
            <p className="text-sm leading-6 text-white/90 text-justify">
              Dr. Archana Singh is a Psychiatrist in Patna, India and has
              an experience of 15 years in this field. She provides
              compassionate psychiatric care with modern treatment
              approaches.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-block bg-[#c9a227] px-6 py-3 rounded-full text-sm font-semibold text-[#2b0a40] hover:bg-white hover:text-[#4a1263] transition"
            >
              READ MORE
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {QUICK_LINKS.map((item) =>
                item.to ? (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="flex items-center gap-2 hover:text-[#e8c85a] hover:pl-1 transition-all"
                    >
                      <ChevronRight size={15} />
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-white/50 cursor-default"
                    title="Coming soon"
                  >
                    <ChevronRight size={15} />
                    {item.label}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ✅ Our Services – now matches the navbar */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Our Services</h3>
            <ul className="space-y-4 text-sm">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 hover:text-[#e8c85a] hover:pl-1 transition-all"
                  >
                    <ChevronRight size={15} />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service"
                  className="flex items-center gap-2 text-[#c9a227] font-semibold hover:text-[#e8c85a] hover:pl-1 transition-all"
                >
                  <ChevronRight size={15} />
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Join Us</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                placeholder="Name"
                className="bg-transparent border border-white/70 rounded px-3 py-3 text-sm outline-none focus:border-[#c9a227]"
              />
              <input
                placeholder="+91 XXXXXXXX"
                className="bg-transparent border border-white/70 rounded px-3 py-3 text-sm outline-none focus:border-[#c9a227]"
              />
            </div>
            <input
              placeholder="Email Address"
              className="mt-4 w-full bg-transparent border border-white/70 rounded px-3 py-3 text-sm outline-none focus:border-[#c9a227]"
            />
            <textarea
              placeholder="Your message here..."
              rows="4"
              className="mt-4 w-full bg-white rounded px-3 py-3 text-sm text-gray-700 outline-none"
            />
            <button className="mt-5 bg-[#c9a227] px-6 py-3 rounded text-sm font-semibold text-[#2b0a40] hover:bg-[#e8c85a] transition">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}