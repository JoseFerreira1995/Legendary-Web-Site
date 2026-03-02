import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Anchors from "../components/Anchors";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ShowcaseSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section className="relative w-full min-h-screen mt-20 md:mt-40">
      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-end mb-40 px-6 md:px-20 z-10 text-center md:text-end"
      >
        <h2 className="text-xl md:text-2xl font-bold uppercase">
          What’s in it for you?
        </h2>
        <div className="flex flex-col items-center md:items-end gap-3 mt-6">
          <div className="flex items-center gap-3 md:gap-5">
            <p className="text-sm md:text-lg">A chance to win up to 10,000€</p>
            <img className="w-5 md:w-10" src="/assets/flower.png"></img>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <p className="text-sm md:text-lg">
              Access to the Colep Innovation Lab and ecosystem
            </p>
            <img className="w-5 md:w-10" src="/assets/flower.png"></img>
          </div>
          <div className="flex items-center gap-3 md:gap-5 max-w-md">
            <p className="text-sm md:text-lg">
              Visibility, networking, and mentoring from world renowned beauty
              industry experts
            </p>
            <img className="w-5 md:w-10" src="/assets/flower.png"></img>
          </div>
          <div className="mt-6">
            <Anchors description="Learn more about prizes and benefits" />
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center py-20"
        style={{ clipPath }}
      >
        <div className="relative z-20 flex flex-col px-6 md:ml-40 w-full md:w-150 self-start mb-20">
          <h2 className="text-xl md:text-2xl font-bold uppercase">
            We are looking for
          </h2>
          <p className="text-4xl md:text-6xl font-medium tracking-tighter leading-none">
            Bold, Sustainable and Visionary ideas.
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center md:justify-end z-0 pointer-events-none">
          <img
            src="/assets/Adobe Express_Main - file.png"
            className="w-[120%] md:w-full  h-auto object-contain opacity-30 md:opacity-100 md:-rotate-x-60 md:rotate-y-12 md:-rotate-z-20 translate-x-[10%]"
          />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 w-full max-w-7xl">
            <Card title="Product Innovation" />
            <Card imageSrc="/assets/01.png" title="Packaging Innovation" />
            <Card imageSrc="/assets/03.png" title="Sustainability Innovation" />
            <Card
              imageSrc="/assets/Gemini_Generated_Image_jvlj1ljvlj1ljvlj.png"
              title="Digital Innovation"
            />
            <Card imageSrc="/assets/02.png" title="Social Impact" />
          </div>

          <div className="z-50 pb-10">
            <Button title="submit your project" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
