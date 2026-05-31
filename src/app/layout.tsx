import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://archeon-seven.vercel.app'),
  title: "Archeon（アーキオン） | 宮城のWeb制作・アプリ開発・SNS運用",
  description: "宮城・仙台のWeb制作会社Archeon（アーキオン）。コーポレートサイト・LP・アプリ開発をNext.js + AIで高品質・スピード納品。整体院・美容院・小規模事業者のホームページ制作はArcheonへ。",
  openGraph: {
    title: 'Archeon（アーキオン） | 宮城のWeb制作・アプリ開発・SNS運用',
    description: '宮城・仙台のWeb制作会社Archeon。コーポレートサイト・LP・アプリ開発をNext.js + AIで高品質・スピード納品。整体院・美容院・小規模事業者のホームページ制作はArcheonへ。',
    locale: 'ja_JP',
    type: 'website',
    url: 'https://archeon-seven.vercel.app',
    siteName: 'Archeon（アーキオン）',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archeon（アーキオン） | 宮城のWeb制作・アプリ開発・SNS運用',
    description: '宮城・仙台のWeb制作会社Archeon。Next.js + AIで高品質・スピード納品。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
