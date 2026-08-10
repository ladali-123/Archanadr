
import { Puzzle } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

export default function ChildAdolescentPsychiatry() {
  return (
    <ServiceLayout
      icon={Puzzle}
      title="Child & Adolescent Psychiatry"
      tagline="Focused, age-appropriate care for young minds."
      overview="Children and teenagers express emotional and behavioural struggles differently from adults. Dr. Singh offers specialised evaluation and therapy for neurodevelopmental and behavioural concerns, always involving parents as active partners in the treatment process."
      whatWeTreat={[
        "ADHD (Attention-Deficit/Hyperactivity Disorder)",
        "Autism Spectrum Disorder",
        "Learning disabilities (e.g. dyslexia)",
        "Behavioural and conduct issues",
        "School-related anxiety and adjustment difficulties",
      ]}
      approach="Treatment combines behavioural therapy, medication management when appropriate, parental training, and — where useful — coordination with the child's school for consistent support."
    />
  );
}