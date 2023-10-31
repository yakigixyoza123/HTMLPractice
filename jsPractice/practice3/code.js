//ラベル要素の取得
let label = document.getElementById("label");

//ボタン要素の取得
let reset = document.getElementById("change-text1");
let up = document.getElementById("change-text2");
let down = document.getElementById("change-text3");

//ボタンをクリックしたらリセット・加算・減算する
reset.addEventListener("click",()=>{
    label.innerHTML=0;
});

up.addEventListener("click",()=>{
    label.innerHTML=label.innerHTML+1;
});

down.addEventListener("click",()=>{
    label.innerHTML=label.innerHTML-1;
});

