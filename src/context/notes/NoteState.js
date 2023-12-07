
import { useState } from "react";
import NoteContext from "./noteContext";

// import { createContext } from "react";
// const noteContext=createContext();


const NoteState=(props)=>{

    // const  s1={
    //     "name":"harry",
    //     "class":"6b"
    // }
    const notesinitial=[
        {
          "_id": "654dd82508da345f92f517e7",
          "user": "654dbac38ae4a5bd315ebf07",
          "title": "application",
          "description": "please go gymbro",
          "tag": "faltu",
          "date": "1699600421607",
          "__v": 0
        },
        {
          "_id": "654dd82608da345f92f517e9",
          "user": "654dbac38ae4a5bd315ebf07",
          "title": "application",
          "description": "please go gymbro",
          "tag": "faltu",
          "date": "1699600422114",
          "__v": 0
        },
        {
          "_id": "654dd82608da345f92f517eb",
          "user": "654dbac38ae4a5bd315ebf07",
          "title": "application",
          "description": "please go gymbro",
          "tag": "faltu",
          "date": "1699600422568",
          "__v": 0
        },
        {
          "_id": "6569943523c8d308c48c0597",
          "user": "654dbac38ae4a5bd315ebf07",
          "title": "youtube",
          "description": "please make more videos",
          "tag": "updated",
          "date": "1701418037786",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesinitial)
        
    

     
    
    // The Provider component is what allows components to consume the values from the context. It takes a prop called value, which is the value that will be shared with components that are descendants of this Provider. The value can be a static value or even a state from a component.
   return (
    <NoteContext.Provider value={{notes,setNotes}}>
    {props.children}
    </NoteContext.Provider>
   )
} 


export default NoteState;