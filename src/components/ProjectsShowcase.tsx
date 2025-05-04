import { motion } from "motion/react";

interface ProjectData {
  title: string;
  location: string;
  year: string;
  src: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    title: "Germany",
    location: "Farmer",
    year: "2008",
    src: "https://placehold.co/600x400/0ea5e9/ffffff?text=Germany+2008",
    link: "/projects/germany"
  },
  {
    title: "Romania",
    location: "Farmer",
    year: "2014",
    src: "https://placehold.co/600x400/0ea5e9/ffffff?text=Romania+2014",
    link: "/projects/romania"
  },
  {
    title: "Vietnam",
    location: "Farmer",
    year: "2019",
    src: "https://placehold.co/600x400/0ea5e9/ffffff?text=Vietnam+2019",
    link: "/projects/vietnam"
  },
  {
    title: "South Africa",
    location: "Farmer",
    year: "2023",
    src: "https://placehold.co/600x400/0ea5e9/ffffff?text=South+Africa+2023",
    link: "/projects/south-africa"
  }
];

// Custom project card component for the showcase
const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <div className="aspect-[4/3]">
        <img 
          src={project.src} 
          alt={`${project.title} Project`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold">{project.title}</h3>
        <div className="flex items-center text-white/80 text-sm mt-2">
          <span className="mr-2">{project.location},</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export const ProjectsShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-500 mb-3">
            Unsere realisierten Projekte
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MaierTech setzt auf nachhaltige Energielösungen für Unternehmen & Regionen weltweit.
            Unsere Photovoltaik- & Energiespeicherprojekte stehen für höchste Effizienz,
            Wirtschaftlichkeit und Zuverlässigkeit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 