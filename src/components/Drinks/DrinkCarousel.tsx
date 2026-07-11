import { useCallback, useRef, useState, useEffect } from 'react'
import type { Drink } from '../../types'
import DrinkCard from './DrinkCard'

interface Props {
  drinks: Drink[]
  active: number
  onActiveChange: (index: number) => void
}

/**
 * Horizontal carousel.
 *
 * Layout (mobile):
 *   [±2 peek] [±1 partial] [ACTIVE 100%] [±1 partial] [±2 peek]
 *
 * The active card is centred at 50vw.
 * Each step away from active shifts the centre by STEP_VW.
 * Cards ±1 are scaled to 0.65 / 60% opacity.
 * Cards ±2 are scaled to 0.50 / 50% opacity (peek at edges).
 * Cards beyond ±2 are hidden.
 *
 * Swipe threshold: 50px horizontal drag triggers prev/next.
 * Dot tap navigates directly to that index.
 * Tapping a side card navigates to it.
 */

// Distance in vw between consecutive card centres

// Visual parameters per distance from active
const CARD_PARAMS: Record<number, { scale: number; opacity: number; zIndex: number }> = {
  0: { scale: 1, opacity: 1, zIndex: 10 },
  1: { scale: 0.65, opacity: 0.6, zIndex: 9 },
  2: { scale: 0.5, opacity: 0.5, zIndex: 8 },
}

const DESKTOP_STEP = 48
const MOBILE_STEP = 56

export default function DrinkCarousel({ drinks, active, onActiveChange }: Props) {
  const [stepVw, setStepVw] = useState<number>(() => {
    if (typeof window === 'undefined') return DESKTOP_STEP
    return window.innerWidth <= 599 ? MOBILE_STEP : DESKTOP_STEP
  })

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 599px)')
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setStepVw('matches' in e && e.matches ? MOBILE_STEP : DESKTOP_STEP)
    onChange(mq)
    if (mq.addEventListener) mq.addEventListener('change', onChange)
    else mq.addListener(onChange)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange)
      else mq.removeListener(onChange)
    }
  }, [])
  const translateVw = (offset: number) => offset * stepVw

  const dragStartX = useRef<number | null>(null)
  const hasDragged = useRef(false)

  const goTo = useCallback(
    (index: number) => onActiveChange(Math.max(0, Math.min(drinks.length - 1, index))),
    [drinks.length, onActiveChange],
  )

  const prev = useCallback(() => goTo(active - 1), [active, goTo])
  const next = useCallback(() => goTo(active + 1), [active, goTo])

  /* ── Pointer events for swipe ── */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX
    hasDragged.current = false
    e.currentTarget.setPointerCapture(e.pointerId)
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
  }

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* ── Track ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 'min(calc(80vw + 210px), 580px)', touchAction: 'pan-y' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {drinks.map((drink, index) => {
          const offset = index - active
          const absOffset = Math.abs(offset)

          if (absOffset > 2) return null

          const { scale, opacity, zIndex } = CARD_PARAMS[absOffset]

          return (
            <div
              key={drink.id}
              className="absolute left-1/2 top-1/2 w-[80vw] sm:max-w-[300px] max-w-[360px] cursor-pointer"
              style={{
                transform: `translate(calc(-50% + ${translateVw(offset)}vw), -50%) scale(${scale})`,
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

      {/* ── Dots ── */}
      <div className="flex items-center gap-2" role="tablist" aria-label="Навигация по напиткам">
        {drinks.map((drink, i) => (
          <button
            key={drink.id}
            role="tab"
            aria-selected={i === active}
            aria-label={`${drink.name}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-7 h-2.5 bg-[var(--theme-accent)] hover:bg-[var(--theme-accent-hover)]'
                : 'w-2.5 h-2.5 bg-[var(--theme-card-bg)] hover:bg-[var(--theme-accent-hover)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
