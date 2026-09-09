import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

export default function WhatsAppPreview() {
  return (
    <section className="bg-lilac-mist pb-24 md:pb-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <Reveal as="span" className="label mb-5 inline-flex items-center gap-3 text-orchid">
            <i className="h-px w-6 bg-orchid/50" />
            como fica na prática
          </Reveal>
          <Reveal as="h2" delay={0.05} className="h-display mb-6 text-[clamp(28px,4.6vw,44px)] text-plum">
            Enquanto você dorme,<br />alguém continua respondendo por você.
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[15.5px] leading-relaxed text-plum-ink/65">
            É isso que o agente de IA do plano Brilho faz: recebe a cliente no WhatsApp,
            entende o que ela procura, indica a vela certa e fecha a venda — com o tom de
            voz da Luminescent, não de robô. Você só acompanha o pedido chegando.
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-1 flex justify-center md:order-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-[300px] overflow-hidden rounded-[2rem] border-8 border-plum-ink bg-[#e5ddd5] shadow-[0_30px_70px_-20px_rgba(26,5,48,.45)]"
          >
            <div className="flex items-center gap-2 bg-plum-ink px-4 py-3 text-cream">
              <div className="h-8 w-8 shrink-0 rounded-full bg-orchid-glow/80" />
              <div className="leading-tight">
                <p className="text-[12.5px] font-medium">Luminescent</p>
                <p className="text-[10px] text-cream/60">online</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 px-3 py-4">
              <Bubble side="left">
                Oiii, vi um post de vocês ✨ vcs tem alguma vela boa pra presentear?
              </Bubble>
              <Bubble side="right">
                Oi! Tenho sim 💜 pra presente, a Baunilha Caramelo é a queridinha —
                cheiro aconchegante e a embalagem já vem linda
              </Bubble>
              <BubbleImage src="/assets/produtos/baunilha-caramelo.jpg" alt="Vela Baunilha Caramelo" />
              <Bubble side="right">R$ 52 com embalagem de presente 🎁</Bubble>
              <Bubble side="left">Perfeita! Como eu fecho?</Bubble>
              <Bubble side="right">Só me confirmar o endereço que eu já gero o link de pagamento aqui 💜</Bubble>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Bubble({ side, children }) {
  const isRight = side === 'right';
  return (
    <div className={`max-w-[85%] rounded-lg px-3 py-2 text-[12.5px] leading-snug shadow-sm ${
      isRight ? 'self-end bg-[#dcf8c6] text-[#111]' : 'self-start bg-white text-[#111]'
    }`}>
      {children}
    </div>
  );
}

function BubbleImage({ src, alt }) {
  return (
    <div className="self-end overflow-hidden rounded-lg shadow-sm" style={{ maxWidth: '70%' }}>
      <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" />
    </div>
  );
}
