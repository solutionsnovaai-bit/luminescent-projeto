import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Cursor autoral — só em desktop com mouse fino, respeita reduced-motion. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 42, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 42, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target.closest?.('a, button, [data-cursor="hover"]');
      setActive(!!el);
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[300]"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      aria-hidden="true"
    >
      <motion.div
        className="rounded-full bg-orchid-glow"
        animate={{
          width: active ? 44 : 9,
          height: active ? 44 : 9,
          opacity: active ? 0.35 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        style={{ filter: 'blur(0.5px)' }}
      />
    </motion.div>
  );
}
