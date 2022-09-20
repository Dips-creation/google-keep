import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';;

const createNotes = (props) =>{

    
    const [note ,setNote] = useState({
        title:'',
        content:''
    });
    const InputEvent = (event) =>{
        const {name , value}= event.target;
        setNote((preData) =>{
            return{
                ...preData,
            [name]:value

            }
        })
        console.log(note)
    }

    const addEvent =() =>{
        props.passNotes(note);
        setNote({
            title:"",
            content:"",
        })

    }
    return <>
        <div className="main_notes">
            <form>
                <input 
                className="title" 
                name="title"
                type="text" 
                value={note.title}
                onChange={InputEvent} 
                placeholder="Title" 
                autoComplete="off"/>
                <textarea 
                className="notes" 
                name="content"
                rows="" column = ""
                value={note.content}
                onChange={InputEvent}
                 placeholder="Writes a notes..."/>
            </form>
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button>

        </div>
    
    </>

}

export default createNotes;