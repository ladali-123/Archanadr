import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";


import consult from "../assets/consult.png";




const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const CONCERNS = [
  "General Consultation",
  "Depression / Anxiety",
  "Child & Adolescent Psychiatry",
  "De-Addiction",
  "Sexual Health (Confidential)",
  "Other",
];

const CONTACT_INFO = [
  { icon: Phone, label: "Call Us", value: "+91 75439 76796" },
  { icon: Mail, label: "Email Us", value: "contact@drArchanaSingh.com" },
  { icon: MapPin, label: "Clinic", value: "Ashiana Nagar, Patna" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 10 AM – 6 PM" },
];

function FieldLabel({ children }) {
  return (
    <label className="font-['Inter'] text-[13px] font-semibold text-[#16233B] mb-1.5 block">
      {children}
    </label>
  );
}

const inputClasses =
  "w-full font-['Inter'] text-[14px] text-[#16233B] placeholder:text-[#9AA6B5] bg-[#F6F8FA] border border-[#E7EBF1] rounded-xl px-4 py-3 outline-none focus:border-[#1D5D9B] focus:bg-white focus:ring-2 focus:ring-[#1D5D9B]/15 transition-all";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    concern: CONCERNS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service / WhatsApp API
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-10 lg:px-16 overflow-hidden">
      <style>{FONT_IMPORT}</style>

      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-[#1D5D9B]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              Get In Touch
            </span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Contact{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
              &amp; Book a Consultation
            </span>
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            Reach out for an online or in-clinic appointment — every
            consultation is confidential and judgment-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT: Form */}
          <div className="bg-white rounded-2xl border border-[#E7EBF1] shadow-[0_10px_30px_rgba(15,37,68,0.06)] p-7 md:p-9">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 rounded-full bg-[#1D5D9B] flex items-center justify-center mb-5">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#16233B] mb-2">
                  Thank you, {form.name || "there"}!
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#5B6B84] max-w-xs">
                  Your request has been received. Our team will get back to
                  you shortly to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-['Inter'] text-[13px] font-semibold text-[#1D5D9B] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputClasses} pl-10`}
                    />
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
                  <FieldLabel>Message</FieldLabel>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-[#9AA6B5] absolute left-3.5 top-3.5" />
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly what you'd like to discuss..."
                      className={`${inputClasses} pl-10 resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] text-white font-['Inter'] font-semibold text-[15px] py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Book Consultation
                  <Send className="w-4 h-4" />
                </button>

                <p className="font-['Inter'] text-[11.5px] text-[#9AA6B5] text-center">
                  Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT: Image + contact info */}
          <div className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(15,37,68,0.15)] border border-[#E7EBF1] flex-1 min-h-[280px]">
              {!imgError ? (
                <img
                  src={consult}
                  alt="Consultation with Dr. Archana Singh"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#0F2544] to-[#1D5D9B] flex items-center justify-center">
                  <span className="font-['Inter'] text-white/70 text-xs px-4 text-center">
                    Add your image at src/assets/consult.png
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2544]/70 via-[#0F2544]/0 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-['Playfair_Display'] italic text-white text-lg font-semibold mb-1">
                  "Confidential, compassionate, evidence-based care."
                </p>
                <p className="font-['Inter'] text-white/80 text-[12.5px]">
                  Dr. Archana Singh — MBBS, M.D. (Psychiatry)
                </p>
              </div>
            </div>

            {/* Contact info grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-start gap-3 bg-[#F6F8FA] border border-[#E7EBF1] rounded-xl px-4 py-3.5"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1D5D9B] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </span>
                    <div>
                      <p className="font-['Inter'] text-[11px] font-semibold text-amber-500 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="font-['Inter'] text-[13px] font-semibold text-[#16233B] mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}