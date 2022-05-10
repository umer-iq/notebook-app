import React, { useState } from "react";
import noteContext from "./noteContext";


export const Notestate = (props) => {
 
const notesIntial = [
    
    
    
    {
      "_id": "6278c8b82751defec8d8b6fe",
      "user": "6275ddc8fb075846c6a52252",
      "title": "update",
      "description": "this is my e book published",
      "tag": "up",
      "date": "2022-05-09T07:54:32.417Z",
      "__v": 0
    },
    {
      "_id": "6278c8ba2751defec8d8b700",
      "user": "6275ddc8fb075846c6a52252",
      "title": "update",
      "description": "this is my e book published",
      "tag": "up",
      "date": "2022-05-09T07:54:34.648Z",
      "__v": 0
    }
  ]
const [notes,setNotes] = useState(notesIntial)
    
    return(
<noteContext.Provider value={{notes,setNotes}}>
    {props.children}
</noteContext.Provider>
    )
}
export default Notestate;