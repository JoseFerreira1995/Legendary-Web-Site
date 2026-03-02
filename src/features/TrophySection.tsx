import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Anchors from "../components/Anchors";
import Button from "../components/Button";

/**
 * TrophySection component represents a visually engaging section of a webpage
 * that highlights an event or milestone, such as the "Beautyvibe Innovation Awards 2026".
 * 
 * This component includes:
 * - A header with a deadline date and related links.
 * - Animated visuals, including a glowing effect and a trophy image that moves
 *   based on the scroll position.
 * - A call-to-action section encouraging users to participate in the event.
 * 
 * The animations are powered by Framer Motion, utilizing `useScroll` and `useTransform`
 * hooks to create dynamic effects based on the user's scroll progress.
 * 
 */



export default function ThrophySection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yTrophy = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center p-6 md:m-8 gap-10">
        <motion.div
          initial={{ filter: "blur(12px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center w-full md:w-[40%] lg:w-200 md:ml-10 z-20"
        >
          <h2 className="text-xl md:text-2xl font-bold">Final Deadline</h2>
          <h1 className="text-4xl md:text-6xl lg:text-8xl">07 April 2026</h1>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4">
            <Anchors description="Jury Panel 2026 Edition"></Anchors>
            <Anchors description="Project Submission Rules"></Anchors>
          </div>
        </motion.div>

        <div className="relative w-full h-[50vh] md:h-screen">
          <motion.div
            style={{ y: yGlow }}
            className="absolute inset-0 pointer-events-none md:mr-50 mt-10 md:mt-20 z-10"
          >
            <img
              src="/assets/Adobe Express_Main - file.png"
              className="absolute w-full h-full md:h-400 md:scale-150 opacity-90 rotate-x-40 rotate-y-10 transform object-contain"
              alt=""
            />
          </motion.div>

          <motion.div
            style={{ y: yTrophy }}
            className="absolute inset-0 flex items-center justify-center md:justify-end z-0"
          >
            <img
              src="/assets/Adobe Express - file.png"
              className="w-[150vw] md:w-[70vw] max-w-none translate-x-[10%] md:translate-x-[20%] translate-y-[5%] rotate-[-20deg] scale-[1.5] md:scale-[2.8] transform"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-100 px-6 md:m-5 md:ml-20 z-10"
      >
        <h3 className="text-3xl md:text-4xl">
          It’s in the balance between science and creativity where true beauty
          really innovates.
        </h3>
      </motion.div>

      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-20 md:mt-50 w-full max-w-[90%] md:w-180 flex flex-col items-center text-center px-6 pb-20"
      >
        <h2 className="text-2xl font-extrabold">Call for Innovators</h2>
        <p className="text-lg md:text-3xl text-center mt-4">
          Are you ready to transform the future of beauty?{" "}
          <strong className="block md:inline">Colep Consumer Products</strong>{" "}
          is proud to launch the{" "}
          <strong>Beautyvibe Innovation Awards 2026</strong> the first
          innovation award in Portugal dedicated to the cosmetics industry.
        </p>
        <div className="mt-8">
          <Button title="enter now"></Button>
        </div>
      </motion.div>
    </section>
  );
}
