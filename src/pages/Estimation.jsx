import PageNav from '../components/PageNav.jsx'

export default function Estimation() {
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

        /* ── Sprint comparison chart ── */
        .sprint-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 540px) {
          .sprint-compare { grid-template-columns: 1fr; }
        }
        .sprint-panel {
          border: 1.5px solid #e8e5e0;
          border-radius: 8px;
          padding: 16px;
        }
        .sprint-panel--good  { border-color: #16a34a; background: #f0fdf4; }
        .sprint-panel--bad   { border-color: #dc2626; background: #fef2f2; }

        .sprint-panel__header {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          margin: 0 0 12px 0;
        }
        .sprint-panel--good  .sprint-panel__header { color: #16a34a; }
        .sprint-panel--bad   .sprint-panel__header { color: #dc2626; }

        .sprint-bar-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 7px;
        }
        .sprint-bar-row__label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8a8680;
          width: 70px;
          flex-shrink: 0;
        }
        .sprint-bar-row__track {
          flex: 1;
          height: 20px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        .sprint-bar-row__fill {
          height: 100%;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 6px;
          box-sizing: border-box;
        }
        .sprint-bar-row__fill span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #ffffff;
          white-space: nowrap;
        }
        .sprint-bar-row__fill--accent { background: #2563eb; }
        .sprint-bar-row__fill--green  { background: #16a34a; }
        .sprint-bar-row__fill--orange { background: #ea580c; }

        .sprint-bar-row__val {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8a8680;
          width: 28px;
          text-align: right;
          flex-shrink: 0;
        }

        .sprint-no-review {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          color: #dc2626;
          margin: 4px 0 8px 78px;
        }

        .sprint-total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid #e8e5e0;
        }
        .sprint-total__label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          color: #8a8680;
        }
        .sprint-total__pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
        }
        .sprint-total__pill--green { background: #f0fdf4; color: #16a34a; border: 1px solid #16a34a; }
        .sprint-total__pill--red   { background: #fef2f2; color: #dc2626; border: 1px solid #dc2626; }

        /* max line indicator */
        .sprint-maxline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          color: #8a8680;
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sprint-maxline::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          border-top: 1.5px dashed #8a8680;
        }

        /* ── Donut chart ── */
        .donut-wrap {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .donut-svg {
          flex-shrink: 0;
        }
        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .donut-legend-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .donut-legend-swatch {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          flex-shrink: 0;
        }
        .donut-legend-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          color: #1a1814;
        }
        .donut-legend-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #8a8680;
          margin-left: auto;
          padding-left: 12px;
        }
      `}</style>

      <PageNav title="Estimation Qaydaları" current={2} total={4} nextPath="/03-code-review" />

      <div className="container">

        <header className="page-header">
          <p className="page-header__label">02 · Estimation</p>
          <h1 className="page-header__title">Sprint planlaması<br />qaydaları</h1>
          <p className="page-header__desc">Estimate etmək — tapşırığı tam başa düşdüyünüzün sübutu.</p>
        </header>

        {/* Nəzəri izah */}
        <div className="card">
          <p className="prose">
            Estimation yalnız "bu neçə saata çıxar?" sualı deyil. O həm də "bu tapşırığı tam başa düşürəmmi?" sualının cavabıdır. Estimate etmək çətin gəlirsə — bu, tapşırığın daha çox analiz tələb etdiyinin işarəsidir.
          </p>
        </div>

        {/* Əsas qaydalar */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Əsas Qaydalar</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="rule-row">
            <span className="icon-badge icon-badge--green"></span>
            <span className="rule-text">Tək task üçün maks. <strong>13 pt</strong>. Daha böyükdürsə — bölün.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--green"></span>
            <span className="rule-text"><strong>21 pt</strong> olan task sprint-ə daxil edilmir.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Hər developer hər sprint minimum <strong>3 pt</strong> code review üçün ayırmalıdır. <span className="tag tag-required">məcburi</span></span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Estimate zamanı review vaxtı development vaxtından <strong>ayrıca</strong> planlanır.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Tapşırığı estimate edən şəxs onun nə etdiyini <strong>tam başa düşməlidir</strong>.</span>
          </div>
        </div>

        {/* CHART 1: Sprint Yükü Müqayisəsi */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">Sprint Yükü Müqayisəsi</p>
          <div className="sprint-compare">

            {/* LEFT: Düzgün Sprint */}
            <div className="sprint-panel sprint-panel--good">
              <p className="sprint-panel__header">✓ Düzgün Sprint</p>

              <div className="sprint-bar-row">
                <span className="sprint-bar-row__label">Task A</span>
                <div className="sprint-bar-row__track">
                  <div className="sprint-bar-row__fill sprint-bar-row__fill--accent" style={{width:'50%'}}>
                    <span>8 pt</span>
                  </div>
                </div>
                <span className="sprint-bar-row__val">8</span>
              </div>

              <div className="sprint-bar-row">
                <span className="sprint-bar-row__label">Task B</span>
                <div className="sprint-bar-row__track">
                  <div className="sprint-bar-row__fill sprint-bar-row__fill--green" style={{width:'31%'}}>
                    <span>5 pt</span>
                  </div>
                </div>
                <span className="sprint-bar-row__val">5</span>
              </div>

              <div className="sprint-bar-row">
                <span className="sprint-bar-row__label">Code Review</span>
                <div className="sprint-bar-row__track">
                  <div className="sprint-bar-row__fill sprint-bar-row__fill--orange" style={{width:'19%'}}>
                    <span>3 pt</span>
                  </div>
                </div>
                <span className="sprint-bar-row__val">3</span>
              </div>

              <div className="sprint-maxline">maks. xətt — 18 pt</div>

              <div className="sprint-total">
                <span className="sprint-total__label">Cəm</span>
                <span className="sprint-total__pill sprint-total__pill--green">16 pt</span>
              </div>
            </div>

            {/* RIGHT: Yanlış Sprint */}
            <div className="sprint-panel sprint-panel--bad">
              <p className="sprint-panel__header">✗ Yanlış Sprint</p>

              <div className="sprint-bar-row">
                <span className="sprint-bar-row__label">Task A</span>
                <div className="sprint-bar-row__track">
                  <div className="sprint-bar-row__fill sprint-bar-row__fill--accent" style={{width:'62%'}}>
                    <span>13 pt</span>
                  </div>
                </div>
                <span className="sprint-bar-row__val">13</span>
              </div>

              <div className="sprint-bar-row">
                <span className="sprint-bar-row__label">Task B</span>
                <div className="sprint-bar-row__track">
                  <div className="sprint-bar-row__fill sprint-bar-row__fill--green" style={{width:'38%'}}>
                    <span>8 pt</span>
                  </div>
                </div>
                <span className="sprint-bar-row__val">8</span>
              </div>

              <p className="sprint-no-review">⚠ review yoxdur</p>

              <div className="sprint-maxline" style={{color:'#dc2626'}}>maks. xətt — 18 pt aşıldı</div>

              <div className="sprint-total">
                <span className="sprint-total__label">Cəm</span>
                <span className="sprint-total__pill sprint-total__pill--red">21 pt</span>
              </div>
            </div>

          </div>
        </div>

        {/* Nümunə */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Nümunə</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="example-box">{`✓  Düzgün sprint yükü:
   Task A:       8 pt
   Task B:       5 pt
   Code Review:  3 pt
   ─────────────────
   Cəm:         16 pt ✓

✗  Yanlış sprint yükü:
   Task A:       13 pt
   Task B:        8 pt
   ─────────────────
   Cəm:          21 pt ✗  (review yoxdur, həddindən artıqdır)`}</div>

        {/* CHART 2: Vaxt Bölgüsü */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">Vaxt Bölgüsü — Sprint vaxtının real paylanması</p>
          <div className="donut-wrap">

            <svg className="donut-svg" width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-label="Sprint vaxt bölgüsü">
              {/* Base track */}
              <circle cx="80" cy="80" r="60" fill="none" stroke="#e8e5e0" strokeWidth="24"/>

              {/* Segment 3: Planning/Other 26% */}
              <circle cx="80" cy="80" r="60" fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="24"
                      strokeDasharray="98.0 278.99"
                      strokeDashoffset="192.34"
                      transform="rotate(-90 80 80)"/>

              {/* Segment 2: Code Review 19% (orange) */}
              <circle cx="80" cy="80" r="60" fill="none"
                      stroke="#ea580c"
                      strokeWidth="24"
                      strokeDasharray="71.6 305.39"
                      strokeDashoffset="263.94"
                      transform="rotate(-90 80 80)"/>

              {/* Segment 1: Development 55% (accent blue) */}
              <circle cx="80" cy="80" r="60" fill="none"
                      stroke="#2563eb"
                      strokeWidth="24"
                      strokeDasharray="207.3 169.69"
                      strokeDashoffset="94.25"
                      transform="rotate(-90 80 80)"/>

              {/* Center text */}
              <text x="80" y="76" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fontWeight="600" fill="#1a1814" textAnchor="middle">Sprint</text>
              <text x="80" y="91" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fontWeight="600" fill="#1a1814" textAnchor="middle">vaxtı</text>
            </svg>

            <div className="donut-legend">
              <div className="donut-legend-item">
                <span className="donut-legend-swatch" style={{background:'#2563eb'}}></span>
                <span className="donut-legend-label">Development</span>
                <span className="donut-legend-pct">55%</span>
              </div>
              <div className="donut-legend-item">
                <span className="donut-legend-swatch" style={{background:'#ea580c'}}></span>
                <span className="donut-legend-label">Code Review</span>
                <span className="donut-legend-pct">19%</span>
              </div>
              <div className="donut-legend-item">
                <span className="donut-legend-swatch" style={{background:'#e2e8f0'}}></span>
                <span className="donut-legend-label">Planlaşdırma / Digər</span>
                <span className="donut-legend-pct">26%</span>
              </div>
            </div>

          </div>
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
                <li>Tapşırığı başa düşmədən estimate etməyi dayandır, sual ver</li>
                <li>Review pointini əvvəlcədən ayır, sonradan əlavə etmə</li>
              </ul>
            </div>
            <div>
              <p className="do-dont__col-header do-dont__col-header--dont">✕ Don't</p>
              <ul>
                <li>"Sonra görərik" deyərək 21 pt götürmə</li>
                <li>Review üçün point ayırmadan sprint-i bağlama</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
