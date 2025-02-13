import { createContext, useState } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider({ children }) {
    let [count, setCount] = useState(0)
  return <CounterContext.Provider value={{count, setCount}}>{children}</CounterContext.Provider>;
}
