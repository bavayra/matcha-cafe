export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh min-h-[580px] flex flex-col justify-center bg-gradient-to-b from-[var(--yellow-main)] to-[var(--green-main)] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:justify-between lg:max-w-7xl lg:mx-auto">
        <div
          className="absolute inset-0 bg-[url('/images/drinks/matcha-hero.webp')] bg-no-repeat opacity-60 hover-transition
                   bg-[length:92vw_auto] bg-left
                   md:bg-[length:60vw_auto] 
                   lg:bg-[length:36vw_auto] lg:mt-10 lg:bg-right lg:mr-16
                   xl:bg-[length:30vw_auto]"
        />

        <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start justify-center text-center md:text-left w-full max-w-7xl  pt-16 md:pt-0">
          <div className="flex flex-col items-center max-w-xl">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-[var(--white-main)] xl:text-[10rem] leading-none tracking-tight">
              SULU
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--white-main)] font-light leading-relaxed">
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

      <div className="relative z-10 flex justify-center pb-6 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2">
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
