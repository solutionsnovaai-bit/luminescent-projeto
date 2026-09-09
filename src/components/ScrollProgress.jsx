import { motion, useScroll, useSpring } from 'framer-motion';

/** Fio de luz no topo mostrando o progresso do scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 32, mass: 0.2 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[95] h-[2px] origin-left bg-gradient-to-r from-plum via-orchid-glow to-lilac"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
