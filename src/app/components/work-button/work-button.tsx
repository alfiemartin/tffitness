import { motion } from "framer-motion";
import React, { useState } from "react";
import Player from "react-lottie";
import confetti from "../../confetti.json";

const WorkButton = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <motion.button
      onClick={() => setShowConfetti(true)}
      className="bg-red-500 outline-red-500 
      transition-all outline-0 outline-offset-4 hover:!outline-2 focus:!outline-2 
      text-gray-200 font-bold rounded-sm p-4 whitespace-nowrap mt-auto relative"
    >
      Apply to work with me
      <div className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <Player
          width={400}
          isStopped={!showConfetti}
          eventListeners={[
            { eventName: "complete", callback: () => setShowConfetti(false) },
          ]}
          options={{ animationData: confetti, autoplay: false, loop: false }}
        />
      </div>
    </motion.button>
  );
};

export default WorkButton;
