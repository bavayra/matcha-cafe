import { useEffect, useState } from 'react'

/**
 * The "go home" floating button.
 * Becomes visible once the user has scrolled 10% into the #drinks section.
 */
export default function HomeButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      const drinks = document.getElementById('drinks')
      if (!drinks) return
      // Visible when scrollY has passed 10% into the drinks section
      const threshold = drinks.offsetTop + drinks.offsetHeight * 0.1
      setVisible(window.scrollY >= threshold)
    }

    window.addEventListener('scroll', check, { passive: true })
    check() // run once on mount
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <a
      href="#hero"
      aria-label="На главную"
      className={`fixed bottom-6 right-5 z-50 w-12 h-12 bg-matcha-600 text-cream-50 rounded-full shadow-lg flex items-center justify-center hover:bg-matcha-500 active:bg-matcha-700 active:scale-95 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Home icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="9,22 9,12 15,12 15,22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
