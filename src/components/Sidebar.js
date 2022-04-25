import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import {useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {


    // sortedNotes function to help sort recently updated note to the top
      // compare a and b so that most recently modified gets pushed to top of notes array
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'black',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    //   const [searchInput, setSearchInput] = useState("");
     
    //   const title = [1]

    //   const title = [
    //       {title}
    //   ]

    //   title = {title}

    //   const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    //   };
    //   if (searchInput.length > 0) {
    //       title.filter((title) => {
    //       return title.name.match(searchInput);
    //   });
    //   }


    return <div className="app-sidebar">

        <div className="app-sidebar-header">

            <h1>Notes</h1>

            

            <button onClick={onAddNote}>Add <AddCircleOutlineIcon/></button>

            
            
            </div>

            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            // type='text'
            // onChange={handleChange}
            // value={searchInput}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


{/* will output all the content for each note. can access data for each note using notes map. */}
            <div className="app-sidebar-notes shadBox">

                {sortedNotes.map((note) => (

// stored in state as the active note
<div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>

<div className="sidebar-note-title">

    <strong>{note.title}</strong>

    <button onClick={ () => onDeleteNote(note.id)}>Delete <DeleteIcon/></button>
    
    
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