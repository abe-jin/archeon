import Header from "@/components/Header";
import AnimatedSection from "@/components/AnimatedSection";
import PortfolioSection from "@/components/PortfolioSection";
import { Globe, Smartphone, Share2, CheckCircle, ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            Web制作 / アプリ開発 / SNS運用
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
            あなたのビジネスに、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              動かす支点を。
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Webサイト、アプリ、SNS運用。小さなチームだから動きが速い。<br />
            地方の事業者から個人まで、一緒に考えながら作ります。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all hover:scale-105">
              まずは無料で相談する
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#works" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-lg px-8 py-4 rounded-full border border-slate-200 shadow-sm transition-all">
              制作事例を見てみる
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 text-slate-400 text-sm">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "LINE Bot", "Firebase"].map((tech) => (
              <span key={tech} className="font-mono font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <AnimatedSection>
        <section id="services" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-cyan-600 text-xs font-bold tracking-widest uppercase">Services</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
                できること
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto">ビジネスの課題に合わせて、最適な手段を選びます。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  colorBg: "bg-cyan-100",
                  colorText: "text-cyan-600",
                  colorBadge: "text-cyan-500",
                  colorCard: "from-cyan-50 to-white border-cyan-100",
                  colorCheck: "text-cyan-500",
                  title: "Web制作",
                  sub: "Website / LP",
                  desc: "依頼から公開まで一貫して対応します。デザインからコーディングまで、目的に合ったサイトをゼロから作ります。",
                  items: ["コーポレートサイト", "ランディングページ（LP）", "ECサイト・予約システム", "既存サイトのリニューアル"],
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  colorBg: "bg-teal-100",
                  colorText: "text-teal-600",
                  colorBadge: "text-teal-500",
                  colorCard: "from-teal-50 to-white border-teal-100",
                  colorCheck: "text-teal-500",
                  title: "アプリ開発",
                  sub: "App Development",
                  desc: "ユーザーの課題を解決するWebアプリを作ります。アイデアの段階から一緒に考え、動くものを届けます。",
                  items: ["Webアプリケーション", "位置情報・マップ連携アプリ", "業務効率化ツール", "LINE Bot・API連携"],
                },
              ].map((s) => (
                <div key={s.title} className={`relative bg-gradient-to-br ${s.colorCard} border rounded-2xl p-8 hover:shadow-lg hover:border-cyan-200 transition-all duration-200 group`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${s.colorBg} ${s.colorText} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                    {s.icon}
                  </div>
                  <p className={`text-xs font-bold ${s.colorBadge} tracking-widest uppercase mb-2`}>{s.sub}</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className={`w-4 h-4 ${s.colorCheck} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Why Archeon ── */}
      <AnimatedSection delay={100}>
        <section id="why" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Why Archeon</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4">
                なぜ Archeon なのか
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "「わからない」から一緒に始められる",
                  desc: "ITに詳しくなくても大丈夫です。ヒアリングを丁寧に行い、専門用語を使わずに説明します。「何から頼めばいいかわからない」という相談が一番多いです。",
                },
                {
                  num: "02",
                  title: "小回りが利く",
                  desc: "大きな制作会社のように何人もの担当者を介しません。連絡はすぐ返り、変更にも素早く対応できます。スピードが必要なときこそ、小さなチームが強みです。",
                },
                {
                  num: "03",
                  title: "誠実に、正直に",
                  desc: "できないことは最初にお伝えします。見栄えだけの提案はしません。予算や目的に合わせて、本当に必要なものを一緒に選びます。",
                },
              ].map((w) => (
                <div key={w.num} className="border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition-colors group">
                  <span className="block text-6xl font-black text-cyan-400/20 leading-none mb-4">
                    {w.num}
                  </span>
                  <h3 className="text-xl font-black mb-3 text-cyan-300">{w.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Works ── */}
      <PortfolioSection />

      {/* ── Pricing ── */}
      <AnimatedSection delay={100}>
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-cyan-600 text-xs font-bold tracking-widest uppercase">Pricing</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
                料金の目安
              </h2>
              <p className="text-slate-500">掲載している金額はあくまで参考です。ページ数、機能の複雑さ、納期などによって変わります。お見積りは無料です。</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "LP制作",
                  price: "3万〜",
                  unit: "円（税込）",
                  period: "納期：1〜2週間",
                  items: ["1ページ構成", "レスポンシブ対応", "お問い合わせフォーム", "基本SEO設定"],
                  highlight: false,
                },
                {
                  name: "コーポレートサイト",
                  price: "10万〜",
                  unit: "円（税込）",
                  period: "納期：2〜4週間",
                  items: ["5ページ以内", "レスポンシブ対応", "お問い合わせフォーム", "SEO・OGP設定", "サイトマップ生成"],
                  highlight: true,
                },
                {
                  name: "SNS運用代行",
                  price: "3万〜",
                  unit: "円/月（税込）",
                  period: "月10〜20投稿",
                  items: ["X / Instagram対応", "投稿文・画像企画", "スケジュール管理", "月次レポート"],
                  highlight: false,
                },
              ].map((p) => (
                <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? "bg-gradient-to-br from-cyan-500 to-teal-600 text-white border-transparent shadow-xl shadow-cyan-300/40" : "bg-white text-slate-900 border-slate-200"}`}>
                  {p.highlight && (
                    <span className="inline-block bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4">人気</span>
                  )}
                  <h3 className={`text-lg font-black mb-1 ${p.highlight ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                  <p className={`text-xs mb-4 ${p.highlight ? "text-white/70" : "text-slate-400"}`}>{p.period}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-black ${p.highlight ? "text-white" : "text-cyan-600"}`}>{p.price}</span>
                    <span className={`text-sm ml-1 ${p.highlight ? "text-white/80" : "text-slate-500"}`}>{p.unit}</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {p.items.map((item) => (
                      <li key={item} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-white/90" : "text-slate-600"}`}>
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${p.highlight ? "text-white" : "text-cyan-500"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`block text-center font-bold text-sm py-3 rounded-full transition-all ${p.highlight ? "bg-white text-cyan-600 hover:bg-cyan-50" : "bg-cyan-600 text-white hover:bg-cyan-700"}`}>
                    相談する
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-400 text-xs mt-8">※ 上記はあくまで目安です。要件に応じてお見積もりします。</p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-6">
            気軽に話しかけてください
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-12">
            「まだ何も決まっていない」でも構いません。<br className="hidden sm:block" />
            どんな小さな相談でも、返信します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:abejin0515@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-cyan-700 font-bold text-base px-8 py-4 rounded-full hover:bg-cyan-50 transition-colors shadow-lg">
              <Mail className="w-5 h-5" />
              メールで相談
            </a>
            <span className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white/50 font-bold text-base px-8 py-4 rounded-full border border-white/20 cursor-not-allowed">
              <MessageCircle className="w-5 h-5" />
              LINE（準備中）
            </span>
          </div>

          <p className="text-white/70 text-sm mt-8">フォームに送っていただければ、24時間以内にご連絡します。</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white font-bold text-lg">Archeon</p>
            <p className="text-xs mt-1">あなたのビジネスの「支点」になる。</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">サービス</a>
            <a href="#pricing" className="hover:text-white transition-colors">料金</a>
            <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
          <p className="text-xs">© 2026 Archeon. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
