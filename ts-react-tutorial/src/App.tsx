import React from "react";
import "./App.css";
import ReducerSample from "./ReducerSample";
import { SampelProvider } from "./SampleContext";

// const App: React.FC = () => {
//   const onClick = (name: string) => {
//     console.log(`${name} says hello`);
//   };
//   return <Greetings name="React" onClick={onClick} />;
// };
const App: React.FC = () => {
  // return <Counter />
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;
  return (
    <SampelProvider>
      <ReducerSample />;
    </SampelProvider>
  )
};

export default App;
