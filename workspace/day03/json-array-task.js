// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.


// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다

// function Products(name, price, count) {
//     this.name = name;
//     this.price = price;
//     this.count = count;
//     // this.toJSON = JSON.stringify(this);
// }

// let cydar = new Products('사이다', 3500, 20);
// let coke = new Products('콜라', 3800, 30);
// let fanta = new Products('환타', 3000, 15);
// let products = new Array(cydar, coke, fanta);
// let productsJSON = JSON.stringify(products);

// JSON 변환
// console.log(`${new Products('사이다', 3500, 10).toJSON.toString()}`);

// products.push(`${new Products('사이다', 3500, 10).toJSON.toString()}`);
// products.push(`${new Products('콜라', 3800, 30).toJSON.toString()}`);
// products.push(`${new Products('환타', 3500, 20).toJSON.toString()}`);
// console.log(products);

// function totalPrice(arr, callback) {
//     if(callback) {
//         callback(arr);
//         return;
//     }
//     return arr;
// }

// totalPrice(productsJSON, productsJSON => {JSON.parse(productsJSON).forEach(v => console.log(`${v.name}: ${v.price * v.count}`));
// })



let file = require('fs');

/* 강사님 코드 */
// shop.json에 변환된 JSON 형식의 문자열을 작성한다
// shop.json을 읽어 온 뒤 Array 객체로 변환한다
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('진로', 2000, 60),
    new Product('두꺼비', 3500, 30)
];



// let productJSON = JSON.stringify(products);

// file.writeFile('shop.json', JSON.stringify(products), 'utf-8', error => console.log(error));

// file.readFile('shop.json', 'utf-8', (error, content) => {
//     if(error) {
//         console.log(error);
//     } else {
//         var prod = JSON.parse(content);
       
//         let totalPrice = prod.map(c => c.price).reduce((total, c) => total + c);
//         let totalStock = prod.map(c => c.stock).reduce((total, c) => total + c);
//         let result = {totalPrice: totalPrice, totalStock: totalStock};           
//         file.writeFile('sum.json', JSON.stringify(result), 'utf-8', e => e ? e : console.log("성공"));
//      }
// });

// let ProdInfo = [
//    prod.map(c => c.price).reduce((total, c) => total + c),
//    prod.map(c => c.stock).reduce((total, c) => total + c) 
// ];

// console.log(ProdInfo);

// file.writeFile('sum.json', JSON.stringify(ProdInfo), 'utf-8', error => error ? error : console.log("성공!"));

file.readFile('sum.json', 'utf-8', (error, content) => {
    console.log(content);
});


/* 강사님 코드 */
// let productsJSON = JSON.stringify(products);
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});


// file.writeFile('shop.json', productsJSON, 'utf-8', error => {});
// file.readFile('shop.json', 'utf-8', (error, contents) => {
//     let products = JSON.parse(contents);
//     let totalPrice = products.map(product => product.price).reduce((totalPrice, price) => totalPrice + price);
//     let totalStock = products.map(product => product.stock).reduce((totalStock, stock) => totalStock + stock);
//     let sum = {totalPrice: totalPrice, totalStock: totalStock};
//     let sumJSON = JSON.stringify(sum);
//     file.writeFile('sum.json', sumJSON, 'utf-8', error => {});
// });

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});

