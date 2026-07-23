const lessons = [
  {
    title: "1　順次処理",
    description: "命令は、上から順番に実行されます。print関数を使って、文字を表示してみましょう。",
    example: `print("おはよう")
print("こんにちは")
print("こんばんは")`,
    meaning: `① 「おはよう」と表示する
② 「こんにちは」と表示する
③ 「こんばんは」と表示する`
  },
  {
    title: "2　変数",
    description: "変数に値を代入し、その値を計算したり表示したりします。",
    example: `price = 120
count = 3
total = price * count

print(total)`,
    meaning: `① 変数priceに120を代入する
② 変数countに3を代入する
③ priceとcountを掛け、その結果を変数totalに代入する
④ 変数totalの値を表示する`
  },
  {
    title: "3　入力",
    description: "input関数を使うと、実行中に値を入力できます。入力された値は文字列として扱われます。",
    example: `name = input("名前を入力してください：")
print("こんにちは、" + name + "さん")`,
    meaning: `① 「名前を入力してください：」と表示して、入力された文字を変数nameに代入する
② 「こんにちは、」とnameの内容と「さん」をつなげて表示する`
  },
  {
    title: "4　条件分岐",
    description: "条件によって実行する命令を変えます。ifやelseの行の最後にはコロンが必要です。",
    example: `score = 75

if score >= 60:
    print("合格")
else:
    print("不合格")`,
    meaning: `① 変数scoreに75を代入する
② scoreが60以上かどうかを調べる
③ 60以上なら「合格」と表示する
④ 60以上でなければ
⑤ 「不合格」と表示する`
  },
  {
    title: "5　for文",
    description: "同じ処理を決められた回数だけ繰り返します。endを指定すると、printの最後に付ける文字を変更できます。",
    example: `for i in range(5):
    print(i, end=",")`,
    meaning: `① 変数iを0から4まで1ずつ変化させながら繰り返す
② iの値を表示し、改行の代わりに「,」を付ける`
  },
  {
    title: "6　while文",
    description: "条件が成り立っている間、処理を繰り返します。変数の値を変化させる命令を忘れないようにします。",
    example: `i = 0

while i < 5:
    print(i)
    i = i + 1`,
    meaning: `① 変数iに0を代入する
② iが5より小さい間、次の処理を繰り返す
③ iの値を表示する
④ iの値を1増やす`
  },
  {
    title: "7　リスト",
    description: "複数の値を1つの変数にまとめて保存できます。for文を使うと、値を順番に取り出せます。",
    example: `fruits = ["りんご", "みかん", "ぶどう"]

for fruit in fruits:
    print(fruit)`,
    meaning: `① 「りんご」「みかん」「ぶどう」をリストにまとめ、変数fruitsに代入する
② fruitsから要素を1つずつ取り出し、変数fruitに代入して繰り返す
③ fruitの内容を表示する`
  },
  {
    title: "8　関数",
    description: "複数の命令をひとまとまりにして名前を付けます。作成した関数は、呼び出すことで実行されます。",
    example: `def greet(name):
    print("こんにちは、" + name + "さん")

greet("大分")`,
    meaning: `① 引数nameを受け取るgreetという関数を定義する
② 「こんにちは、」とnameの内容と「さん」をつなげて表示する
③ greet関数に「大分」を渡して呼び出す`
  },
  {
    title: "9　自由入力",
    description: "自由にPythonコードを入力して、動作を確認できます。",
    example: `# ここにPythonコードを書いてください
`,
    meaning: `自由にコードを入力し、実行結果を確認します。`
  }
];
