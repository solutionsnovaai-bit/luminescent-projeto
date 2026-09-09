import { motion } from 'framer-motion';
import { EASE } from '../lib/motion.js';

/** Quebra o texto em palavras e revela cada uma em cascata. */
export default function SplitWords({ text, delay = 0, stagger = 0.05, className = '' }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * stagger }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
