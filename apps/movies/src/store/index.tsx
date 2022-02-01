import React, { createContext, Dispatch, useReducer } from "react";
import IMovie, { StateActions } from "../interfaces/movie";

import moviesReduser from "./reducers/moviesReducer";

export interface IState {
  movies: IMovie[];
  page: number;
}

const initialState: IState = {
  movies: [],
  page: 1
}

const AppContext = createContext<{
  state: IState;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null })

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReduser, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext, AppProvider };