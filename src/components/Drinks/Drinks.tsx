import { drinks } from '../../data/drinks'
import DrinkCarousel from './DrinkCarousel'

export default function Drinks() {
  return (
    <section id="drinks" className="py-16 bg-cream-100 overflow-hidden">
      <div className="text-center px-6 mb-10">
        <h2 className="text-3xl font-bold text-matcha-800">Меню</h2>
        <p className="mt-2 text-matcha-500 font-light">Выберите свой матча</p>
      </div>
      <DrinkCarousel drinks={drinks} />
    </section>
  )
}
