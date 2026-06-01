import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "東仙台整体院 | 肩こり・腰痛の整体・骨盤矯正",
  description:
    "宮城県仙台市の整体院。肩こり・腰痛・骨盤矯正を専門に、根本から体の不調を改善します。初回限定割引あり。JR陸前高砂駅から徒歩6分。",
};

export default function SeitaiDemoPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── ナビ ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <p className="text-stone-800 font-bold text-base">東仙台整体院</p>
          <a
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            予約・お問い合わせ
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-14 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-24 right-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-6">
            仙台で15年。宮城県仙台市・東仙台
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight mb-6">
            その痛み、
            <br />
            <span className="text-emerald-600">もう我慢しなくていい。</span>
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            仙台で15年。肩こり・腰痛を根本から整えます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-emerald-200 transition-all hover:scale-105"
            >
              ✦ 無料相談を予約する
            </a>
            <a
              href="#service"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-base px-8 py-4 rounded-full border border-stone-200 shadow-sm transition-all"
            >
              施術メニューを見る →
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["駐車場あり", "女性スタッフ在籍", "完全予約制", "JR陸前高砂駅 徒歩6分"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/80 text-stone-500 text-xs font-medium px-3 py-1.5 rounded-full border border-stone-100"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
              こんなお悩みありませんか？
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3">
              あなたの「つらい」、
              <br className="sm:hidden" />
              気づいていますか？
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "😞",
                title: "毎朝、首と肩がガチガチで目が覚める",
                desc: "睡眠をとってもスッキリせず、一日中肩や首がこった状態が続いている。",
              },
              {
                icon: "😣",
                title: "デスクワーク後の腰痛が取れない",
                desc: "長時間座るたびに腰に張りや痛みを感じ、仕事に集中できない。",
              },
              {
                icon: "😰",
                title: "病院に行っても「異常なし」と言われた",
                desc: "検査では何も出ない。でも確かに痛い。そんな状態が続いている方に。",
              },
              {
                icon: "😔",
                title: "マッサージに行っても、また次の日には元に戻る",
                desc: "その場は楽になる。でも根本が変わらないまま、また同じ場所が痛くなる。",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm"
              >
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className="text-base font-black text-stone-800 mb-2">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-600 mt-10 text-base font-medium">
            これらは<strong>体のゆがみや筋肉の緊張</strong>が原因のことがほとんどです。
            <br />
            放置すると悪化します。まずは一度、体を診せてください。
          </p>
        </div>
      </section>

      {/* ── Service ── */}
      <section id="service" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
              Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 mb-3">
              施術メニュー
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                badge: "初回割引",
                badgeColor: "bg-red-100 text-red-600",
                name: "全身整体",
                time: "60分",
                price: "初回 4,800円",
                priceNote: "（通常 6,500円）",
                desc: "骨格のゆがみをていねいに確認しながら、体のバランスを整えていきます。",
                highlight: false,
              },
              {
                badge: "人気 No.1",
                badgeColor: "bg-yellow-100 text-yellow-700",
                name: "骨盤矯正",
                time: "45分",
                price: "5,500円",
                priceNote: "（税込）",
                desc: "産後のお体や慢性的な腰痛に。骨盤を正しい位置に戻す専門コース。",
                highlight: true,
              },
              {
                badge: "運動後のケアに",
                badgeColor: "bg-emerald-100 text-emerald-700",
                name: "スポーツマッサージ",
                time: "40分〜",
                price: "4,500円〜",
                priceNote: "（税込）",
                desc: "筋肉の疲労をしっかりほぐします。試合前後のケアにも対応。",
                highlight: false,
              },
            ].map((s) => (
              <div
                key={s.name}
                className={`rounded-2xl p-6 border ${
                  s.highlight
                    ? "bg-emerald-600 text-white border-transparent shadow-xl shadow-emerald-200"
                    : "bg-white text-stone-900 border-stone-100 shadow-sm"
                }`}
              >
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${s.badgeColor}`}
                >
                  {s.badge}
                </span>
                <h3
                  className={`font-black text-lg mb-1 ${
                    s.highlight ? "text-white" : "text-stone-800"
                  }`}
                >
                  {s.name}
                </h3>
                <p
                  className={`text-xs mb-4 ${
                    s.highlight ? "text-white/70" : "text-stone-400"
                  }`}
                >
                  所要時間：{s.time}
                </p>
                <div className="mb-4">
                  <span
                    className={`text-2xl font-black ${
                      s.highlight ? "text-white" : "text-emerald-600"
                    }`}
                  >
                    {s.price}
                  </span>
                  <span
                    className={`text-xs ml-1 ${
                      s.highlight ? "text-white/70" : "text-stone-400"
                    }`}
                  >
                    {s.priceNote}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    s.highlight ? "text-white/85" : "text-stone-500"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              当院について
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "柔道整復師・按摩マッサージ指圧師が担当",
                desc: "施術するのは国家資格を持つスタッフのみです。経歴や資格は院内に掲示しています。",
              },
              {
                num: "02",
                title: "なぜ痛むのか、一緒に確認します",
                desc: "その日の症状を取るだけでなく、原因を一緒に考えてから施術に入ります。",
              },
              {
                num: "03",
                title: "LINE・電話・ネットで24時間予約できます",
                desc: "当日の空き枠もご案内できます。まずお気軽に連絡してみてください。",
              },
              {
                num: "04",
                title: "カルテを毎回確認してから施術",
                desc: "前回の状態を踏まえて施術します。「前より楽になってきた」を積み上げていきます。",
              },
            ].map((f) => (
              <div
                key={f.num}
                className="border border-white/10 rounded-2xl p-6 hover:border-emerald-400/40 transition-colors"
              >
                <span className="block text-5xl font-black text-emerald-400/20 leading-none mb-3">
                  {f.num}
                </span>
                <h3 className="font-black text-emerald-300 text-base mb-2">{f.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flow ── */}
      <section id="flow" className="py-20 bg-emerald-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
              Flow
            </span>
            <h2 className="text-3xl font-black text-stone-900 mt-3">
              はじめての方へ — 来院の流れ
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "ご予約",
                desc: "LINE・電話・ウェブから。「初めてなんですが…」で大丈夫です。",
              },
              {
                step: "02",
                title: "お悩みを聞かせてください",
                desc: "いつから・どこが・どんなときに痛むか、一緒に整理します。10分ほど。",
              },
              {
                step: "03",
                title: "施術",
                desc: "体の状態に合わせた施術を行います。気になることはいつでも声をかけてください。",
              },
              {
                step: "04",
                title: "帰宅後のケアもお伝えします",
                desc: "自宅でできるストレッチや生活習慣のアドバイスをお伝えして終了です。",
              },
            ].map((f, i, arr) => (
              <div key={f.step} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                    {f.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 h-full bg-emerald-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-black text-stone-800 text-base mb-1">{f.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4">
            まず話だけでも、ぜんぜんOKです。
          </h2>
          <p className="text-white/80 leading-relaxed mb-10">
            「本当に良くなるのかな」と思っているなら、一度来てみてください。押し売りはしません。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:022-395-7840"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-colors shadow-lg text-base"
            >
              📞 022-395-7840（電話予約）
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-bold px-8 py-4 rounded-full border border-white/30 hover:bg-white/25 transition-colors text-base"
            >
              💬 無料で相談してみる
            </a>
          </div>

          <p className="text-white/60 text-xs">
            来院当日のキャンセルも電話1本でOKです。
          </p>
        </div>
      </section>

      {/* ── Access ── */}
      <section id="access" className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
              Access
            </span>
            <h2 className="text-3xl font-black text-stone-900 mt-3">アクセス</h2>
          </div>

          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {/* 地図プレースホルダー */}
            <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              <p className="text-emerald-700 text-sm font-medium">📍 地図をここに埋め込み</p>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-black text-stone-800 mb-3 text-sm">所在地・アクセス</h3>
                <div className="space-y-2 text-sm text-stone-600">
                  <p>〒983-0842</p>
                  <p>宮城県仙台市宮城野区五輪2丁目8-14</p>
                  <p className="mt-3">
                    <span className="font-bold">電車</span>：JR仙石線 陸前高砂駅 徒歩6分
                  </p>
                  <p>
                    <span className="font-bold">予約</span>：LINE / お電話 / ウェブ（24時間受付）
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-black text-stone-800 mb-3 text-sm">営業時間</h3>
                <div className="space-y-1.5 text-sm text-stone-600">
                  {[
                    { day: "月・火・木・金", time: "10:00〜20:00", off: false },
                    { day: "土・日", time: "9:00〜18:00", off: false },
                    { day: "水曜・祝日", time: "定休日", off: true },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between">
                      <span className={row.off ? "text-stone-400" : ""}>{row.day}</span>
                      <span className={row.off ? "text-stone-400" : "font-medium"}>
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-stone-900 text-stone-400 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div>
            <p className="text-white font-bold">東仙台整体院</p>
            <p className="text-xs mt-0.5">宮城県仙台市宮城野区 / TEL: 022-395-7840</p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs">© 2026 東仙台整体院. All rights reserved.</p>
            <p className="text-xs text-stone-500">
              Produced by{" "}
              <a
                href="https://archeon-seven.vercel.app"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Archeon
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
