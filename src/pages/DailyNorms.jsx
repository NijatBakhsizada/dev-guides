import PageNav from '../components/PageNav.jsx'

export default function DailyNorms() {
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

        /* ── Gantt chart ── */
        .gantt-wrap {
          width: 100%;
          overflow-x: auto;
        }
        .gantt-svg {
          display: block;
          min-width: 480px;
        }

        .gantt-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 14px;
        }
        .gantt-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
        }
        .gantt-pill--green  { background: #f0fdf4; color: #16a34a; border: 1px solid #16a34a; }
        .gantt-pill--orange { background: #fff7ed; color: #ea580c; border: 1px solid #ea580c; }
        .gantt-pill--grey   { background: #f1f5f9; color: #8a8680; border: 1px solid #cbd5e1; }

        /* ── Capacity stacked bar ── */
        .capacity-bar-wrap {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
        }
        .capacity-seg {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .capacity-seg span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
        }
        .capacity-seg--dev    { background: #2563eb; width: 37.5%; }
        .capacity-seg--review { background: #ea580c; width: 18.75%; }
        .capacity-seg--meet   { background: #94a3b8; width: 12.5%; }
        .capacity-seg--lunch  { background: #e2e8f0; width: 12.5%; }
        .capacity-seg--admin  {
          background: #f1f5f9;
          width: 18.75%;
          border: 1px solid #e8e5e0;
          box-sizing: border-box;
        }
        .capacity-seg--admin span { color: #8a8680; }
        .capacity-seg--lunch span { color: #8a8680; }

        .capacity-legend {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 14px;
        }
        .capacity-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          color: #8a8680;
        }
        .capacity-legend-swatch {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .capacity-note {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          color: #8a8680;
          margin-top: 12px;
        }
      `}</style>

      <PageNav title="Gündəlik İş Normaları" current={4} total={4} nextPath={null} />

      <div className="container">

        <header className="page-header">
          <p className="page-header__label">04 · Gündəlik Normalar</p>
          <h1 className="page-header__title">Effektiv iş vaxtı<br />və yük planlaması</h1>
          <p className="page-header__desc">Realistic planlamanın əsasları — "8 saat işləmək" ilə "8 saat effektiv işləmək" eyni deyil.</p>
        </header>

        {/* Nəzəri izah */}
        <div className="card">
          <p className="prose">
            "8 saat işləyirəm" ilə "8 saat effektiv iş görürəm" eyni deyil. Görüşlər, bloklayıcılar, kontekst dəyişiklikləri — bunların hamısı effektiv iş vaxtını azaldır. Realistic planlamanın əsası budur.
          </p>
        </div>

        {/* Referans nöqtələr */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Referans Nöqtələr</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="stat-row">
            <span className="stat-row__label">Gündəlik effektiv iş (ortalama)</span>
            <span className="stat-row__value stat-row__value--accent">~3 saat</span>
          </div>
          <div className="stat-row">
            <span className="stat-row__label">3 pt code review üçün tələb olunan vaxt</span>
            <span className="stat-row__value stat-row__value--orange">~4.5 saat</span>
          </div>
          <div className="stat-row">
            <span className="stat-row__label">Sprint üçün maksimum yük</span>
            <span className="stat-row__value stat-row__value--green">18 pt  (13 + 5)</span>
          </div>
        </div>

        {/* Nümunə Gün */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Nümunə Gün</span>
          <span className="section-divider__line"></span>
        </div>

        {/* CHART 1: Gantt */}
        <div className="card">
          <p className="chart-title">Gün Planı — Developer A-nın günü (09:00–17:00)</p>
          <div className="gantt-wrap">
            <svg className="gantt-svg" width="100%" viewBox="0 0 640 130" xmlns="http://www.w3.org/2000/svg" aria-label="Gün planı Gantt diaqramı">

              {/* Background grid lines for each hour */}
              <line x1="50"    y1="20" x2="50"    y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="122.5" y1="20" x2="122.5" y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="195"   y1="20" x2="195"   y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="267.5" y1="20" x2="267.5" y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="340"   y1="20" x2="340"   y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="412.5" y1="20" x2="412.5" y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="485"   y1="20" x2="485"   y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="557.5" y1="20" x2="557.5" y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="630"   y1="20" x2="630"   y2="80" stroke="#e8e5e0" strokeWidth="1" strokeDasharray="3 3"/>

              {/* Baseline */}
              <line x1="50" y1="80" x2="630" y2="80" stroke="#e8e5e0" strokeWidth="1"/>

              {/* Block 1: Development 09:00–10:30 (accent blue) */}
              <rect x="50" y="30" width="108.75" height="36" rx="4" fill="#eff4ff" stroke="#2563eb" strokeWidth="1"/>
              <text x="104.375" y="52" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fontWeight="600" fill="#2563eb" textAnchor="middle">Development</text>

              {/* Block 2: Standup 10:30–11:00 (light grey) */}
              <rect x="158.75" y="30" width="36.25" height="36" rx="4" fill="#f1f5f9" stroke="#e8e5e0" strokeWidth="1"/>
              <text x="177" y="16" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="9" fill="#8a8680" textAnchor="middle">görüş</text>
              <line x1="177" y1="18" x2="177" y2="30" stroke="#8a8680" strokeWidth="0.8"/>

              {/* Block 3: Code Review 11:00–12:30 (orange) */}
              <rect x="195" y="30" width="108.75" height="36" rx="4" fill="#fff7ed" stroke="#ea580c" strokeWidth="1"/>
              <text x="249.375" y="52" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fontWeight="600" fill="#ea580c" textAnchor="middle">Code Review</text>

              {/* Block 4: Nahar 12:30–13:30 (very light) */}
              <rect x="303.75" y="30" width="72.5" height="36" rx="4" fill="#f8fafc" stroke="#e8e5e0" strokeWidth="1"/>
              <text x="340" y="52" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">Nahar</text>

              {/* Block 5: Development 13:30–15:00 (accent blue) */}
              <rect x="376.25" y="30" width="108.75" height="36" rx="4" fill="#eff4ff" stroke="#2563eb" strokeWidth="1"/>
              <text x="430.625" y="52" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fontWeight="600" fill="#2563eb" textAnchor="middle">Development</text>

              {/* Block 6: Admin/Digər 15:00–17:00 (grey) */}
              <rect x="485" y="30" width="145" height="36" rx="4" fill="#f1f5f9" stroke="#e8e5e0" strokeWidth="1"/>
              <text x="557.5" y="52" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">Digər / Admin</text>

              {/* X-axis hour labels */}
              <text x="50"    y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">09:00</text>
              <text x="122.5" y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">10:00</text>
              <text x="195"   y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">11:00</text>
              <text x="267.5" y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">12:00</text>
              <text x="340"   y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">13:00</text>
              <text x="412.5" y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">14:00</text>
              <text x="485"   y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">15:00</text>
              <text x="557.5" y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">16:00</text>
              <text x="630"   y="96" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="10" fill="#8a8680" textAnchor="middle">17:00</text>

            </svg>
          </div>

          <div className="gantt-pills">
            <span className="gantt-pill gantt-pill--green">Effektiv dev vaxtı: 3 saat</span>
            <span className="gantt-pill gantt-pill--orange">Review vaxtı: 1.5 saat</span>
            <span className="gantt-pill gantt-pill--grey">Görüşlər + Admin: 2.5 saat</span>
          </div>
        </div>

        {/* Planlamanın əsasları */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Planlamanın Əsasları</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Gündəlik <strong>3 saatlıq</strong> effektiv iş normasını sprint planlamasında əsas götür.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Review vaxtı development vaxtına <strong>əlavə edilir</strong> — onun yerinə keçmir.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--orange"></span>
            <span className="rule-text">Sprint-ə <strong>21 pt</strong> götürmək overcommit sayılır.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--green"></span>
            <span className="rule-text">Bloklayıcı varsa — o gün üçün capacity daha aşağıdır, bunu <strong>nəzərə al</strong>.</span>
          </div>
        </div>

        {/* CHART 2: Capacity Bölgüsü */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">8 saatlıq iş günü — real bölgü</p>
          <div className="capacity-bar-wrap">
            <div className="capacity-seg capacity-seg--dev"><span>Dev · 3s</span></div>
            <div className="capacity-seg capacity-seg--review"><span>Review</span></div>
            <div className="capacity-seg capacity-seg--meet"><span>Görüş</span></div>
            <div className="capacity-seg capacity-seg--lunch"><span>Nahar</span></div>
            <div className="capacity-seg capacity-seg--admin"><span>Admin</span></div>
          </div>
          <div className="capacity-legend">
            <span className="capacity-legend-item">
              <span className="capacity-legend-swatch" style={{background:'#2563eb'}}></span>Development — 3s
            </span>
            <span className="capacity-legend-item">
              <span className="capacity-legend-swatch" style={{background:'#ea580c'}}></span>Code Review — 1.5s
            </span>
            <span className="capacity-legend-item">
              <span className="capacity-legend-swatch" style={{background:'#94a3b8'}}></span>Görüşlər — 1s
            </span>
            <span className="capacity-legend-item">
              <span className="capacity-legend-swatch" style={{background:'#e2e8f0', border:'1px solid #cbd5e1'}}></span>Nahar — 1s
            </span>
            <span className="capacity-legend-item">
              <span className="capacity-legend-swatch" style={{background:'#f1f5f9', border:'1px solid #e8e5e0'}}></span>Admin/Digər — 1.5s
            </span>
          </div>
          <p className="capacity-note">Effektiv development: 3 saat / 8 saatdan</p>
        </div>

        {/* Do / Don't */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Do / Don't</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="do-dont">
            <div>
              <p className="do-dont__col-header do-dont__col-header--do">✓ Do</p>
              <ul>
                <li>Sprint-i real capacity-yə görə planla</li>
                <li>Review vaxtını əvvəlcədən ayır</li>
              </ul>
            </div>
            <div>
              <p className="do-dont__col-header do-dont__col-header--dont">✕ Don't</p>
              <ul>
                <li>"Axşama qədər işləyərəm" hesabı ilə 21 pt götürmə</li>
                <li>Review-u development vaxtından say</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="alert alert-blue">
            <span className="alert__icon">ℹ</span>
            <span>Review vaxtı və development vaxtı bir-birini əvəz etmir — ikisi toplanır.</span>
          </div>
        </div>

      </div>
    </>
  )
}
