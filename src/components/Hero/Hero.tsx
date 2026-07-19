export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh min-h-[580px] flex flex-col justify-center bg-gradient-to-b from-[var(--yellow-main)] to-[var(--green-main)] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:justify-between lg:max-w-7xl lg:mx-auto">
        <div className="bg-img-right absolute inset-0 bg-[url('/images/drinks/matcha-hero.webp')] bg-no-repeat opacity-60 hover-transition bg-center hero-img-size lg:mt-10 lg:bg-right lg:mr-16" />

        <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start justify-center text-center md:text-left w-full max-w-7xl pt-16 md:pt-0">
          <div className="flex flex-col 2xl:mr-10 items-center max-w-xl h1-margin">
            <h1 className="text-[clamp(72px,calc(11.56462585vw+30.367347px),208px)] font-bold text-[var(--cream-main)] leading-none tracking-tight">
              SULU
            </h1>
            <p className="text-[clamp(18px,calc(1.7741935vw+11.6139034px),40px)] text-[var(--cream-main)] font-light leading-relaxed">
              та самая матча
            </p>
            <a
              href="#drinks"
              className="mt-4 md:mt-10 md:text-2xl inline-flex items-center gap-2 px-8 py-3 bg-[var(--green-main)] text-[var(--yellow-text)] rounded-xl hover:bg-[var(--yellow-main)] hover:text-[var(--green-main)] hover:scale-110 active:scale-95 hover-transition"
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
      </div>

      <div className="absolute z-10 flex lg:bottom-10 self-center bottom-4">
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
