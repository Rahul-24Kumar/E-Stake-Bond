'use client';

import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="pt-16"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">Upcoming Projects</h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Smart City & Affordable Housing Solutions</h3>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Water Management & Conservation System</h3>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">WeMarket Drop Shipping Franchise Model</h3>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">We check App Anti-Counterfeit</h3>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Solopreneur on WeMarket</h3>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
