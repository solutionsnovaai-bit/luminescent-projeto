import { motion } from 'framer-motion';
import { CheckIcon } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import RevealGroup from './RevealGroup.jsx';
import { fadeUp } from '../lib/motion.js';

const pontos = [
  'Produto validado, feito à mão, com identidade própria',
  'Cliente que já compra — e volta a comprar',
  'Uma marca com cara e alma, não um genérico de nicho',
];

export default function Reconhecimento() {
  return (
    <section id="reconhecimento" className="bg-lilac-mist py-24 md:py-32">
      <div className="wrap-narrow text-center">
        <Reveal as="span" className="label mb-5 inline-flex items-center gap-3 justify-center text-orchid">
          <i className="h-px w-6 bg-orchid/50" />
          antes de tudo
          <i className="h-px w-6 bg-orchid/50" />
        </Reveal>

        <Reveal as="h2" delay={0.05} className="h-display mb-6 text-[clamp(28px,4.6vw,44px)] text-plum">
          Você não precisa de mais um funil.
        </Reveal>

        <Reveal as="p" delay={0.1} className="mb-12 text-[15.5px] leading-relaxed text-plum-ink/65">
          Precisa de alguém que cuide disso com o mesmo carinho que você cuida das velas.
          Cada uma que você embala é feita do seu jeito, no seu tempo. O que falta não é
          talento — é tempo, e alguém pra levar isso até mais gente sem transformar sua
          marca em mais uma propaganda igual a todas as outras.
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-3">
          {pontos.map((p) => (
            <motion.div
              key={p}
              variants={fadeUp()}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white/60 px-5 py-6 text-left transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(74,14,122,.35)] sm:items-start"
            >
              <CheckIcon className="h-6 w-6 text-orchid" />
              <p className="text-[13.5px] leading-snug text-plum-ink/70">{p}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
