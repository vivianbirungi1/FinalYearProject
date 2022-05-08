import {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import uuid from 'react-uuid';
import {Grid} from '@material-ui/core';


const Home = () => {

  //array to create getters and setters stored in state
  // array of notes are saved in localstorage
  // if localstorage is empty then display an empty array until note is added then parse in notes.
const  [notes, setNotes] = useState(!localStorage.notes ? ([]) : (JSON.parse(localStorage.notes) ));

const [activeNote, setActiveNote] = useState(false);


// whenever we update notes array in any form, it is stored in "notes" array
// to retrieve notes we made we make it the default state for notes. this would not work if it is a new browser opened so we use an else function
useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes))

}, [notes]);

const onAddNote = () => {
  console.log('add');
  // updating set note state and adding an object to it
  const newNote = {
    id: uuid(),
    title: "Untitled Note",
    body: "",
    lastModified: Date.now(),
  };

  // new array where we add in a new object, take all objects out of current notes array and add them into the new array
  setNotes([newNote, ...notes]);
};

const onDeleteNote = (idToDelete) => {
  // filter js function, lets us write logic for when it loops around the array
  // function loops through each function in the array, if everything passes true, the item will stay, if not it will be removed from array
  //we will check if the id we are trying to delete is correct, if it is, it deletes, if it's wrong, it stays
  setNotes(notes.filter((note) => note.id !== idToDelete))
};

const onUpdateNote = (updatedNote) => {
  // using map to modify the array.
  const updatedNotesArray = notes.map((note) => {
    if(note.id === activeNote) {

      return updatedNote;
    }

    return note;
  });
//setting the notes in the modified array
  setNotes(updatedNotesArray);

};

// help function for active note
const getActiveNote = () => {
  return notes.find((note) => note.id === activeNote);
}

  //return function contains the Sidebar and Main components disaplyed in home.
  //Material UI Grid to space the components beside each other.
  // Sidebar and Main components share access to functions. e.g. notes passed into Sidebar as it needs access to the notes being created, deleted etc.
    return (

      <div>

   <Grid container spacing={1}>

      <Grid item md={4}>
          <Sidebar 

      notes= {notes} 
      
      onAddNote={onAddNote} 
      
      onDeleteNote={onDeleteNote}
      
      activeNote={activeNote}

      setActiveNote={setActiveNote}
      
      />
      </Grid>
      

      <Grid item md = {8}>

<Main 

activeNote={getActiveNote()}


onUpdateNote={onUpdateNote}

/>

</Grid>
</Grid>

</div>


    )
  }
  
  export default Home