// TypeScript 와 Context API 활용하기

import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입들을 미리 선언

type Color = "red" | "orange" | "yellow";

// 상태를 위한 타입
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch의 Generics로 설정
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count, // count가 자동완성되며, number 타입인 걸 알 수 있음.
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text, // text가 자동완성되며, string 타입인걸 알 수 있음.
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Unhandled action");
  }
}

// SampleProvider 에서 useReducer를 사용하고
// SampleStateContext.Provider와 SampelDispatchContext.Provider로 Children을 감싸서 반환함.
export function SampelProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider"); // 유효하지 않을 땐 에러를 발생
  return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) throw new Error("Cannot find SampleProvider"); // 유효하지 않을 땐 에러를 발생
    return dispatch;
  }
  