"use client";
import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-screen text-gray-200 
    background-black-animation flex place-items-center snap-start"
    >
      <section className="h-full p-16">
        <h1 className="text-6xl">
          Your PERSONALISED Shortcut To A Happier, Healthy Lifestyle On Your
          Terms.
        </h1>
        <p className="text-4xl">350+ Transformations!</p>
        <p className="text-4xl">
          If you have ever struggled with commitment or ever quit because you
          were frustrated with your results or flat out confused about what to
          do, this is exactly what you’ve been looking for…
        </p>
      </section>
      <p>
        You will see massive results by strategically adjusting what you're
        eating, how you're exercising, and structuring that into a day-to-day
        plan.
      </p>
      <p>
        However, researching exactly what you should be eating, how to train
        your specific body, and testing all the variables can take years to
        figure out by yourself...
      </p>
    </div>
  );
};

export default Hero;
