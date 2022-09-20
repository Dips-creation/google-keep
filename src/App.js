
import React from 'react';
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer'
import Note from './components/createNotes';
import Notes from './components/note';
//import { valueToPercent } from '@mui/base';
import {useState} from 'react';


function App() {
  const [addItem ,setAddItem] =useState([]);
const addNotes = (note) =>{

  //alert('I am clicked');
  setAddItem((preData) =>{
    return [...preData,note]
  });
  console.log(note)
}

  const onDelete = (id) =>{
    setAddItem((olddata)=>
     olddata.filter((currdata , indx) => {
        return indx !== id;
     })
    )
    
  }
  return <>
  <Home/>
  <Note passNotes={addNotes}/>
  {
    addItem.map((val ,index) => {
      return (
        <Notes
          key ={index}
          id ={index}
          title ={val.title}
          content ={val.content}
          deleteItem ={onDelete}
        />
      );
    })
  }
  <Footer/> 
  </>
  
}

export default App;
