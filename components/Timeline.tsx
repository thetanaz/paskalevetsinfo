"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  imageUrl: string;
}

const events: TimelineEvent[] = [
  {
    year: 1935,
    title: "The Beginning",
    description:
      "What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.What was once farmland began its transformation into a botanical paradise.",
    imageUrl: "https://placehold.co/600x800",
  },
  {
    year: 1950,
    title: "Garden Development",
    description:
      "The first native plant collections were established, setting the foundation for future growth.",
    imageUrl: "https://placehold.co/600x800",
  },
  {
    year: 1975,
    title: "Research Initiatives",
    description:
      "Scientific research programs were launched to study native plant species.",
    imageUrl: "https://placehold.co/600x800",
  },
  {
    year: 2000,
    title: "Modern Era",
    description:
      "The center expanded its educational programs and public access.",
    imageUrl: "https://placehold.co/600x800",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sections = containerRef.current.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen text-white">
      <div className="fixed lg:left-1/2 lg:top-[200px] h-full w-px bg-white/20" />

      {events.map((event, index) => (
        <section
          key={event.year}
          className="relative min-h-[50vh] flex items-center "
        >
          <div className="container mx-auto md:p-4 px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:border-b-2 lg:pb-2 lg:border-b-white/20"
              >
                <div className="text-6xl font-bold">{event.year}</div>
                <h2 className="text-3xl font-semibold">{event.title}</h2>
                <p className="text-lg text-gray-300">{event.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={`absolute hidden lg:block left-1/2 top-1/2 w-4 h-4 -ml-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        </section>
      ))}
    </div>
  );
}
