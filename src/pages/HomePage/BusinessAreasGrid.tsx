import { motion } from "motion/react";
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';
import innovationen from "@/assets/business-areas/innovationen.png";
import solutions from "@/assets/business-areas/solutions.png";
import energy from "@/assets/business-areas/energy.png";

import innovationenDark from "@/assets/business-areas/innovationen-dark.png";
import solutionsDark from "@/assets/business-areas/solutions-dark.png";
import energyDark from "@/assets/business-areas/energy-dark.png";



export const BusinessAreasGrid = () => {
  const {darkMode} = useTheme();

  const businessAreas: BusinessAreaProps[] = [
    {
      title: "Innovationen",
      subtitle: "Die Zukunft der Energie entwickeln",
      description: "Technologie treibt nachhaltige Veränderungen. Wir forschen und entwickeln smarte Solar — und Netztechnologien, um Effizienz, Langlebigkeit und Wirtschaftlichkeit zu maximieren.",
      imageSrc: darkMode ? innovationenDark : innovationen,
      link: "/innovationen",
    },
    {
      title: "Solutions",
      subtitle: "Intelligente Energiesysteme",
      description: "Von Photovoltaik-Anlagen bis zu Smart Grids — wir gestalten, optimieren und realisieren schlüsselfertige Systeme für Unternehmen, Städte & Industrie.",
      imageSrc: darkMode ? solutionsDark : solutions,
      link: "/solutions",
    },
    {
      title: "Energy",
      subtitle: "Projekte & Vermarktung",
      description: "Energieprojekte erfordern Strategie. Wir entwickeln, finanzieren und optimieren nachhaltige Anlagen — von der Planung bis zur Netzanbindung.",
      imageSrc: darkMode ? energyDark : energy,
      link: "/energy",
    }
  ];

  return (
    <section className="py-20 lg:py-32 container mx-auto flex flex-col gap-16 items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-10 items-center justify-center"
      >
        <h2 className="text-gradient-2">Unsere Geschäftsbereiche</h2>
        <span className="">
          Innovation, intelligente Lösungen & nachhaltige Energieprojekte —
          <br />
          Maiertech vereint technologische Exzellenz mit praxisnaher Umsetzung.
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-2.5 drop-shadow-double-gray max-w-[1400px]">
        {businessAreas.map((area) => (
          <BusinessAreaCard key={area.title} area={area} />
        ))}
      </div>
    </section>
  );
};

interface BusinessAreaProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  link: string;
}



const BusinessAreaCard = ({ area }: { area: BusinessAreaProps }) => {
  return (
    <div className="relative bg-white dark:bg-[#1A1A1A] rounded-4xl border-2 border-[#EDE8FB] dark:border-[#1A1A1A]">
      <GlowingEffect
        borderWidth={2}
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex flex-col overflow-hidden rounded-[calc(2rem-0.125rem)]">
        <img
          src={area.imageSrc}
          alt={area.title}
          className="w-full h-[360px] md:h-[500px] lg:h-[360px] overflow-hidden object-cover"
        />
        <div className="px-[2.375rem] py-10 flex flex-col items-center text-center gap-5">
          <div className="flex flex-col items-center">
            <h3 className="text-gradient-2 mb-3">{area.title}</h3>
            <h4 className="mb-6">{area.subtitle}</h4>
            <span className="min-h-28">{area.description}</span>
          </div>

          <Button href={area.link}>
            Mehr Erfahren
          </Button>
        </div>
      </div>
    </div>
  );
};