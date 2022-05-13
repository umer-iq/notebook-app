import React,{ useContext,useEffect, useRef,useState }  from 'react'
import noteContext from '../context/notes/noteContext'
import { AddNote } from './AddNote';
import Noteitem from './Noteitem';
export const Notes = () => {
    const context = useContext(noteContext);
  const {notes,getNotes,editNote} = context;
//  const {addNote} = context;
  
  useEffect(() => {
    getNotes()
  
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )
  const ref = useRef(null)
  const refClose = useRef(null) 
  const [note, setnote] = useState({id:'',etitle:"",edescription:"",etag:""})
  const updateNote = (curentNote)=>{
ref.current.click();
setnote({id: curentNote._id,etitle: curentNote.title, edescription: curentNote.description, etag:curentNote.tag});
  }
  const handleClick =(e)=>{
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    console.log("updating the note",note)
   
}
const onChange = (e)=>{
    setnote({...note,[e.target.name]:e.target.value})

}
  

  return (
      <>
       <AddNote/>
       
       <button ref= {ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required/>
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} minLength={5} required/>
  </div>


  
  
  
</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>UPDATE NOTE</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    <div className="row my-3">
    
    <h1>Your Notes </h1>
    <div className="container mx-2">
    {notes.length===0 &&"No notes to display"}
    </div>
    {notes.map((note)=>{
        
      return <Noteitem  key = {note._id} note={note} updateNote={updateNote}/>;
    })}
    </div>
</>
  )
}
