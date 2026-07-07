/**
 * サイト全体で使う設定値。社名・連絡先などはここだけ変更すれば全ページに反映されます。
 */
export const SITE = {
  // 会社名は仮称です。決定後にここを書き換えてください。
  brandEn: "Re:Design Partners",
  brandJa: "株式会社リデザインパートナーズ",
  representative: "毛利 元樹",
  title:
    "Re:Design Partners | 経営と現場をつなぐDXコンサルティング — Business, Re-designed.",
  description:
    "AI活用、CRM/SFA導入・活用支援、バックオフィス改善、業務プロセス改善を軸に、属人化した業務・使われないシステム・見えない営業活動を整理し、企業が前に進むための仕組みを設計・実装・定着まで伴走するDXコンサルティング会社です。",
  // 問い合わせ先(公開用)。決定後に差し替えてください。
  contactEmail: "contact@redesign-partners.jp",
  // フォーム送信先(Formspree等のエンドポイント)。空の場合はメール作成画面を開くフォールバックになります。
  formEndpoint: "",
} as const;
