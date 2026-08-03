# おきなわこども選挙 2026 公式サイト

2026年沖縄県知事選挙と同じ時期に初開催する「おきなわこども選挙」の公式Webサイトです。

## アーキテクチャ

- 配信: GitHub Pages
- 公開ディレクトリ: `public/`
- 技術: HTML5、CSS3、Vanilla JavaScript
- デプロイ: `main`ブランチへのpushを契機にGitHub Actionsが`public/`をそのまま公開

ビルド処理、Node.js、npm、React、Vite、サーバー、Worker、データベースは使用しません。

## ファイル構成

- `public/index.html`: ページの本文と構造
- `public/assets/css/styles.css`: レイアウトとデザイン
- `public/assets/js/app.js`: ふりがな、モバイルメニュー、FAQの操作
- `public/assets/images/2026/`: 公式ワークショップ写真

## ローカル確認

```bash
python3 -m http.server 4173 -d public
```

公開画像の出典は `IMAGE_CREDITS.md` を参照してください。

## 更新時に必ず確認する情報

- 候補者の回答動画は、全候補者を同じ質問・撮影条件・表示形式で掲載する
- 投票所、時間、対象年齢、申込方法は、正式決定後の情報だけを掲載する
- 実際の選挙の投票終了前に、こども選挙の途中経過・結果を公表しない
- 子どもの写真・動画・発言は、本人と保護者の同意範囲で掲載する
