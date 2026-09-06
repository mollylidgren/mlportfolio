import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxImage({
  src,
  reduced,
  disableParallax = false,
}: {
  src: string;
  reduced: boolean;
  disableParallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const shouldParallax = !reduced && !disableParallax;

  return (
    <div ref={ref} className="case-visual">
      <motion.img style={shouldParallax ? { y } : {}} src={src} alt="" />

      <div className="visual-shadow" />
    </div>
  );
}
