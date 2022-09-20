import React  from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) =>{

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }


    return <>
    <div className="dir">
        <div className="notess">
            <h3>{props.title}</h3>

            <p>{props.content}</p>
            <button className="btn" onClick={deleteNote}>
             <DeleteOutlineIcon className="deletIcon"/>
            </button>
        </div>
    </div>
    
    </>
}

export default Note