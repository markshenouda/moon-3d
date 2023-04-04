import { useTexture, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useScrollStore } from "./useScrollStore";

function Moon() {
  const texture = useTexture("/images/moon.jpg");
  const ref = useRef();
  const data = useScroll();
  const scroll = useScrollStore((state) => state.scroll);

  useFrame(() => {
    useScrollStore.setState({ scroll: data.offset });
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1.5} />

      <motion.group
        animate={{
          rotateY: Math.PI * 2,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        position={[0 + scroll * 10, 0 + scroll * 10, -10 + scroll * 5]}
        scale={[1 + scroll, 1 + scroll, 1 + scroll]}
      >
        <motion.mesh
          ref={ref}
          position={[0, -12, 0]}
          scale={0.2}
          animate={{
            y: -6.5,
            rotateY: -2,
            scale: 1,
          }}
          transition={{
            duration: 3,
          }}
        >
          <sphereBufferGeometry args={[5, 64, 64]} />
          <meshStandardMaterial map={texture} />
        </motion.mesh>
      </motion.group>
    </>
  );
}

export default Moon;
