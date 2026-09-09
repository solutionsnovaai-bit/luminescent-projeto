import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion.js';

/** Fade + leve subida ao entrar na viewport, uma vez só. */
export default function Reveal({ as = 'div', className, delay = 0, children, ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp(delay)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
