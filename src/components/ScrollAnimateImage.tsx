import { useEffect, useRef, useState } from 'react'

interface ScrollAnimateImageProps {
  src: string
  alt: string
  direction: 'left' | 'right'
}

export default function ScrollAnimateImage({ src, alt, direction }: ScrollAnimateImageProps) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const hiddenTranslateClass = direction === 'right' ? 'translate-x-[50vw]' : '-translate-x-[50vw]'

  return (
    <div ref={ref} className="w-full py-10 flex justify-center">
      <div
        className={`
          w-full max-w-2xl px-4
          transition-all duration-1000 ease-out transform
          ${
            isIntersecting
              ? 'opacity-100 translate-x-0 scale-100'
              : `opacity-0 ${hiddenTranslateClass} scale-95`
          }
        `}
      >
        <img src={src} alt={alt} className="w-full h-auto rounded-2xl object-cover" />
      </div>
    </div>
  )
}
