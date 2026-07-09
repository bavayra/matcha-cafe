export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh min-h-[580px] flex flex-col justify-between bg-gradient-to-b from-[var(--yellow-main)] to-[var(--green-main)] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('/images/drinks/matcha-hero.webp')] bg-no-repeat opacity-60 transition-all duration-500
                   bg-[length:92vw_auto] bg-center
                   md:bg-[length:55vw_auto] md:bg-right
                   lg:bg-[length:45vw_auto]
                   xl:bg-[length:35vw_auto]"
      />

      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left w-full max-w-7xl mx-auto pt-16 md:pt-0">
        <div className="flex flex-col items-center md:items-start max-w-xl">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-cream-50 leading-none tracking-tight">
            SULU
          </h1>
          <p className="mt-4 text-2xl md:text-3xl lg:text-4xl text-[var(--white-main)] font-light leading-relaxed">
            та самая матча
          </p>
          <a
            href="#drinks"
            className="mt-8 md:mt-10 md:text-2xl inline-flex items-center gap-2 px-8 py-3 bg-[var(--green-main)] text-[var(--yellow-text)] rounded-xl hover:bg-[var(--yellow-main)] hover:text-[var(--green-main)] hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out"
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
