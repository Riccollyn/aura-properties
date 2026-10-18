import { createElement } from 'react'
import useReveal from '../hooks/useReveal.js'

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 600,
  style,
  variant = 'up',
  ...props
}) {
  const revealRef = useReveal()

  return createElement(
    as,
    {
      ...props,
      ref: revealRef,
      className: `site-reveal site-reveal--${variant} ${className}`.trim(),
      style: {
        ...style,
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${duration}ms`,
      },
    },
    children,
  )
}

export default Reveal
