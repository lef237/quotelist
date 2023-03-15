// // すべてのdiv要素を取得
// const divElements = document.getElementsByTagName("div");

// // すべてのdiv要素からIDを取得
// const divIds = [];
// for (let i = 0; i < divElements.length; i++) {
//   if (divElements[i].id) {
//     divIds.push(divElements[i].id);
//   }
// }

// // 取得したIDの配列をコンソールに出力
// console.log(divIds);


// const holaIds = divIds.filter(function(id) {
//   return id.startsWith('hola'); // 'hello'で始まるもののみをフィルター
// }).map(function(id) {
//   return parseInt(id.replace('hola', '')); // 'hello'を削除し、数値に変換
// });

// const maxId = Math.max.apply(Math, holaIds); // 最大値を取得

// console.log(holaIds); // [1, 2, 3, 42]
// console.log(maxId); // 42

