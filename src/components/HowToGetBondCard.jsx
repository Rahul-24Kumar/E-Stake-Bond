'use client';

import { motion } from 'framer-motion';
import { FaSignInAlt, FaMoneyBillWave, FaFileAlt, FaCoins } from 'react-icons/fa';

const cardData = [
    { title: 'Login', icon: <FaSignInAlt size={40} />, description: 'Access your account to start the process.' },
    { title: 'Pay', icon: <FaMoneyBillWave size={40} />, description: 'Make the necessary payment to proceed.' },
    { title: 'Get Bond', icon: <FaFileAlt size={40} />, description: 'Receive the bond confirmation instantly.' },
    { title: 'Earn', icon: <FaCoins size={40} />, description: 'Start earning rewards or interest.' },
];

const HowToGetBondHorizontal = () => {
    // Framer Motion hover effect (lift up and change color to yellow)
    const hoverEffect = {
        hover: {
            scale: 1.05,
            y: -10,
            backgroundColor: '#FACC15', // Tailwind yellow-400 color
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-16">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">How to Get Bond</h2>

            {/* Card container */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg cursor-pointer transform transition-transform"
                        whileHover="hover"
                        variants={hoverEffect}
                    >
                        {/* Icon */}
                        <div className="flex justify-center mb-4">{card.icon}</div>
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white text-center mb-2">{card.title}</h3>
                        {/* Description */}
                        <p className="text-black text-center">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HowToGetBondHorizontal;
