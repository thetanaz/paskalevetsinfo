"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Minimize2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface EmblaProps {
  images: string[];
}

export const Embla: React.FC<EmblaProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const minimize = () => setIsExpanded(false);

  const handleScroll = (direction: "prev" | "next") => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay as { stop: () => void };
      autoplay.stop();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      direction === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    }
  };

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden ${
        isExpanded
          ? "fixed inset-0 z-50 flex md:items-center  justify-center p-4 bg-black/50"
          : "relative w-[350px] sm:w-[400px] h-[250px]"
      }`}
      layout
      initial={false}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      onClick={(e) => isExpanded && e.target === e.currentTarget && minimize()}
    >
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={minimize}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2"
            >
              <Minimize2 className="text-black" size={24} />
            </motion.button>
            <motion.button
              onClick={() => handleScroll("prev")}
              className="absolute left-4 top-1/2 hover:bg-white -translate-y-1/2 z-50 bg-white/80 rounded-full p-2"
            >
              <ChevronLeft size={24} className="bg-transparent text-black" />
            </motion.button>
            <motion.button
              onClick={() => handleScroll("next")}
              className="absolute hover:bg-white right-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 rounded-full p-2"
            >
              <ChevronRight size={24} className="bg-transparent text-black" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
      <div
        ref={emblaRef}
        className={
          isExpanded
            ? "w-full max-w-[90vw] max-h-[90vh] aspect-[4/3]"
            : "w-full h-full overflow-hidden"
        }
      >
        <div className="flex h-full">
          {images.map((img, idx) => (
            <div key={idx} className={`flex-[0_0_100%] relative w-full h-full`}>
              <Image
                priority={idx === 0}
                fill
                alt={`image-${idx}`}
                src={img}
                onClick={toggleExpand}
                className={`object-contain ${
                  isExpanded ? "max-w-full max-h-full" : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Embla;
