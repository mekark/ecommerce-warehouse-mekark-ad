import BlueprintHeroSection from "@/components/BlueprintHeroSection";
import ProcessSection from "@/components/ProcessSection";
import FacilityConfigSection from "@/components/FacilityConfigSection";
import WhyCorporatesSection from "@/components/WhyCorporatesSection";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import ManufacturingCapabilitiesSection from "@/components/ManufacturingCapabilitiesSection";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import LeadBlueprintSection from "@/components/LeadBlueprintSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="overflow-x-clip">


      
      <FloatingContact />
      <BlueprintHeroSection />
      <FacilityConfigSection />
      <ProcessSection />
      <WhyCorporatesSection />
      <ProjectsGallerySection />
      <ManufacturingCapabilitiesSection />
      <FaqAccordionSection />
      <LeadBlueprintSection />
    </main>
  );
}
