
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  UserCheck,
  RefreshCw,
  Mail,
  Phone,
} from "lucide-react";

/**
 * Privacy Policy — Dr. Archana Singh, Psychiatrist, Patna
 * Same palette + type as the rest of the site:
 *  navy #0F2544  |  heading #424242  |  accent #1D5D9B  |  eyebrow amber-400
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const SECTIONS = [
  {
    icon: Eye,
    title: "Information We Collect",
    body: "When you book an appointment, fill out our contact form, or consult with Dr. Archana Singh online or in-clinic, we may collect your name, phone number, email address, age, gender, and details relevant to your consultation (such as your reason for visiting). We do not collect any information beyond what is necessary to provide you safe, appropriate psychiatric care.",
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    body: "Your information is used solely to schedule and manage appointments, maintain accurate clinical records, communicate with you about your care, and improve our services. We never use your personal or medical information for marketing purposes without your explicit consent.",
  },
  {
    icon: Lock,
    title: "Confidentiality of Psychiatric Records",
    body: "We understand that mental health information is deeply personal. All consultation notes, diagnoses, and treatment details are treated as strictly confidential and are protected under standard medical ethics and applicable Indian healthcare regulations. Information is shared with third parties only when legally required, or with your explicit written consent (for example, when coordinating care with another treating doctor).",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Physical records are stored securely at our clinic, and any digital records are protected with restricted access.",
  },
  {
    icon: Share2,
    title: "Third-Party Sharing",
    body: "We do not sell, rent, or trade your personal information. Limited information may be shared with trusted service providers (such as appointment-booking platforms like HealthPlix, Practo, or JustDial) strictly to facilitate scheduling, and only to the extent necessary for that purpose.",
  },
  {
    icon: Cookie,
    title: "Cookies & Website Usage",
    body: "Our website may use basic cookies to improve your browsing experience, such as remembering your preferences or understanding which pages are most useful to visitors. No sensitive medical information is ever stored in cookies.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    body: "You have the right to request access to your personal information, ask for corrections if any details are inaccurate, and request that we stop processing your data for non-essential purposes (such as newsletters). To exercise any of these rights, please contact us using the details below.",
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    body: "This Privacy Policy may be updated from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with a revised \"last updated\" date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <style>{FONT_IMPORT}</style>

      {/* Hero */}
      <section className="relative bg-[#F6F8FA] py-16 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-[#1D5D9B]/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400" />
            <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              Your Privacy Matters
            </span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h1 className="font-['Inter'] text-3xl md:text-[40px] font-extrabold text-[#424242] leading-tight">
            Privacy{" "}
            <span className="font-['Playfair_Display'] italic font-semibold text-[#1D5D9B]">
              Policy
            </span>
          </h1>
          <p className="font-['Inter'] text-[15px] text-[#5B6B84] mt-4 leading-relaxed">
            How Dr. Archana Singh's clinic collects, uses, and protects your
            personal and medical information.
          </p>
          <p className="font-['Inter'] text-[12.5px] text-[#9AA6B5] mt-3">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="px-6 md:px-10 lg:px-16 pt-14">
        <div className="max-w-3xl mx-auto">
          <p className="font-['Inter'] text-[15px] leading-relaxed text-[#3A4552]">
            <span className="font-semibold text-[#16233B]">
              Dr. Archana Singh
            </span>{" "}
            ("we", "us", "our clinic") is committed to protecting the privacy
            and confidentiality of every patient who visits us — online or
            in-clinic — in Ashiana Nagar, Patna. This Privacy Policy explains
            what information we collect, how we use it, and the choices you
            have regarding your data.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 md:px-10 lg:px-16 py-12">
        <div className="max-w-3xl mx-auto space-y-10">
          {SECTIONS.map((section, i) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1D5D9B] flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="font-['Inter'] text-[18px] font-bold text-[#16233B] mb-2">
                    {String(i + 1).padStart(2, "0")}. {section.title}
                  </h2>
                  <p className="font-['Inter'] text-[14px] leading-relaxed text-[#3A4552]">
                    {section.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact strip */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#0a5f8c] via-[#0b6a9a] to-[#0d4f73] px-8 py-9 md:px-10 shadow-xl">
          <h3 className="font-['Inter'] text-white text-lg md:text-xl font-bold mb-2">
            Questions about your privacy?
          </h3>
          <p className="font-['Inter'] text-[#C4D0E0] text-sm mb-5">
            If you have any questions about this Privacy Policy or how your
            information is handled, please reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+917543976796"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-['Inter'] text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 75439 76796
            </a>
            <a
              href="mailto:contact@drArchanaSingh.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-['Inter'] text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <Mail className="w-4 h-4" /> contact@drArchanaSingh.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}