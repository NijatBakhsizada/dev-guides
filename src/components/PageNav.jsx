import { Link } from 'react-router-dom'

export default function PageNav({ title, current, total, nextPath }) {
  return (
    <nav className="page-nav">
      <Link to="/" className="page-nav__back">← Geri</Link>
      <span className="page-nav__title">{title}</span>
      <div className="page-nav__right">
        <span className="page-nav__indicator">{String(current).padStart(2,'0')}/{String(total).padStart(2,'0')}</span>
        {nextPath && <Link to={nextPath} className="page-nav__next">→</Link>}
      </div>
    </nav>
  )
}
