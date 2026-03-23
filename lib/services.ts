export interface Service {
    id: string;
    slug: string;
    name: string;
    nameEn: string;
    tagline: string;
    description: string;
    category: string;
    target: string;
    targetAge: string[];
    features: string[];
    pros: string[];
    cons: string[];
    recommended: string[];
    affiliateUrl: string;
    ctaText: string;
    color: string;
}

export const services: Service[] = [
    {
        id: 'rakuten',
        slug: 'rakuten-card',
        name: '楽天カード',
        nameEn: 'RAKUTEN CARD',
        tagline: 'ポイント還元率No.1！年会費永年無料',
        description: '楽天市場での買い物はポイント3倍以上、街の利用でも常時1%還元。年会費永年無料で、楽天経済圏を活用すればポイントがザクザク貯まる国民的カード。17年連続顧客満足度No.1。',
        category: '高還元カード',
        target: 'ポイントをお得に貯めたい人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '年会費永年無料',
            '楽天市場でポイント3倍以上',
            '通常利用でも1%還元',
            '17年連続顧客満足度No.1',
        ],
        pros: [
            '年会費無料で高還元1%',
            '楽天市場で3倍以上にアップ',
            'SPU（ポイントアッププログラム）で還元率最大16倍',
            'カード発行で大量ポイントもらえる',
        ],
        cons: [
            '楽天経済圏外だと恩恵が減る',
            'ETCカードは年会費550円',
            '旅行保険は利用付帯',
        ],
        recommended: [
            '楽天市場でよく買い物する人',
            '年会費無料でお得なカードが欲しい人',
            'ポイント還元率を重視する人',
            '初めてクレカを作る人',
        ],
        affiliateUrl: 'https://example.com/rakuten-card',
        ctaText: '詳細を見る',
        color: '#bf0000',
    },
    {
        id: 'smbc-nl',
        slug: 'smbc-nl-card',
        name: '三井住友カード(NL)',
        nameEn: 'SMBC CARD (NL)',
        tagline: 'ナンバーレスで安心。コンビニで最大7%還元',
        description: 'カード番号が印字されないナンバーレス仕様でセキュリティ抜群。対象のコンビニ・飲食店でスマホタッチ決済すると最大7%ポイント還元。年会費永年無料で使いやすい。',
        category: 'セキュリティ重視カード',
        target: 'セキュリティと日常使いを両立したい人',
        targetAge: ['20代', '30代', '40代'],
        features: [
            'カード番号が印字されないナンバーレス',
            'コンビニ・飲食店で最大7%還元',
            '年会費永年無料',
            'Vpassアプリで簡単管理',
        ],
        pros: [
            'セキュリティが非常に高い',
            'コンビニ・マクドナルドで最大7%還元',
            '年会費無料で維持費ゼロ',
            'スマホで簡単に利用状況確認',
        ],
        cons: [
            'コンビニ以外の還元率は0.5%',
            '旅行保険は選択制',
            'ゴールド以外はラウンジ利用不可',
        ],
        recommended: [
            'コンビニをよく利用する人',
            'セキュリティが気になる人',
            'スマホ決済をよく使う人',
            '初めてのクレカに安心感が欲しい人',
        ],
        affiliateUrl: 'https://example.com/smbc-nl',
        ctaText: '詳細を見る',
        color: '#00a650',
    },
    {
        id: 'jcb-w',
        slug: 'jcb-card-w',
        name: 'JCB CARD W',
        nameEn: 'JCB CARD W',
        tagline: '39歳以下限定！常時ポイント2倍の最強カード',
        description: '39歳以下限定で申し込めるJCBの高還元カード。通常のJCBカードの2倍のポイントが常に貯まり、Amazon・スタバ・セブンでさらにボーナスUP。年会費永年無料。',
        category: '若者向け高還元カード',
        target: '若い世代でお得に使いたい人',
        targetAge: ['18歳〜', '20代', '30代'],
        features: [
            '39歳以下限定の特別カード',
            '常時ポイント2倍（還元率1%）',
            'Amazon・スタバでさらにUP',
            '年会費永年無料',
        ],
        pros: [
            '常にポイント2倍で高還元',
            'Amazonで還元率最大4倍',
            'スタバでポイント10倍',
            '年会費無料で若者にやさしい',
        ],
        cons: [
            '39歳以下でないと申し込めない',
            'JCBは海外での利用先が限られる場合がある',
            '国内向けの特典が中心',
        ],
        recommended: [
            '18〜39歳でお得なカードが欲しい人',
            'Amazonでよく買い物する人',
            'スタバをよく利用する人',
            '年会費無料で高還元のカードを探している人',
        ],
        affiliateUrl: 'https://example.com/jcb-w',
        ctaText: '詳細を見る',
        color: '#0070c0',
    },
    {
        id: 'epos',
        slug: 'epos-card',
        name: 'エポスカード',
        nameEn: 'EPOS CARD',
        tagline: '海外旅行保険が自動付帯！優待10,000店舗以上',
        description: '年会費無料ながら海外旅行傷害保険が自動付帯する貴重なカード。全国10,000以上の店舗・施設で割引優待が受けられ、マルイでの買い物もお得。ゴールドへの無料招待制度あり。',
        category: '旅行・優待充実カード',
        target: '旅行好き・優待をフル活用したい人',
        targetAge: ['20代', '30代', '40代'],
        features: [
            '海外旅行保険が自動付帯',
            '全国10,000以上の優待店舗',
            '年会費永年無料',
            'ゴールドカード無料招待あり',
        ],
        pros: [
            '海外旅行保険が自動付帯（年会費無料で希少）',
            '居酒屋・カラオケ等の優待が超充実',
            'ゴールドへの招待で年会費無料のまま上位カードに',
            'マルイでの買い物がお得',
        ],
        cons: [
            '通常還元率は0.5%とやや低い',
            '家族カードが作れない',
            '楽天等と比べるとポイント還元は弱い',
        ],
        recommended: [
            '海外旅行によく行く人',
            '優待・割引をたくさん活用したい人',
            '将来ゴールドカードが欲しい人',
            'マルイでよく買い物する人',
        ],
        affiliateUrl: 'https://example.com/epos',
        ctaText: '詳細を見る',
        color: '#e60012',
    },
    {
        id: 'amex-gold',
        slug: 'amex-gold',
        name: 'アメックスゴールド',
        nameEn: 'AMEX GOLD',
        tagline: 'ステータスと特典の最高峰。旅を極める一枚',
        description: 'アメリカン・エキスプレスのゴールドカード。国内外の空港ラウンジ利用、手厚い旅行保険、レストラン予約サービスなど、ワンランク上の体験を提供。ビジネスシーンでも一目置かれるステータスカード。',
        category: 'ステータスカード',
        target: 'ステータスと特典を重視する人',
        targetAge: ['30代', '40代', '50代'],
        features: [
            '世界的に認知された高ステータス',
            '国内外空港ラウンジ利用可',
            '最大1億円の旅行傷害保険',
            'レストラン予約・コンシェルジュサービス',
        ],
        pros: [
            '世界中で認められるステータス',
            '空港ラウンジで快適な旅行',
            '手厚い保険で安心',
            'コンシェルジュサービスが便利',
        ],
        cons: [
            '年会費31,900円（税込）と高い',
            '加盟店が少ない場合がある',
            'ポイント還元率は高くない',
        ],
        recommended: [
            'ステータス性の高いカードが欲しい人',
            '出張・旅行が多い人',
            '空港ラウンジを利用したい人',
            '接待やビジネスシーンで使いたい人',
        ],
        affiliateUrl: 'https://example.com/amex-gold',
        ctaText: '詳細を見る',
        color: '#b38600',
    },
    {
        id: 'nexus-card',
        slug: 'nexus-card',
        name: 'Nexus Card',
        nameEn: 'Nexus Card',
        tagline: 'デポジット型だから審査に不安がある人も安心',
        description: 'デポジット（保証金）を預けることで発行できるクレジットカード。過去に審査に落ちた経験がある方や、信用情報に不安がある方でも持てるクレジットカード。Mastercard加盟店で利用可能。',
        category: 'デポジット型カード',
        target: '審査に不安がある人・クレヒスを積みたい人',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            'デポジット（保証金）型で審査に通りやすい',
            'Mastercard加盟店で世界中で利用可能',
            'クレジットヒストリーを積める',
            'デポジットは解約時に全額返還',
        ],
        pros: [
            '審査に不安がある方でも申し込める',
            'クレヒスを積んで将来のカード発行に有利',
            'デポジットは解約時に返ってくる',
            'Mastercardブランドで使える場所が多い',
        ],
        cons: [
            '最初にデポジット（保証金）が必要',
            '年会費がかかる',
            'ポイント還元率は一般カードより低め',
        ],
        recommended: [
            '過去にクレカ審査に落ちた経験がある人',
            '信用情報に不安がある人',
            'クレジットヒストリーをゼロから積みたい人',
            'どうしてもクレジットカードが必要な人',
        ],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZGC7+AMTYGY+4T5W+60WN6',
        ctaText: 'Nexus Cardを申し込む',
        color: '#455a64',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
