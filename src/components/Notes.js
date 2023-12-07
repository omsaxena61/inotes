import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const Notes = () => {
    const context=useContext(noteContext);
  const {notes,setNotes}=context;//destructuring
  return (
    <div className="container my-3">
    <h1>your Notes</h1>
    {notes.map((note1)=>{
        return note1.title;
    })}
    </div>
  )
}

export default Notes