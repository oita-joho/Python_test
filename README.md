# 情報Ⅰ Python教材

GitHub Pages上で動作する、Pyodideを利用したブラウザ版Python教材です。

## ファイル構成

- `index.html`：画面の構造
- `css/style.css`：見た目
- `js/lessons.js`：教材データ
- `js/editor.js`：行番号、Tab、スペース表示
- `js/python.js`：Python実行処理
- `js/app.js`：画面切替とボタン処理

## GitHub Pagesでの公開

1. このフォルダの中身をGitHubリポジトリへアップロードします。
2. GitHubの `Settings` → `Pages` を開きます。
3. `Deploy from a branch` を選びます。
4. `main` ブランチと `/root` を選び、保存します。

## スペース表示

画面上では半角スペースを `□` と表示します。実行時には自動的に通常の半角スペースへ戻します。
