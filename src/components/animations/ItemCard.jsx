import { motion } from 'framer-motion';

const ItemCard = ({ item }) => (
  <motion.div
    layoutId={item.id.toString()}
    className="bg-gray-200 p-4 m-2 rounded-lg shadow-lg hover:shadow-xl"
    whileHover={{ y: -10, scale: 1.05 }}  // Lift effect on hover
    transition={{ duration: 0.3 }}
  >
    <motion.h5 className="whitespace-pre-line text-gray-500">{item.subtitle}</motion.h5>
    <motion.h2 className="font-semibold text-lg">{item.title}</motion.h2>
  </motion.div>
);

export default ItemCard;
