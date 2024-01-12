import React, { useContext, useEffect, useRef ,useState} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes ,editNote} = context; //destructuring
  const [note, setnote] = useState({id:"",
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    getNotes();
  }, []);
  // eslint-disable-next-line
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag});
  };
  const ref = useRef(null);
  const refclose=useRef(null);
  const handleClick = (e) => {
    console.log("updating the note...",note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refclose.current.click();
    
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange} minLength={5} required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange} minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>

                
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>your Notes</h1>
        <div className="container mx-2">
          {notes.length===0 && 'No notes to display'}
        </div>
        {notes.map((note1) => {
          return (
            <Noteitem
              key={note1._id}
              updateNote={updateNote}
              note={note1}
            ></Noteitem>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
