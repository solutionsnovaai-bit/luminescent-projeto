import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Leve inclinação 3D acompanhando o mouse — sem exagero, com física de mola. */
export default function TiltCard({ className, children, strength = 8, ...rest }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 20, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20, mass: 0.5 });

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * strength);
    rx.set(py * -strength);
  }
  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
