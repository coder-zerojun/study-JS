// 상품명과 가격을 JSON으로 만든다
// 위 JSON을 JS Object 객체로 변환한다
// 각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다

// 상품명과 가격 설정
let JSONproduct = `{"name": "할라피뇨", "price": 30000}`;
console.log(JSONproduct);

// JSON을 JS Object로 변환
let product = JSON.parse(JSONproduct);
console.log(product);

// 각 프로퍼티 출력
console.log(product.name);
console.log(product.price);

// 다시 JSON으로 변환
let JSONsecond = JSON.stringify(product);
console.log(JSONsecond);
