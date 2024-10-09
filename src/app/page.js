'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ItemCard from '../components/animations/ItemCard';
// Removed ExpandedView since it's no longer necessary

export default function Home() {
  const items = [
    {
      id: 1,
      title: 'SSB Global',
      subtitle: 'Real Estate\nVenture & Collaboration',
    },
    {
      id: 2,
      title: 'Plugin Global',
      subtitle: 'Investment LLC.',
    },
    {
      id: 3,
      title: 'Threearrow Information Technology',
      subtitle: 'Consultants Co LLC.',
    },
    {
      id: 4,
      title: 'Misakcb LLC.',
      subtitle: 'Infrastructure commercial\nbroker & banking solutions',
    },
  ];

  return (
    <div className="container mx-auto pt-16 grid grid-cols-2 gap-6">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
