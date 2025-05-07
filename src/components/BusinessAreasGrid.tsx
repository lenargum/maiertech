import { motion } from "motion/react";
import { GlowingEffect } from './ui/glowing-effect';
import { Button } from './ui/Button';

import innovationen from "@/assets/business-areas/innovationen.png";
import solutions from "@/assets/business-areas/solutions.png";
import energy from "@/assets/business-areas/energy.png";

interface BusinessAreaProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  link: string;
}

const businessAreas: BusinessAreaProps[] = [
  {
    title: "Innovationen",
    subtitle: "Die Zukunft der Energie entwickeln",
    description: "Technologie treibt nachhaltige Veränderungen. Wir forschen und entwickeln smarte Solar — und Netztechnologien, um Effizienz, Langlebigkeit und Wirtschaftlichkeit zu maximieren.",
    imageSrc: innovationen,
    link: "/innovationen",
  },
  {
    title: "Solutions",
    subtitle: "Intelligente Energiesysteme",
    description: "Von Photovoltaik-Anlagen bis zu Smart Grids — wir gestalten, optimieren und realisieren schlüsselfertige Systeme für Unternehmen, Städte & Industrie.",
    imageSrc: solutions,
    link: "/solutions",
  },
  {
    title: "Energy",
    subtitle: "Projekte & Vermarktung",
    description: "Energieprojekte erfordern Strategie. Wir entwickeln, finanzieren und optimieren nachhaltige Anlagen — von der Planung bis zur Netzanbindung.",
    imageSrc: energy,
    link: "/energy",
  }
];

const BusinessAreaCard = ({ area }: { area: BusinessAreaProps }) => {
  return (
    <div className="relative bg-white rounded-4xl border-2 border-[#EDE8FB]">
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
          className="w-full h-[360px] overflow-hidden object-cover"
        />
        <div className="p-9 flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center">
            <h3 className="text-gradient-2 mb-3">{area.title}</h3>
            <h4 className="mb-6">{area.subtitle}</h4>
            <span>{area.description}</span>
          </div>

          <Button href={area.link}>
            Mehr Erfahren
          </Button>
        </div>
      </div>
    </div>
  );
};

export const BusinessAreasGrid = () => {
  return (
    <section className="py-32 container mx-auto flex flex-col gap-16 items-center justify-center text-center">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 drop-shadow-double-gray max-w-[1400px]">
        {businessAreas.map((area) => (
          <BusinessAreaCard key={area.title} area={area} />
        ))}
      </div>
    </section>
  );
}; 