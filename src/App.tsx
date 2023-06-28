import React from 'react';
import './App.css';

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

중요한 특징은

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



  return (
    <div className="App">
      타입 스크립트
      {test}
    </div>
  );
}

export default App;
