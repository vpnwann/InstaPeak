"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { PointerHighlightDemo } from "./PointerDemo";
import { TextGenerateEffectDemo } from "./TextEffectDemo";
import { DE } from "./TextDemo1";



export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[300vh]   overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
           
                 {
        /*
              <div class="marquee-container">
       <div class="marquee">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <span>🐦 Twitter</span>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <span>📸 Instagram</span>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <span>💼 LinkedIn</span>
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <span>▶️ YouTube</span>
  </a>


  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <span>🐦 Twitter</span>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <span>📸 Instagram</span>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <span>💼 LinkedIn</span>
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <span>▶️ YouTube</span>
  </a>
</div>

        </div>

            */
      }
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 ">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <PointerHighlightDemo />
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
     <a href="#" className="block group-hover/product:shadow-2xl">
  <img
    src={product.thumbnail}
    height="600"
    width="600"
    className="object-cover object-left-top absolute h-full w-full inset-0 blur-md"
    alt={product.title}
  />
</a>
<DE />

      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      
      </h2>
      
    </motion.div>
  );
};
