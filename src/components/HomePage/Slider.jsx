import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "SURE AND STEADFAST",
    subtitle: "HEBREW 6 : 19B",
    text: "Our Motto Of The BoysBrigate. This Drives Us To Being Strong, Committed, And Consistent For The Lord.",
    buttonText: "Support"
  },
  {
    id: 2,
    title: "LEADERSHIP AND DISCIPLINE",
    subtitle: "BUILDING STRONG YOUNG MEN",
    text: "Instilling values of discipline, leadership, and faith to shape the next generation.",
    buttonText: "Read More"
  },
  {
    id: 3,
    title: "SERVICE AND COMMUNITY",
    subtitle: "GIVING BACK TO SOCIETY",
    text: "Encouraging young men to serve their communities through faith and dedication.",
    buttonText: "Read More"
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full flex flex-col items-center justify-center text-center text-white p-4"
            >
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <h2 className="text-2xl mt-2">{slide.subtitle}</h2>
              <p className="mt-4 text-lg max-w-xl">{slide.text}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">{slide.buttonText}</button>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div className="absolute bottom-4 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all ${current === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
}
