'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <motion.section
    id='about'
      className="pt-16"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">About Us</h2>
      <h3 className="text-xl font-semibold mt-4">True Certificate Verification</h3>
      <p className="mt-2">
        Estakebond is a trusted partner for Tech companies looking to expand their reach and sell their stock to the public. 
        We specialize in helping businesses grow by providing essential services in project development and stock distribution.
      </p>
      <p className="mt-2">
        The vision of E-Stake bond is to revolutionize digital bonding by combining traditional bonds with decentralized technologies, creating a transparent and innovative financial ecosystem.
      </p>
      <p className="mt-2">
        The mission is to enhance accessibility, foster community engagement through decentralized governance, drive innovation in electronic bonds, and provide meaningful financial opportunities for participants.
      </p>
    </motion.section>
  );
};

export default AboutUs;
