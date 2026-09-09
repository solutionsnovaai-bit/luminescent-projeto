const passos = [
  {
    n: '01',
    titulo: 'Conversa rápida no WhatsApp',
    texto: 'Sem reunião formal, sem powerpoint. Só entender sua rotina e o que faz mais sentido pra começar.',
  },
  {
    n: '02',
    titulo: 'Eu monto tudo nos primeiros dias',
    texto: 'Criativos, anúncios ou o agente de IA — já configurados com a voz e a estética da Luminescent.',
  },
  {
    n: '03',
    titulo: 'Você acompanha os resultados crescerem',
    texto: 'Combinamos um retorno simples, direto, sem termos técnicos. Só o que importa: está vendendo mais?',
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-lilac-mist py-24 md:py-32">
      <div className="wrap">
        <div className="reveal mb-16 text-center">
          <span className="label mb-5 inline-flex items-center justify-center gap-3 text-orchid">
            <i className="h-px w-6 bg-orchid/50" />
            sem burocracia
            <i className="h-px w-6 bg-orchid/50" />
          </span>
          <h2 className="h-display text-[clamp(28px,4.6vw,44px)] text-plum">
            Como isso vira realidade
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {passos.map((p) => (
            <div key={p.n} className="reveal">
              <p className="h-display mb-4 text-[15px] text-orchid">{p.n}</p>
              <h3 className="mb-3 text-[17px] font-normal text-plum">{p.titulo}</h3>
              <p className="text-[14px] leading-relaxed text-plum-ink/60">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
