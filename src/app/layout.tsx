import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://archeon.jp'),
  title: "Archeon（アーキオン） | あなたのビジネスの「支点」になる",
  description: "Web制作・アプリ開発・SNS運用のArcheon。アルキメデスのように、あなたのビジネスの支点になります。",
  openGraph: {
    title: 'Archeon（アーキオン） | あなたのビジネスの「支点」になる',
    description: 'Web制作・アプリ開発・SNS運用のArcheon。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
