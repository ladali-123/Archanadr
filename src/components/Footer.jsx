import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const QUICK_LINKS = [
  { label: "Homepage", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/service" },
  { label: "Our Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: null }, // page not built yet
];

export default function FooterOnly() {
  return (
    <footer className="bg-[#086797] text-white pt-12 pb-12">
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
              an experience of 5 years in this field. He provides
              compassionate psychiatric care with modern treatment
              approaches.
            </p>
            <button className="mt-5 bg-[#1298F3] px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0873A8] transition">
              READ MORE
            </button>
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
                      className="flex items-center gap-2 hover:text-white/70 hover:pl-1 transition-all"
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

          {/* Treatment */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Treatment</h3>
            <ul className="space-y-4 text-sm">
              {[
                "Autism",
                "ADHD",
                "Learning Disability",
                "Depression",
                "Anxiety",
                "Panic Attacks",
                "OCD",
                "Bipolar Disorder",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Join Us</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                placeholder="Rahul Kumar"
                className="bg-transparent border border-white/70 rounded px-3 py-3 text-sm outline-none"
              />
              <input
                placeholder="+91 XXXXXXXX"
                className="bg-transparent border border-white/70 rounded px-3 py-3 text-sm outline-none"
              />
            </div>
            <input
              placeholder="Email Address"
              className="mt-4 w-full bg-transparent border border-white/70 rounded px-3 py-3 text-sm outline-none"
            />
            <textarea
              placeholder="Your message here..."
              rows="4"
              className="mt-4 w-full bg-white rounded px-3 py-3 text-sm text-gray-700 outline-none"
            />
            <button className="mt-5 bg-[#4285F4] px-6 py-3 rounded text-sm font-semibold">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}