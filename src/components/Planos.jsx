import { motion } from 'framer-motion';
import { CheckIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';
import GlowButton from './GlowButton.jsx';
import TiltCard from './TiltCard.jsx';
import Reveal from './Reveal.jsx';
import RevealGroup from './RevealGroup.jsx';
import { fadeUp } from '../lib/motion.js';

const planos = [
  {
    nome: 'Faísca',
    preco: '300',
    tagline: 'pra quem quer testar sem compromisso',
    itens: [
      '1 criativo profissional (imagem ou vídeo curto)',
      'Campanha de anúncio configurada e otimizada no Instagram/Facebook',
      'Acompanhamento ativo durante as 2 semanas',
      'Relatório simples: quantas pessoas viram, quantas chamaram',
    ],
    glow: 0.35,
    destaque: false,
  },
  {
    nome: 'Chama',
    preco: '500',
    tagline: 'pra quem já vende e quer ganhar tempo',
    itens: [
      'Tudo do Faísca',
      '8 artes prontas por mês (feed + stories)',
      'Legendas escritas no seu tom de voz',
      'Calendário simples de postagem — só aprovar e publicar',
    ],
    glow: 0.6,
    destaque: false,
  },
  {
    nome: 'Brilho',
    preco: '800',
    tagline: 'pra quem quer vender até dormindo',
    itens: [
      'Tudo do Chama',
      'Agente de IA treinado com o catálogo real das suas velas',
      'Atendimento 24h no WhatsApp — tira dúvida, indica e fecha venda',
      'Você só recebe o aviso quando cai um pedido novo',
    ],
    glow: 1,
    destaque: true,
  },
];

export default function Planos() {
  return (
    <section id="planos" className="relative overflow-hidden bg-plum-ink py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(60% 45% at 50% 0%, rgba(123,35,168,.55), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="wrap relative">
        <div className="mb-16 text-center">
          <Reveal as="span" className="label mb-5 inline-flex items-center justify-center gap-3 text-orchid-glow">
            <i className="h-px w-6 bg-orchid-glow/60" />
            3 formas de começar
            <i className="h-px w-6 bg-orchid-glow/60" />
          </Reveal>
          <Reveal as="h2" delay={0.05} className="h-display text-[clamp(28px,4.6vw,44px)] text-cream">
            Escolha até onde a luz chega primeiro.
          </Reveal>
        </div>

        <RevealGroup className="grid gap-6 md:grid-cols-3 md:items-end" stagger={0.15}>
          {planos.map((p) => (
            <motion.div
              key={p.nome}
              variants={fadeUp()}
              className={p.destaque ? 'md:-translate-y-4' : ''}
            >
              <TiltCard
                strength={p.destaque ? 10 : 7}
                className={`relative rounded-3xl border p-8 shadow-[0_30px_60px_-30px_rgba(26,5,48,.6)] ${
                  p.destaque
                    ? 'border-orchid-glow/50 bg-plum/40 md:scale-[1.03]'
                    : 'border-cream/10 bg-plum/20'
                }`}
              >
                <span
                  className="halo left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 bg-orchid-glow animate-glowPulse"
                  style={{ opacity: p.glow * 0.6 }}
                  aria-hidden="true"
                />

                {p.destaque && (
                  <span className="label absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orchid-glow px-4 py-1.5 text-plum-ink">
                    mais completo
                  </span>
                )}

                <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                  <p className="label mb-3 text-cream/50">{p.nome}</p>
                  <p className="h-display mb-1 text-[40px] text-cream">
                    R$ {p.preco}
                  </p>
                  <p className="mb-7 text-[13px] italic text-orchid-glow">{p.tagline}</p>

                  <ul className="mb-8 space-y-3.5">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-cream/75">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orchid-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <GlowButton
                    href={whatsLink(`Oi Victor! Quero começar com o plano ${p.nome} (R$${p.preco}) da Luminescent 🔥`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn w-full ${p.destaque ? 'btn-light' : 'btn-ghost !border-cream/25 !text-cream hover:!border-cream'}`}
                  >
                    Quero esse
                  </GlowButton>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl rounded-2xl border border-cream/10 bg-cream/[.04] p-6 text-center sm:p-8">
          <p className="label mb-3 text-orchid-glow">sobre a verba de anúncio</p>
          <p className="text-[14px] leading-relaxed text-cream/70">
            O valor do plano cobre a criação e a gestão. A verba do anúncio em si é separada —
            vai direto pro Instagram, e quem decide quanto investir é você. Pra já sentir
            diferença no alcance da página ou no movimento do WhatsApp, algo como{' '}
            <strong className="font-medium text-cream">R$ 200</strong> costuma ser um bom
            ponto de partida.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 text-center text-[12.5px] text-cream/40">
          valores de lançamento — sem contrato de fidelidade
        </Reveal>
      </div>
    </section>
  );
}
