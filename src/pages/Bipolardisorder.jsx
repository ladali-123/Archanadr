
import { Waves } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function BipolarDisorder() {
  return (
    <ServiceLayout
      icon={Waves}
      title="Bipolar Disorder"
      tagline="Long-term mood stability through structured, ongoing care."
      overview="Bipolar disorder involves shifts between depressive and manic or hypomanic episodes. Long-term management focuses on stabilising mood, preventing relapse, and helping both patients and families understand and navigate the condition."
      whatWeTreat={[
        "Manic and hypomanic episodes",
        "Depressive episodes",
        "Rapid mood swings",
        "Sleep pattern disturbances",
        "Impulsive behaviour during mood shifts",
      ]}
      approach="Care is built around consistent medication management, regular monitoring, and family counselling — since family involvement significantly improves long-term stability."
    />
  );
}
