"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// ─── 型定義 ───────────────────────────────────────────────

type TechTag = string;

interface PortfolioItem {
  id: string;
  /** 表示用プロジェクト名 */
  title: string;
  /** 業種 */
  industry: string;
  /** 種別（コーポレートサイト・LP など） */
  category: string;
  /** 説明文 */
  description: string;
  /** 技術スタック */
  techStack: TechTag[];
  /** 制作期間（表示用文字列） */
  period: string;
  /**
   * 公開URL。空文字の場合は「公開準備中」ボタンを表示する。
   * 公開後に実URLを入れること。
   */
  siteUrl: string;
  /**
   * サムネイル画像パス（public/ 配下からの相対パス）。
   * 空文字の場合はプレースホルダーを表示する。
   */
  thumbnail: string;
  /** サムネイルプレースホルダー用テキスト（thumbnail が空のとき表示） */
  placeholderText?: string;
  /** サムネイル背景グラデーション（Tailwind クラス文字列） */
  placeholderBg?: string;
}

// ─── データ ───────────────────────────────────────────────
// 実績が増えたらここに追加するだけ。
// thumbnail に画像パスを入れれば Next.js Image が自動的に表示される。

const portfolioItems: PortfolioItem[] = [
  {
    id: "archeon-lp",
    title: "Archeon コーポレートサイト",
    industry: "Web制作・アプリ開発",
    category: "コーポレートサイト",
    description:
      "自社コーポレートサイトをフルスクラッチで制作。Next.js App Router・Tailwind CSSによるレスポンシブ対応、スクロールアニメーション、SEO・OGP設定まで一括実装。",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    period: "2026年5月",
    siteUrl: "https://archeon-seven.vercel.app",
    thumbnail: "",
    placeholderText: "A",
    placeholderBg: "bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-100",
  },
  {
    id: "fortia-gym-lp",
    title: "パーソナルジム LP（デモ）",
    industry: "フィットネス・パーソナルジム",
    category: "ランディングページ",
    description:
      "パーソナルジムのランディングページをHTML・Sass・バニラJavaScript・PHPでフルスクラッチ制作。お問い合わせフォームはPHPでサーバー側バリデーション・CSRF対策・メール送信まで実装。レスポンシブ・スクロールアニメーション・FAQアコーディオンに対応。",
    techStack: ["HTML5", "Sass (SCSS)", "JavaScript", "PHP", "Vercel"],
    period: "2026年6月",
    siteUrl: "https://php-lp-demo.vercel.app",
    thumbnail: "",
    placeholderText: "F",
    placeholderBg: "bg-gradient-to-br from-slate-100 via-zinc-50 to-slate-200",
  },
  {
    id: "rice-ec",
    title: "高級米ブランド ECサイト（デモ）",
    industry: "食品EC・高級品",
    category: "ECサイト",
    description:
      "高級米ブランドのECデモサイト。3Dキャンバスで湯気・米粒の浮遊を表現。カスタムカラーシステム・和紙テクスチャ・縦書きCSS・カート機能・サブスクリプション設計まで一括実装。Brutus誌×Apple美学のUI。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API", "Vercel"],
    period: "2026年5月",
    siteUrl: "https://web-3d-ec-ec-brutus-apple-9k9221riz.vercel.app",
    thumbnail: "",
    placeholderText: "米",
    placeholderBg: "bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200",
  },
  {
    id: "toilet-finder",
    title: "近くのトイレを探すアプリ",
    industry: "生活・ユーティリティ",
    category: "Webアプリ / モバイルアプリ",
    description:
      "現在地から近くの公共トイレをマップで探せるアプリ。レビュー・お気に入り機能を実装。Next.js + CapacitorでAndroid版も開発し、Google Play申請まで対応。",
    techStack: ["Next.js", "TypeScript", "Capacitor", "Tailwind CSS", "Vercel"],
    period: "2026年5月",
    siteUrl: "https://toilet-finder-git-main-abejin0515-gmailcoms-projects.vercel.app",
    thumbnail: "",
    placeholderText: "🚻",
    placeholderBg: "bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100",
  },
  {
    id: "rice-shop-corporate",
    title: "米穀専門店 コーポレートサイト",
    industry: "米穀販売",
    category: "コーポレートサイト",
    description:
      "東北地方の米穀専門店のコーポレートサイトをフルスクラッチで制作。8ページ構成・スクロールアニメーション・お問い合わせフォーム・SEO対応まで一括実装。",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Vercel"],
    period: "2026年5月",
    siteUrl: "",
    thumbnail: "",
    placeholderText: "米",
    placeholderBg: "bg-gradient-to-br from-amber-50 via-stone-100 to-stone-200",
  },
];

// ─── サブコンポーネント：カード ────────────────────────────

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const hasImage = item.thumbnail !== "";
  const hasUrl = item.siteUrl !== "";

  return (
    <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group flex flex-col">
      {/* ── サムネイル ── */}
      <div className={`relative h-52 overflow-hidden ${!hasImage ? item.placeholderBg ?? "bg-slate-100" : ""}`}>
        {hasImage ? (
          <Image
            src={item.thumbnail}
            alt={`${item.title} のサムネイル`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          /* 画像なし：プレースホルダー */
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-9xl font-serif font-black text-stone-300 select-none
                         group-hover:scale-110 transition-transform duration-500"
            >
              {item.placeholderText ?? "?"}
            </span>
          </div>
        )}

        {/* 種別バッジ（左下・絶対配置） */}
        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {item.category}
        </span>
      </div>

      {/* ── コンテンツ ── */}
      <div className="p-6 flex flex-col flex-1">
        {/* 技術スタックタグ */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.techStack.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* プロジェクト名 */}
        <h3 className="text-xl font-black text-slate-900 mb-1 leading-snug">
          {item.title}
        </h3>

        {/* メタ情報（業種・制作期間） */}
        <p className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <span>{item.industry}</span>
          <span aria-hidden="true">·</span>
          <span>{item.period}</span>
        </p>

        {/* 説明文 */}
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
          {item.description}
        </p>

        {/* サイトリンクボタン */}
        {hasUrl ? (
          <a
            href={item.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-1.5 text-sm font-semibold
                       bg-cyan-600 hover:bg-cyan-700 text-white
                       px-4 py-2 rounded-full transition-all hover:scale-105"
          >
            サイトを見る
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span
            className="self-start inline-flex items-center gap-1.5 text-sm font-semibold
                       bg-slate-100 text-slate-400 px-4 py-2 rounded-full cursor-not-allowed"
            aria-label="公開準備中"
          >
            公開準備中
          </span>
        )}
      </div>
    </article>
  );
}

// ─── メインコンポーネント ──────────────────────────────────

/**
 * PortfolioSection
 *
 * Archeon LP の #works セクション全体を担当するコンポーネント。
 * page.tsx の Works セクション（AnimatedSection ごと）を
 * <PortfolioSection /> に置き換えるだけで動作する。
 *
 * 実績追加時は portfolioItems 配列に要素を追加すること。
 */
export default function PortfolioSection() {
  return (
    <AnimatedSection delay={100}>
      <section id="works" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* ── ヘッダー ── */}
          <div className="text-center mb-16">
            <span className="text-cyan-600 text-xs font-bold tracking-widest uppercase">
              Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
              制作実績
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              実際に制作したサイトをご覧ください。
            </p>
          </div>

          {/* ── カードグリッド ── */}
          {/*
            現在1件のため lg:grid-cols-2 でも左寄りにならないよう
            justify-items-center を使って中央配置。
            2件以上になったとき自然に2列グリッドになる。
          */}
          <div
            className={`grid grid-cols-1 gap-8 ${
              portfolioItems.length === 1
                ? "max-w-lg mx-auto"
                : "lg:grid-cols-2"
            }`}
          >
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          {/* ── フッターCTAエリア ── */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* サブアクション（準備中） */}
            <span
              className="inline-flex items-center justify-center gap-2
                         bg-white text-slate-400 font-semibold text-sm
                         px-6 py-3 rounded-full border border-slate-200
                         cursor-not-allowed"
              aria-label="実績一覧は準備中です"
            >
              もっと見る（準備中）
            </span>

            {/* プライマリCTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2
                         bg-gradient-to-r from-cyan-500 to-teal-500
                         hover:from-cyan-600 hover:to-teal-600
                         text-white font-bold text-sm
                         px-6 py-3 rounded-full shadow-lg shadow-cyan-200
                         transition-all hover:scale-105"
            >
              制作を依頼する
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── 補足テキスト ── */}
          <p className="text-center text-slate-400 text-xs mt-6">
            詳細なポートフォリオはお問い合わせ時にお見せすることも可能です。
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}
