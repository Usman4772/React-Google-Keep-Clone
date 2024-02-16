import React, { useState } from "react";
function Input(props){
const [note,setNote]=useState({
    title:"",
    description:""
})


    function getInput(e){
const {value,name}=e.target
// console.log(value,name)
setNote(prev=>{
    return{
        ...prev,//if we don't write prev then if we add title it will only set title value and if we set description it will only set description for us
        [name]:value
    }
    
})
// console.log(note)
    }

    function passDatatoApp (e) {
props.getDatafromInput(note)
//to empty input
setNote({
    title:"",
    description:""
})

    }
    return(
        <React.Fragment>
        <div className="inputWrapper">
       <input
       name="title"//we have to give the same name as we have used in useState({title,description})
        type="text" 
        placeholder="Add your title" 
        className="titleInput"
        onChange={getInput}
      value={note.title}
        ></input>
       <textarea
       name="description"
        className="textarea"
        placeholder="Add here..."
        onChange={getInput}
        value={note.description}
        ></textarea>
       <button className="btn" onClick={passDatatoApp}>
      Add
       </button>
       </div>
        </React.Fragment>
    )
}
export default Input