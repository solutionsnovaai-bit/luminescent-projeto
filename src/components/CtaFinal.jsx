import { FlameIcon, WhatsAppIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-plum-ink py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 45% at 50% 40%, #7B23A8 0%, #43106E 45%, #1A0530 80%)' }}
        aria-hidden="true"
      />

      <div className="wrap-narrow relative text-center">
        <div className="reveal relative mx-auto mb-8 flex h-16 w-16 items-center justify-center">
          <span className="halo left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 bg-orchid-glow opacity-70 blur-2xl" aria-hidden="true" />
          <FlameIcon className="relative h-8 w-8 animate-flicker text-orchid-glow" />
        </div>

        <h2 className="h-display reveal mb-6 text-[clamp(28px,5vw,46px)] text-cream">
          A luz já é sua.<br />Eu só quero ajudar ela chegar mais longe.
        </h2>

        <p className="reveal mb-10 text-[15px] text-cream/65">
          Sem compromisso — só uma conversa pra ver o que faz sentido pra você agora.
        </p>

        <a
          href={whatsLink('Oi Victor! Vi a proposta da Luminescent e quero conversar 🔥')}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whats reveal px-9 py-4 text-[15px]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
