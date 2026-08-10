
import { HeartHandshake } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function SexualHealthCounseling() {
  return (
    <ServiceLayout
      icon={HeartHandshake}
      title="Sexual Health Counseling"
      tagline="Confidential, respectful evaluation and treatment."
      overview="Sexual health concerns are common but often go unaddressed due to hesitation or stigma. Dr. Singh provides a private, respectful space to discuss and treat these concerns with both medical and psychological expertise."
      whatWeTreat={[
        "Erectile dysfunction",
        "Premature ejaculation",
        "Low libido",
        "Performance-related anxiety",
        "Relationship and intimacy concerns",
      ]}
      approach="Every consultation is strictly confidential. Treatment may include medical evaluation, counselling, and psychotherapy, tailored to the underlying cause of the concern."
      confidential
    />
  );
}