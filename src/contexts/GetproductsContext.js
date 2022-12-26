import React from "react";


export const GetproductsContextDefaults={
    value:{},
    setValue:()=>{}
}

export const GetproductsContext=React.createContext(GetproductsContextDefaults)