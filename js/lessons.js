const lessons = [
  {
    title: "1　順次処理",
    description: "命令は、上から順番に実行されます。print関数を使って、文字を表示してみましょう。",
    example: `print("おはよう")
print("こんにちは")
print("こんばんは")`,
    rows: [
      ['print("おはよう")', '「おはよう」と表示する'],
      ['print("こんにちは")', '「こんにちは」と表示する'],
      ['print("こんばんは")', '「こんばんは」と表示する']
    ]
  },
  {
    title: "2　変数",
    description: "変数に値を代入し、その値を計算したり表示したりします。",
    example: `price=120
count=3
total=price*count

print(total)`,
    rows: [
      ['price=120', '変数priceに120を代入する'],
      ['count=3', '変数countに3を代入する'],
      ['total=price*count', 'priceとcountを掛けた結果を変数totalに代入する'],
      ['', ''],
      ['print(total)', '変数totalの値を表示する']
    ]
  },
  {
    title: "3　入力",
    description: "input関数を使うと、実行中に値を入力できます。入力された値は文字列として扱われます。",
    example: `name=input("名前を入力してください：")

print("こんにちは、"+name+"さん")`,
    rows: [
      ['name=input("名前を入力してください：")', '入力された文字を変数nameに代入する'],
      ['', ''],
      ['print("こんにちは、"+name+"さん")', '文字列とnameの内容をつなげて表示する']
    ]
  },
  {
    title: "4　条件分岐",
    description: "条件によって実行する命令を変えます。ifやelseの行の最後にはコロンが必要です。",
    example: `score=75

if score>=60:
    print("合格")
else:
    print("不合格")`,
    rows: [
      ['score=75', '変数scoreに75を代入する'],
      ['', ''],
      ['if score>=60:', 'scoreが60以上かどうかを調べる'],
      ['    print("合格")', '60以上なら「合格」と表示する'],
      ['else:', '60以上でない場合の処理を示す'],
      ['    print("不合格")', '60以上でなければ「不合格」と表示する']
    ]
  },
  {
    title: "5　for文",
    description: "同じ処理を決められた回数だけ繰り返します。endを指定すると、printの最後に付ける文字を変更できます。",
    example: `for i in range(5):
    print(i,end=",")`,
    rows: [
      ['for i in range(5):', '変数iを0から4まで1ずつ変化させながら繰り返す'],
      ['    print(i,end=",")', 'iの値を表示し、改行の代わりに「,」を付ける']
    ]
  },
  {
    title: "6　while文",
    description: "条件が成り立っている間、処理を繰り返します。変数の値を変化させる命令を忘れないようにします。",
    example: `i=0

while i<5:
    print(i)
    i=i+1`,
    rows: [
      ['i=0', '変数iに0を代入する'],
      ['', ''],
      ['while i<5:', 'iが5より小さい間、次の処理を繰り返す'],
      ['    print(i)', 'iの値を表示する'],
      ['    i=i+1', 'iの値を1増やす']
    ]
  },
  {
    title: "7　リスト",
    description: "複数の値を1つの変数にまとめて保存できます。for文を使うと、値を順番に取り出せます。",
    example: `fruits=["りんご","みかん","ぶどう"]

for fruit in fruits:
    print(fruit)`,
    rows: [
      ['fruits=["りんご","みかん","ぶどう"]', '3つの文字列をリストにまとめ、変数fruitsに代入する'],
      ['', ''],
      ['for fruit in fruits:', 'fruitsから要素を1つずつ取り出して繰り返す'],
      ['    print(fruit)', '取り出した要素を表示する']
    ]
  },
  {
    title: "8　関数",
    description: "複数の命令をひとまとまりにして名前を付けます。作成した関数は、呼び出すことで実行されます。",
    example: `def greet(name):
    print("こんにちは、"+name+"さん")

greet("大分")`,
    rows: [
      ['def greet(name):', '引数nameを受け取るgreetという関数を定義する'],
      ['    print("こんにちは、"+name+"さん")', '文字列とnameの内容をつなげて表示する'],
      ['', ''],
      ['greet("大分")', 'greet関数に「大分」を渡して呼び出す']
    ]
  },
  {
    title: "9　自由入力",
    description: "自由にPythonコードを入力して、動作を確認できます。",
    example: `# ここにPythonコードを書いてください
`,
    rows: [
      ['# ここにPythonコードを書いてください', '学習した内容を使って、自由にプログラムを書く']
    ]
  }
];
