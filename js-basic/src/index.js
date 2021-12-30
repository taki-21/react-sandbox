/**
 * const, let等の変数宣言
 */
// var val1 = "var変数"
// console.log(val1)

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1)

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1)

// let val2 = "let変数"
// console.log(val2)

// val2 = "let変数を上書き"
// console.log(val2)

// let val2 = "let変数を上書き"

// const val3 = "const変数"
// console.log(val3)

// // const変数は上書き不可能
// val3 = "const変数を上書き"

// // const変数は再宣言もできない
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトの場合はプロバティの変更が可能
// const val4 = {
//   name: "山田",
//   age: 30
// }
// val4.name = "yamada"
// val4.address = "Tokyo"
// console.log(val4)

// constで定義した配列の場合はプロバティの変更が可能
// const val5 = ["dog", "cat"]
// val5[0] = "bird"
// val5.push("monkey")
// console.log(val5)

/**
 * テンプレート文字列
 */

// const name = "山田"
// const age = 30
// const message = `私の名前は${name}です。年齢は${age}です`
// console.log(message)

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str
// }
// const func1 = function(str) {
//   return str
// }
// console.log(func1("あいうえお"))

// アロー関数
// const func2 = (str) => {
//   return str
// }
// console.log(func2("かきくけこ"))

// const func3 = (num1, num2) => {
//   return num1 + num2
// }
// const func3 = (num1, num2) => num1 + num2
// console.log(func3(10, 50))

/**
 * 分割代入
 * ruby -> 多重代入
 * python -> シーケンスのアンパック
 * シーケンス: 複数の要素をまとめて扱える型（配列）
 */
// const myProfile = {
//   name: "山田",
//   age: 30
// }

// const { age, name } = myProfile
// console.log(name)
// // console.log(age)

/**
 * スプレッド構文
 * Pythonだと「アンパック」
 */
// const arr1 = [1, 2]
// console.log(...arr1)

// コピーは参照渡しに気を付ける
// スプレッド構文でコピーする

/**
 * 三項演算子
 */
// const num = 1300
// console.log(num.toLocaleString())
// const formattedNum = typeof (num) === "number" ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum)

/**
 * 論理演算子
 */

// const flag1 = true
// const flag2 = true

// if (flag1 || flag2) {
//   console.log("1か2はtrueです")
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueです")
// }

// || は左側がfalseなら右側を返す
const num = 100
const fee = num || "金額未設定です"
console.log(fee)

// && は左側がtrueなら右側を返す
const num2 = 100
const fee2 = num2 && "何か設定されました"
console.log(fee2)
