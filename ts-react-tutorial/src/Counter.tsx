// 타입스크립트로 리액트 상태 관리하기

import React, { useReducer } from "react";

// export default function Counter() {
//   //   const [count, setCount] = useState<number>(0)
//   // useState를 사용할 때 Generics를 사용하지 않아도 타입이 유추됨
//   const [count, setCount] = useState(0);

//   // null일 수도 있고 아닐 수도 있을 때 Generics를 활용
//   type Information = { name: string; description: string };
//   const [info, setInformation] = useState<Information | null>(null);

//   const onIncrease = () => setCount(count + 1);
//   const onDecrease = () => setCount(count - 1);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <div>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//       </div>
//     </div>
//   );
// }

// useReducer를 사용하는 코드로 전환

type Action = { type: "INCREASE" } | { type: "DECREASE" }; // 이렇게 액션을 | 으로 연달아서 쭉 나열
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
