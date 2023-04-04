import "./HTML.css";
import { useScrollStore } from "./useScrollStore";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function HTML() {
  const comp = useRef();
  const h1s = useRef([]);
  const scroll = useScrollStore((state) => state.scroll);
  const [initialDelay, setInitialDelay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialDelay(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="Html" ref={comp}>
      <section className="Html__section__1">
        <div className="title">
          {[...Array(10)].map((_, i) => (
            <motion.h1
              animate={{
                y:
                  scroll < 0.001 && initialDelay
                    ? (i - 5) * 150
                    : (i - 5) * 150 + scroll * 5000,
              }}
              transition={{
                duration: initialDelay ? 2 : 0,
                delay: initialDelay ? 1 : 0,
              }}
              className="inverted"
              ref={(el) => (h1s.current[i] = el)}
              key={i}
            >
              The Moon
            </motion.h1>
          ))}
          <motion.h1
            animate={{
              y: -scroll * 300,
              x: -scroll * 300,
            }}
            transition={{
              duration: 0,
            }}
          >
            The Moon
          </motion.h1>
          <motion.div
            animate={{
              y: 400 - scroll * 700,
              x: -300,
            }}
            transition={{
              duration: 0,
            }}
            style={{
              position: "absolute",
            }}
          >
            <p className="Html__section__2">
              The moon is an astronomical body that orbits planet Earth, being
              Earth's only permanent natural satellite. It is the fifth-largest
              natural satellite in the Solar System, and the largest among
              planetary satellites relative to the size of the planet that it
              orbits (its primary).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HTML;
