/**
 * サイト全体で使う設定値。社名・連絡先などはここだけ変更すれば全ページに反映されます。
 */
export const SITE = {
  brandEn: "MICHIKAKU",
  brandJa: "ミチカク",
  tagline: "仕事に、道筋を。",
  representative: "毛利 元樹",
  title: "ミチカク | 事業が動く仕組みを設計するDX・業務改善支援",
  description:
    "営業、管理部門、意思決定の流れを整え、AI・CRM/SFA・SaaSを現場で使われる仕組みに落とし込むDX・業務改善の支援サービスです。業務診断から設計、実装、運用改善まで支援します。",
  // 問い合わせ先(公開用)。ドメイン取得後に差し替えてください。
  contactEmail: "contact@michikaku.jp",
  // フォーム送信先(Formspree等のエンドポイント)。空の場合はメール作成画面を開くフォールバックになります。
  formEndpoint: "",
} as const;
