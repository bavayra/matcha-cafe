{
  /*import heroImg from '../../../images/drinks/matcha-hero.webp'*/
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-svh min-h-[580px] flex flex-col">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        {/* <img src={heroImg} alt="Matcha café hero" className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-matcha-900/60 via-matcha-900/30 to-matcha-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-matcha-300 uppercase mb-4">Кафе</p>
        <h1 className="text-6xl md:text-8xl font-bold text-cream-50 leading-none tracking-tight mb-5">
          MATCHA
        </h1>
        <p className="text-base md:text-lg text-cream-200 font-light max-w-xs leading-relaxed">
          Настоящий японский матча — каждый день, в твоём городе
        </p>
        <a
          href="#drinks"
          className="mt-10 inline-flex items-center gap-2 px-8 py-3 bg-matcha-500 text-cream-50 font-medium rounded-full hover:bg-matcha-400 active:scale-95 transition-all"
        >
          Смотреть меню
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-1 animate-bounce text-cream-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
