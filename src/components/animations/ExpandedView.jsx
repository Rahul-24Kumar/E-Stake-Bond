import { motion } from 'framer-motion';

const ExpandedView = ({ item, onClose }) => (
  <motion.div
    layoutId={item.id.toString()}
    className="fixed inset-0 bg-white p-10 m-auto w-2/3 max-w-lg h-auto rounded-lg flex flex-col items-center justify-center shadow-xl z-50"
  >
    <motion.h5 className="whitespace-pre-line text-gray-500">{item.subtitle}</motion.h5>
    <motion.h2 className="text-2xl font-bold">{item.title}</motion.h2>
    <motion.button
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      onClick={onClose}
    >
      Close
    </motion.button>
  </motion.div>
);

export default ExpandedView;
