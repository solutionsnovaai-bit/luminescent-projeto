import { motion } from 'framer-motion';
import { staggerContainer } from '../lib/motion.js';

/** Container que revela os filhos em cascata conforme entra na viewport. */
export default function RevealGroup({ as = 'div', className, stagger = 0.12, delay = 0, children, ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer(stagger, delay)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
