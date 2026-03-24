import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <style>{`
        .index-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .index-header__eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .index-header__title {
          font-family: 'Epilogue', sans-serif;
          font-weight: 800;
          font-size: 36px;
          line-height: 1.15;
          color: var(--text);
          margin-bottom: 14px;
        }

        .index-header__subtitle {
          color: var(--muted);
          font-size: 15px;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .index-divider {
          width: 40px;
          height: 2px;
          background: var(--border);
          margin: 20px auto 0;
          border-radius: 2px;
        }

        .index-grid-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
        }

        @media (max-width: 600px) {
          .index-header__title {
            font-size: 26px;
          }
        }
      `}</style>

      <header className="index-header">
        <p className="index-header__eyebrow">Komanda Daxili Sənəd</p>
        <h1 className="index-header__title">Developer Təlimatı</h1>
        <p className="index-header__subtitle">Komanda daxili iş qaydaları və proseslər üzrə rəsmi təlimat.</p>
        <div className="index-divider"></div>
      </header>

      <p className="index-grid-label">Bölmələr</p>
      <nav className="index-grid">
        <Link to="/01-point-system" className="index-card">
          <p className="index-card__num">01</p>
          <h2 className="index-card__title">Point Sistemi</h2>
          <p className="index-card__desc">Fibonacci əsaslı qiymətləndirmə qaydaları</p>
        </Link>
        <Link to="/02-estimation" className="index-card">
          <p className="index-card__num">02</p>
          <h2 className="index-card__title">Estimation</h2>
          <p className="index-card__desc">Sprint planlaması zamanı riayət edilməli qaydalar</p>
        </Link>
        <Link to="/03-code-review" className="index-card">
          <p className="index-card__num">03</p>
          <h2 className="index-card__title">Code Review</h2>
          <p className="index-card__desc">Kodun keyfiyyətli yoxlanması üçün standartlar</p>
        </Link>
        <Link to="/04-daily-norms" className="index-card">
          <p className="index-card__num">04</p>
          <h2 className="index-card__title">Gündəlik Normalar</h2>
          <p className="index-card__desc">Effektiv iş vaxtı və yük planlaması</p>
        </Link>
      </nav>
    </div>
  )
}
