//要素の取得
let text = document.getElementById("text-1");
//中身を確認
console.log(text);
//要素の内容を取得する
console.log(text.innerHTML);
//要素の内容を変更する
text.innerHTML="迩好";

//要素の取得lunch1
let lunch1 = document.getElementById("lunch");
//中身を確認(変数名)
console.log(lunch1);
//要素の内容を取得する
console.log(lunch1.innerHTML);
//要素の内容を変更する
lunch1.innerHTML="今日のランチはハンバーグ";

//クラスを指定して値を取得
let ex = document.getElementsByClassName("ex1");
//値を取得
console.log(ex);
//0番目の値のみを取得
console.log(ex[0].innerHTML);

//タグを指定して値を取得
let ex2 = document.getElementsByTagName("div");
//値を取得
console.log(ex2);
//1番目の値のみを取得
console.log(ex2[1].innerHTML);

//要素の取得
let link = document.getElementById("link-1");
// 要素の内容を取得
console.log(link.innerHTML);
//url内容を取得
console.log(link.href);
//url変更
link.href="https://eng-entrance.com/what-is-dom";
//target_brank
link.target="_blank";