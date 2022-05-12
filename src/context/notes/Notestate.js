import React, { useState } from "react";
import noteContext from "./noteContext";

export const Notestate = (props) => {
  const host = "http://localhost:5002";

  const notesIntial = [];
  const [notes, setNotes] = useState(notesIntial);
  //get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NWRkYzhmYjA3NTg0NmM2YTUyMjUyIn0sImlhdCI6MTY1MTg5MzUzMH0.TJvcOOeo_gyt-EN6WgxJ8c2HK4QcOLDvjv5aAvkhHQk",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NWRkYzhmYjA3NTg0NmM2YTUyMjUyIn0sImlhdCI6MTY1MTg5MzUzMH0.TJvcOOeo_gyt-EN6WgxJ8c2HK4QcOLDvjv5aAvkhHQk",
      },

     body: JSON.stringify(title, description, tag),
    });
    const json = await response.json();
    console.log(json)

    
  };

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NWRkYzhmYjA3NTg0NmM2YTUyMjUyIn0sImlhdCI6MTY1MTg5MzUzMH0.TJvcOOeo_gyt-EN6WgxJ8c2HK4QcOLDvjv5aAvkhHQk",
      },
    });
    const json = response.json();
    console.log(json);
    console.log("deleteing a note with " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NWRkYzhmYjA3NTg0NmM2YTUyMjUyIn0sImlhdCI6MTY1MTg5MzUzMH0.TJvcOOeo_gyt-EN6WgxJ8c2HK4QcOLDvjv5aAvkhHQk",
      },

      body: JSON.stringify(title, description, tag),
    });
    const json = await response.json();
    console.log(json)
  
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes,addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default Notestate;
