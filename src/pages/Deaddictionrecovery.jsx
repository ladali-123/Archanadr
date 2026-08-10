
import { Wine } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function DeAddictionRecovery() {
  return (
    <ServiceLayout
      icon={Wine}
      title="De-Addiction & Recovery"
      tagline="Structured, judgment-free support toward lasting recovery."
      overview="Whether it's alcohol, substance use, or behavioural addictions like gaming and internet use, recovery is possible with the right structured support. We provide a non-judgmental space to begin — and sustain — that journey."
      whatWeTreat={[
        "Alcohol dependency",
        "Drug and substance addiction",
        "Internet and gaming addiction",
        "Behavioural addictions",
        "Relapse prevention",
      ]}
      approach="Our approach includes de-addiction counselling, detox support and coordination where medically needed, individual and family therapy, and long-term relapse-prevention planning."
    />
  );
}