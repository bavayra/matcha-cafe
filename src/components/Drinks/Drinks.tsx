import { drinks } from '../../data/drinks'
import DrinkCarousel from './DrinkCarousel'

export default function Drinks() {
  return (
    <section id="drinks" className="py-16 bg-[var(--green-main)] overflow-hidden">
      <div className="text-center px-6 mb-10">
        <h2 className="text-3xl font-bold text-[var(--yellow-main)]">ВЫБИРАЙ МАТЧУ</h2>
      </div>
      <DrinkCarousel drinks={drinks} />
    </section>
  )
}
