import PageNav from '../components/PageNav.jsx'

export default function PointSystem() {
  return (
    <>
      <style>{`
        /* ── Chart-specific styles ── */
        .chart-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #1a1814;
          margin: 0 0 16px 0;
        }
        .chart-note {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          color: #8a8680;
          margin: 8px 0 0 0;
        }

        /* Fibonacci bar chart */
        .fib-chart-wrap {
          width: 100%;
          overflow-x: auto;
        }
        .fib-chart-svg {
          display: block;
          width: 100%;
          min-width: 320px;
        }

        /* 3-Dimension chart */
        .dim-chart-grid {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 10px 16px;
          align-items: center;
        }
        .dim-chart-pt {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: #1a1814;
          text-align: right;
        }
        .dim-bars-col {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .dim-bar-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dim-bar-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          color: #8a8680;
          width: 110px;
          flex-shrink: 0;
        }
        .dim-bar-track {
          flex: 1;
          height: 6px;
          background: #e8e5e0;
          border-radius: 3px;
          overflow: hidden;
        }
        .dim-bar-fill {
          height: 100%;
          border-radius: 3px;
        }
        .dim-bar-fill--accent { background: #2563eb; }
        .dim-bar-fill--green  { background: #16a34a; }
        .dim-bar-fill--orange { background: #ea580c; }

        .dim-chart-legend {
          display: flex;
          gap: 16px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .dim-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          color: #8a8680;
        }
        .dim-legend-swatch {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          flex-shrink: 0;
        }
      `}</style>

      <PageNav title="Point Sistemi" current={1} total={4} nextPath="/02-estimation" />

      <div className="container">

        <header className="page-header">
          <p className="page-header__label">01 · Point Sistemi</p>
          <h1 className="page-header__title">Fibonacci əsaslı<br />qiymətləndirmə</h1>
          <p className="page-header__desc">Tapşırığın mürəkkəbliyini, həcmini və qeyri-müəyyənliyini necə ölçürük.</p>
        </header>

        {/* Nəzəri izah */}
        <div className="card">
          <p className="prose">
            Point sistemi tapşırığın mürəkkəbliyini, həcmini və qeyri-müəyyənliyini birlikdə ölçür — yalnız vaxtı deyil. Biz Fibonacci ardıcıllığından istifadə edirik (1, 2, 3, 5, 8, 13) çünki böyük tapşırıqlardakı qeyri-müəyyənlik xətti deyil, eksponent artır. 3 ilə 5 arasındakı fərq, 1 ilə 2 arasındakı fərqdən daha böyükdür — bu qəsdəndir.
          </p>
        </div>

        {/* CHART 1: Fibonacci Böyüməsi */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">Fibonacci Böyüməsi — Qeyri-müəyyənlik xətti deyil, eksponent artır</p>
          <div className="fib-chart-wrap">
            <svg className="fib-chart-svg" viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" aria-label="Fibonacci böyümə diaqramı">

              {/* Y-axis label */}
              <text transform="rotate(-90)" x="-125" y="14" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">Mürəkkəblik (nisbi)</text>

              {/* Y-axis line */}
              <line x1="44" y1="12" x2="44" y2="212" stroke="#e8e5e0" strokeWidth="1"/>
              {/* X-axis line */}
              <line x1="44" y1="212" x2="556" y2="212" stroke="#e8e5e0" strokeWidth="1"/>

              {/* Bar 1 (1pt, blue) */}
              <rect x="62" y="197" width="38" height="15" rx="3" fill="#2563eb"/>
              <text x="81" y="192" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#2563eb" textAnchor="middle">1</text>
              <text x="81" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#8a8680" textAnchor="middle">1 pt</text>

              {/* Bar 2 (2pt, blue) */}
              <rect x="135" y="189" width="38" height="23" rx="3" fill="#2563eb"/>
              <text x="154" y="184" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#2563eb" textAnchor="middle">2</text>
              <text x="154" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#8a8680" textAnchor="middle">2 pt</text>

              {/* Bar 3 (3pt, green) */}
              <rect x="208" y="182" width="38" height="30" rx="3" fill="#16a34a"/>
              <text x="227" y="177" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#16a34a" textAnchor="middle">3</text>
              <text x="227" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#8a8680" textAnchor="middle">3 pt</text>

              {/* Bar 5 (5pt, green) */}
              <rect x="281" y="162" width="38" height="50" rx="3" fill="#16a34a"/>
              <text x="300" y="157" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#16a34a" textAnchor="middle">5</text>
              <text x="300" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#8a8680" textAnchor="middle">5 pt</text>

              {/* Bar 8 (8pt, orange) */}
              <rect x="354" y="132" width="38" height="80" rx="3" fill="#ea580c"/>
              <text x="373" y="127" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#ea580c" textAnchor="middle">8</text>
              <text x="373" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#8a8680" textAnchor="middle">8 pt</text>

              {/* Bar 13 (13pt, orange) */}
              <rect x="427" y="82" width="38" height="130" rx="3" fill="#ea580c"/>
              <text x="446" y="77" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#ea580c" textAnchor="middle">13</text>
              <text x="446" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#8a8680" textAnchor="middle">13 pt</text>

              {/* Bar 21 (21pt, forbidden) */}
              <rect x="500" y="44" width="38" height="168" rx="3" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3"/>
              <text x="519" y="39" fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="#dc2626" textAnchor="middle">21</text>
              <text x="519" y="27" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#dc2626" textAnchor="middle" fontWeight="600">qadağan</text>
              <text x="519" y="228" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fill="#dc2626" textAnchor="middle">21 pt</text>

              {/* Curved exponential growth path */}
              <path d="M81,197 C100,196 130,190 154,189 C178,188 205,183 227,182 C250,181 275,165 300,162 C325,159 348,134 373,132 C398,130 422,85 446,82 C470,79 498,46 519,44"
                    stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.7"/>

              {/* Dots at bar-top midpoints */}
              <circle cx="81"  cy="197" r="3" fill="#2563eb"/>
              <circle cx="154" cy="189" r="3" fill="#2563eb"/>
              <circle cx="227" cy="182" r="3" fill="#16a34a"/>
              <circle cx="300" cy="162" r="3" fill="#16a34a"/>
              <circle cx="373" cy="132" r="3" fill="#ea580c"/>
              <circle cx="446" cy="82"  r="3" fill="#ea580c"/>
              <circle cx="519" cy="44"  r="3" fill="#dc2626"/>
            </svg>
          </div>
          <p className="chart-note">21 pt — qadağan zona</p>
        </div>

        {/* Point kartları */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Point Dəyərləri</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="point-cards-row">
          <div className="point-card">
            <span className="point-card__number">1</span>
            <span className="point-card__label">trivial</span>
          </div>
          <div className="point-card">
            <span className="point-card__number">2</span>
            <span className="point-card__label">sadə</span>
          </div>
          <div className="point-card">
            <span className="point-card__number">3</span>
            <span className="point-card__label">orta</span>
          </div>
          <div className="point-card">
            <span className="point-card__number">5</span>
            <span className="point-card__label">mürəkkəb</span>
          </div>
          <div className="point-card">
            <span className="point-card__number">8</span>
            <span className="point-card__label">böyük</span>
          </div>
          <div className="point-card">
            <span className="point-card__number">13</span>
            <span className="point-card__label">maksimum</span>
          </div>
          <div className="point-card point-card--forbidden">
            <span className="point-card__number">21</span>
            <span className="point-card__label"><span className="tag tag-forbidden">qadağan</span></span>
          </div>
        </div>

        {/* Point izahları */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Point Mənası</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text"><strong>1 pt</strong> — Çox sadə, tam aydın, risk yoxdur. Məs: bir field-in adını dəyişmək.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text"><strong>2 pt</strong> — Sadə, lakin kiçik araşdırma tələb edir.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--green"></span>
            <span className="rule-text"><strong>3 pt</strong> — Orta həcmli, məntiqi aydındır. Məs: yeni bir form komponenti.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--green"></span>
            <span className="rule-text"><strong>5 pt</strong> — Bir neçə hissəsi var, bəzi qeyri-müəyyənlik mövcuddur.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--orange"></span>
            <span className="rule-text"><strong>8 pt</strong> — Mürəkkəb, araşdırma tələb edir, bölünmə tövsiyə olunur.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--orange"></span>
            <span className="rule-text"><strong>13 pt</strong> — Maksimum. Mütləq əvvəlcə araşdırma/spike edilməlidir.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--red"></span>
            <span className="rule-text"><strong>21 pt</strong> — Qəbul edilmir. Kifayət qədər analiz edilməyib. Bölün, sonra estimate edin.</span>
          </div>
        </div>

        {/* CHART 2: 3 Ölçü */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">Hər point üç ölçünü birlikdə əks etdirir</p>
          <div className="dim-chart-grid">

            {/* 1 pt */}
            <span className="dim-chart-pt">1</span>
            <div className="dim-bars-col">
              <div className="dim-bar-row">
                <span className="dim-bar-label">Həcm</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--accent" style={{width:'8%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Mürəkkəblik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--green" style={{width:'8%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Qeyri-müəyyənlik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--orange" style={{width:'8%'}}></div></div>
              </div>
            </div>

            {/* 2 pt */}
            <span className="dim-chart-pt">2</span>
            <div className="dim-bars-col">
              <div className="dim-bar-row">
                <span className="dim-bar-label">Həcm</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--accent" style={{width:'15%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Mürəkkəblik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--green" style={{width:'15%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Qeyri-müəyyənlik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--orange" style={{width:'15%'}}></div></div>
              </div>
            </div>

            {/* 3 pt */}
            <span className="dim-chart-pt">3</span>
            <div className="dim-bars-col">
              <div className="dim-bar-row">
                <span className="dim-bar-label">Həcm</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--accent" style={{width:'23%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Mürəkkəblik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--green" style={{width:'23%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Qeyri-müəyyənlik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--orange" style={{width:'23%'}}></div></div>
              </div>
            </div>

            {/* 5 pt */}
            <span className="dim-chart-pt">5</span>
            <div className="dim-bars-col">
              <div className="dim-bar-row">
                <span className="dim-bar-label">Həcm</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--accent" style={{width:'38%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Mürəkkəblik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--green" style={{width:'38%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Qeyri-müəyyənlik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--orange" style={{width:'38%'}}></div></div>
              </div>
            </div>

            {/* 8 pt */}
            <span className="dim-chart-pt">8</span>
            <div className="dim-bars-col">
              <div className="dim-bar-row">
                <span className="dim-bar-label">Həcm</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--accent" style={{width:'61%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Mürəkkəblik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--green" style={{width:'61%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Qeyri-müəyyənlik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--orange" style={{width:'61%'}}></div></div>
              </div>
            </div>

            {/* 13 pt */}
            <span className="dim-chart-pt">13</span>
            <div className="dim-bars-col">
              <div className="dim-bar-row">
                <span className="dim-bar-label">Həcm</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--accent" style={{width:'100%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Mürəkkəblik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--green" style={{width:'100%'}}></div></div>
              </div>
              <div className="dim-bar-row">
                <span className="dim-bar-label">Qeyri-müəyyənlik</span>
                <div className="dim-bar-track"><div className="dim-bar-fill dim-bar-fill--orange" style={{width:'100%'}}></div></div>
              </div>
            </div>

          </div>

          <div className="dim-chart-legend">
            <span className="dim-legend-item"><span className="dim-legend-swatch" style={{background:'#2563eb'}}></span>Həcm</span>
            <span className="dim-legend-item"><span className="dim-legend-swatch" style={{background:'#16a34a'}}></span>Mürəkkəblik</span>
            <span className="dim-legend-item"><span className="dim-legend-swatch" style={{background:'#ea580c'}}></span>Qeyri-müəyyənlik</span>
          </div>
        </div>

        {/* Nümunə */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Nümunə</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="example-box">{`✓  "İstifadəçi profil şəklini yeniləmək"  →  3 pt
   (endpoint hazırdır, sadəcə UI tərəfi)

✓  "Ödəniş modulunu yenidən yazmaq"  →  8 + 5 pt kimi bölünür

✗  "Ödəniş modulunu yenidən yazmaq"  →  21 pt kimi götürülür`}</div>

        <div className="mt-16">
          <div className="alert alert-orange">
            <span className="alert__icon">⚠</span>
            <span>21 point olan task sprint-ə daxil edilə bilməz. Əvvəlcə bölün.</span>
          </div>
        </div>

        {/* Maks kombinasiya */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Maksimum Kombinasiya</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="stat-row">
            <span className="stat-row__label">İzin verilən maksimum</span>
            <span className="stat-row__value stat-row__value--green">13 + 5 = 18 pt</span>
          </div>
        </div>

      </div>
    </>
  )
}
