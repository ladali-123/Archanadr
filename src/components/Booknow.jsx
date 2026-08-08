import  { useState, useEffect } from "react";
import { X, User, Phone, Mail, CalendarDays, Clock3, Send, MapPinned, Laptop } from "lucide-react";

/**
 * BookingModal — Dr. Archana Singh, Psychiatrist, Patna
 * Same palette + type as the rest of the site:
 *  navy #0F2544  |  heading #424242  |  accent #1D5D9B  |  eyebrow amber-400
 *
 * Usage:
 *   const [bookingOpen, setBookingOpen] = useState(false);
 *   <button onClick={() => setBookingOpen(true)}>Book Now</button>
 *   <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const CONCERNS = [
  "General Consultation",
  "Depression / Anxiety",
  "Child & Adolescent Psychiatry",
  "De-Addiction",
  "Sexual Health (Confidential)",
  "Other",
];

const FieldLabel = ({ children }) => (
  <label className="font-['Inter'] text-[13px] font-semibold text-[#16233B] mb-1.5 block">
    {children}
  </label>
);

const inputClasses =
  "w-full font-['Inter'] text-[14px] text-[#16233B] placeholder:text-[#9AA6B5] bg-[#F6F8FA] border border-[#E7EBF1] rounded-xl px-4 py-3 outline-none focus:border-[#1D5D9B] focus:bg-white focus:ring-2 focus:ring-[#1D5D9B]/15 transition-all";

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    mode: "In-Clinic",
    concern: CONCERNS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // lock background scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service / WhatsApp API
    console.log("Booking submitted:", form);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // reset after the close animation would run, so the form is fresh next time
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        mode: "In-Clinic",
        concern: CONCERNS[0],
        message: "",
      });
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <style>{FONT_IMPORT}</style>

      {/* backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#0F2544]/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
      />

      {/* modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-[popIn_0.25s_ease]">
        {/* header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] px-6 py-5 rounded-t-2xl flex items-center justify-between">
          <div>
            <p className="font-['Inter'] text-[11px] font-bold tracking-[0.15em] text-amber-300 uppercase mb-1">
              Book an Appointment
            </p>
            <h3 className="font-['Inter'] text-white text-lg font-bold">
              Dr. Archana Singh
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-4.5 h-4.5 text-white" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-14 h-14 rounded-full bg-[#1D5D9B] flex items-center justify-center mb-5">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Inter'] text-xl font-bold text-[#16233B] mb-2">
                Request received, {form.name || "there"}!
              </h3>
              <p className="font-['Inter'] text-[14px] text-[#5B6B84] max-w-xs mb-6">
                We'll call you shortly on {form.phone || "your number"} to
                confirm the appointment.
              </p>
              <button
                onClick={handleClose}
                className="font-['Inter'] font-semibold text-[13.5px] text-white bg-[#1D5D9B] px-6 py-2.5 rounded-full hover:bg-[#164a7d] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* consultation mode toggle */}
              <div>
                <FieldLabel>Consultation Mode</FieldLabel>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "In-Clinic", icon: MapPinned },
                    { label: "Online", icon: Laptop },
                  ].map(({ label, icon: Icon }) => (
                    <button
                      type="button"
                      key={label}
                      onClick={() => setForm({ ...form, mode: label })}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border font-['Inter'] text-[13.5px] font-semibold transition-all ${
                        form.mode === label
                          ? "bg-[#1D5D9B] border-[#1D5D9B] text-white"
                          : "bg-[#F6F8FA] border-[#E7EBF1] text-[#3A4552] hover:border-[#1D5D9B]/40"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel>Full Name</FieldLabel>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9AA6B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </div>
                <div>
                  <FieldLabel>Phone Number</FieldLabel>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9AA6B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <FieldLabel>Email Address</FieldLabel>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9AA6B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`${inputClasses} pl-10`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel>Preferred Date</FieldLabel>
                  <div className="relative">
                    <CalendarDays className="w-4 h-4 text-[#9AA6B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </div>
                <div>
                  <FieldLabel>Preferred Time</FieldLabel>
                  <div className="relative">
                    <Clock3 className="w-4 h-4 text-[#9AA6B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <FieldLabel>Reason for Consultation</FieldLabel>
                <select
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {CONCERNS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel>Message (optional)</FieldLabel>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything you'd like us to know beforehand..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] text-white font-['Inter'] font-semibold text-[15px] py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Confirm Booking
                <Send className="w-4 h-4" />
              </button>

              <p className="font-['Inter'] text-[11.5px] text-[#9AA6B5] text-center">
                Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}