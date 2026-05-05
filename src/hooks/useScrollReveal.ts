import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement = HTMLElement>(staggerDelay = 0) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (staggerDelay > 0) {
            setTimeout(() => setIsVisible(true), staggerDelay)
          } else {
            setIsVisible(true)
          }
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [staggerDelay])

  return { ref, isVisible }
}
