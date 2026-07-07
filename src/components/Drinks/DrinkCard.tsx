import { useState } from 'react'
import type { Drink } from '../../types'

interface Props {
  drink: Drink
  isActive: boolean
}

export default function DrinkCard({ drink, isActive }: Props) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col transition-shadow duration-300 ${
        isActive ? 'shadow-matcha-300/40' : 'shadow-black/10'
      }`}
    >
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-bold text-matcha-900 leading-tight">{drink.name}</h3>
          <p className="text-matcha-500 font-medium text-base mt-0.5">{drink.price} ₽</p>
          {/* Description — desktop only */}
          <p className="hidden md:block mt-2 text-sm text-matcha-600 font-light leading-relaxed">
            {drink.description}
          </p>
        </div>

        {/* Controls only on active card */}
        {isActive && (
          <>
            {/* Quantity */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-full border-2 border-matcha-400 text-matcha-600 flex items-center justify-center text-lg font-bold hover:bg-matcha-50 active:bg-matcha-100 transition-colors select-none"
                aria-label="Уменьшить количество"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-medium tabular-nums">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-9 h-9 rounded-full border-2 border-matcha-400 text-matcha-600 flex items-center justify-center text-lg font-bold hover:bg-matcha-50 active:bg-matcha-100 transition-colors select-none"
                aria-label="Увеличить количество"
              >
                +
              </button>
            </div>

            {/* Buy button */}
            <button className="w-full py-3 bg-matcha-600 text-cream-50 font-bold rounded-2xl hover:bg-matcha-500 active:scale-95 active:bg-matcha-700 transition-all text-base">
              Купить · {(drink.price * quantity).toLocaleString('ru-RU')} ₽
            </button>
          </>
        )}
      </div>
    </div>
  )
}
