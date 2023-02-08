// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array 객체에 담은 후 짝수만 출력
// 한글을 정수로 변경
// 정수를 한글로 변경
// 1~100까지 합 출력

let arrTest = new Array(10).fill(0);

for (let i = 0; i < arrTest.length; i++) {
    arrTest[i] = i + 1;
}

// console.log(arrTest.filter(c => c % 2 == 0));

// let hangle = "공일이삼사오육칠팔구";
// let input = "일삼이오";
// let num = '';

// for (let i = 0; i < input.length; i++) {
//    num += hangle.indexOf(input.charAt(i));
// }
// console.log(num);

// let hangle = new Array();
// let input = new Array();
// "공일이삼사오육칠팔구".split("").forEach(c => hangle.push(c));
// "삼이구칠".split("").forEach(c => input.push(c));

// let num = '';
// for (let i = 0; i < input.length; i++) {
//     num += hangle.indexOf(input[i]);
// }
// console.log(num);





// let hangle = "공일이삼사오육칠팔구";
// let input = "1567";
// let num = '';

// for (let i = 0; i < input.length; i++) {
//     num += hangle.charAt(input[i].valueOf());
// }


// let hangle = new Array();
// let input = new Array();
// "공일이삼사오육칠팔구".split("").forEach(c => hangle.push(c));
// "1732".split("").forEach(c => input.push(c));

// let plus = '';
// for (let i = 0; i < input.length; i++) {
//     plus += hangle[input[i]];
// }

// console.log(plus);


/* 1~100까지 합 */
// let arrNum = new Array(100).fill(0);
// let plus = 0;

//     for (let i = 0; i < arrNum.length; i++) {
//        arrNum[i] = i + 1;
//     }

//     for (let i = 0; i < arrNum.length; i++) {
//         plus += arrNum[i];
//     }
// console.log(plus);


// function add(arr, callback){
//     if(callback) {
//         callback(arr);
//         return;
//     }
//     return arr;
// }

// add(arrTest, arrTest => {console.log(arrTest.filter(c => c % 2 == 0))});




// let hangle = "공일이삼사오육칠팔구";
// let input = "일삼이오";

// function hangleIntoNum(hangle, input, callback) {
//     if(callback) {
//         callback(hangle, input);
//         return;
//     }
//     return hangle;
// }

// hangleIntoNum(hangle, input, function(hangle, input) {
//     let int = '';
//     for (let i = 0; i < input.length; i++) {
//         int += hangle.indexOf(input.charAt(i));
//     }
//     return console.log(int);
// })

let hangle = "공일이삼사오육칠팔구";
let input = "9651";

function numberIntoHangle(hangle, input, callback) {
    if(callback) {
        callback(hangle, input);
        return;
    }
    return hangle;
}

numberIntoHangle(hangle, input, function(hangle, input) {
    let addNum = '';
    for (let i = 0; i < input.length; i++) {
        addNum += hangle.charAt(input[i].valueOf());
        console.log(input[i].valueOf());
    }
    return console.log(addNum);
})




/* 강사님 코드 (arrow expression) */

// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0).map((data, i) => i + 1);
// let datas = new Array(10).fill(0);
// let i = 0;
// datas.forEach(data => datas[i++] = i);
// datas.forEach(function(data, i){
//     datas[i] = i + 1;
// });
// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "공공이사".split("");
// let result = input.map(input => hangle.indexOf(input)).join("");

// console.log(parseInt(result));


// 정수를 한글로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// while(input != 0){
//     result = hangle[input % 10] + result;
//     input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력
// let datas = new Array(100).fill(0).map((data, i) => i + 1);
// console.log(datas);
// let result = datas.reduce((variable, data) => variable + data);
// console.log(result);






