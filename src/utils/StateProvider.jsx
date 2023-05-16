// criando um provedor de estados para os casos
// do reducer

import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
