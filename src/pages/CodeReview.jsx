import PageNav from '../components/PageNav.jsx'

export default function CodeReview() {
  return (
    <>
      <style>{`
        /* ── Review step timeline ── */
        .review-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .review-timeline::before {
          content: '';
          position: absolute;
          left: 23px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: linear-gradient(to bottom, #2563eb, #16a34a, #ea580c, #2563eb, #8b5cf6, #16a34a);
          border-radius: 2px;
          z-index: 0;
        }
        .rt-step {
          display: flex;
          gap: 20px;
          position: relative;
          z-index: 1;
          padding-bottom: 6px;
        }
        .rt-step__num {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Epilogue', sans-serif;
          font-size: 16px;
          font-weight: 800;
          flex-shrink: 0;
          border: 2px solid;
          background: var(--white);
        }
        .rt-step__num--blue   { color: #2563eb; border-color: #2563eb; }
        .rt-step__num--green  { color: #16a34a; border-color: #16a34a; }
        .rt-step__num--orange { color: #ea580c; border-color: #ea580c; }
        .rt-step__num--violet { color: #7c3aed; border-color: #7c3aed; }
        .rt-step__num--teal   { color: #0891b2; border-color: #0891b2; }
        .rt-step__num--emerald{ color: #059669; border-color: #059669; }

        .rt-step__body {
          flex: 1;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--white);
          overflow: hidden;
          margin-bottom: 12px;
        }
        .rt-step__head {
          padding: 14px 18px 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border-light);
        }
        .rt-step__icon { font-size: 20px; }
        .rt-step__title {
          font-family: 'Epilogue', sans-serif;
          font-weight: 800;
          font-size: 15px;
          color: var(--text);
        }
        .rt-step__badge {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 999px;
          background: var(--bg);
          color: var(--muted);
          border: 1px solid var(--border);
          white-space: nowrap;
        }
        .rt-step__content {
          padding: 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rt-step__desc {
          font-size: 13.5px;
          color: #3d3a35;
          line-height: 1.6;
        }

        /* Sub-checklist inside step */
        .rt-checklist {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .rt-check {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          color: var(--text);
          line-height: 1.5;
        }
        .rt-check__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .rt-check__dot--blue   { background: #2563eb; }
        .rt-check__dot--green  { background: #16a34a; }
        .rt-check__dot--orange { background: #ea580c; }
        .rt-check__dot--violet { background: #7c3aed; }
        .rt-check__dot--teal   { background: #0891b2; }
        .rt-check__dot--emerald{ background: #059669; }

        /* Tip box */
        .rt-tip {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          background: #fffbeb;
          border: 1px solid #fde68a;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 12.5px;
          color: #92400e;
          line-height: 1.5;
        }
        .rt-tip__icon { font-size: 14px; flex-shrink: 0; margin-top: 1px; }

        /* Mini visual inside step */
        .rt-visual {
          background: var(--bg);
          border-radius: 8px;
          padding: 12px 14px;
          border: 1px solid var(--border-light);
        }
        .rt-visual__label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Happy path diagram */
        .happy-path {
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
          row-gap: 6px;
        }
        .hp-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .hp-node__box {
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          white-space: nowrap;
        }
        .hp-node__box--blue   { background: #eff4ff; color: #2563eb; border: 1px solid #bfdbfe; }
        .hp-node__box--green  { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
        .hp-node__sub {
          font-size: 10px;
          color: var(--muted);
          text-align: center;
          max-width: 72px;
          line-height: 1.2;
        }
        .hp-arrow {
          padding: 0 4px;
          padding-bottom: 16px;
          color: var(--muted);
          font-size: 13px;
          flex-shrink: 0;
        }

        /* Edge case matrix */
        .edge-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .edge-cell {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .edge-cell__tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .edge-cell__text { color: var(--text); line-height: 1.4; }
        .edge-cell--orange { border-color: #fed7aa; background: #fff7ed; }
        .edge-cell--red    { border-color: #fecaca; background: #fef2f2; }

        /* Business logic check */
        .logic-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 0;
          border-bottom: 1px solid var(--border-light);
          font-size: 13px;
        }
        .logic-row:last-child { border-bottom: none; }
        .logic-row__q { flex: 1; color: var(--text); }
        .logic-row__yn {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }
        .yn-btn {
          padding: 2px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          cursor: default;
          border: 1px solid;
        }
        .yn-btn--yes { background: #f0fdf4; color: #16a34a; border-color: #bbf7d0; }
        .yn-btn--no  { background: #fef2f2; color: #dc2626; border-color: #fecaca; }

        /* Severity table */
        .severity-table {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        .sev-row {
          display: grid;
          grid-template-columns: 110px 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-light);
        }
        .sev-row:last-child { border-bottom: none; }
        .sev-row--header {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .sev-row--header span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .sev-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid;
          white-space: nowrap;
        }
        .sev-tag--blocker  { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .sev-tag--mustfix  { background: #fff7ed; color: #ea580c; border-color: #fed7aa; }
        .sev-tag--suggest  { background: #eff4ff; color: #2563eb; border-color: #bfdbfe; }
        .sev-tag--nit      { background: var(--bg); color: var(--muted); border-color: var(--border); }
        .sev-desc { font-size: 12.5px; color: var(--text); line-height: 1.5; }
        .sev-action {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          text-align: right;
          white-space: nowrap;
        }

        /* Decision tree */
        .dtree {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .dtree__node {
          padding: 10px 20px;
          border-radius: 8px;
          border: 1.5px solid;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          min-width: 180px;
        }
        .dtree__node--blue   { background: #eff4ff; color: #2563eb; border-color: #2563eb; }
        .dtree__node--diamond {
          transform: rotate(45deg);
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fffbeb;
          border: 1.5px solid #f59e0b;
          border-radius: 6px;
        }
        .dtree__node--diamond span {
          transform: rotate(-45deg);
          font-size: 12px;
          font-weight: 600;
          color: #92400e;
          text-align: center;
          line-height: 1.3;
          display: block;
          max-width: 70px;
        }
        .dtree__connector {
          width: 2px;
          height: 20px;
          background: var(--border);
          margin: 0 auto;
        }
        .dtree__branch {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          width: 100%;
          align-items: start;
        }
        .dtree__branch-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .dtree__branch-label {
          font-size: 11px;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 4px;
        }
        .dtree__outcome {
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          border: 1.5px solid;
          width: 100%;
        }
        .dtree__outcome--green  { background: #f0fdf4; color: #16a34a; border-color: #16a34a; }
        .dtree__outcome--orange { background: #fff7ed; color: #ea580c; border-color: #ea580c; }
        .dtree__outcome--red    { background: #fef2f2; color: #dc2626; border-color: #dc2626; }
        .dtree__vline {
          width: 2px;
          height: 16px;
          background: var(--border);
        }

        /* Feedback template */
        .fb-template {
          background: #1a1814;
          border-radius: 10px;
          padding: 16px 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          line-height: 1.7;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .fb-line { display: flex; gap: 8px; align-items: flex-start; }
        .fb-key   { color: #7dd3fc; white-space: nowrap; }
        .fb-value { color: #a3e635; }
        .fb-value--gray  { color: #94a3b8; }
        .fb-value--orange{ color: #fb923c; }
        .fb-value--white { color: #f8fafc; }
        .fb-value--pink  { color: #f472b6; }
        .fb-comment { color: #475569; }
        .fb-sep {
          height: 1px;
          background: #2d2a24;
          margin: 6px 0;
        }

        /* Good/bad feedback examples */
        .fb-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 560px) {
          .fb-compare { grid-template-columns: 1fr; }
          .edge-matrix { grid-template-columns: 1fr; }
          .sev-row { grid-template-columns: 90px 1fr; }
          .sev-action { display: none; }
          .dtree__branch { grid-template-columns: 1fr; gap: 4px; }
        }
        .fb-ex {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .fb-ex__head {
          padding: 8px 14px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .fb-ex__head--good { background: #f0fdf4; color: #16a34a; border-bottom: 1px solid #bbf7d0; }
        .fb-ex__head--bad  { background: #fef2f2; color: #dc2626; border-bottom: 1px solid #fecaca; }
        .fb-ex__body {
          padding: 12px 14px;
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--text);
          background: var(--white);
        }

        /* Time distribution */
        .time-dist {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .td-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .td-label {
          width: 160px;
          flex-shrink: 0;
          font-size: 12.5px;
          color: var(--text);
        }
        .td-bar-wrap {
          flex: 1;
          height: 20px;
          background: var(--bg);
          border-radius: 5px;
          overflow: hidden;
          border: 1px solid var(--border-light);
        }
        .td-bar {
          height: 100%;
          border-radius: 5px;
          display: flex;
          align-items: center;
          padding-left: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: white;
          font-weight: 600;
        }
        .td-bar--blue   { background: #2563eb; }
        .td-bar--green  { background: #16a34a; }
        .td-bar--orange { background: #ea580c; }
        .td-bar--violet { background: #7c3aed; }
        .td-bar--teal   { background: #0891b2; }

        @media (max-width: 500px) {
          .td-label { width: 120px; font-size: 11.5px; }
          .review-timeline::before { left: 19px; }
          .rt-step__num { width: 40px; height: 40px; font-size: 14px; }
        }
      `}</style>

      <PageNav title="Code Review Qaydaları" current={3} total={4} nextPath="/04-daily-norms" />

      <div className="container">

        <header className="page-header">
          <p className="page-header__label">03 · Code Review</p>
          <h1 className="page-header__title">Review Prosesi</h1>
          <p className="page-header__desc">Addım-addım axın, vizual nümunələr, feedback şablonu.</p>
        </header>

        {/* ── Intro card ── */}
        <div className="card">
          <p className="prose">
            Code review yalnız xətaları tapmaq üçün deyil — bilik paylaşmaq, kod keyfiyyətini qorumaq və komanda standartlarını saxlamaq üçündür. <strong>Hər addımın öz məqsədi var</strong> — birini atlamaq bütün prosesi zəiflədir.
          </p>
        </div>

        {/* ══ SECTION: Step-by-step timeline ══ */}
        <div className="section-divider" style={{marginTop:'28px'}}>
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Proses Axını</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="review-timeline">

          {/* ── STEP 1 ── */}
          <div className="rt-step">
            <div className="rt-step__num rt-step__num--blue">1</div>
            <div className="rt-step__body">
              <div className="rt-step__head">
                <span className="rt-step__icon">📋</span>
                <span className="rt-step__title">Tapşırığın tələblərini oxu</span>
                <span className="rt-step__badge">~5 dəq</span>
              </div>
              <div className="rt-step__content">
                <p className="rt-step__desc">
                  Koda baxmazdan əvvəl <strong>ticket-i, brief-i və acceptance criteria-nı</strong> oxu. Kontekst olmadan kod yoxlamaq kor-koranə baxışdır.
                </p>
                <div className="rt-checklist">
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--blue"></div>
                    <span>Ticket-də nə tələb olunur? Scope nədir?</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--blue"></div>
                    <span>Acceptance criteria var? Hər bəndi anla.</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--blue"></div>
                    <span>Əlaqəli PR-lar, dizayn faylları, ya da API doc var?</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--blue"></div>
                    <span>PR description-ı oxu — author nəyi dəyişdirdiyini yazmış?</span>
                  </div>
                </div>
                <div className="rt-tip">
                  <span className="rt-tip__icon">💡</span>
                  <span>Ticket yoxdursa author-dan <em>"Bu PR-da əsas dəyişiklik nədir?"</em> soruşmaq icazəlidir — lazım olan konteksti almaq reviewerin hüququdur.</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── STEP 2 ── */}
          <div className="rt-step">
            <div className="rt-step__num rt-step__num--green">2</div>
            <div className="rt-step__body">
              <div className="rt-step__head">
                <span className="rt-step__icon">⬇️</span>
                <span className="rt-step__title">Kodu checkout et və run et</span>
                <span className="rt-step__badge">~10 dəq</span>
              </div>
              <div className="rt-step__content">
                <p className="rt-step__desc">
                  Yalnız kod oxumaq kifayət deyil. <strong>Yerli olaraq run etmək</strong> sənin reallıq yoxlamandır — gözlənilməz davranış yalnız işləyərkən görünür.
                </p>
                <div className="rt-visual">
                  <p className="rt-visual__label">Terminal flow</p>
                  <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'12px', lineHeight:'1.8', color:'#3d3a35'}}>
                    <div><span style={{color:'#8a8680'}}>$</span> git fetch origin</div>
                    <div><span style={{color:'#8a8680'}}>$</span> git checkout <span style={{color:'#2563eb'}}>feature/new-login</span></div>
                    <div><span style={{color:'#8a8680'}}>$</span> npm install <span style={{color:'#8a8680'}}># və ya mvn install</span></div>
                    <div><span style={{color:'#8a8680'}}>$</span> npm run dev</div>
                    <div style={{color:'#16a34a', marginTop:'4px'}}>✓ App localhost:5173-də çalışır</div>
                  </div>
                </div>
                <div className="rt-checklist">
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--green"></div>
                    <span>App uğurla start olunur, error yoxdur</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--green"></div>
                    <span>Test suite keçir: <code style={{fontSize:'11px', background:'var(--bg)', padding:'1px 5px', borderRadius:'4px'}}>npm test</code></span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--green"></div>
                    <span>Console-da kritik error yoxdur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── STEP 3 ── */}
          <div className="rt-step">
            <div className="rt-step__num rt-step__num--green">3</div>
            <div className="rt-step__body">
              <div className="rt-step__head">
                <span className="rt-step__icon">🔍</span>
                <span className="rt-step__title">Happy path-i yoxla</span>
                <span className="rt-step__badge">~10 dəq</span>
              </div>
              <div className="rt-step__content">
                <p className="rt-step__desc">
                  İlk olaraq <strong>normal istifadə ssenarisi</strong>ni yoxla — hər şey düzgün girdilə, normal şəraitdə işləyirmi?
                </p>
                <div className="rt-visual">
                  <p className="rt-visual__label">Happy path nümunəsi — Login feature</p>
                  <div className="happy-path">
                    <div className="hp-node">
                      <div className="hp-node__box hp-node__box--blue">Forma aç</div>
                      <span className="hp-node__sub">UI göründü?</span>
                    </div>
                    <div className="hp-arrow">→</div>
                    <div className="hp-node">
                      <div className="hp-node__box hp-node__box--blue">E-mail daxil et</div>
                      <span className="hp-node__sub">Valid format</span>
                    </div>
                    <div className="hp-arrow">→</div>
                    <div className="hp-node">
                      <div className="hp-node__box hp-node__box--blue">Şifrə daxil et</div>
                      <span className="hp-node__sub">Doğru şifrə</span>
                    </div>
                    <div className="hp-arrow">→</div>
                    <div className="hp-node">
                      <div className="hp-node__box hp-node__box--blue">Submit</div>
                      <span className="hp-node__sub">Loading göründü?</span>
                    </div>
                    <div className="hp-arrow">→</div>
                    <div className="hp-node">
                      <div className="hp-node__box hp-node__box--green">Dashboard</div>
                      <span className="hp-node__sub">Redirect OK?</span>
                    </div>
                  </div>
                </div>
                <div className="rt-tip">
                  <span className="rt-tip__icon">💡</span>
                  <span>Happy path keçmirsə daha dərinə getməyə ehtiyac yoxdur — əvvəlcə bunu düzəlt.</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── STEP 4 ── */}
          <div className="rt-step">
            <div className="rt-step__num rt-step__num--orange">4</div>
            <div className="rt-step__body">
              <div className="rt-step__head">
                <span className="rt-step__icon">⚠️</span>
                <span className="rt-step__title">Edge case-ləri düşün və test et</span>
                <span className="rt-step__badge">~15 dəq</span>
              </div>
              <div className="rt-step__content">
                <p className="rt-step__desc">
                  <strong>Gözlənilməz girdi</strong>, boş vəziyyətlər, şəbəkə xətaları — bunlar prodda bug-a çevrilən hissələrdir.
                </p>
                <div className="rt-visual">
                  <p className="rt-visual__label">Edge case kateqoriyaları</p>
                  <div className="edge-matrix">
                    <div className="edge-cell edge-cell--orange">
                      <span className="edge-cell__tag">Boş / null</span>
                      <span className="edge-cell__text">Boş input, null cavab, sıfır element</span>
                    </div>
                    <div className="edge-cell edge-cell--orange">
                      <span className="edge-cell__tag">Hədd dəyərlər</span>
                      <span className="edge-cell__text">Çox uzun string, mənfi rəqəm, 0</span>
                    </div>
                    <div className="edge-cell edge-cell--red">
                      <span className="edge-cell__tag">Şəbəkə</span>
                      <span className="edge-cell__text">API timeout, 500 xətası, yavaş bağlantı</span>
                    </div>
                    <div className="edge-cell edge-cell--red">
                      <span className="edge-cell__tag">İcazə</span>
                      <span className="edge-cell__text">Başqa istifadəçinin datasına giriş</span>
                    </div>
                  </div>
                </div>
                <div className="rt-checklist">
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--orange"></div>
                    <span>Boş / null halda app crash edir?</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--orange"></div>
                    <span>API error gəldikdə user nə görür?</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--orange"></div>
                    <span>Çox böyük data ilə performans problemi?</span>
                  </div>
                  <div className="rt-check">
                    <div className="rt-check__dot rt-check__dot--orange"></div>
                    <span>İcazəsi olmayan user bu endpointi çağıra bilirmi?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── STEP 5 ── */}
          <div className="rt-step">
            <div className="rt-step__num rt-step__num--violet">5</div>
            <div className="rt-step__body">
              <div className="rt-step__head">
                <span className="rt-step__icon">🧠</span>
                <span className="rt-step__title">Business logic-in düzgünlüyünü yoxla</span>
                <span className="rt-step__badge">~15 dəq</span>
              </div>
              <div className="rt-step__content">
                <p className="rt-step__desc">
                  Kod çalışır — amma <strong>düzgün şeyi edir?</strong> Business logic xətaları ən çətin aşkar edilən bug-lardır.
                </p>
                <div className="rt-visual">
                  <p className="rt-visual__label">Yoxlama sualları</p>
                  <div>
                    {[
                      ['Ticket tələbləri tam qarşılanıb?', true],
                      ['Hesablamalar düzgün? (endirim, vergi, tarix)', null],
                      ['Vəziyyət keçidləri (state machine) məntiqlimi?', null],
                      ['Rol/icazə qaydaları doğru tətbiq edilib?', null],
                      ['Data consistency qorunur? (race condition yoxdur?)', null],
                    ].map(([q, answered], i) => (
                      <div key={i} className="logic-row">
                        <span className="logic-row__q">{q}</span>
                        <div className="logic-row__yn">
                          <span className="yn-btn yn-btn--yes">Bəli</span>
                          <span className="yn-btn yn-btn--no">Xeyr</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rt-tip">
                  <span className="rt-tip__icon">💡</span>
                  <span><em>"Bu kod işləyir"</em> ilə <em>"Bu kod doğru işləyir"</em> arasındakı fərq business logic-dədir. Hər ikisini yoxla.</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── STEP 6 ── */}
          <div className="rt-step">
            <div className="rt-step__num rt-step__num--emerald">6</div>
            <div className="rt-step__body">
              <div className="rt-step__head">
                <span className="rt-step__icon">✍️</span>
                <span className="rt-step__title">Feedback yaz — konkret, izahlı, hörmətli</span>
                <span className="rt-step__badge">~10 dəq</span>
              </div>
              <div className="rt-step__content">
                <p className="rt-step__desc">
                  Yaxşı feedback <strong>nəyin problem olduğunu</strong>, <strong>niyə problem olduğunu</strong> və <strong>necə düzəldiləcəyini</strong> izah edir.
                </p>
                <div className="rt-visual">
                  <p className="rt-visual__label">Feedback şablonu</p>
                  <div className="fb-template">
                    <div className="fb-line">
                      <span className="fb-key">[SEVİYYƏ]</span>
                      <span className="fb-value fb-value--orange">BLOCKER / MUST_FIX / SUGGESTION / NIT</span>
                    </div>
                    <div className="fb-sep"></div>
                    <div className="fb-line">
                      <span className="fb-key">Problem:</span>
                      <span className="fb-value fb-value--white">Nə problem var, harada.</span>
                    </div>
                    <div className="fb-line">
                      <span className="fb-key">Niyə:</span>
                      <span className="fb-value fb-value--white">Bu niyə problem sayılır.</span>
                    </div>
                    <div className="fb-line">
                      <span className="fb-key">Təklif:</span>
                      <span className="fb-value fb-value--white">Necə düzəltmək olar.</span>
                    </div>
                    <div className="fb-sep"></div>
                    <div className="fb-line">
                      <span className="fb-comment"># Nümunə:</span>
                    </div>
                    <div className="fb-line">
                      <span className="fb-key">[MUST_FIX]</span>
                      <span className="fb-value fb-value--gray">UserService.java:42</span>
                    </div>
                    <div className="fb-line">
                      <span className="fb-key">Problem:</span>
                      <span className="fb-value fb-value--white">findById null dönürsə NullPointerException baş verir.</span>
                    </div>
                    <div className="fb-line">
                      <span className="fb-key">Niyə:</span>
                      <span className="fb-value fb-value--white">Prodda istifadəçi silinibsə bu path crash edəcək.</span>
                    </div>
                    <div className="fb-line">
                      <span className="fb-key">Təklif:</span>
                      <span className="fb-value fb-value--pink">Optional.orElseThrow(UserNotFoundException::new)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>{/* /review-timeline */}

        {/* ══ SECTION: Feedback Severity ══ */}
        <div className="section-divider" style={{marginTop:'28px'}}>
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Feedback Səviyyələri</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="severity-table">
          <div className="sev-row sev-row--header">
            <span>Səviyyə</span>
            <span>Nə deməkdir</span>
            <span>Nə etmək lazım</span>
          </div>
          <div className="sev-row">
            <span className="sev-tag sev-tag--blocker">🔴 BLOCKER</span>
            <span className="sev-desc">Prodda ciddi bug, security, ya data itkisi riski. Merge edilə bilməz.</span>
            <span className="sev-action">Request changes</span>
          </div>
          <div className="sev-row">
            <span className="sev-tag sev-tag--mustfix">🟠 MUST FIX</span>
            <span className="sev-desc">Düzəldilməli problem — mühüm, amma blocker deyil.</span>
            <span className="sev-action">Request changes</span>
          </div>
          <div className="sev-row">
            <span className="sev-tag sev-tag--suggest">🔵 SUGGESTION</span>
            <span className="sev-desc">Daha yaxşı yanaşma var, amma mövcud həll qəbulediləndir.</span>
            <span className="sev-action">Author qərar verir</span>
          </div>
          <div className="sev-row">
            <span className="sev-tag sev-tag--nit">⚪ NIT</span>
            <span className="sev-desc">Kiçik üslub, adlandırma məsələsi. Bloklamamalıdır.</span>
            <span className="sev-action">nit: prefiksi ilə</span>
          </div>
        </div>

        {/* ══ SECTION: Decision tree ══ */}
        <div className="section-divider" style={{marginTop:'28px'}}>
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Qərar Ağacı</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <p className="chart-title" style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'13px', fontWeight:600, color:'#1a1814', marginBottom:'16px'}}>
            Review bitdikdə nə etmək lazımdır?
          </p>
          <div className="dtree">
            <div className="dtree__node dtree__node--blue">Review tamamlandı</div>
            <div className="dtree__connector"></div>
            <div style={{background:'#fffbeb', border:'1.5px solid #f59e0b', borderRadius:'8px', padding:'10px 18px', fontWeight:600, fontSize:'13px', color:'#92400e', textAlign:'center', minWidth:'160px'}}>
              Problem tapıldımı?
            </div>
            <div className="dtree__connector"></div>
            <div className="dtree__branch">
              <div className="dtree__branch-item">
                <span className="dtree__branch-label">BLOCKER var</span>
                <div className="dtree__vline"></div>
                <div className="dtree__outcome dtree__outcome--red">Request Changes</div>
                <div style={{fontSize:'11px', color:'var(--muted)', marginTop:'6px', textAlign:'center', lineHeight:'1.4'}}>Author düzəltməlidir, yenidən review lazımdır</div>
              </div>
              <div className="dtree__branch-item">
                <span className="dtree__branch-label">Kiçik problem</span>
                <div className="dtree__vline"></div>
                <div className="dtree__outcome dtree__outcome--orange">Comment + Approve</div>
                <div style={{fontSize:'11px', color:'var(--muted)', marginTop:'6px', textAlign:'center', lineHeight:'1.4'}}>Merge edilə bilər, amma comment nəzərə alınmalıdır</div>
              </div>
              <div className="dtree__branch-item">
                <span className="dtree__branch-label">Problem yoxdur</span>
                <div className="dtree__vline"></div>
                <div className="dtree__outcome dtree__outcome--green">Approve ✓</div>
                <div style={{fontSize:'11px', color:'var(--muted)', marginTop:'6px', textAlign:'center', lineHeight:'1.4'}}>Merge etmək azaddır</div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ SECTION: Good vs Bad ══ */}
        <div className="section-divider" style={{marginTop:'28px'}}>
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Feedback Nümunələri</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="fb-compare">
          <div className="fb-ex">
            <div className="fb-ex__head fb-ex__head--good">✓ Yaxşı feedback</div>
            <div className="fb-ex__body">
              <strong style={{color:'#ea580c', fontSize:'11px'}}>[MUST_FIX]</strong><br/>
              <code style={{fontSize:'11px', background:'var(--bg)', padding:'1px 5px', borderRadius:'3px'}}>fetchUser()</code> null dönürsə 42-ci sətirdə NPE baş verir.<br/><br/>
              Prodda silinmiş istifadəçi sorğusu crash-ə gətirib çıxarar.<br/><br/>
              <strong>Təklif:</strong> <code style={{fontSize:'11px', background:'var(--bg)', padding:'1px 5px', borderRadius:'3px'}}>Optional.orElseThrow()</code> istifadə et.
            </div>
          </div>
          <div className="fb-ex">
            <div className="fb-ex__head fb-ex__head--bad">✕ Pis feedback</div>
            <div className="fb-ex__body" style={{color:'var(--muted)'}}>
              "Bu kod pis yazılıb."<br/><br/>
              "Bunu yenidən yaz."<br/><br/>
              "LGTM 👍"<br/><span style={{fontSize:'11px'}}>(kodu run etmədən)</span>
            </div>
          </div>

          <div className="fb-ex">
            <div className="fb-ex__head fb-ex__head--good">✓ Yaxşı feedback</div>
            <div className="fb-ex__body">
              <strong style={{color:'#8a8680', fontSize:'11px'}}>[NIT]</strong><br/>
              <code style={{fontSize:'11px', background:'var(--bg)', padding:'1px 5px', borderRadius:'3px'}}>getUserData</code> → <code style={{fontSize:'11px', background:'var(--bg)', padding:'1px 5px', borderRadius:'3px'}}>fetchUserProfile</code> daha dəqiq ad olar — bu bloklayıcı deyil, sadəcə təklif.
            </div>
          </div>
          <div className="fb-ex">
            <div className="fb-ex__head fb-ex__head--good">✓ Yaxşı feedback</div>
            <div className="fb-ex__body">
              <strong style={{color:'#2563eb', fontSize:'11px'}}>[SUGGESTION]</strong><br/>
              Bu loop O(n²) işləyir. Əgər data böyüsə <code style={{fontSize:'11px', background:'var(--bg)', padding:'1px 5px', borderRadius:'3px'}}>Map</code> ilə O(n)-ə endirmək olar. İndi trafik azdır, amma nəzərə almağa dəyər.
            </div>
          </div>
        </div>

        {/* ══ SECTION: Time distribution ══ */}
        <div className="section-divider" style={{marginTop:'28px'}}>
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Vaxt Bölgüsü</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <p style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'13px', fontWeight:600, color:'#1a1814', marginBottom:'16px'}}>
            1 saatlıq review üçün tövsiyə olunan vaxt bölgüsü
          </p>
          <div className="time-dist">
            {[
              ['Ticket + context oxu', '10%', 6, 'blue'],
              ['Checkout + run', '15%', 9, 'green'],
              ['Happy path test', '15%', 9, 'teal'],
              ['Edge case test', '25%', 15, 'orange'],
              ['Business logic', '25%', 15, 'violet'],
              ['Feedback yazmaq', '10%', 6, 'blue'],
            ].map(([label, pct, mins, color]) => (
              <div key={label} className="td-row">
                <span className="td-label">{label}</span>
                <div className="td-bar-wrap">
                  <div className={`td-bar td-bar--${color}`} style={{width: pct}}>
                    {mins} dəq
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{fontFamily:'JetBrains Mono, monospace', fontSize:'11px', color:'var(--muted)', marginTop:'12px'}}>
            * Böyük PR-lar üçün vaxt mütənasib artır — hər 100 sətir +20 dəq
          </p>
        </div>

        {/* ══ Do / Don't ══ */}
        <div className="section-divider" style={{marginTop:'28px'}}>
          <span className="section-divider__line"></span>
          <span className="section-divider__text">Do / Don't</span>
          <span className="section-divider__line"></span>
        </div>

        <div className="card">
          <div className="do-dont">
            <div>
              <p className="do-dont__col-header do-dont__col-header--do">✓ Do</p>
              <ul>
                <li>Kodu özün run etdikdən sonra review yaz</li>
                <li>"Niyə belə etdin?" soruşmaq sərbəstdir</li>
                <li>Feedback-ə səviyyə (BLOCKER / NIT) yaz</li>
                <li>Konstruktiv təklif əlavə et — yalnız problem göstərmə</li>
                <li>Happy path + edge case ikisini də yoxla</li>
              </ul>
            </div>
            <div>
              <p className="do-dont__col-header do-dont__col-header--dont">✕ Don't</p>
              <ul>
                <li>Yalnız syntax baxıb "LGTM" yazma</li>
                <li>Review-u 5 dəqiqəyə bitirmə</li>
                <li>Şəxsə deyil, koda yönəl</li>
                <li>Hər NIT-i BLOCKER kimi yaz</li>
                <li>Business logic-i yoxlamadan approve etmə</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="alert alert-green">
            <span className="alert__icon">✓</span>
            <span>Ticket → Checkout → Happy path → Edge case → Business logic → Feedback. Hər addım vacibdir.</span>
          </div>
        </div>

      </div>
    </>
  )
}
