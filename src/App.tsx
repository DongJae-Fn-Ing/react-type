import React from 'react';
import './App.css';
import { type } from 'os';

function App() {
  let test:string = "test입니다"
  //이런식으로 변수에 타입을 지정 가능하다. === 이변수에는 string type만 들어올 수 있습니다. 타입 관리 

  let arrTest:string[] = ["킴", "park"];
  // 배열은 [] 이걸로  지정하고 배열 안에 타입을 지정해줘야 한다.

  let objTest:{name? : String} = {name : "asd"}; 
  // 객체는 이런식 ? 물음표는 들어올 수도 있고 아닐 수도 있고

  let test2:string | number = "asd";
  // 유니언 타입 문자 또는 숫자 둘다 들어올 수 있음

  /* 타입이 길 경우 변수로 해도 괜찮다 */

  type MyType = string | number;

  let test3:MyType = 123; 

  function testFun (x : number /* 파라미터는 이런식 */):number /* 함수의 리턴값은 이런식 */{
    return x * 2 
  }

/* 이렇게 하면 testFun 함수에 문자가 리턴하면 오류가 난다.*/ 

type Member = [number, boolean];
//이렇게 배열에 넣고
let john:Member = [1,true];
//tuple 타입이라고 함 무슨 소리냐 첫번째 자리에는 number, 두번째 자리에는 논리형

//만약에 오브젝트에 지정할 타입이 많으면?

type MemObj = { [key:string] : string}
                  //모든 오브젝트의 속성을 이런식으로 지정
                  //글자로 된 모든 object 속성의 타입은: string
let bob:MemObj ={name: "kim"}

//js 문법 그대로 ts에서 사용 가능
//primitive types
//변수에 타입을 지정하는 것은 실드를 쓰는 것

//타입스크립트 갓 배운 사람들 실수
// 온갖 곳에 타입 다 지정함
//타입 지정 원래 자동으로 됩니다. 아래처럼 안써도 let wow:string = "asd"랑 같음
let wow = "asd"
/* wow=123; */
//해봐

let myName:string = "dj"
let myOld:number = 21;
let area:string ="비밀"

let music:{name : string, title: string} = {name:"하현상", title:"등대"}

let project:{member:string[], days:number, started:boolean } = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

/* 타입을 지정하기 애매할 때 */
/* union type */
let 회원: number| string =123;
/* 유니언 타입 타입이 2개이상인 변수 */
/* 변수 값을 할당하면 값이 확정이 난다 */

var 어레이: (number|string)[] = [1,'2',3]
var 오브젝트: {data : number | string} = { data : '123' }

/* any type */

let 이름:any = "" //모든 타입이 들어갈 수 있다. 정말 아무거나 모든 자료형
// 그러나 편하다고 막 쓰면 ㄴㄴ 해
// 타입실드 해제 문법임 즉 변수 문법을 없앤다.

/* unknown type */
let 이름2:unknown = ""
//any 랑 같이 똑같지만 any 보다 안전함 오염방지
//타입 스크립트는 엄격함 타입이 같아야 연산도 가능
/* 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 이걸 사용해보시길 바랍니다. 

중요한 특징은.

1. unknown 타입엔 모든 자료 다 집어넣을 수 있음

2. 자료집어넣어도 타입은 그대로 unknown입니다 */


/* let 나이: string|number;
나이 + 1; */
/* 위에가 연산 불가한 이유 */
//나이가 string인 경우도 있어서

/* let 나이: unknown = 1;
나이 + 1; */

let user:string = 'kim';
let age:undefined|number = undefined;
let married:Boolean = false; 
let 철수:(string|undefined|number|Boolean)[] = [user, age, married];



let 학교:{score:(number|Boolean)[], teacher:string, friend:string|(string|{teacher : string})[] } = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

//함수
function 함수(s:number):number /* 함수에도 이런식으로 타입 지정 */{
  // 이런식으로 파라미터 타입 지정
  return s * 2;
}
// 변수만 만들면 자동으로 any타입 지정
/* 함수(a); */ //이런식이면 오류뜸

/* void 타입 */
//함수에서 사용할 수 있는 타입

function 함수2(x?:number):void{
 /* return 1 + 1; */ //오류
}
//리턴할 것 이 없으면 비워두거나 엄격하게 void 써라 리턴하는 거 없다.

/* 타입스크립트에서 함수를 사용할 때 자바스크립트랑 다른점 */
//타입지정된 파라미터는 필수!
//만약에 파라미터가 옵션일 경우는 즉 파라미터를 사용해도 되고 안사용해도 되고
//설정하고 싶으면 파라미터에 물음표를 붙이고 설정하면 된다.
//파라미터?가 중요한 이유
//? 연산자는 들어올 수도 있다~라는 뜻이긴 한데 
//  | undefined  undefined가 포함된 유니언 타입이랑 같다

/* function 자릿수세기(x :number | string){ 
  return x + 1 
}  */

// 위에 문제가 틀린 이유 x에 string도 들어올 수 있잖아


/* function 내함수(x? :number) :number { 
  return x * 2 
}   */
// 함수 호출이 불가능한 이유 ?는 | undefined가 포함된 것 같음 x가 undefined일수도

//타입이 애매한 것들은 사전 검사가 필요해 이런 걸 네로잉


//(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//파라미터와 return 타입지정도 잘 해봅시다. 

function 숙제1(a?:string){
  if(a){
    return console.log("안녕하세요" + a + "입니다.");
  }else{
    return console.log("이름 없음");
  }
}
숙제1("가동재");


//(숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
//예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
//숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
//숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function 숙제2(a:string|number){
  let num = a.toString();
  return console.log("숙제2",num.length);
}
숙제2(1245);

//(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
//1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
//2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
//3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

//(예시)
//결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
//결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function 숙제3(a:number,b:boolean,c:string){
  let num:number = a + (b === true ? 500 : 0) +(c === "상" ? 100: 0);
  if(num >= 600){
    return console.log("결혼가능");
  }else{

  }
}

숙제3(700, false, '상');


/* Narrowing & Assertion */
/* 유니언 타입 같이 타입이 아직 확정되지 않았을 경우 Type Narrowing을 써야합니다. */
  
function 내함수(x:string|number) { 
  if(typeof x === "string"){
    return x + "1";
  }else{
    return x + 1;
  }
  //어떤 변수 타입이 아직 불확실 하다면 if문으로 Narrowing을 해줘야 조작 가능
  //Narrowing을 할 때 주의점 if문을 끝까지 작성해야함
  
  //Narrowing으로 판정을 해주는 문법들
  //typeof 변수, 속성명 in 오브젝트 자료, 인스턴스 instanceof 부모

  //Narrowing을 쓰기 싫으면 Assertion 어썰션(타입을 한번 덮어쓰기)

}   
function 내함수2(x:string|number) { 
let arr:number[]=[];
arr[0] = x as number;
//as number는 as뒤 타임을 x에 덮어쓴다.
//Assertion 문법의 용도
//1. Narrowing을 하려고 쓴다.
//2. 타입을 변경시키는 것이 아닌 여러개의 유니언 타입을 하나로 통일하는 것이다.
//3. 어떤 타입이 확실하게 들어올지 100% 알 때 쓰셈   as 문법 
//4. 남의 코드 고칠때
}
내함수(2);
내함수2(2)


//(숙제1) 숫자여러개를 array 자료에 저장해놨는데
//가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
//이걸 클리닝해주는 함수가 필요합니다. 
//클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
//[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
//모르는 부분은 구글검색해도 봐드림 

function 클리닝함수(x:(Number|string)[]){
  
  return console.log(x.map((a)=>{ return Number(a);}));
}

클리닝함수(['1', 2, '3'])


let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

//지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
//과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
//과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
//철수쌤같은 선생님 object 자료를 집어넣으면 
//그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
//그리고 타입지정도 엄격하게 해보도록 합시다

/* {subject : string | string[] } = { subject : '123' } */
function 마지막출력(x:{subject : string|string[]}){;
  if(typeof x.subject === "string"){
    return console.log(x.subject)
  }else{
    return console.log(x.subject[x.subject.length-1]);
  }
}
마지막출력(민수쌤);

//타입이 너무나도 길면 타입을 변수에 넣어서 사용할 수 있다. type Animal 이런식으로
type Animal = string | number | undefined;
let 동물 : Animal = "asdasd";
//위 방식을 type alias
// type Animal  앞에 타입을 쓰고 일반 변수랑 차이점을 주기 위해서 대문자로

type Info = {name: string, age: number}
let 사람임:Info = {name:"king", age: 20}

const 출생지역 = {region: "시흥"}
// 이러면 보통 못 바꾸지만
// 출생지역.region으로 수정이 된다. 그러나 타입스크립트에서는 불가능
// 타입스크립트에서는 오브젝트 자료형 수정에 락을 거는 거 가능

// 오브젝트 타입을 지정해주는 곳에
type data ={readonly name:string}

/* type data ={name?:string}   ? 들어와도 되고 안들어와도 상관 없음*/

const 사람2:data = {name:"엠버"}
/* 사람2.name = "유라"; */

//추가적으로 알면 좋은 것 타입스크립트 에러는 에디터&터미널에서만 존재함


// 타입 변수 uinion type으로 합치기 가능
type Name = string;
type Ages = number;
type Person = Name | Ages; 
// 이런식으로 이러면 string 또는 숫자


//& 연산자로 object 타입 합치기
type PositionX = { x : number };
type PositionY = { y : number };
// 오브젝트 타입 변수는 아래처럼 가능
type NewType = PositionX & PositionY;
let 좌표 :NewType = { x : 1, y : 2 }
//이러한 방식을 extend 한다.

//타입 변수 주의점
// type Error = number; 이렇게 정의를 하면
//  type Error = string; 재정의 불가능

/* 숙제1 */
type Info2 = {name: string, age: number}
type Info3 = {name: string, age: number}

type NewType2 = Info2 & Info3;
let test4:NewType2 ={name: "asd", age: 2}
console.log("테스트:::", test4) 


/* 숙제2 */
type Work = {color?: string, size: number, readonly postion: number[]}
let works5:Work ={size :2, postion:[1]}
console.log(works5)

/* 숙제3 */
type Work6 = {name: string, phone: number, email: string}
let asdd:Work6 = { name : 'kim', phone : 123, email : 'abc@naver.com' }

type Work7={old:boolean}
type Work8 = Work6|Work7;

let asdasd:Work8 = { name : 'kim', phone : 123, email : 'abc@naver.com', old: true }
return (
    <div className="App">
      타입 스크립트 
      {test}
    </div>
  );
}

export default App;
