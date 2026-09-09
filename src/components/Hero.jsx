import { useState } from 'react';
import { FlameIcon, ArrowIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';

export default function Hero() {
  const [lit, setLit] = useState(false);

  return (
    <header id="topo" className="relative isolate min-h-[100svh] overflow-hidden bg-plum-ink">
      {/* atmosfera radial de fundo */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[1400ms]"
        style={{
          background: 'radial-gradient(65% 50% at 50% 30%, #7B23A8 0%, #43106E 42%, #1A0530 78%)',
          opacity: lit ? 1 : 0.72,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[1400ms]"
        style={{
          background: 'radial-gradient(38% 30% at 50% 26%, rgba(199,125,255,.5), transparent 72%)',
          opacity: lit ? 0.9 : 0.3,
        }}
        aria-hidden="true"
      />

      <div className="wrap relative flex min-h-[100svh] flex-col items-center justify-center py-28 text-center">
        <span className="label reveal mb-7 inline-flex items-center gap-3 text-cream/60">
          <i className="h-1.5 w-1.5 rounded-full bg-orchid-glow" />
          uma proposta só pra você · luminescent
        </span>

        <button
          type="button"
          onClick={() => setLit((v) => !v)}
          aria-pressed={lit}
          className="reveal group relative mb-9 flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-500 hover:scale-105 active:scale-95"
        >
          <span
            className="halo left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-orchid-glow transition-all duration-700"
            style={{ opacity: lit ? 0.85 : 0.35, filter: `blur(${lit ? 34 : 22}px)` }}
          />
          <FlameIcon
            className={`relative h-9 w-9 text-orchid-glow transition-transform duration-500 ${lit ? 'animate-flicker scale-110' : 'opacity-80'}`}
          />
        </button>

        <h1 className="h-display reveal mb-6 max-w-3xl text-[clamp(32px,5.4vw,58px)] text-cream">
          Naara, é hora da Luminescent<br />
          <em className="not-italic text-orchid-glow">iluminar mais gente.</em>
        </h1>

        <p className="reveal mb-10 max-w-xl text-[15.5px] leading-relaxed text-cream/75">
          Você já fez a parte mais difícil sozinha: criar algo bonito de verdade
          e vender com as próprias mãos. Essa proposta é sobre o próximo passo —
          levar essa luz pra muito mais gente, sem perder o que já é seu.
        </p>

        <div className="reveal flex flex-wrap items-center justify-center gap-3">
          <a href="#planos" className="btn btn-light">Ver a proposta</a>
          <a
            href={whatsLink('Oi Victor! Vi a proposta da Luminescent, bora conversar 🔥')}
            target="_blank"
            rel="noreferrer"
            className="btn border border-cream/35 text-cream hover:bg-cream/10"
          >
            Falar com o Victor
          </a>
        </div>

        <a href="#reconhecimento" className="reveal absolute bottom-8 text-cream/40 transition-colors hover:text-cream/70" aria-label="Rolar para continuar">
          <ArrowIcon className="h-5 w-5 rotate-90" />
        </a>
      </div>
    </header>
  );
}
