
import { useState } from "react";
import NoteContext from "./noteContext";

// import { createContext } from "react";
// const noteContext=createContext();


const NoteState=(props)=>{

    const  s1={
        "name":"harry",
        "class":"6b"
    }

    const [state, setstate] = useState(s1);

    const update=()=>{
        setTimeout(()=>{
            setstate({
                "name":"om2",
                "class":"8b"
            })
        },1000);
    }
    // The Provider component is what allows components to consume the values from the context. It takes a prop called value, which is the value that will be shared with components that are descendants of this Provider. The value can be a static value or even a state from a component.
   return (
    <NoteContext.Provider value={{state,update}}>
    {props.children}
    </NoteContext.Provider>
   )
} 


export default NoteState;