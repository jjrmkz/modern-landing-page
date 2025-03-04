import React from "react";
import monitorCardImage from "../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24"
      >
        {/* left */}
        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-bold text-lg">MONITOR</p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5">
            Introducing best mobile carousels
          </h1>

          <p className="text-gray-600 mb-8">
            Before the ship is really back, Round, round the ship, and round the
            world. Let's take a look at the best mobile carousels for your next
            project and how to implement them in your design.
          </p>

          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
            <IoIosArrowRoundForward className="size-8" />
          </a>
        </div>

        {/* right */}
        <div className="md:w-1/2 w-full">
          <img
            src={monitorCardImage}
            alt="Schedule Image"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MonitorSection;
