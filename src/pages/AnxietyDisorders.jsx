
import { Wind } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function AnxietyDisorders() {
  return (
    <ServiceLayout
      icon={Wind}
      title="Anxiety Disorders"
      tagline="Manage worry and physical symptoms with proven techniques."
      overview="From generalised anxiety to social anxiety and panic attacks, anxiety disorders can make everyday situations feel overwhelming. We help patients understand their triggers and build practical tools to manage both the emotional and physical symptoms."
      whatWeTreat={[
        "Generalised Anxiety Disorder (GAD)",
        "Social anxiety",
        "Panic attacks",
        "Specific phobias",
        "Excessive, uncontrollable worry",
        "Physical symptoms — racing heart, restlessness",
      ]}
      approach="Treatment centres on Cognitive Behavioral Therapy (CBT) and stress-reduction techniques, supported by medication when symptoms are severe enough to interfere with daily functioning."
    />
  );
}