import { drinks } from '../../data/drinks'
import DrinkCarousel from './DrinkCarousel'
import { useState } from 'react'
import { drinkThemes } from '../../data/drinks'

export default function Drinks() {
  const [active, setActive] = useState(0)
  const theme = drinkThemes[drinks[active].slug]
  return (
    <section
      id="drinks"
      className="py-16 bg-[var(--green-main)] overflow-hidden"
      style={
        {
          '--theme-card-bg': theme.cardBg,
          '--theme-accent': theme.accent,
          '--theme-accent-hover': theme.accentHover,
          '--theme-title': theme.titleText,
          transition: 'background 0.4s',
        } as React.CSSProperties
      }
    >
      <div className="text-center px-6 mb-10">
        <h2
          className="text-3xl font-bold text-[var(--yellow-main)]"
          style={{ color: 'var(--theme-title)' }}
        >
          ВЫБИРАЙ МАТЧУ
        </h2>
      </div>
      <DrinkCarousel drinks={drinks} active={active} onActiveChange={setActive} />
    </section>
  )
}
