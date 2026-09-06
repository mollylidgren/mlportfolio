import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export function CursorGlow({ reduced }: { reduced: boolean }) {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const smoothX = useSpring(x, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 24 });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-glow"
      style={{ x: useTransform(smoothX, (v) => v - 180), y: useTransform(smoothY, (v) => v - 180) }}
      onPointerMove={(event) => {
        x.set(event.clientX);
        y.set(event.clientY);
      }}
    />
  );
}
