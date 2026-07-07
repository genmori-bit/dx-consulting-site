import { defineConfig } from "astro/config";

// site / base: GitHub Pages(genmori-bit.github.io/dx-consulting-site)向け設定。
// 独自ドメイン取得後は site をそのドメインに変更し、base を削除してください。
export default defineConfig({
  site: "https://genmori-bit.github.io",
  base: "/dx-consulting-site",
  compressHTML: true,
});
