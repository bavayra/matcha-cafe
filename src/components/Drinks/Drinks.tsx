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
      className="py-16 overflow-hidden"
      style={
        {
          '--theme-section-bg': theme.sectionBg,
          '--theme-card-bg': theme.cardBg,
          '--theme-accent': theme.accent,
          '--theme-accent-hover': theme.accentHover,
          '--theme-title': theme.titleText,
          backgroundColor: 'color-mix(in srgb, var(--theme-card-bg) 70%, transparent)',
          transition: 'background-color 0.4s',
        } as React.CSSProperties
      }
    >
      <div className="text-center px-6 mb-10">
        <h2 className="font-bold drinks-carousel-title" style={{ color: 'var(--theme-title)' }}>
          ВЫБИРАЙ МАТЧУ
        </h2>
      </div>
      <DrinkCarousel drinks={drinks} active={active} onActiveChange={setActive} />
    </section>
  )
}
