import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const context=useContext(noteContext);
  const {notes,setNotes}=context;//destructuring
  return (
    <div className="row my-3">
    <h1>your Notes</h1>
    {notes.map((note1)=>{
        return <Noteitem key={note1._id}note={note1}></Noteitem>
    })}
    </div>
  )
}

export default Notes