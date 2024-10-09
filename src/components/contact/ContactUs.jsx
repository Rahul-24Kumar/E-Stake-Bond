'use client';

import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactUs = () => {
  return (
    <motion.section
      id="contact"
      className="pt-16"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">For inquiries, please reach out to us via the following:</p>
      <ul className="mt-4 list-disc pl-5">
        <li>Email: support@estakebond.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Address: 123 Bond Street, Finance City, USA</li>
      </ul>
    </motion.section>
  );
};

export default ContactUs;
