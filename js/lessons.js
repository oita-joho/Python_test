const lessons = [
  {
    title: "1 順次処理",
    description: "命令は、上から順番に実行されます。print関数を使って、文字を表示してみましょう。",
    example: `print("おはよう")\nprint("こんにちは")\nprint("こんばんは")`
  },
  {
    title: "2　変数",
    description: "変数に値を代入し、その値を計算したり表示したりします。",
    example: `price = 120\ncount = 3\ntotal = price * count\n\nprint(total)`
  },
  {
    title: "3　入力",
    description: "input関数を使うと、実行中に値を入力できます。入力された値は文字列として扱われます。",
    example: `name = input("名前を入力してください：")\nprint("こんにちは、" + name + "さん")`
  },
  {
    title: "4　条件分岐",
    description: "条件によって実行する命令を変えます。ifやelseの行の最後にはコロンが必要です。",
    example: `score = 75\n\nif score >= 60:\n    print("合格")\nelse:\n    print("不合格")`
  },
  {
    title: "5　for文",
    description: "同じ処理を決められた回数だけ繰り返します。endを指定すると、printの最後に付ける文字を変更できます。",
    example: `for i in range(5):\n    print(i, end=",")`
  },
  {
    title: "6　while文",
    description: "条件が成り立っている間、処理を繰り返します。変数の値を変化させる命令を忘れないようにします。",
    example: `i = 0\n\nwhile i < 5:\n    print(i)\n    i = i + 1`
  },
  {
    title: "7　リスト",
    description: "複数の値を1つの変数にまとめて保存できます。for文を使うと、値を順番に取り出せます。",
    example: `fruits = ["りんご", "みかん", "ぶどう"]\n\nfor fruit in fruits:\n    print(fruit)`
  },
  {
    title: "8　関数",
    description: "複数の命令をひとまとまりにして名前を付けます。作成した関数は、呼び出すことで実行されます。",
    example: `def greet(name):\n    print("こんにちは、" + name + "さん")\n\ngreet("大分")`
  },
  {
    title: "9　自由入力",
    description: "自由にPythonコードを入力して、動作を確認できます。",
    example: `# ここにPythonコードを書いてください\n`
  }
];
