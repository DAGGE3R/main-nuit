"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ComparisonItem } from '@/types';

interface ComparisonViewerProps {
  comparisons: ComparisonItem[];
}

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({ comparisons }) => {
  const [selectedItem, setSelectedItem] = useState<ComparisonItem | null>(null);
  const [isZoomedToOcean, setIsZoomedToOcean] = useState(false);

  const positions = [
    { left: 25, top: 25 },  // Top-left
    { left: 75, top: 25 },  // Top-right
    { left: 25, top: 75 },  // Bottom-left
    { left: 75, top: 75 },  // Bottom-right
  ];

  const handleClick = (item: ComparisonItem) => {
    setSelectedItem(item);
  };

  const handleZoomToggle = () => {
    setIsZoomedToOcean(!isZoomedToOcean);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Main view with all body parts */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="relative">
          {/* Human body diagram */}
          <img
            src="/images/human-body.jpg"
            alt="Human Body"
            className="w-full"
          />
          {comparisons.map((item, index) => (
            <button
              key={item.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
              style={{
                // You'll need to position these buttons according to your body image
                left: `${positions[index].left}%`,
                top: `${positions[index].top}%`,
              }}
              onClick={() => handleClick(item)}
            >
              <div className="w-4 h-4 bg-blue-500 ml-2 rounded-full" />
            </button>
          ))}
        </div>

        <div className="relative">
          {/* Ocean diagram */}
          <img
            src="/images/ocean.jpg"
            alt="Ocean"
            className="w-full"
          />
          {comparisons.map((item, index) => (
            <button
              key={item.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
              style={{
                // You'll need to position these buttons according to your ocean image
                left: `${positions[index].left}%`,
                top: `${positions[index].top}%`,
              }}
              onClick={() => handleClick(item)}
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
            </button>
          ))}
        </div>
      </div>

      {/* Zoom view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedItem(null)}
          >
            <div className="bg-white p-4 rounded-lg max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className={`relative ${isZoomedToOcean ? 'order-2' : 'order-1'}`}
                  animate={{ scale: isZoomedToOcean ? 0.8 : 1 }}
                >
                  <img
                    src={selectedItem.bodyPartImage}
                    alt={selectedItem.bodyPart}
                    className="w-full rounded-lg cursor-pointer"
                    onClick={handleZoomToggle}
                  />
                  <h3 className="text-lg font-bold mt-2">{selectedItem.bodyPart}</h3>
                </motion.div>

                <motion.div
                  className={`relative ${isZoomedToOcean ? 'order-1' : 'order-2'}`}
                  animate={{ scale: isZoomedToOcean ? 1 : 0.8 }}
                >
                  <img
                    src={selectedItem.oceanPartImage}
                    alt={selectedItem.oceanPart}
                    className="w-full rounded-lg cursor-pointer"
                    onClick={handleZoomToggle}
                  />
                  <h3 className="text-lg font-bold mt-2">{selectedItem.oceanPart}</h3>
                </motion.div>
              </div>
              <p className="mt-4">{selectedItem.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
