//변수 선언할땐 const가 기본이고, let은 변수의 값을 수정할 때만 사용, 또는 var //
//변수명을 선언할때 지켜야 할 규칙은 소문자로 시작해서 띄어쓰기가 필요할때마다 대문자로 적어주기 -> 낙타 표기법 //
/*
const iCantStop = "feeling";
const twice = " so nice";
console.log(iCantStop + twice);
*/
/*데이터타입을 정렬해보자
1. Array --> []
2. Objects --> {}
 */
/*
const sonyColor = ['white', 'yellow', 'choco', 'black', 'red'];
console.log(sonyColor);
console.log(sonyColor[1]);

const niniz = {
  name: "niniz",
  color: "green",
  age : 3.1424312,
  isHuman : false,
  isCute : true
};

console.log(niniz);
console.log(niniz.name);

const macaron = {
  bakingTimeOfHour : 2,
  price : 2500,
  customerAge : 
  [
    {
      under7 : "kids",
      isLike : true
    },
    {
      under15 : 'children',
      isLike : true
    },
    {
      under61 : 'adult',
      isLike : false
    }
  ]
};

console.log(macaron);
console.log(macaron.customerAge[2].isLike);
*/

//#2.1 연습
const calculator = {
  plus: function(a, b) {
    return a+b;
  },
  minus: function(a,b) {
    return a-b;
  },
  modify: function(a,b) {
    return a*b;
  },
  divide: function(a,b) {
    return a/b;
  },
  pow: function(a,b) {
    return a**b;
  }
}

const plus = calculator.plus(2,4);
const minus = calculator.minus(2,4);
const modify = calculator.modify(2,4);
const divide = calculator.divide(2,4);
const pow = calculator.pow(2,4);



console.log(`답은 ${plus} 입니다.`);
console.log(minus);
console.log(modify);
console.log(divide);
console.log(pow);