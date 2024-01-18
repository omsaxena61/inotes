import { useState } from "react";
import NoteContext from "./noteContext";

// import { createContext } from "react";
// const noteContext=createContext();

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const  s1={
  //     "name":"harry",
  //     "class":"6b"
  // }
  const notesinitial = [];

  const [notes, setNotes] = useState(notesinitial);

//GET ALL NOTE
const getNotes = async() => {
  //API CALL
  const response = await fetch(`${host}/api/notes//fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        localStorage.getItem('token')
    }

    
  });
  const json=await response.json();
  console.log(json)
  setNotes(json)
}
  //ADD A NOTE
  const addNote = async(title, description, tag) => {
    //API CALL to add the note t backend
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
      
    });
    const note=await response.json();
    
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote = async(id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      
    });
    // const json= response.json();
     const json=await response.json();
     console.log(json)
    console.log("Deleting a note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a notee
  const editNote = async (id, title, description, tag) => {
    //API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // const json= response.json();
     const json=await response.json();
     console.log(json);

     let newNotes= JSON.parse(JSON.stringify(notes))
     //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // The Provider component is what allows components to consume the values from the context. It takes a prop called value, which is the value that will be shared with components that are descendants of this Provider. The value can be a static value or even a state from a component.
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
