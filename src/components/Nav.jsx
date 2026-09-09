import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';
import GlowButton from './GlowButton.jsx';

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const on = () => setStuck(window.scrollY > 80);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-soft ${
        stuck ? 'py-3' : 'py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <motion.a
          href="#topo"
          animate={{ scale: stuck ? 1 : 0.001, opacity: stuck ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 0.68, 0.16, 1] }}
          className="flex origin-left items-center rounded-full bg-plum-ink/85 px-4 py-2 backdrop-blur-md"
          aria-label="Início"
        >
          <img src="/assets/logo.png" alt="Luminescent" className="h-7 w-auto" />
        </motion.a>

        <GlowButton
          href={whatsLink('Oi Victor! Vi o projeto da Luminescent, bora conversar 🔥')}
          target="_blank"
          rel="noreferrer"
          className={`btn text-[13px] ${
            stuck ? 'btn-whats' : 'border border-cream/35 text-cream hover:bg-cream/10'
          }`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </GlowButton>
      </div>
    </nav>
  );
}
