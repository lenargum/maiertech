import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { GlowingEffect } from './ui/glowing-effect';

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
    imageSrc: "https://placehold.co/600x600/0ea5e9/ffffff?text=Innovationen",
    link: "/innovationen"
  },
  {
    title: "Solutions",
    subtitle: "Intelligente Energiesysteme",
    description: "Von Photovoltaik-Anlagen bis zu Smart Grids — wir gestalten, optimieren und realisieren schlüsselfertige Systeme für Unternehmen, Städte & Industrie.",
    imageSrc: "https://placehold.co/600x600/0ea5e9/ffffff?text=Solutions",
    link: "/solutions"
  },
  {
    title: "Energy",
    subtitle: "Projekte & Vermarktung",
    description: "Energieprojekte erfordern Strategie. Wir entwickeln, finanzieren und optimieren nachhaltige Anlagen — von der Planung bis zur Netzanbindung.",
    imageSrc: "https://placehold.co/600x600/0ea5e9/ffffff?text=Energy",
    link: "/energy"
  }
];

const BusinessAreaCard = ({ area }: { area: BusinessAreaProps }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={area.imageSrc} 
          alt={area.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 to-transparent flex items-end p-6">
          <h3 className="text-white text-2xl font-bold">{area.title}</h3>
        </div>
      </div>
      <div className="p-6 relative">
        <h4 className="text-gray-900 dark:text-white text-lg font-medium mb-3">{area.subtitle}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{area.description}</p>
        <div className="flex justify-center">
          <Link 
            to={area.link}
            className="group relative inline-flex items-center justify-center px-8 py-2 font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden"
          >
            <span className="relative">Mehr Erfahren</span>
            <div className="absolute inset-0">
              <GlowingEffect disabled={false} spread={30} blur={10} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const BusinessAreasGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-500 mb-3">Unsere Geschäftsbereiche</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovation, intelligente Lösungen & nachhaltige Energieprojekte —
            Maiertech vereint technologische Exzellenz mit praxisnaher Umsetzung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <BusinessAreaCard area={area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 