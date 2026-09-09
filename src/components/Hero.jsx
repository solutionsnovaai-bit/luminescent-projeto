import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FlameIcon, ArrowIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';
import GlowButton from './GlowButton.jsx';
import SplitWords from './SplitWords.jsx';
import { EASE } from '../lib/motion.js';

export default function Hero() {
  const [lit, setLit] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <header ref={ref} id="topo" className="relative isolate min-h-[100svh] overflow-hidden bg-plum-ink">
      {/* atmosfera radial de fundo, com leve parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[1400ms]"
        style={{
          y: glowY,
          background: 'radial-gradient(65% 50% at 50% 30%, #7B23A8 0%, #43106E 42%, #1A0530 78%)',
          opacity: lit ? 1 : 0.72,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[1400ms]"
        style={{
          y: glowY,
          background: 'radial-gradient(38% 30% at 50% 26%, rgba(199,125,255,.5), transparent 72%)',
          opacity: lit ? 0.9 : 0.3,
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="wrap relative flex min-h-[100svh] flex-col items-center justify-center py-28 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 inline-flex items-center gap-3 text-cream/60 label"
        >
          <i className="h-1.5 w-1.5 rounded-full bg-orchid-glow" />
          um projeto só pra você · luminescent
        </motion.span>

        {/* a marca dela nascendo do brilho */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.25 }}
          style={{ y: logoY }}
          className="relative mb-10 flex flex-col items-center"
        >
          <span
            className="halo left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 bg-orchid-glow animate-glowPulse"
            style={{ opacity: 0.55 }}
            aria-hidden="true"
          />
          <img
            src="/assets/logo.png"
            alt="Luminescent by Naara Carreira"
            className="relative w-[min(340px,72vw)]"
          />
        </motion.div>

        <button
          type="button"
          onClick={() => setLit((v) => !v)}
          aria-pressed={lit}
          data-cursor="hover"
          className="group relative mb-9 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 hover:scale-110 active:scale-95"
        >
          <span
            className="halo left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 bg-orchid-glow transition-all duration-700"
            style={{ opacity: lit ? 0.85 : 0.3, filter: `blur(${lit ? 26 : 16}px)` }}
          />
          <FlameIcon
            className={`relative h-5 w-5 text-orchid-glow transition-transform duration-500 ${lit ? 'animate-flicker scale-110' : 'opacity-70'}`}
          />
        </button>

        <h1 className="h-display mb-6 max-w-3xl text-[clamp(32px,5.4vw,58px)] text-cream">
          <SplitWords text="Naara, é hora da Luminescent" delay={0.55} />
          <br />
          <SplitWords
            text="iluminar mais gente."
            delay={1.05}
            className="text-orchid-glow"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.5 }}
          className="mb-10 max-w-xl text-[15.5px] leading-relaxed text-cream/75"
        >
          Você já fez a parte mais difícil sozinha: criar algo bonito de verdade
          e vender com as próprias mãos. Esse projeto é sobre o próximo passo —
          levar essa luz pra muito mais gente, sem perder o que já é seu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.7 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <GlowButton href="#planos" className="btn btn-light">Ver o projeto</GlowButton>
          <GlowButton
            href={whatsLink('Oi Victor! Vi o projeto da Luminescent, bora conversar 🔥')}
            target="_blank"
            rel="noreferrer"
            className="btn border border-cream/35 text-cream hover:bg-cream/10"
          >
            Falar com o Victor
          </GlowButton>
        </motion.div>

        <motion.a
          href="#reconhecimento"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="absolute bottom-8 text-cream/40 transition-colors hover:text-cream/70"
          aria-label="Rolar para continuar"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="block"
          >
            <ArrowIcon className="h-5 w-5 rotate-90" />
          </motion.span>
        </motion.a>
      </motion.div>
    </header>
  );
}
