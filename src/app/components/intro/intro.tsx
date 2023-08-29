"use client";
import tfImage from "../../tf.jpg";
import tfLogo from "../../tflogo.svg";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import WorkButton from "../work-button/work-button";

const Intro = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0">
        {/* set height as innerHEught */}
        <div className="youtube-container filter contrast-200 brightness-50"> 
          <iframe
            // eslint-disable-next-line max-len
            src="https://www.youtube.com/embed/GsPvopOOyBs?si=HVAk1mwSCtXu0yIY&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&index=1&playsinline=1&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="560"
            height="315"
          ></iframe>
        </div>
      </div>
      <div className="flex items-center p-16 snap-center absolute inset-0">
        <div className="flex flex-col h-full">
          <div className="flex-1 grid place-items-center">
            <div>
              <motion.h1
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[10rem]"
              >
                <Image src={tfLogo} alt="logo" />
              </motion.h1>
              <motion.h1
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-red-500 font-extrabold"
              >
                PERSONAL FITNESS
              </motion.h1>
              <motion.p
                initial={{ translateY: 10, opacity: -1 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-center text-2xl text-slate-200 font-bold"
              >
                TRANSFORM YOUR BODY TODAY.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="max-w-min"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <WorkButton />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto shadow-2xl shadow-black"
        >
          <Image alt="Tom Frith" src={tfImage} loading="eager" height={600} />
        </motion.div>
        <motion.div
          className="absolute inset-0 background-black-animation"
          animate={{ left: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute inset-0 w-screen h-screen bg-red-500 p-2 shadow-lg"
          animate={{ left: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            initial={{ translateY: 8 }}
            animate={{ translateY: 0 }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
              delay: 4,
            }}
            className="absolute left-1/2 -translate-x-1/2 pb-4 bottom-0"
          >
            <FaChevronDown className="text-gray-100" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
