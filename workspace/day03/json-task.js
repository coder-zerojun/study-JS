// 동물원에 동물이 3마리 있다
// 각 동물별 정보는 이름, 종, 나이이다

// 동물원의 동물 전체 평균 나이를 구한다

function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
}

let lion = new Animal('사자', '포유류', 5);
let tiger = new Animal('호랑이', '포유류', 8);
let dom = new Animal('돔', '어류', 11);


let animals = new Array(lion, tiger, dom);
let animalsJSON = JSON.stringify(animals);


function averageAge(json, callback) {
    let arr = JSON.parse(json);
    arr = arr.map(c => c.age);
    let average = arr.reduce((a,v) => a + v) / arr.length;
    if(callback) {
        callback(average);
    }
}

averageAge(animalsJSON, average => console.log(average));








/* 강사님 코드 */
// function Animal(name, kind, age) {
//     this.name = name;
//     this.kind = kind;
//     this.age = age;
// }

// let animals = [
//     new Animal('구름이', '양', 4),
//     new Animal('뽀삐', '소', 8),
//     new Animal('바둑이', '기린', 9)
// ];

// let animalsJSON = JSON.stringify(animals);

// // 동물원의 동물 전체 평균 나이를 구한다.
// function average(animalsJSON, callback) {
//     let animals = JSON.parse(animalsJSON);
//     // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
//     let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
//     let average = total / animals.length;
//     if(callback) {
//         callback(average);
//     }
//     return average;
// }

// average(animalsJSON, average => console.log(average));

