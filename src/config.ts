/**
 * サイト全体で使う設定値。社名・連絡先などはここだけ変更すれば全ページに反映されます。
 */
export const SITE = {
  // 会社名は仮称です。決定後にここを書き換えてください。
  brandEn: "Re:Design Partners",
  brandJa: "株式会社リデザインパートナーズ",
  representative: "毛利 元樹",
  title: "Re:Design Partners | 事業が動く仕組みを設計するDXコンサルティング",
  description:
    "営業、管理部門、意思決定の流れを整え、AI・CRM/SFA・SaaSを現場で使われる仕組みに落とし込むDXコンサルティング会社です。業務診断から設計、実装、運用改善まで支援します。",
  // 問い合わせ先(公開用)。決定後に差し替えてください。
  contactEmail: "contact@redesign-partners.jp",
  // フォーム送信先(Formspree等のエンドポイント)。空の場合はメール作成画面を開くフォールバックになります。
  formEndpoint: "",
} as const;
