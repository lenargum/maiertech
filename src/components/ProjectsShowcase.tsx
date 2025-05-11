import { motion } from "motion/react";

import GermanyCover from "@/assets/projects/germany.png";
import RomaniaCover from "@/assets/projects/romania.png";
import VietnamCover from "@/assets/projects/vietnam.png";
import SouthAfricaCover from "@/assets/projects/south-africa.png";
import { Carousel } from "./ui/carousel";


interface ProjectData {
  title: string;
  button: string;
  src: string;
}

const projects: ProjectData[] = [
  {
    title: "Germany",
    button: "Farmer, 2008",
    src: GermanyCover
  },
  {
    title: "Romania",
    button: "Farmer, 2014",
    src: RomaniaCover
  },
  {
    title: "Vietnam",
    button: "Farmer, 2019",
    src: VietnamCover
  },
  {
    title: "South Africa",
    button: "Farmer, 2023",
    src: SouthAfricaCover
  }
];

export const ProjectsShowcase = () => {
  return (
    <section className="container mx-auto flex flex-col items-center py-30 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-15 max-w-[43.5rem]"
      >
        <h2 className="text-gradient-2 mb-10">Unsere realisierten Projekte</h2>
        <span>
          MaierTech setzt auf nachhaltige Energielösungen für Unternehmen & Regionen weltweit.
          <br />
          Unsere Photovoltaik- & Energiespeicherprojekte stehen für höchste Effizienz,
          <br />
          Wirtschaftlichkeit und Zuverlässigkeit.
        </span>
      </motion.div>

      <Carousel slides={projects} />
    </section>
  );
};




