import { WhatsAppIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';
import GlowButton from './GlowButton.jsx';
import Reveal from './Reveal.jsx';

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-plum-ink py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 45% at 50% 40%, #7B23A8 0%, #43106E 45%, #1A0530 80%)' }}
        aria-hidden="true"
      />

      <div className="wrap-narrow relative text-center">
        <Reveal className="relative mx-auto mb-9 flex h-24 items-center justify-center">
          <span className="halo left-1/2 top-1/2 h-32 w-56 -translate-x-1/2 -translate-y-1/2 bg-orchid-glow opacity-70 blur-3xl animate-flicker" aria-hidden="true" />
          <img src="/assets/logo.png" alt="Luminescent" className="relative h-16 w-auto" />
        </Reveal>

        <Reveal as="h2" delay={0.05} className="h-display mb-6 text-[clamp(28px,5vw,46px)] text-cream">
          A luz já é sua.<br />Eu só quero ajudar ela chegar mais longe.
        </Reveal>

        <Reveal as="p" delay={0.1} className="mb-10 text-[15px] text-cream/65">
          Sem compromisso — só uma conversa pra ver o que faz sentido pra você agora.
        </Reveal>

        <Reveal delay={0.15}>
          <GlowButton
            href={whatsLink('Oi Victor! Vi o projeto da Luminescent e quero conversar 🔥')}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whats px-9 py-4 text-[15px]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chamar no WhatsApp
          </GlowButton>
        </Reveal>
      </div>
    </section>
  );
}
