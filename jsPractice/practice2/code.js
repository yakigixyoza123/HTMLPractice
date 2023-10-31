//ラベル要素の取得
let label = document.getElementById("label");

//ボタン要素の取得
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

//リンゴボタンをクリックしたらラベルの内容をリンゴに変更
button1.addEventListener("click",()=>{
    label.innerHTML="リンゴ";
});
//バナナボタンをクリックしたらラベルの内容をバナナに変更
button2.addEventListener("click",()=>{
    label.innerHTML="バナナ";
});
//みかんボタンをクリックしたらラベルの内容をミカンに変更
button3.addEventListener("click",()=>{
    label.innerHTML="ミカン";
});