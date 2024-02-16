import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    function passToApp(){
        props.getFromNote(props.id)
    }
return(
    <React.Fragment>
   <div className="noteContainer">
   <h2 className="title">{props.title}</h2>
   <p className="description">{props.description}</p>
   <button className="deleteNote" onClick={passToApp}>
<button>Delete</button>
   </button>
   </div>
    </React.Fragment>
)
}
export default Note