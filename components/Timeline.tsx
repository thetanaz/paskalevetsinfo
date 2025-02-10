"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: number | string;
  title: string;
  description: string;
  imageUrl: string;
}

const events: TimelineEvent[] = [
  {
    year: 1854,
    title: "Построяване на църквата",
    description:
      "Църквата в с. Паскалавец е построена за първи път през 1854 г. по молба на жителите на селото. За да им се разреши да си построят църква е издаден царски ферман от Султан Меджит Хан през 1854 г., който ферман се намира в оригинал в светата Великотърновска митрополия. тя е била осветена през 1864 г. от гръцки владика. Но не е била много здрава и бързо се е съборила. тогава се налага да се построи друга църква. през 1893 г. тя е направена защото тогава с. Паскалевец е било околийски център. първите представители, които са изградили църквата са били: Велико Банчев, Ненко Митков и Петър Пасков. След като е била изградена и обзаведена тя е осветена на 8 ноември 1894 г. от негово Високо Преосвещенство Св. Великотърновски Митрополит Господин Господин Климент, който е спомогнал за бързото изкарване на църквата. Енорирята е била самостоятелна, но не е имала за по-дълго време енорирйски свещеник, а се е завеждала от временни свещеници. До 1945 г. енорията е е била Великотърновска околия и Великотърновска епархия. След 1945 г. енорията минава към Павликенска духовна околия, Великотърновска епархия.",
    imageUrl:
      "https://res.cloudinary.com/dwshro2zn/image/upload/v1738934655/curkva_l7m923.webp",
  },
  {
    year: 1898,
    title: `Построяване и основаване на читалище "Орач" `,
    description: `Идеята за основаване на читалището е дадена от учител на име Трифон Христов, след като през 1897 има няколко успешни пиеси изнесени в Паскалевец - "Илю Войвода" и "Многострадална Геновева" и населението придобива желание всяка година да има представления и постановки. За целта трябва да се създаде сграда, която да служи като институт за културни и образователни мероприятия. Читалището започва да функционира на 1 Февруари 1898г. със специално изработен устав, който гласи, че членовете трябва да плащат членски внос от 2лв. на месец. Първоначално се е използва почти изцяло за драматични постановки, с тематика "политически борби за освобождение", като повечето женски роли са играни от преоблечени мъже. В последствие дейността се разширява, като се открива читалня с 3-4 списания и 1-2 вестника и се разиграва лотария. През 1912 година се открива и вечерно училище, което помага на жителите да придобият практически умения за селския живот. `,
    imageUrl:
      "https://res.cloudinary.com/dwshro2zn/image/upload/v1739186737/1898_chitalishte_gg5pnh.webp",
  },
  {
    year: "1944 - 1950",
    title: "Индустриално и образователно развитие",
    description:
      "По време на втората световна война, село Паскалевец се присъединява временно към Дъскотската съставна община с цел консолидация на ресурси. Прекъсва всякакъв вид развитие в селото до края на войната. През 1944 година селото се отделя отново в своя община и започват планове и активини каузи за развитие. Първоначално възниква спор от къде да започне преобразяването на селото - дали от електрификация, от училище или може би от фурна. В крайна сметка се стига до заключението, че електричеството е първи приоритет. Докарват се от Родопите стълбове, чакъл, пясък и започва изграждането на трансформатор и електрическа мрежа в селото. След завършването на токовата мрежа, се започва изграждане на модерна двуетажна фурна, а в последствие и на училище със салон. ",
    imageUrl:
      "https://res.cloudinary.com/dwshro2zn/image/upload/v1739187672/furna_f5eugo.webp",
  },
  {
    year: 1981,
    title: "Изграждане на паметник",
    description:
      "През 1981 година се създава паметник, почитащ загиналите от Балканската, Първата и Втората световни войни. Паметникът до ден днешен съществува в читалищния двор на селото.",
    imageUrl:
      "https://res.cloudinary.com/dwshro2zn/image/upload/v1739188402/pametnik_vqn4zr.webp",
  },
  {
    year: "Настояще",
    title: "Какво се случва в селото сега",
    description:
      "В момента селото е с ограничен брой жители, но все още има пенсионерски клуб, както и активен танцувален и певчески състав, често участващи в представления в региона.",
    imageUrl:
      "https://res.cloudinary.com/dwshro2zn/image/upload/v1739189148/IMG_0954_qlhwo8.jpg",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
        if (window.scrollY > 150) setIsScrolled(true);
        else setIsScrolled(false);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative  text-white">
      <div
        className={cn(
          "fixed lg:left-1/2  h-full w-px bg-white/20",
          isScrolled ? "lg:top-[10px]" : "lg:top-[200px]"
        )}
      />

      {events.map((event, index) => (
        <section
          key={event.year}
          className="relative min-h-[50vh] mb-10 mx-2 md:mx-0 md:mb-0 flex items-center "
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
                <div className="relative  overflow-hidden rounded-lg">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
            <div className="border-b border-b-white/30 w-full md:hidden mt-10" />
          </div>

          <div
            className={`absolute hidden lg:block left-1/2 top-1/2 w-4 h-4 -ml-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        </section>
      ))}
      <ScrollToTop />
    </div>
  );
}
