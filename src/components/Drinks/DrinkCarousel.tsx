import { useCallback, useRef } from 'react'
import type { Drink } from '../../types'
import DrinkCard from './DrinkCard'

interface Props {
  drinks: Drink[]
  active: number
  onActiveChange: (index: number) => void
}

const CARD_PARAMS: Record<number, { scale: number; opacity: number; zIndex: number }> = {
  0: { scale: 1, opacity: 1, zIndex: 10 },
  1: { scale: 0.65, opacity: 0.6, zIndex: 9 },
}

export default function DrinkCarousel({ drinks, active, onActiveChange }: Props) {
  const dragStartX = useRef<number | null>(null)
  const hasDragged = useRef(false)

  const goTo = useCallback(
    (index: number) => onActiveChange(Math.max(0, Math.min(drinks.length - 1, index))),
    [drinks.length, onActiveChange],
  )

  const prev = useCallback(() => goTo(active - 1), [active, goTo])
  const next = useCallback(() => goTo(active + 1), [active, goTo])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX
    hasDragged.current = false
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return
    if (Math.abs(e.clientX - dragStartX.current) > 8) {
      hasDragged.current = true
    }
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    dragStartX.current = null
    if (Math.abs(delta) >= 50) {
      delta < 0 ? next() : prev()
    }
  }

  const onPointerCancel = () => {
    dragStartX.current = null
    hasDragged.current = false
  }

  const onPointerLeave = () => {
    dragStartX.current = null
    hasDragged.current = false
  }

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      <div
        className="relative w-full overflow-visible md:my-8 2xl:my-14"
        style={{ height: 'min(calc(80vw + 210px), 580px)', touchAction: 'pan-y' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onPointerLeave={onPointerLeave}
      >
        {drinks.map((drink, index) => {
          const offset = index - active
          const absOffset = Math.abs(offset)

          if (absOffset > 1) return null

          const { scale, opacity, zIndex } = CARD_PARAMS[absOffset]

          return (
            <div
              key={drink.id}
              className="absolute left-1/2 top-1/2 w-[80vw] card-width  cursor-pointer"
              style={{
                transform: `translate(calc(-50% + ${offset} * (min(66vw, 297px) + 5vw)), -50%) scale(${scale})`,
                opacity,
                zIndex,
                transition:
                  'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease',
              }}
              onClick={() => {
                if (!hasDragged.current && offset !== 0) goTo(index)
              }}
            >
              <DrinkCard drink={drink} isActive={offset === 0} />
            </div>
          )
        })}
      </div>

      <div
        className="flex items-center gap-2 dots-top"
        role="tablist"
        aria-label="Навигация по напиткам"
      >
        {drinks.map((drink, i) => (
          <button
            key={drink.id}
            role="tab"
            aria-selected={i === active}
            aria-label={`${drink.name}`}
            onClick={() => goTo(i)}
            className={`rounded-full hover-transition ${
              i === active
                ? 'w-8 h-3 sm:w-10 sm:h-4 bg-[var(--theme-accent)] hover:bg-[var(--theme-accent-hover)]'
                : 'w-3 h-3 sm:w-4 sm:h-4 bg-[var(--theme-card-bg)] hover:bg-[var(--theme-accent-hover)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
