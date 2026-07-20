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
      className={`rounded-xl overflow-hidden drop-shadow-md p-6 flex flex-col transition-shadow duration-300 ${
        isActive ? 'shadow-black/80' : 'shadow-black/10'
      }`}
      style={{ background: 'var(--theme-card-bg)' }}
    >
      <div className="relative w-full overflow-hidden">
        <div>
          <img
            src={drink.image}
            alt={drink.name}
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
          <p className="text-[var(--theme-title)] bg-[var(--theme-card-bg)] absolute top-0 right-0 px-3 py-1 rounded-bl-xl font-bold drink-details tracking-wider">
            {drink.price} ₸
          </p>
        </div>
      </div>

      <div className="py-4 2xl:p-6 flex flex-col gap-3">
        <div>
          <h3 className="drink-title font-normal text-[var(--theme-title)] leading-tight">
            {drink.name}
          </h3>
          <p
            id="drink-description"
            className="hidden md:block mt-2 drink-details leading-tight tracking-tight"
            style={{ color: 'var(--theme-title)' }}
          >
            {drink.description}
          </p>
        </div>

        {isActive && (
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-centerx gap-0">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-7 h-7 rounded-full border-2 border-[var(--cream-main)] text-[var(--cream-main)] flex items-center justify-center text-lg font-bold hover:bg-matcha-50 active:bg-matcha-100 transition-colors select-none"
                aria-label="Уменьшить количество"
              >
                −
              </button>
              <span className="w-8 text-center drink-details font-medium text-[var(--cream-main)] tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-7 h-7 rounded-full border-2 border-[var(--cream-main)] text-[var(--cream-main)] flex items-center justify-center text-lg font-bold hover:bg-matcha-50 active:bg-matcha-100 transition-colors select-none"
                aria-label="Увеличить количество"
              >
                +
              </button>
            </div>

            <button
              className="flex flex-col items-center justify-center w-full py-2 text-cream-50 font-light rounded-2xl hover:bg-matcha-500 2xl:text-xl active:scale-95 active:bg-matcha-700 transition-all text-lg"
              style={{ background: 'var(--theme-accent)' }}
            >
              <div className="flex gap-2">
                <span>КУПИТЬ</span>{' '}
                <span>{(drink.price * quantity).toLocaleString('ru-RU')} ₸ </span>
              </div>
            </button>
          </div>
        )}
      </div>
      {drink.specification && (
        <div className="grid grid-cols-2 gap-3 mt-2 pointer-events-none">
          {drink.specification.map((item, index) => (
            <div
              key={index}
              className="grid grid-rows-2 items-center justify-center gap-0 bg-[var(--cream-main)] pt-2 rounded-xl"
            >
              <div
                style={{
                  maskImage: `url(${item.specificationIcon})`,
                  WebkitMaskImage: `url(${item.specificationIcon})`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  backgroundColor: 'var(--theme-accent)',
                }}
                className="w-8 h-8 inline-block shrink-0 mx-auto"
              />
              <span className="text-base font-semibold" style={{ color: 'var(--theme-accent)' }}>
                {item.specificationText}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
