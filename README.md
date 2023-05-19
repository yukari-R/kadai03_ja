# 課題3 -じゃんけんアプリ　リッチ版-

## 紹介と使い方
  - じゃんけんアプリの課題をベースとし、乱数生成&if文を使い「週末の行き先を決める」ものを作りました
  - 週末誰とどこに出かけるかを悩んでいるときに、ヒントをもらえるアプリです

  - 使い方は以下の通りです
  - 「今の気分は？」のボタンをクリックすることで、幾つか画像がランダム表示されます
　　　　　　　　（前回からの追加要素）
  - 今の気分に合ったものが表示されたときに「ぴったり」というボタンを押すと、車のアニメーションが動きます
  - ストップを押した距離（時間経過）に応じ、ランダムで行き先案が表示されます
  - 行き先案は右下のメモに記録されます

## 工夫した点
  - 選択肢をランダムに表示させるだけでなく、自分の選択と乱数を組み合わせたこと（じゃんけんアプリの要素を活用）
  - クリックしたときに要素（ボタンや画像）の表示/非表示が切り替わるように設定し、画面をなるべくシンプルに見せたこと
  - 行き先案をリストにしておけるようにしたこと

## 苦戦した点
  - Functionの活用：うまく活用できず同じような条件・アクションを全て改めて記述しているためとても長い記述となってしまっていること
  - 経過時間の取得と、If文への活用。特に時間取得が難しく、ストップウォッチのアプリの使い方を応用した
  - 車のアニメーションが単調であること・走り続けてしまうこと、またメモのレイアウトが崩れてしまうことを、時間を見つけて修正・ブラッシュアップしたい

## 参考にした web サイトなど
  - https://magazine.techacademy.jp/magazine/35280
  - https://stock.adobe.com/jp/
  - https://soco-st.com/
  - https://note.com/dngri/n/nff86a1dd9553
  - https://into-the-program.com/javascript-output-a-string/
  - https://note.affi-sapo-sv.com/js-elapsed-time.php
  - https://bel-itigo.com/js-transform-image-web-animations-api/
  - adobestock、「ソコスト」は画像を利用
