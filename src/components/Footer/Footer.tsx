import { navItems } from '../../data/navigation'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[var(--green-main)] border-t border-[var(--green-main)] px-6 py-14 text-[var(--cream-main)]">
      <div className="section-width mx-auto flex flex-col gap-8 items-start lg:items-stretch">
        {/* Text block 1 — brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="text-2xl font-bold tracking-tight md:text-3xl">SULU</p>
            <p className="mt-1.5 text-[var(--yellow-main)] font-light text-base md:text-lg leading-relaxed max-w-xs mb-6 lg:mb-0">
              Место, где матча - главный герой.
            </p>
          </div>

          {/* Text block 2 — legal */}
          <div className="text-[var(--cream-main)] font-light text-xs md:text-base leading-relaxed lg:text-right">
            <p>ИП ДваПарняПьютМатчу · ИНН 7700000000</p>
            <p>тел: +7 (777) 777-77-77 · email: info@example.com</p>
          </div>
        </div>

        {/* Nav repeat */}
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:items-start lg:justify-start lg:gap-x-20">
          <nav aria-label="Повторная навигация">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6 lg:mb-0 ">
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--green-dark)] hover:text-[var(--cream-main)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Legal links */}
          <div className="flex flex-wrap gap-4 lg:justify-end ">
            <a
              href="/oferta"
              className="text-xs md:text-base text-[var(--cream-main)] hover:text-[var(--yellow-main)] transition-colors underline underline-offset-2"
            >
              Оферта
            </a>
            <a
              href="/privacy"
              className="text-xs md:text-base text-[var(--cream-main)] hover:text-[var(--yellow-main)] transition-colors underline underline-offset-2"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>

        {/* Bottom row: copyright + payments */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-[var(--yellow-main)] self-center">
          <p className="text-xs lg:text-base 2xl:text-center font-light text-[var(--cream-main)]">
            © {year} Matcha Café. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
