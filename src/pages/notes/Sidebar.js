function Sidebar(props) {


    // sortedNotes function to help sort recently updated note to the top
      // compare a and b so that most recently modified gets pushed to top of notes array
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    const {
        notes,
        onAddNote,
        onDeleteNote, 
        activeNote,
        setActiveNote
    } = props;

    return <div className="app-sidebar">

        <div className="app-sidebar-header">

            

            <h1>Notes</h1>

            <button onClick={onAddNote}>Add</button>
            
            </div>


{/* will output all the content for each note. can access data for each note using notes map. */}
            <div className="app-sidebar-notes">

                {sortedNotes.map((note) => (

// stored in state as the active note
<div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>

<div className="sidebar-note-title">

    <strong>{note.title}</strong>

    <button onClick={ () => onDeleteNote(note.id)}>Delete</button>
    
    
    </div>

    <p>{note.body && note.body.substr(0, 100) + "..."}</p>

    <small className="note-meta">

        Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
        })}
        
        </small>


</div>

                ))};

               
                 </div>

    </div>



}

export default Sidebar;