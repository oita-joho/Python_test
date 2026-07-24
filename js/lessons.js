const lessons = [
  {
    title: "1　順次処理",
    description:
      "命令は、上から順番に実行されます。print関数を使って、文字を表示してみましょう。",
    example: `print("おはよう")
print("こんにちは")
print("こんばんは")`,
    rows: [
      [
        'print("おはよう")',
        '「おはよう」と表示する',
        '「おはよう」を表示する'
      ],
      [
        'print("こんにちは")',
        '「こんにちは」と表示する',
        '「こんにちは」を表示する'
      ],
      [
        'print("こんばんは")',
        '「こんばんは」と表示する',
        '「こんばんは」を表示する'
      ]
    ]
  },
  {
    title: "2　四則演算",
    description: "Pythonでは、加算・減算・乗算・除算などの計算ができます。商、余り、累乗の演算子も確認しましょう。",
    example: `a=12
b=5

print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b)`,
    rows: [
      [
        "a=12",
        "変数aに12を代入する",
        "a←12"
      ],
      [
        "b=5",
        "変数bに5を代入する",
        "b←5"
      ],
      ["", "", ""],
      [
        "print(a+b)",
        "aとbを加算した結果を表示する",
        "a＋bを表示する"
      ],
      [
        "print(a-b)",
        "aからbを減算した結果を表示する",
        "a－bを表示する"
      ],
      [
        "print(a*b)",
        "aとbを乗算した結果を表示する",
        "a×bを表示する"
      ],
      [
        "print(a/b)",
        "aをbで除算した結果を表示する",
        "a÷bを表示する"
      ],
      [
        "print(a//b)",
        "aをbで割った商を表示する",
        "a÷bの商を表示する"
      ],
      [
        "print(a%b)",
        "aをbで割った余りを表示する",
        "a÷bの余りを表示する"
      ],
      [
        "print(a**b)",
        "aのb乗を表示する",
        "aのb乗を表示する"
      ]
    ]
  },
  {
    title: "3　変数",
    description:
      "変数に値を代入し、その値を計算したり表示したりします。",
    example: `price=120
count=3
total=price*count

print(total)`,
    rows: [
      [
        "price=120",
        "変数priceに120を代入する",
        "price←120"
      ],
      [
        "count=3",
        "変数countに3を代入する",
        "count←3"
      ],
      [
        "total=price*count",
        "priceとcountを掛けた結果を変数totalに代入する",
        "total←price×count"
      ],
      ["", "", ""],
      [
        "print(total)",
        "変数totalの値を表示する",
        "totalを表示する"
      ]
    ]
  },

  {
    title: "4　入力",
    description:
      "input関数を使うと、実行中に値を入力できます。入力された値は文字列として扱われます。",
    example: `name=input("名前を入力してください：")

print("こんにちは、"+name+"さん")`,
    rows: [
      [
        'name=input("名前を入力してください：")',
        "入力された文字を変数nameに代入する",
        "nameに文字列を入力する"
      ],
      ["", "", ""],
      [
        'print("こんにちは、"+name+"さん")',
        "文字列とnameの内容をつなげて表示する",
        "「こんにちは、」とnameと「さん」を連結して表示する"
      ]
    ]
  },

  {
    title: "5　条件分岐",
    description:
      "条件によって実行する命令を変えます。ifやelseの行の最後にはコロンが必要です。",
    example: `score=75

if score>=60:
    print("合格")
else:
    print("不合格")`,
    rows: [
      [
        "score=75",
        "変数scoreに75を代入する",
        "score←75"
      ],
      ["", "", ""],
      [
        "if score>=60:",
        "scoreが60以上かどうかを調べる",
        "もし score≧60 ならば"
      ],
      [
        '    print("合格")',
        "60以上なら「合格」と表示する",
        "　「合格」を表示する"
      ],
      [
        "else:",
        "60以上でない場合の処理を示す",
        "そうでなければ"
      ],
      [
        '    print("不合格")',
        "60以上でなければ「不合格」と表示する",
        "　「不合格」を表示する"
      ]
    ]
  },

  {
    title: "6　for文",
    description:
      "同じ処理を決められた回数だけ繰り返します。endを指定すると、printの最後に付ける文字を変更できます。",
    example: `for i in range(5):
    print(i,end=",")`,
    rows: [
      [
        "for i in range(5):",
        "変数iを0から4まで1ずつ変化させながら繰り返す",
        "iを0から4まで1ずつ増やしながら、繰り返す"
      ],
      [
        '    print(i,end=",")',
        "iの値を表示し、改行の代わりに「,」を付ける",
        "　iを改行せずに表示する"
      ]
    ]
  },

  {
    title: "7　while文",
    description:
      "条件が成り立っている間、処理を繰り返します。変数の値を変化させる命令を忘れないようにします。",
    example: `i=0

while i<5:
    print(i)
    i=i+1`,
    rows: [
      [
        "i=0",
        "変数iに0を代入する",
        "i←0"
      ],
      ["", "", ""],
      [
        "while i<5:",
        "iが5より小さい間、次の処理を繰り返す",
        "i＜5の間、繰り返す"
      ],
      [
        "    print(i)",
        "iの値を表示する",
        "　iを表示する"
      ],
      [
        "    i=i+1",
        "iの値を1増やす",
        "　i←i＋1"
      ]
    ]
  },

  {
    title: "8　リスト",
    description:
      "複数の値を1つの変数にまとめて保存できます。for文を使うと、値を順番に取り出せます。",
    example: `fruits=["りんご","みかん","ぶどう"]

for fruit in fruits:
    print(fruit)`,
    rows: [
      [
        'fruits=["りんご","みかん","ぶどう"]',
        "3つの文字列をリストにまとめ、変数fruitsに代入する",
        "fruits←［「りんご」,「みかん」,「ぶどう」］"
      ],
      ["", "", ""],
      [
        "for fruit in fruits:",
        "fruitsから要素を1つずつ取り出して繰り返す",
        "fruitsのすべての要素をfruitに順番に代入しながら、繰り返す"
      ],
      [
        "    print(fruit)",
        "取り出した要素を表示する",
        "　fruitを表示する"
      ]
    ]
  },

  {
    title: "9　関数",
    description:
      "複数の命令をひとまとまりにして名前を付けます。作成した関数は、呼び出すことで実行されます。",
    example: `def greet(name):
    print("こんにちは、"+name+"さん")

greet("大分")`,
    rows: [
      [
        "def greet(name):",
        "引数nameを受け取るgreetという関数を定義する",
        "関数greet(name)を次のように定義する"
      ],
      [
        '    print("こんにちは、"+name+"さん")',
        "文字列とnameの内容をつなげて表示する",
        "　「こんにちは、」とnameと「さん」を連結して表示する"
      ],
      ["", "", ""],
      [
        'greet("大分")',
        "greet関数に「大分」を渡して呼び出す",
        "greet（「大分」）を実行する"
      ]
    ]
  },

  {
    title: "10　探索",
    description:
      "リストの中から目的の値を順番に探します。見つかった位置を変数に保存します。",
    example: `numbers=[12,25,38,41,56]
target=38
position=-1

for i in range(len(numbers)):
    if numbers[i]==target:
        position=i
        break

if position==-1:
    print("見つかりませんでした")
else:
    print(position,"番目に見つかりました")`,
    rows: [
      [
        "numbers=[12,25,38,41,56]",
        "探索する数値のリストを作る",
        "numbers←［12,25,38,41,56］"
      ],
      [
        "target=38",
        "探す値を38にする",
        "target←38"
      ],
      [
        "position=-1",
        "見つかった位置を保存する変数を用意する。-1はまだ見つかっていないことを表す",
        "position←－1"
      ],
      ["", "", ""],
      [
        "for i in range(len(numbers)):",
        "リストの番号を0から順番に変えながら繰り返す",
        "iを0からnumbersの要素数－1まで1ずつ増やしながら、繰り返す"
      ],
      [
        "    if numbers[i]==target:",
        "i番目の値が探す値と同じか調べる",
        "　もし numbers[i]＝target ならば"
      ],
      [
        "        position=i",
        "同じなら、その位置をpositionに代入する",
        "　　position←i"
      ],
      [
        "        break",
        "値が見つかったので繰り返しを終了する",
        "　　繰り返しを終了する"
      ],
      ["", "", ""],
      [
        "if position==-1:",
        "最後まで見つからなかったか調べる",
        "もし position＝－1 ならば"
      ],
      [
        '    print("見つかりませんでした")',
        "見つからなかったことを表示する",
        "　「見つかりませんでした」を表示する"
      ],
      [
        "else:",
        "見つかった場合の処理を示す",
        "そうでなければ"
      ],
      [
        '    print(position,"番目に見つかりました")',
        "見つかった位置を表示する",
        "　positionと「番目に見つかりました」を表示する"
      ]
    ]
  },

  {
    title: "11　交換",
    description:
      "2つの変数の値を交換します。一方の値が消えないように、一時的に別の変数へ保存します。",
    example: `a=10
b=20

temp=a
a=b
b=temp

print(a)
print(b)`,
    rows: [
      [
        "a=10",
        "変数aに10を代入する",
        "a←10"
      ],
      [
        "b=20",
        "変数bに20を代入する",
        "b←20"
      ],
      ["", "", ""],
      [
        "temp=a",
        "aの値を一時的に変数tempへ保存する",
        "temp←a"
      ],
      [
        "a=b",
        "bの値をaに代入する",
        "a←b"
      ],
      [
        "b=temp",
        "保存しておいた元のaの値をbに代入する",
        "b←temp"
      ],
      ["", "", ""],
      [
        "print(a)",
        "交換後のaの値を表示する",
        "aを表示する"
      ],
      [
        "print(b)",
        "交換後のbの値を表示する",
        "bを表示する"
      ]
    ]
  },

  {
    title: "12　乱数",
    description:
      "randomモジュールを使うと、実行するたびに異なる数を選べます。randint(a,b)はa以上b以下の整数を1つ返します。",
    example: `import random

number=random.randint(1,6)

print(number)`,
    rows: [
      [
        "import random",
        "乱数を扱うためのrandomモジュールを読み込む",
        "乱数を使えるようにする"
      ],
      ["", "", ""],
      [
        "number=random.randint(1,6)",
        "1以上6以下の整数をランダムに1つ選び、numberに代入する",
        "number←1以上6以下の整数からランダムに選んだ値"
      ],
      ["", "", ""],
      [
        "print(number)",
        "選ばれた数を表示する",
        "numberを表示する"
      ]
    ]
  },

  {
    title: "13　自由記述",
    description:
      "自由にPythonコードを入力して、動作を確認できます。",
    example: `# ここにPythonコードを書いてください
`,
    rows: [
      [
        "# ここにPythonコードを書いてください",
        "学習した内容を使って、自由にプログラムを書く",
        "学習した内容を使って、自由にプログラムを作成する"
      ]
    ]
  }
];
