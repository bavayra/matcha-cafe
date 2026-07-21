import { useState } from 'react'
import { navItems } from '../../data/navigation'
import { useScrollY } from '../../hooks/useScrollY'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const isScrolled = scrollY > 10

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 hover-transition backdrop-blur-sm shadow-sm bg-transparent`}
    >
      <nav className="w-full max-w-[95vw] mx-4 px-8 py-4 md:p-10 h-14 flex items-center justify-between">
        <a
          id="logo"
          href="#hero"
          className={`logo font-bold tracking-tight hover-transition hover:text-[var(--green-main)] ${
            isScrolled ? 'text-[var(--yellow-main)]' : 'text-[var(--cream-main)]'
          }`}
        >
          SULU
        </a>
        <ul className="hidden md:flex gap-8">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-lg font-medium 2xl:text-2xl hover-transition hover:text-[var(--green-main)] ${
                  isScrolled ? 'text-[var(--yellow-main)]' : 'text-[var(--cream-main)]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/*hamburger menu*/}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded hover-transition hover:text-[var(--green-main)]"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          <span
            className={`humb-icon block hover-transition hover:bg-[var(--green-main)]  ${
              isScrolled ? 'bg-[var(--yellow-main)]' : 'bg-[var(--green-main)]'
            } ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`humb-icon block hover-transition ${
              isScrolled ? 'bg-[var(--yellow-main)]' : 'bg-[var(--green-main)]'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`humb-icon block hover-transition ${
              isScrolled ? 'bg-[var(--yellow-main)]' : 'bg-[var(--green-main)]'
            } ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </nav>
      <div
        className={`md:hidden overflow-hidden mx-auto hover-transition ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-[var(--green-main)]/98 backdrop-blur-sm border-t border-[var(--yellow-main)]`}
      >
        <ul className="flex flex-col py-2">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`block px-6 py-2 text-base font-semibold ${
                  isScrolled ? 'text-[var(--yellow-main)]' : 'text-[var(--green-main)]'
                } hover:bg-[var(--cream-main)] hover-transition`}
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
