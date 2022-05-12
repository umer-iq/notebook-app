import React from "react";
import noteContext from '../context/notes/noteContext'
import { useContext }  from 'react'

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note,updateNote} = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash-can mx-2"onClick={()=>{deleteNote(note._id)}}></i> 
          {/* https://fontawesome.com/search?q=navbar&s=solid%2Cbrands */}
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
