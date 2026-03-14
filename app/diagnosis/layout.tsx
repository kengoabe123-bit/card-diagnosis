import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'クレカ診断 | CardMatch - あなたに最適なクレジットカードを見つけよう',
    description:
        '7つの質問に答えるだけで、あなたのライフスタイルに最適なクレジットカードがわかります。利用シーン・年会費・ポイント還元から総合的に分析。',
};

export default function DiagnosisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
