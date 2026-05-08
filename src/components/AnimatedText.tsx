import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className = "", style = {} }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split("");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`} style={style}>
      {words.map((char, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        return (
          <Char
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {char}
          </Char>
        );
      })}
    </p>
  );
}

interface CharProps {
  children: string;
  range: [number, number];
  progress: any;
  key?: any;
}

function Char({ children, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="opacity-20">{children === " " ? "\u00A0" : children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {children === " " ? "\u00A0" : children}
      </motion.span>
    </span>
  );
}
