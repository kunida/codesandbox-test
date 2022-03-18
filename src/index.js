// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数上書き";
// console.log(val1);

// var val1 ="var変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// let val2 = "let変数再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数上書き";

// const val3 = "const変数再宣言";

// constで定義したオブジェクトはプロパティ変更が可能
// const val4 = {
//   name: "kuttan",
//   age: 23,
// };
// val4.name = "くったん";
// val4.sex = "男";
// console.log(val4);

// constで定義した配列はプロパティ変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "kuttan";
// const age = 23 ;
// 昔
// const message_old = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message_old);
// 今
// const message_new = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message_new);

/**
 * アロー関数
 */
// 昔
function func_old(str) {
  return str;
}
console.log(func_old("functionです"));

//アロー関数
const func_arrow = (str) => {
  return str;
};
console.log(func_arrow("アロー関数です"));

const func = (num1, num2) => num1 + num2;
console.log(func(10, 100));
