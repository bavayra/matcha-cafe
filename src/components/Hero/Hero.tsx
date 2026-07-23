export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh min-h-[580px] flex flex-col justify-center px-6 md:px-12 lg:px-20 z-10 overflow-hidden bg-[url('/images/photos/bg-mobil.webp')] lg:bg-[url('/images/photos/bg-desktop.webp')] bg-no-repeat opacity-90 bg-center bg-cover"
    >
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center max-w-xl h1-margin">
          <h1 className="text-[7.5rem] lg:text-[12rem] h1-font-size font-bold text-[var(--cream-main)] leading-none tracking-tight">
            SULU
          </h1>
          <p className="text-2xl lg:text-4xl text-[var(--cream-main)] font-light leading-relaxed">
            та самая матча
          </p>
          <a
            href="#drinks"
            className="mt-4 md:mt-6 cta-font-size inline-flex items-center gap-2 px-6 py-3 text-[var(--yellow-main)] rounded-xl hover:bg-[var(--yellow-main)] hover:text-[var(--green-main)] hover:scale-110 active:scale-95 hover-transition backdrop-blur-md shadow-xl font-light bg-transparent"
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
