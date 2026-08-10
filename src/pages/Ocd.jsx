
import { RefreshCw } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function OCD() {
  return (
    <ServiceLayout
      icon={RefreshCw}
      title="OCD"
      tagline="Structured therapy to manage intrusive thoughts and compulsions."
      overview="Obsessive-Compulsive Disorder involves distressing, intrusive thoughts (obsessions) and repetitive behaviours (compulsions) performed to reduce that distress. With the right treatment, patients can significantly reduce the frequency and intensity of these patterns."
      whatWeTreat={[
        "Intrusive, unwanted thoughts",
        "Repetitive checking behaviours",
        "Contamination fears and excessive cleaning",
        "Need for symmetry or order",
        "Compulsive counting or repeating",
      ]}
      approach="We primarily use Exposure and Response Prevention (ERP), a specialised form of CBT proven effective for OCD, combined with medication management where needed."
    />
  );
}