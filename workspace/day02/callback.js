//  JS에서는 매개변수의 개수에 맞추어 값을 전달할 필요가 없다
// 만약 매개변수 개수보다 부족하게 값을 전달하면 값을 못받은 매개변수에는 undefined가 들어간다
// 만약 매개변수 개수보다 넘치게 값을 전달하면 잘린다

// JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다
// 현재 함수에서 나온 결과 값을 다른 함수로 전달할 때에는 callback이라는 식별자로 결과 값을 전달받아 온다

// console.log(
//     add(1, 3, function(result){
//         return result / 2;
//     })
// );

// function add(number1, number2, callback) {
//     if(callback){
//         return callback(number1 + number2);
//     }
//     return number1 + number2;
// }

// // 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// // 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// // 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// // 3. A함수는 B함수를 callback함수로 전달받는다.


// /* A함수에 B(삼품명, 가격), 개수 전달 */
// /* B함수에 상품명 전체 금액 전달 */

// console.log(
//     A(B("초코틴틴", 3500), 10)
// );


// function A(callback, count) {
//     if (callback) {
//         return callback * count;
//     }
// }

// function B(name, price) {
//     return price;
// }


function pay(name, price, count, callback){
    if(callback) {
        var total = price * count;
        callback(name, total);
        return;
    }
    return total;
}

pay("고구마", 1500, 30, function(name, total){
    console.log(`${name}: ${total}원`);
})


let starkeeper = {name: "별수호자",price: 1200}
let highnoon = {name: "하이눈",price: 1500}
let project = {name: "프로젝트",price: 2000}

let countHighnoon = ["마스터이", "진", "쓰레쉬", "블츠", "아이번"]

let skins = [starkeeper, highnoon, project]

function buy(name, price, count, callback){
    if (callback) {
        var total = price * count;
        callback(name, total);
        return;
    }
    return total;
}

buy("ㄳㅇ", skins[1].price, countHighnoon.length, function(name, total){
    console.log(`${name}: ${total}원`);
}) 



let train = { };

function absord(name, age, rank) {
    user = new User(name, age, rank)
    
    train[name] = user;
}

function User(name, age, rank) {
    this.name = name;
    this.age = age;
    this.rank = rank;
}

absord("홍길동", 12, 1);
absord("장보고", 20, 2);
absord("이순신", 35, 3);

console.log(train);


// let datas = ["별수호자", "하이눈", "프로젝트"];
// function buy(name, price, count, callback) {
//     var count = datas.length;
//     if(callback) {
//         var total = price * count;
//         callback(name, total);
//         return;
//     }
//     return total;
// }

// buy("ㄳㅇ", 35000, datas, function(name, total){
//     console.log(`${name}: ${total}원`);
// })

function seperate(text, callback) {
    if (callback) {
       return callback(text);
    }
    return text;
}

seperate("1234", function(text){
    var result = 0;
    for (let i = 0; i < text.length; i++) {
        result += parseInt(text[i]);
    }
    return result;
})

// let text = "360";
// // parseInt(text).split("").forEach(c => console.log(v));
// let result = 0;
// for (let i = 0; i < text.length; i++) {
//     result += parseInt(text[i]);
// }
// console.log(result);