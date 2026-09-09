import { CheckIcon } from './Icons.jsx';
import { whatsLink } from '../lib/whats.js';

const planos = [
  {
    nome: 'Faísca',
    preco: '300',
    tagline: 'pra testar se pega',
    itens: ['1 criativo profissional', 'Gestão de anúncios por 2 semanas'],
    glow: 0.35,
    destaque: false,
  },
  {
    nome: 'Chama',
    preco: '500',
    tagline: 'pra manter aceso sozinha',
    itens: ['Tudo do Faísca', 'Artes e posts prontos pra você publicar'],
    glow: 0.6,
    destaque: false,
  },
  {
    nome: 'Brilho',
    preco: '800',
    tagline: 'pra brilhar mesmo enquanto você dorme',
    itens: ['Tudo do Chama', 'Agente de IA no WhatsApp atendendo e vendendo por você'],
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
        <div className="reveal mb-16 text-center">
          <span className="label mb-5 inline-flex items-center justify-center gap-3 text-orchid-glow">
            <i className="h-px w-6 bg-orchid-glow/60" />
            3 formas de começar
            <i className="h-px w-6 bg-orchid-glow/60" />
          </span>
          <h2 className="h-display text-[clamp(28px,4.6vw,44px)] text-cream">
            Escolha até onde a luz chega primeiro.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-end">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`reveal relative rounded-3xl border p-8 transition-transform duration-500 ${
                p.destaque
                  ? 'border-orchid-glow/50 bg-plum/40 md:-translate-y-4 md:scale-[1.03]'
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

              <div className="relative">
                <p className="label mb-3 text-cream/50">{p.nome}</p>
                <p className="h-display mb-1 text-[40px] text-cream">
                  R$ {p.preco}
                </p>
                <p className="mb-7 text-[13px] italic text-orchid-glow">{p.tagline}</p>

                <ul className="mb-8 space-y-3">
                  {p.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-cream/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orchid-glow" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsLink(`Oi Victor! Quero começar com o plano ${p.nome} (R$${p.preco}) da Luminescent 🔥`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn w-full ${p.destaque ? 'btn-light' : 'btn-ghost !border-cream/25 !text-cream hover:!border-cream'}`}
                >
                  Quero esse
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-[12.5px] text-cream/40">
          valores de lançamento — sem contrato de fidelidade
        </p>
      </div>
    </section>
  );
}
