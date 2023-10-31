//配列の初期化
let arr =[1,2,3,"Alice",12.5];
//中身の確認
console.log(arr);
//要素の個数
console.log(arr.length);
//配列に値を追加push
arr.push("追加しました.");
console.log(arr);
//配列の一番最後のデータの削除
arr.pop();
console.log(arr);

//配列の作成
let arr2 =new Array(5);
arr2[0]=12;
arr2[1]="Hello";
console.log(arr2);

//オブジェクトの書き方
let obj={name:"Alice",id:122,isStudent:true};
console.log(obj);

//特定のデータを表示する1
console.log(obj.name);
//特定のデータを表示する2
console.log(obj["id"]);

//値を上書き仕方1
obj.id=30;
console.log(obj.id);
//値を上書き仕方2
obj["isStudent"]=false
console.log(obj["isStudent"]);

//for-of
for(let a of arr){
    console.log(a);
}

//for-in
for(let key in obj){
    console.log(key + ":"+obj[key]);
}
