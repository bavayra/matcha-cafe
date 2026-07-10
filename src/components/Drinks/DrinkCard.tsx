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
      className={`rounded-3xl overflow-hidden drop-shadow-xl flex flex-col transition-shadow duration-300 ${
        isActive ? 'shadow-black/80' : 'shadow-black/10'
      }`}
      style={{ background: 'var(--theme-card-bg)' }}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-light text-[var(--white-main)] leading-tight">
            {drink.name}
          </h3>
          <p className="text-[var(--white-main)] font-light text-lg tracking-wider mt-0.5">
            {drink.price} ₸
          </p>

          <p className="hidden md:block mt-2 text-sm text-matcha-600 font-light leading-relaxed">
            {drink.description}
          </p>
        </div>

        {isActive && (
          <>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-full border-2 border-[var(--white-main)] text-[var(--white-main)] flex items-center justify-center text-lg font-bold hover:bg-matcha-50 active:bg-matcha-100 transition-colors select-none"
                aria-label="Уменьшить количество"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-medium text-[var(--white-main)] tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-9 h-9 rounded-full border-2 border-[var(--white-main)] text-[var(--white-main)] flex items-center justify-center text-lg font-bold hover:bg-matcha-50 active:bg-matcha-100 transition-colors select-none"
                aria-label="Увеличить количество"
              >
                +
              </button>
            </div>

            <button
              className="w-full py-3 bg-matcha-600 text-cream-50 font-light rounded-2xl hover:bg-matcha-500 active:scale-95 active:bg-matcha-700 transition-all text-base"
              style={{ background: 'var(--theme-accent)' }}
            >
              КУПИТЬ · {(drink.price * quantity).toLocaleString('ru-RU')} ₸
            </button>
          </>
        )}
      </div>
    </div>
  )
}
