import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-icon">💳</div>
        <h1>
          あなたにピッタリの
          <br />
          <span className="gradient-text">クレカ無料診断</span>
        </h1>
        <p>
          7つの質問に答えるだけで、あなたのライフスタイルに合った
          <br />
          最適なクレジットカードが見つかります。
        </p>

        <div className="features glass-card">
          <div className="feature-item">
            <div className="feature-icon">⏱️</div>
            <div className="feature-label">たった30秒</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-label">あなた専用の結果</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔬</div>
            <div className="feature-label">徹底比較</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💯</div>
            <div className="feature-label">完全無料</div>
          </div>
        </div>

        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          💳 無料でクレカ診断を始める
        </Link>
      </div>
    </section>
  );
}
