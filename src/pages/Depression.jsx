
import { CloudRain } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function Depression() {
  return (
    <ServiceLayout
      icon={CloudRain}
      title="Depression"
      tagline="Personalised care to help you find your way back to yourself."
      overview="Depression is more than ordinary sadness — it affects how you think, feel, sleep, eat, and function day to day. Dr. Archana Singh combines evidence-based therapy, medication where needed, and lifestyle guidance to help patients regain emotional stability and quality of life."
      whatWeTreat={[
        "Persistent low mood or sadness",
        "Loss of interest in daily activities",
        "Chronic fatigue and low energy",
        "Sleep and appetite changes",
        "Feelings of worthlessness or guilt",
        "Difficulty concentrating",
      ]}
      approach="Every treatment plan is built around your specific symptoms, lifestyle, and history — typically combining psychotherapy (CBT), medication management when appropriate, and practical lifestyle support, with regular follow-ups to track progress."
    />
  );
}