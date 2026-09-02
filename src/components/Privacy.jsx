

/**
 * Privacy Policy — Dr. Archana Singh, Psychiatrist, Patna
 */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700;800&display=swap');`;

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We may collect personal details such as your name, phone number, email address, age, and gender when you book an appointment, fill out a contact form, or reach out to us on WhatsApp or by phone. During a consultation, we also record clinical information relevant to your care, including your symptoms, medical history, and treatment notes. We only collect what is necessary to provide you safe and appropriate psychiatric care.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used to schedule and manage appointments, maintain accurate clinical records, follow up on your treatment, and respond to your queries. We may also use your contact details to send appointment reminders or important updates about our services. We do not use your personal or medical information for marketing purposes without your clear consent.",
  },
  {
    title: "Confidentiality of Psychiatric Records",
    body: "Mental health information is deeply personal, and we treat it with the highest level of confidentiality. Consultation notes, diagnoses, and treatment details are shared only with your explicit consent, or when required by law. This applies whether your consultation takes place online or in-clinic.",
  },
  {
    title: "Online Consultations",
    body: "For telepsychiatry sessions, we use secure video or audio calling platforms. While we take reasonable precautions to protect these sessions, no method of electronic transmission is completely risk-free, and we encourage you to take a call from a private, comfortable space.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your data from unauthorized access, loss, misuse, or alteration. Physical records are stored securely at our clinic, and digital records are protected with restricted access limited to authorized personnel only.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell or rent your personal information to anyone. Limited information may be shared with trusted third-party platforms used for appointment booking (such as HealthPlix, Practo, or JustDial), strictly to facilitate scheduling. Information may also be disclosed if required by law or a valid legal request.",
  },
  {
    title: "Cookies & Website Usage",
    body: "Our website may use basic cookies to understand how visitors use the site and to improve your browsing experience. No sensitive medical or personal health information is ever stored in cookies.",
  },
  {
    title: "Children's Privacy",
    body: "For consultations involving minors, information is collected and shared with the involvement and consent of a parent or legal guardian. We do not knowingly collect personal information directly from children without such consent.",
  },
  {
    title: "Your Rights",
    body: "You have the right to request access to the personal information we hold about you, ask us to correct any inaccuracies, and request that we stop using your data for non-essential purposes. To exercise any of these rights, please contact us using the details below.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page along with a revised \"last updated\" date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <h1 className="font-['Inter'] text-2xl md:text-[32px] font-extrabold text-[#424242] mb-2">
          Privacy Policy
        </h1>
        <p className="font-['Inter'] text-[13px] text-[#9AA6B5] mb-10">
          Last updated: August 2026
        </p>

        <p className="font-['Inter'] text-[15px] leading-relaxed text-[#3A4552] mb-10">
          <span className="font-semibold text-[#16233B]">
            Dr. Archana Singh
          </span>{" "}
          ("we", "us", "our clinic") is committed to protecting the privacy
          and confidentiality of every patient who visits us — online or
          in-clinic — in Ashiana Nagar, Patna. This Privacy Policy explains
          what information we collect, how we use it, and the choices you
          have regarding your data. By using our website or booking a
          consultation with us, you agree to the practices described here.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((section, i) => (
            <div key={section.title}>
              <h2 className="font-['Inter'] text-[17px] font-bold text-[#16233B] mb-2">
                {i + 1}. {section.title}
              </h2>
              <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#3A4552]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E7EBF1]">
          <h2 className="font-['Inter'] text-[17px] font-bold text-[#16233B] mb-2">
            Questions About Your Privacy?
          </h2>
          <p className="font-['Inter'] text-[14.5px] leading-relaxed text-[#3A4552]">
            If you have any questions about this Privacy Policy or how your
            information is handled, please reach out to us at{" "}
            <a
              href="tel:+917543976796"
              className="text-[#4a1263] font-medium hover:underline"
            >
              +91 75439 76796
            </a>{" "}
            or{" "}
            <a
              href="mailto:contact@drArchanaSingh.com"
              className="text-[#4a1263] font-medium hover:underline"
            >
              contact@drArchanaSingh.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}