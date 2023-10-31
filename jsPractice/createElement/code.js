//ol id を使って要素の情報取得
let list = document.getElementById("list");
//新しいlink（要素）の追加
let newLink =document.createElement("a");
//内容を挿入
newLink.innerHTML="developer.mozilla.org";
//最後挿入
//list.append(newLink);

//新しい<li>番目
let item = document.createElement("li");
list.append(item); 
item.append(newLink);

//要素の取得
let removeLink= document.getElementById("link-2");
//要素の削除
//removeLink.remove();
//要素の行の削除
removeLink.parentNode.remove();

//ボタンをクリックしたら
//ボタン1をクリックしました
let btnEvent = document.getElementById("button");
/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */
/*btnEvent.onclick = function(){
    console.log("ボタン1をクリックしました");
}
//***これ上書きされる***
btnEvent.onclick = function(){
    console.log("ボタン2をクリックしました");
}*/
/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);
//***上書き処理を回避する為、基本の書き方***
btnEvent.addEventListener("click",()=>{
    console.log("ボタン1をクリックしました");
});
btnEvent.addEventListener("click",()=>{
    console.log("ボタン2をクリックしました");
});

//helloメソッドの作成
function hello(){
    console.log("hello");
}