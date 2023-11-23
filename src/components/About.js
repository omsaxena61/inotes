import React from 'react'
import { useContext ,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteState from '../context/notes/NoteState'
const About = () => {
  const a=useContext(noteContext)
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div> this is About {a.state.name} and he is in class {a.state.class}</div>
  )
}

export default About