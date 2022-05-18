import React, { createContext, useReducer,useEffect } from "react";
import {reducer} from "./reducer";

export const StateContext = createContext();

export const StateProvider = ( props ) => {
    const [item,dispatch]=useReducer(reducer,[],()=>{
      const localData=localStorage.getItem("item");
      return localData?JSON.parse(localData):[];
    });
    useEffect(()=>{
      localStorage.setItem('item',JSON.stringify(item))
    },[item]);

    return (
      <StateContext.Provider value={{item,dispatch}}>
      {props.children}
    </StateContext.Provider>
    )
};

