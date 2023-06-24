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

  return (
    <div className="App">
      타입 스크립트
      {test}
    </div>
  );
}

export default App;
