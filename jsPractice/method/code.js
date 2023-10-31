//メソッド作成　戻り値なし　パラメータ無し
function printHello(){
    console.log("hello");
}
//メソッド呼び出し
printHello();

//戻り値あり　パラメータあり
function sum(a,b){
    return a + b;
}
//メソッド呼び出し
console.log(sum(1,2));

//デフォルトパラメータ
function print(str1,str2="世界",str3="!!!!"){
    console.log(str1+""+str2+""+str3);
}
//メソッド呼び出し
print("ヤッホー");
print("ヤッホー","お昼寝したい");
print("ヤッホー","お昼寝したい","おやつも食べたい");

//ラムダ式
let add = (x,y)=>x+y;
console.log(add(2,3));