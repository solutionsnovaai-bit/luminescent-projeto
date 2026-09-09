export default function NotaPessoal() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="wrap-narrow text-center">
        <span className="label mb-8 inline-flex items-center justify-center gap-3 text-plum/50">
          <i className="h-px w-6 bg-plum/30" />
          uma nota, de mim pra você
          <i className="h-px w-6 bg-plum/30" />
        </span>

        <p className="h-display reveal mb-8 text-[clamp(20px,3.2vw,30px)] italic leading-[1.4] text-plum-ink">
          "Naara, eu montei seu site sabendo o quanto a Luminescent é feita com
          cuidado — cada aroma pensado, cada vela embalada por você. Essa proposta
          não é pra te empurrar pra nada maior do que você quer. É pra te mostrar
          que dá pra crescer no seu ritmo, com alguém que já entende sua marca
          cuidando da parte técnica. Sem pressa, sem pressão."
        </p>

        <p className="reveal text-[13.5px] text-plum-ink/50">
          — Victor, Nova AI Solutions
        </p>
      </div>
    </section>
  );
}
