import { Link } from 'react-router-dom'
import { useMagnetic } from '../hooks/useMagnetic'

type MagneticLinkProps = {
  to: string
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticLink({ to, children, className, strength = 0.25 }: MagneticLinkProps) {
  const magnetic = useMagnetic<HTMLAnchorElement>(strength)
  return (
    <Link
      to={to}
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className={`inline-flex ${className ?? ''}`}
    >
      {children}
    </Link>
  )
}
