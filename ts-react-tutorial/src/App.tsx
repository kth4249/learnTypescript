import React from "react";
import "./App.css";
import Counter from "./Counter";
import Greetings from "./Greetings";

// const App: React.FC = () => {
//   const onClick = (name: string) => {
//     console.log(`${name} says hello`);
//   };
//   return <Greetings name="React" onClick={onClick} />;
// };
const App: React.FC = () => {
  return <Counter />
}

export default App;
