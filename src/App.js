import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import Container from '@mui/material/Container';

//COMPONENETS
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import NavNav from './components/NavNav';

//PAGES
 import Home from './pages/Home';



function App() {

  // //array to create getters and setters
  // const  [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  // const [activeNote, setActiveNote] = useState(false);


  // // whenever we update notes array in any form, it is stored in "notes" array
  // // to retrieve notes we made we make it the default state for notes. this would not work if it is a new browser opened so we use an else function
  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes))

  // }, [notes]);

  // const onAddNote = () => {
  //   console.log('add');
  //   // updating set note state and adding an object to it
  //   const newNote = {
  //     id: uuid(),
  //     title: "Untitled Note",
  //     body: "",
  //     lastModified: Date.now(),
  //   };

  //   // new array where we add in a new object, take all objects out of current notes array and add them into the new array
  //   setNotes([newNote, ...notes]);
  // };

  // const onDeleteNote = (idToDelete) => {
  //   // filter js function, lets us write logic for when it loops around the array
  //   // function loops thru each function in the array, if everything passes true, the item will stay, if not it will be removed from array
  //   //we will check if the id we are trying to delete is correct, if it is, it deletes, if it's wrong, it stays

  //   setNotes(notes.filter((note) => note.id !== idToDelete))
  // };

  // const onUpdateNote = (updatedNote) => {
  //   // using map to modify the array.
  //   const updatedNotesArray = notes.map((note) => {
  //     if(note.id === activeNote) {

  //       return updatedNote;
  //     }

  //     return note;
  //   });

  //   setNotes(updatedNotesArray);

  // };

  // // help function for active note
  // const getActiveNote = () => {
  //   return notes.find((note) => note.id === activeNote);
  // }






  return (

    
    
    //  <div className="App">

    //    <NavNav></NavNav>
      
      // <Sidebar 
      // notes= {notes} 
      
      // onAddNote={onAddNote} 
      
      // onDeleteNote={onDeleteNote}
      
      // activeNote={activeNote}

      // setActiveNote={setActiveNote}
      
      // />



      // <Main activeNote={getActiveNote()}

      // onUpdateNote={onUpdateNote}
      
      // />


    //  </div>

    <Router>
      <NavNav  />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>

  );
}

export default App;
