import React,{useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import Input from "./Input"
import "./gnote.css"
function App(){
  const [addNote,setaddNote]=useState([])
  function createNote(note){
     console.log(note +"in app")
 console.log("Clicked")
setaddNote(prev=>{
  return[...prev,note]
})
console.log(note)
  }

  function deleteNote(id) {
    setaddNote(prev => {
      return prev.filter((value, index) => index !== id);
    });
  }
  return(
    <React.Fragment>
    <Header/>
    <div className="inputCenter">
    <Input getDatafromInput={createNote}/>
    </div>
    <div className="noteWrapper">
    {
      addNote.map((value,index)=>{
return <Note
title={value.title}
description={value.description}
key={index}
id={index}
getFromNote={deleteNote}
/>
      })
    }
      </div>

    </React.Fragment>
  )
}
export default App