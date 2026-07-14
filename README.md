# 『志望理由が見つからない』ブランディングページ

VS Codeで編集し、GitHubからCloudflare Pagesへ公開できる静的サイトです。

## ファイル
- `index.html`：文章・リンク・ページ構成
- `style.css`：色・レイアウト・アニメーション
- `script.js`：スクロール表示・スマホメニュー
- `images/`：後から写真やロゴを入れる場所

## 最初に変更する場所
1. `index.html` 内の仮エピソードタイトル
2. 各カードのTikTokリンク
3. `href="#"` になっているEQAO公式サイト・無料相談リンク
4. 仮の人物ビジュアルを実際のドラマ写真へ変更

## Cloudflare Pages
GitHubリポジトリへこのフォルダの中身をアップロードし、Cloudflare Pagesでリポジトリを選択します。
フレームワークは不要です。Build commandは空欄、Output directoryは `/` または空欄で公開できます。
