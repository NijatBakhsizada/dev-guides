import PageNav from '../components/PageNav.jsx'

export default function CodeReview() {
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

        /* ── Review Process Step Flow ── */
        .step-flow {
          display: flex;
          align-items: flex-start;
          gap: 0;
          flex-wrap: nowrap;
          overflow-x: auto;
        }
        .step-flow__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .step-flow__box {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          border: 1px solid #e8e5e0;
        }
        .step-flow__box--accent { background: #eff4ff; border-color: #2563eb; }
        .step-flow__box--green  { background: #f0fdf4; border-color: #16a34a; }
        .step-flow__box--orange { background: #fff7ed; border-color: #ea580c; }

        .step-flow__label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          color: #8a8680;
          text-align: center;
          margin-top: 6px;
          max-width: 56px;
          line-height: 1.3;
        }

        .step-flow__arrow {
          display: flex;
          align-items: center;
          padding: 0 4px;
          padding-bottom: 22px;
          flex-shrink: 0;
        }
        .step-flow__arrow svg {
          display: block;
        }

        @media (max-width: 500px) {
          .step-flow {
            display: grid;
            grid-template-columns: repeat(3, 48px) 12px repeat(3, 48px);
            gap: 0 4px;
            justify-content: start;
            overflow-x: visible;
            row-gap: 12px;
          }
        }

        /* ── Impact bar chart ── */
        .impact-chart {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .impact-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .impact-row__label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          color: #1a1814;
          width: 220px;
          flex-shrink: 0;
        }
        @media (max-width: 540px) {
          .impact-row__label { width: 140px; font-size: 11px; }
        }
        .impact-row__track {
          flex: 1;
          height: 18px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
        }
        .impact-row__fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s;
        }
        .impact-row__fill--green  { background: #16a34a; }
        .impact-row__fill--accent { background: #2563eb; }
        .impact-row__fill--red    {
          background: #fecaca;
          border: 1.5px dashed #dc2626;
          box-sizing: border-box;
        }
        .impact-row__pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #8a8680;
          width: 36px;
          text-align: right;
          flex-shrink: 0;
        }
        .impact-row--last-note {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          color: #dc2626;
          margin-left: 232px;
          margin-top: -4px;
        }
        @media (max-width: 540px) {
          .impact-row--last-note { margin-left: 152px; }
        }
      `}</style>

      <PageNav title="Code Review Qaydaları" current={3} total={4} nextPath="/04-daily-norms" />

      <div className="container">

        <header className="page-header">
          <p className="page-header__label">03 · Code Review</p>
          <h1 className="page-header__title">Kod yoxlaması<br />standartları</h1>
          <p className="page-header__desc">Keyfiyyəti qorumaq, bilik paylaşmaq, komanda standartlarını saxlamaq.</p>
        </header>

        {/* Nəzəri izah */}
        <div className="card">
          <p className="prose">
            Code review yalnız xətaları tapmaq üçün deyil — bilik paylaşmaq, kod keyfiyyətini qorumaq və komanda standartlarını saxlamaq üçündür. Yaxşı review həm reviewer-i, həm də author-u inkişaf etdirir.
          </p>
        </div>

        {/* CHART 1: Review Prosesi Step Flow */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">Review Prosesi — Addım-addım axın</p>
          <div className="step-flow">

            {/* Step 1 */}
            <div className="step-flow__item">
              <div className="step-flow__box step-flow__box--accent">📋</div>
              <span className="step-flow__label">Brief oxu</span>
            </div>
            <div className="step-flow__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#8a8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 2 */}
            <div className="step-flow__item">
              <div className="step-flow__box step-flow__box--accent">⬇</div>
              <span className="step-flow__label">Checkout</span>
            </div>
            <div className="step-flow__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#8a8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="step-flow__item">
              <div className="step-flow__box step-flow__box--green">▶</div>
              <span className="step-flow__label">Run et</span>
            </div>
            <div className="step-flow__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#8a8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 4 */}
            <div className="step-flow__item">
              <div className="step-flow__box step-flow__box--green">🔍</div>
              <span className="step-flow__label">Happy path</span>
            </div>
            <div className="step-flow__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#8a8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 5 */}
            <div className="step-flow__item">
              <div className="step-flow__box step-flow__box--orange">⚠</div>
              <span className="step-flow__label">Edge cases</span>
            </div>
            <div className="step-flow__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#8a8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 6 */}
            <div className="step-flow__item">
              <div className="step-flow__box step-flow__box--accent">✍</div>
              <span className="step-flow__label">Feedback</span>
            </div>

          </div>
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
            <span className="rule-text">Hər sprint minimum <strong>3 pt</strong> review üçün ayrılır.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--green"></span>
            <span className="rule-text">Reviewer kodu mütləq özü <strong>yerli olaraq run</strong> etməlidir.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Məntiqi yoxlanış aparılır: <strong>edge case</strong>, business logic, performans.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--orange"></span>
            <span className="rule-text">Yalnız <strong>syntax baxışı</strong> review sayılmır.</span>
          </div>
          <div className="rule-row">
            <span className="icon-badge icon-badge--accent"></span>
            <span className="rule-text">Feedback <strong>konstruktiv</strong> olmalıdır — şəxsə deyil, koda yönəlmiş.</span>
          </div>
        </div>

        {/* CHART 2: Review Keyfiyyəti Təsiri */}
        <div className="card" style={{marginTop:'16px'}}>
          <p className="chart-title">Düzgün review-un komandaya töhfəsi</p>
          <div className="impact-chart">

            <div className="impact-row">
              <span className="impact-row__label">Bug-ların erkən aşkarlanması</span>
              <div className="impact-row__track">
                <div className="impact-row__fill impact-row__fill--green" style={{width:'85%'}}></div>
              </div>
              <span className="impact-row__pct">85%</span>
            </div>

            <div className="impact-row">
              <span className="impact-row__label">Bilik paylaşımı</span>
              <div className="impact-row__track">
                <div className="impact-row__fill impact-row__fill--accent" style={{width:'70%'}}></div>
              </div>
              <span className="impact-row__pct">70%</span>
            </div>

            <div className="impact-row">
              <span className="impact-row__label">Kod keyfiyyəti</span>
              <div className="impact-row__track">
                <div className="impact-row__fill impact-row__fill--green" style={{width:'90%'}}></div>
              </div>
              <span className="impact-row__pct">90%</span>
            </div>

            <div className="impact-row">
              <span className="impact-row__label">Komanda standartları</span>
              <div className="impact-row__track">
                <div className="impact-row__fill impact-row__fill--accent" style={{width:'75%'}}></div>
              </div>
              <span className="impact-row__pct">75%</span>
            </div>

            <div className="impact-row">
              <span className="impact-row__label">Yalnız syntax review ilə</span>
              <div className="impact-row__track">
                <div className="impact-row__fill impact-row__fill--red" style={{width:'20%'}}></div>
              </div>
              <span className="impact-row__pct">20%</span>
            </div>

          </div>
          <p className="chart-note">Yalnız syntax review-un effekti</p>
        </div>

        {/* Proses addımları */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Review Prosesi</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <ol className="numbered-list">
            <li>Tapşırığın tələblərini oxu (ticket / brief)</li>
            <li>Kodu checkout et və run et</li>
            <li>Happy path-i yoxla</li>
            <li>Edge case-ləri düşün və test et</li>
            <li>Business logic-in düzgünlüyünü yoxla</li>
            <li>Feedback yaz — konkret, izahlı, hörmətli</li>
          </ol>
        </div>

        {/* Nümunə */}
        <div className="section-divider">
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Nümunə</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="example-box">{`✓  Yaxşı feedback:
   "Bu funksiyada boş array gəldikdə crash ola bilər,
    burada early return əlavə etmək daha təhlükəsiz olar."

✗  Pis feedback:
   "Bu kod pis yazılıb."  (izah yoxdur, istiqamət yoxdur)`}</div>

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
                <li>Kodu run etdikdən sonra review yaz</li>
                <li>"Niyə belə etdin?" sualını ver — bəlkə səbəbi var</li>
              </ul>
            </div>
            <div>
              <p className="do-dont__col-header do-dont__col-header--dont">✕ Don't</p>
              <ul>
                <li>Yalnız formatlamaya baxıb "LGTM" yazma</li>
                <li>Review-u 5 dəqiqəyə bitirmə — bu iş vaxt tələb edir</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="alert alert-green">
            <span className="alert__icon">✓</span>
            <span>Review prosesi: checkout et → run et → məntiqi izlə → feedback yaz.</span>
          </div>
        </div>

      </div>
    </>
  )
}
