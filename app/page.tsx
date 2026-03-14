import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          選び方ひとつで、
          <br />
          毎日がもっとお得に。
        </h1>
        <p>あなたにピッタリのクレジットカードを見つける無料診断</p>

        <div className="hero-features">
          <span className="hero-feature">約30秒で完了</span>
          <span className="hero-feature">7問の簡単な質問</span>
          <span className="hero-feature">個人情報不要</span>
        </div>

        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          無料で診断する
        </Link>
      </div>
    </section>
  );
}
