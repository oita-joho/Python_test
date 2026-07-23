# 情報Ⅰ Python教材

GitHub Pagesで動作する、Pyodideを使ったブラウザ版Python教材です。

## ファイル構成

- `index.html`
- `css/style.css`
- `js/lessons.js`
- `js/editor.js`
- `js/python.js`
- `js/app.js`

## 更新内容

- コード例から、演算子（`=`、`+`、`*`、`>=` など）の前後の不要な空白を削除
- `if score`、`for i in`、`while i`、`def greet` など、必要な半角スペースは画面上で `□` と表示
- インデント4文字分を `□□□□` と表示
- 9単元すべてに「コードの意味」を追加
- ブラウザの古いキャッシュを避けるため、CSS・JavaScriptの読み込みに版番号を追加
