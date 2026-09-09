import { CheckIcon } from './Icons.jsx';

const pontos = [
  'Produto validado, feito à mão, com identidade própria',
  'Cliente que já compra — e volta a comprar',
  'Uma marca com cara e alma, não um genérico de nicho',
];

export default function Reconhecimento() {
  return (
    <section id="reconhecimento" className="bg-lilac-mist py-24 md:py-32">
      <div className="wrap-narrow text-center">
        <span className="label reveal mb-5 inline-flex items-center gap-3 justify-center text-orchid">
          <i className="h-px w-6 bg-orchid/50" />
          antes de tudo
          <i className="h-px w-6 bg-orchid/50" />
        </span>

        <h2 className="h-display reveal mb-6 text-[clamp(28px,4.6vw,44px)] text-plum">
          Você não precisa de mais um funil.
        </h2>

        <p className="reveal mb-12 text-[15.5px] leading-relaxed text-plum-ink/65">
          Precisa de alguém que cuide disso com o mesmo carinho que você cuida das velas.
          Cada uma que você embala é feita do seu jeito, no seu tempo. O que falta não é
          talento — é tempo, e alguém pra levar isso até mais gente sem transformar sua
          marca em mais uma propaganda igual a todas as outras.
        </p>

        <div className="reveal grid gap-4 sm:grid-cols-3">
          {pontos.map((p) => (
            <div key={p} className="flex flex-col items-center gap-3 rounded-2xl bg-white/60 px-5 py-6 text-left sm:items-start">
              <CheckIcon className="h-6 w-6 text-orchid" />
              <p className="text-[13.5px] leading-snug text-plum-ink/70">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
