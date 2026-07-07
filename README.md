# Re:Design Partners — コーポレートサイト

DXコンサルティング会社のコーポレートサイト(Astro製・完全静的)。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321/dx-consulting-site/
npm run build    # dist/ に静的ファイルを出力
npm run preview  # ビルド結果の確認
```

## 公開

`main` ブランチに push すると GitHub Actions([.github/workflows/deploy.yml](.github/workflows/deploy.yml))が自動でビルドし、GitHub Pages に公開されます。

公開URL: https://genmori-bit.github.io/dx-consulting-site/

## 公開前に変更する箇所

すべて [src/config.ts](src/config.ts) と [astro.config.mjs](astro.config.mjs) に集約しています。

| 項目 | 場所 |
| --- | --- |
| 会社名(現在は仮称) | `src/config.ts` の `brandEn` / `brandJa` |
| 問い合わせメールアドレス | `src/config.ts` の `contactEmail` |
| フォーム送信先 | `src/config.ts` の `formEndpoint`(Formspree等のURL。空の場合はメール作成画面を開くフォールバック) |
| 本番ドメイン | `astro.config.mjs` の `site`(canonical / OGP の絶対URLに使用)。独自ドメインに移行する際は `base` も削除 |

## 構成

```
src/
  config.ts            # 社名・連絡先などの設定値(ここだけ変えれば全体に反映)
  layouts/Base.astro   # <head>(SEO / OGP / 構造化データ / フォント)+ フェードインscript
  pages/
    index.astro          # トップページ
    services.astro       # 支援内容
    local-business.astro # 地域企業向けDX支援
    company.astro        # 会社概要・代表プロフィール
    privacy.astro        # プライバシーポリシー
  components/          # セクション単位のコンポーネント(コピーは各ファイル冒頭のfrontmatterに集約)
  styles/global.css    # デザイントークン(色・フォント・余白)と共通ユーティリティ
public/
  ogp.png              # OGP画像(ogp-source.svg から生成)
```

## デザイン方針

- 黒(#0b0b0c)/ チャコール / オフホワイト基調、シャンパンゴールド(#c8a96a)を控えめなアクセントに
- 大きな英字タイポグラフィ(Inter Tight)+ 読みやすい日本語(Noto Sans JP)
- 細い罫線・広い余白・角丸なしのカードUI
- 画像素材なし(抽象的なグリッド・データラインはCSS/SVGで描画)— 表示速度優先
- スクロール時のフェードインは IntersectionObserver + CSS transition(prefers-reduced-motion 対応)
