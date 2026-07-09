export default function Hero() {
  return (
    <section id="hero" className="relative h-svh min-h-[580px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--yellow-main)] to-[var(--green-main)]" />
      </div>
      <div className="absolute inset-0 bg-[url('/images/drinks/matcha-hero.webp')] bg-[length:100vw_auto] md:bg-[length:70vw_auto] md:mt-10 bg-center bg-no-repeat opacity-60" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-start translate-y-[35%] px-6 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-cream-50 leading-none tracking-tight">
          SULU
        </h1>
        <p className="text-3xl md:text-4xl text-[var(--white-main)] font-light max-w-sm leading-relaxed">
          та самая матча
        </p>
        <a
          href="#drinks"
          className="mt-10 md:text-2xl inline-flex items-center gap-2 px-8 py-3 bg-[var(--green-main)] text-[var(--yellow-text)] rounded-xl hover:bg-[var(--yellow-main)] hover:text-[var(--green-main)] hover:scale-110 active:scale-95 hover-transition"
        >
          выбирай матчу
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="w-4 h-4 md:w-6 md:h-6">
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

      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-1 animate-bounce text-[var(--yellow-main)]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
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
