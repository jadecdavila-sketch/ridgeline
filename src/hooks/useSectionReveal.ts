import { useEffect } from 'react'

/**
 * Frosted slide-down reveal. Each `.sec` sits under a translucent backdrop-blur
 * sheet (CSS) that slides down to uncover the content as it scrolls into view.
 * The hero and first section render already-open; the rest fold in at ~72% up
 * the viewport. Re-runs whenever `key` changes (navigating between scorecards),
 * and tears down the body classes on unmount so the pipeline is unaffected.
 */
export function useSectionReveal(key: string | undefined) {
  useEffect(() => {
    const motionOK = !matchMedia('(prefers-reduced-motion:reduce)').matches
    if (!motionOK || !('IntersectionObserver' in window)) return

    const hero = document.querySelector<HTMLElement>('.hero')
    const secs = Array.from(document.querySelectorAll<HTMLElement>('.sec'))
    const body = document.body

    body.classList.add('folding')
    // snap the first section open before transitions are enabled — no slide on load
    secs[0]?.classList.add('in')

    let io: IntersectionObserver | null = null
    const raf = requestAnimationFrame(() => {
      body.classList.add('anim')
      hero?.classList.add('in')
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in')
              io?.unobserve(e.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px -28% 0px' },
      )
      secs.forEach((s) => {
        if (!s.classList.contains('in')) io!.observe(s)
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      io?.disconnect()
      body.classList.remove('folding', 'anim')
      hero?.classList.remove('in')
      secs.forEach((s) => s.classList.remove('in'))
    }
  }, [key])
}
