import paymentsImg from '../../../images/photos/payments.webp'
import { navItems } from '../../data/navigation'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-matcha-900 border-t border-matcha-800 px-6 py-14 text-cream-100">
      <div className="max-w-lg mx-auto flex flex-col gap-8">
        {/* Text block 1 — brand */}
        <div>
          <p className="text-2xl font-bold tracking-tight">MATCHA</p>
          <p className="mt-1.5 text-cream-200 font-light text-sm leading-relaxed max-w-xs">
            Настоящий японский матча в твоём городе. Работаем каждый день.
          </p>
        </div>

        {/* Text block 2 — legal */}
        <div>
          <p className="text-cream-300 font-light text-xs leading-relaxed">
            ООО «Матча Рус» · ОГРН 1234567890123 · ИНН 7700000000
          </p>
        </div>

        {/* Nav repeat */}
        <nav aria-label="Повторная навигация">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-matcha-300 hover:text-cream-100 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/oferta"
            className="text-xs text-matcha-400 hover:text-cream-200 transition-colors underline underline-offset-2"
          >
            Оферта
          </a>
          <a
            href="/privacy"
            className="text-xs text-matcha-400 hover:text-cream-200 transition-colors underline underline-offset-2"
          >
            Политика конфиденциальности
          </a>
        </div>

        {/* Bottom row: copyright + payments */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-matcha-800">
          <p className="text-xs text-matcha-500">© {year} Matcha Café. Все права защищены.</p>
          <img
            src={paymentsImg}
            alt="Способы оплаты"
            className="h-6 object-contain opacity-70"
          />
        </div>
      </div>
    </footer>
  )
}
