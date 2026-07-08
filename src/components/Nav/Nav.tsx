import { useState } from 'react'
import { navItems } from '../../data/navigation'
import { useScrollY } from '../../hooks/useScrollY'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const isScrolled = scrollY > 10

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream-100/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-5 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className={`text-[2.5rem] font-bold tracking-tight transition-colors ${
            isScrolled ? 'text-matcha-700' : 'text-cream-50'
          }`}
        >
          SULU
        </a>
        <ul className="hidden md:flex gap-8">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-matcha-400 ${
                  isScrolled ? 'text-matcha-700' : 'text-cream-100'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-matcha-700' : 'bg-cream-50'
            } ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-matcha-700' : 'bg-cream-50'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-matcha-700' : 'bg-cream-50'
            } ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </nav>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-cream-100/98 backdrop-blur-sm border-t border-cream-200`}
      >
        <ul className="flex flex-col py-2">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-6 py-3 text-sm font-medium text-matcha-700 hover:bg-matcha-50 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
