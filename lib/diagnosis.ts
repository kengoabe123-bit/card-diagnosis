import { services, Service } from './services';

export interface Question {
    id: number;
    text: string;
    subtext?: string;
    icon: string;
    options: Option[];
}

export interface Option {
    label: string;
    icon: string;
    scores: Record<string, number>;
}

export interface DiagnosisResult {
    service: Service;
    score: number;
    matchRate: number;
    reason: string;
}

interface ConditionalReason {
    condition: (answers: number[]) => boolean;
    text: string;
}

// === 診断質問（7問）===

export const questions: Question[] = [
    {
        id: 1,
        text: 'クレジットカードの主な利用シーンは？',
        subtext: '最もよく使うシーンを教えてください',
        icon: '🛒',
        options: [
            {
                label: '普段の買い物（コンビニ・スーパー）',
                icon: '🏪',
                scores: { rakuten: 4, 'smbc-nl': 5, 'jcb-w': 4, epos: 3, 'amex-gold': 2 },
            },
            {
                label: 'ネットショッピング',
                icon: '📦',
                scores: { rakuten: 5, 'smbc-nl': 3, 'jcb-w': 5, epos: 3, 'amex-gold': 2 },
            },
            {
                label: '旅行・交通',
                icon: '✈️',
                scores: { rakuten: 2, 'smbc-nl': 3, 'jcb-w': 2, epos: 5, 'amex-gold': 5 },
            },
            {
                label: '飲食・エンタメ',
                icon: '🍽️',
                scores: { rakuten: 3, 'smbc-nl': 4, 'jcb-w': 4, epos: 5, 'amex-gold': 4 },
            },
        ],
    },
    {
        id: 2,
        text: '年会費についてどう思いますか？',
        subtext: '',
        icon: '💰',
        options: [
            {
                label: '絶対に無料がいい',
                icon: '🆓',
                scores: { rakuten: 5, 'smbc-nl': 5, 'jcb-w': 5, epos: 5, 'amex-gold': 1 },
            },
            {
                label: '数千円なら許容範囲',
                icon: '💴',
                scores: { rakuten: 4, 'smbc-nl': 4, 'jcb-w': 4, epos: 4, 'amex-gold': 2 },
            },
            {
                label: '1万円くらいまでならOK',
                icon: '💵',
                scores: { rakuten: 3, 'smbc-nl': 3, 'jcb-w': 3, epos: 3, 'amex-gold': 4 },
            },
            {
                label: '特典が良ければ気にしない',
                icon: '💎',
                scores: { rakuten: 2, 'smbc-nl': 2, 'jcb-w': 2, epos: 3, 'amex-gold': 5 },
            },
        ],
    },
    {
        id: 3,
        text: 'ポイント還元で最も重視するのは？',
        subtext: '',
        icon: '🎯',
        options: [
            {
                label: '還元率の高さ',
                icon: '📈',
                scores: { rakuten: 5, 'smbc-nl': 3, 'jcb-w': 5, epos: 2, 'amex-gold': 3 },
            },
            {
                label: '特定店舗でのボーナス',
                icon: '🏷️',
                scores: { rakuten: 4, 'smbc-nl': 5, 'jcb-w': 4, epos: 4, 'amex-gold': 3 },
            },
            {
                label: 'マイルへの交換',
                icon: '🛫',
                scores: { rakuten: 2, 'smbc-nl': 2, 'jcb-w': 2, epos: 3, 'amex-gold': 5 },
            },
            {
                label: 'ポイントより特典・サービス重視',
                icon: '🎁',
                scores: { rakuten: 2, 'smbc-nl': 3, 'jcb-w': 2, epos: 5, 'amex-gold': 5 },
            },
        ],
    },
    {
        id: 4,
        text: '海外旅行はどれくらい行きますか？',
        subtext: '',
        icon: '🌎',
        options: [
            {
                label: 'ほとんど行かない',
                icon: '🏠',
                scores: { rakuten: 5, 'smbc-nl': 5, 'jcb-w': 5, epos: 3, 'amex-gold': 1 },
            },
            {
                label: '年に1〜2回',
                icon: '🧳',
                scores: { rakuten: 3, 'smbc-nl': 3, 'jcb-w': 3, epos: 5, 'amex-gold': 4 },
            },
            {
                label: '年に3回以上',
                icon: '🌏',
                scores: { rakuten: 1, 'smbc-nl': 2, 'jcb-w': 2, epos: 4, 'amex-gold': 5 },
            },
            {
                label: '出張で頻繁に行く',
                icon: '💼',
                scores: { rakuten: 1, 'smbc-nl': 2, 'jcb-w': 1, epos: 3, 'amex-gold': 5 },
            },
        ],
    },
    {
        id: 5,
        text: 'セキュリティで気になることは？',
        subtext: '',
        icon: '🔒',
        options: [
            {
                label: 'カード番号の盗み見が心配',
                icon: '👀',
                scores: { rakuten: 3, 'smbc-nl': 5, 'jcb-w': 3, epos: 3, 'amex-gold': 3 },
            },
            {
                label: '不正利用が心配',
                icon: '🚨',
                scores: { rakuten: 3, 'smbc-nl': 4, 'jcb-w': 3, epos: 3, 'amex-gold': 5 },
            },
            {
                label: '旅行保険が充実してると安心',
                icon: '🛡️',
                scores: { rakuten: 2, 'smbc-nl': 3, 'jcb-w': 2, epos: 5, 'amex-gold': 5 },
            },
            {
                label: '特にこだわりはない',
                icon: '🤷',
                scores: { rakuten: 4, 'smbc-nl': 3, 'jcb-w': 4, epos: 3, 'amex-gold': 2 },
            },
        ],
    },
    {
        id: 6,
        text: 'あなたの年代は？',
        subtext: '',
        icon: '👤',
        options: [
            {
                label: '18〜29歳',
                icon: '🎓',
                scores: { rakuten: 4, 'smbc-nl': 4, 'jcb-w': 5, epos: 4, 'amex-gold': 1 },
            },
            {
                label: '30〜39歳',
                icon: '💪',
                scores: { rakuten: 4, 'smbc-nl': 4, 'jcb-w': 4, epos: 4, 'amex-gold': 4 },
            },
            {
                label: '40〜49歳',
                icon: '🏢',
                scores: { rakuten: 3, 'smbc-nl': 3, 'jcb-w': 2, epos: 3, 'amex-gold': 5 },
            },
            {
                label: '50歳以上',
                icon: '🍵',
                scores: { rakuten: 3, 'smbc-nl': 3, 'jcb-w': 1, epos: 3, 'amex-gold': 5 },
            },
        ],
    },
    {
        id: 7,
        text: 'カード選びで最も重視するポイントは？',
        subtext: 'これだけは譲れない！というものを選んでください',
        icon: '⭐',
        options: [
            {
                label: 'ポイント還元率・お得さ',
                icon: '🏆',
                scores: { rakuten: 5, 'smbc-nl': 3, 'jcb-w': 5, epos: 2, 'amex-gold': 2 },
            },
            {
                label: 'ステータス・見栄え',
                icon: '✨',
                scores: { rakuten: 1, 'smbc-nl': 3, 'jcb-w': 2, epos: 2, 'amex-gold': 5 },
            },
            {
                label: '特典・優待の充実度',
                icon: '🎉',
                scores: { rakuten: 3, 'smbc-nl': 3, 'jcb-w': 3, epos: 5, 'amex-gold': 4 },
            },
            {
                label: '安心・安全（保険・セキュリティ）',
                icon: '🛡️',
                scores: { rakuten: 2, 'smbc-nl': 5, 'jcb-w': 2, epos: 4, 'amex-gold': 4 },
            },
        ],
    },
];

// === 条件付きマッチ理由 ===

const conditionalReasons: Record<string, ConditionalReason[]> = {
    rakuten: [
        { condition: (a) => a[0] === 1, text: 'ネットショッピングが多いあなたに最適。楽天カードなら楽天市場でポイント3倍以上、SPU活用で最大16倍。年会費無料で圧倒的な還元率を実現します。' },
        { condition: (a) => a[6] === 0, text: 'ポイント還元率を最重視するあなたにぴったり。楽天カードは通常1%還元、楽天市場で3倍以上。年会費無料で顧客満足度17年連続No.1の実力です。' },
        { condition: (a) => a[1] === 0, text: '年会費無料でお得なカードが欲しいあなたに。楽天カードなら維持費ゼロで高還元1%を実現。入会で大量ポイントもゲットできます。' },
        { condition: () => true, text: 'ポイント還元率No.1の国民的カード。年会費永年無料で通常1%還元、楽天市場で3倍以上。17年連続顧客満足度No.1の実力をお試しください。' },
    ],
    'smbc-nl': [
        { condition: (a) => a[0] === 0, text: 'コンビニをよく使うあなたに最適。三井住友カード(NL)ならスマホタッチ決済で対象のコンビニ・飲食店で最大7%還元。ナンバーレスでセキュリティも安心。' },
        { condition: (a) => a[4] === 0, text: 'カード番号の盗み見が心配なあなたに。三井住友カード(NL)は番号が印字されないナンバーレス仕様で、セキュリティ性能は業界トップクラスです。' },
        { condition: (a) => a[6] === 3, text: '安心・安全を重視するあなたにぴったり。ナンバーレス×不正利用検知×Vpassアプリで、安心してカードを使えます。' },
        { condition: () => true, text: 'カード番号が見えないナンバーレス仕様でセキュリティ抜群。年会費無料で、対象のコンビニ・飲食店ではスマホタッチで最大7%ポイント還元。' },
    ],
    'jcb-w': [
        { condition: (a) => a[5] === 0, text: '18〜29歳のあなたに最適。JCB CARD Wは39歳以下限定で、常時ポイント2倍の年会費無料カード。Amazonで最大4倍、スタバで10倍と若者に嬉しい特典満載。' },
        { condition: (a) => a[0] === 1, text: 'ネットショッピング好きのあなたにぴったり。JCB CARD WならAmazonでポイント最大4倍。常時2倍の高還元で、お得にネットショッピングを楽しめます。' },
        { condition: (a) => a[2] === 0, text: 'ポイント還元率を重視するあなたに。JCB CARD Wは常にポイント2倍で実質還元率1%。年会費無料で高還元を実現する、若者の味方です。' },
        { condition: () => true, text: '39歳以下限定の特別カード。常にポイント2倍（実質1%還元）で年会費永年無料。Amazon・スタバなど人気店でさらにポイントUP。' },
    ],
    epos: [
        { condition: (a) => a[3] === 1 || a[3] === 2, text: '旅行好きのあなたに最適。エポスカードは年会費無料で海外旅行傷害保険が自動付帯という希少なカード。全国10,000以上の優待も見逃せません。' },
        { condition: (a) => a[4] === 2, text: '旅行保険の充実を重視するあなたに。エポスカードは年会費無料なのに海外旅行保険が自動付帯。カードを持っているだけで保険が適用されます。' },
        { condition: (a) => a[6] === 2, text: '特典・優待を重視するあなたにぴったり。エポスカードなら全国10,000以上の店舗で割引優待が受けられ、使えば使うほどお得です。' },
        { condition: () => true, text: '年会費無料で海外旅行保険が自動付帯する貴重なカード。全国10,000以上の優待店舗で割引が受けられ、ゴールドへの無料招待制度も魅力です。' },
    ],
    'amex-gold': [
        { condition: (a) => a[6] === 1, text: 'ステータスを重視するあなたに最適。アメックスゴールドは世界的に認められたブランド力を持ち、ビジネスシーンでも一目置かれる存在感を発揮します。' },
        { condition: (a) => a[3] === 2 || a[3] === 3, text: '海外に頻繁に行くあなたにぴったり。アメックスゴールドなら空港ラウンジ利用、最大1億円の旅行保険、コンシェルジュサービスで、旅をワンランク上に。' },
        { condition: (a) => a[2] === 2, text: 'マイルへの交換を重視するあなたに。アメックスのポイントプログラムなら、ANAやJALなど多数の航空会社のマイルに交換可能です。' },
        { condition: () => true, text: 'ステータスと特典の最高峰。空港ラウンジ、最大1億円保険、コンシェルジュサービスなど、ワンランク上の体験を提供するゴールドカードです。' },
    ],
};

// === スコアリングロジック ===

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) {
        for (const r of reasons) {
            if (r.condition(answers)) return r.text;
        }
    }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => {
        scoreMap[s.id] = 0;
    });

    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            const option = question.options[optionIndex];
            Object.entries(option.scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) {
                    scoreMap[serviceId] += score;
                }
            });
        }
    });

    const results: DiagnosisResult[] = services
        .map((service) => {
            const score = scoreMap[service.id] || 0;
            const reason = selectReason(service.id, answers, service.tagline);
            return { service, score, matchRate: 0, reason };
        })
        .sort((a, b) => b.score - a.score);

    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;

    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
