// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다
// JSON 형식으로 변환한 뒤, product.json으로 출력한다
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다

let file = require('fs');

function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}


let hollowKn = new Product('할로우나이트', 58000, 10);
let deadCell = new Product('데드셀', 65000, 5);
let LoL = new Product('리오레', 50000, 20);

let products = new Array(hollowKn, deadCell, LoL);

let productJSON = JSON.stringify(products);

// file.writeFile('product.json',productJSON,'utf-8', function(error){
//     if(error) {
//         console.log(error)
//     } else {
//         console.log("성공!")
//     }
// });

file.readFile('product.json', 'utf-8', (error, content) => {
    if(error) {
        console.log(error)
    } else {
        let getPr = JSON.parse(content);
        console.log(getPr);
    }
})