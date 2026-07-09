export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh min-h-[580px] flex flex-col justify-between bg-gradient-to-b from-[var(--yellow-main)] to-[var(--green-main)] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 w-full max-w-7xl mx-auto pt-16 md:pt-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-cream-50 leading-none tracking-tight">
            SULU
          </h1>
          <p className="mt-4 text-2xl md:text-3xl lg:text-4xl text-[var(--white-main)] font-light max-w-sm md:max-w-md leading-relaxed">
            та самая матча
          </p>
          <a
            href="#drinks"
            className="mt-8 md:mt-10 md:text-2xl inline-flex items-center gap-2 px-8 py-3 bg-[var(--green-main)] text-[var(--yellow-text)] rounded-xl hover:bg-[var(--yellow-main)] hover:text-[var(--green-main)] hover:scale-110 active:scale-95 hover-transition"
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

        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/images/drinks/matcha-hero.webp"
            className="w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw] xl:w-[32vw] h-auto max-h-[40vh] md:max-h-[65vh] object-contain opacity-75 pointer-events-none select-none hover-transition"
            alt="Matcha Hero"
          />
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-6">
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
