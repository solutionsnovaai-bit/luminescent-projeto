import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

/**
 * Botão com brilho que segue o cursor + puxão magnético com física de mola.
 * Envolve qualquer classe .btn-* existente — só troca a tag.
 */
export default function GlowButton({ href, target, rel, onClick, className = '', children }) {
  const ref = useRef(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glowX = useSpring(mx, { stiffness: 160, damping: 20 });
  const glowY = useSpring(my, { stiffness: 160, damping: 20 });
  const background = useMotionTemplate`radial-gradient(90px circle at ${glowX}% ${glowY}%, rgba(255,255,255,.45), transparent 70%)`;

  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const springX = useSpring(tx, { stiffness: 220, damping: 16, mass: 0.4 });
  const springY = useSpring(ty, { stiffness: 220, damping: 16, mass: 0.4 });

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    mx.set(px);
    my.set(py);
    tx.set((px - 50) * 0.18);
    ty.set((py - 50) * 0.24);
  }
  function handleLeave() {
    tx.set(0);
    ty.set(0);
  }

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      style={{ x: springX, y: springY }}
      className={`group relative isolate overflow-hidden ${className}`}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </Comp>
  );
}
