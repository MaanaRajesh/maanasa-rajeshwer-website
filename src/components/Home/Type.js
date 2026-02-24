import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Building embodied AI systems",
          "Building perception-to-control pipelines",
          "Building robot learning & imitation systems",
          "Building human-centered interactive robotics",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
