import React from "react";
import noteContext from "./noteContext";

const Notestate = (props)=>{
    const state ={
        "name":"umer",
        "class":"5b"
    }
    
    return(
<noteContext.Provider value={state}>
    {props.children}
</noteContext.Provider>
    )
}
export default Notestate;