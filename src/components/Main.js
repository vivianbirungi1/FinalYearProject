import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import {useEffect, useState} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';


function Main({activeNote, onUpdateNote}) {

  // reading the text, pitch, rate and voiceIndex values, assigning to useState js function 
        const [text, setText] = useState(null);
        const [pitch, setPitch] = useState(1);
        const [rate, setRate] = useState(1);
        const [voiceIndex, setVoiceIndex] = useState(null);
        const onEnd = () => {
          // Could do something here after speaking has finished
        };
        const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
          onEnd});


       const voice = voices[voiceIndex] ||null;

  const styleFlexRow = { display: 'flex', flexDirection: 'row' };
  const styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  };

  // if the active note body is passed in an an active note exists in the array then setText.
  //this allows for the body in the text area to be updated and read aloud
  useEffect(() => {
    if(activeNote){
      setText(activeNote.body);
    }
  }, [activeNote]);



    // taking key we're updating and value
    const onEditField = (key, value) => {

      if(key === "body"){
        setText(value);
      }

        // constructing the object that we are sending back
        // creating the function we will call firet
        onUpdateNote({

                // only modifying what we need to modify below, i.e title and body. not id.
                            // dynamic key
            // targets contents of the field, e.g. updates title of the body
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),

        });

    };
    
// if there is no active note selected, display "Add new note"
    if(!activeNote) return <div className="no-active-note">Add a new note</div>



    return <div className="app-main">

        <div className="app-main-note-edit">

            {/* updating Title part of the array  */}
            <input className="shadBox2" type="text" 
            id="title" 
            placeholder="Note Title"
            value={activeNote.title} 
            onChange={(e) => onEditField("title", e.target.value)} 
            autoFocus />


            <textarea
            className="shadBox2"
              id="message"
              name="message"
          
              placeholder="Write your note here..."
              value={activeNote.body}
           
              onChange={(e) => onEditField("body", e.target.value)}
            />

            
            
            </div>


            <div className="app-main-note-preview">

                {/* <h1 className="preview-title">{activeNote.title}</h1>

                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown> */}

{speaking ? (
              <Button type="button" style={{marginLeft: "550px"}} onClick={cancel}>
                <StopIcon sx={{  color: '#FFBA3E', stroke: 'black', fontSize: 70 }}/>
              </Button>
            ) : (
              <Button
                type="button"
                style={{marginLeft: "550px"}}
                onClick={() => speak({text, voice, rate, pitch })}
              >
                <PlayArrowIcon sx={{color: '#FFBA3E', stroke: 'black', strokeWeight: '1', fontSize: 70 }}/>
              </Button>
            )}

                <div className="spaceLeft">
                <div>
                <Typography variant="h6" component="div" htmlFor="voice">Voice</Typography>
                </div>

            <select
              className="top"
              id="voice"
              name="voice"
              value={voiceIndex || ''}
              onChange={(event) => {
                setVoiceIndex(event.target.value);
              }}
            >
              <option value="">Default</option>
              {voices.map((option, index) => (
                <option key={option.voiceURI} value={index}>
                  {`${option.lang} - ${option.name}`}
                </option>
              ))}
            </select>
            </div>

            <div className="top spaceLeft" style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <Typography variant="h6" component="div" htmlFor="rate">Rate: </Typography>
                <Typography variant="h6" component="div" className="rate-value"> {rate}</Typography>
              </div>
              <input
              style={{width: "1035px"}}
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
                onChange={(event) => {
                  setRate(event.target.value);
                }}
              />
            </div>
            <div className="top spaceLeft" style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <Typography variant="h6" component="div" htmlFor="pitch">Pitch: </Typography>
                <Typography variant="h6" component="div" className="pitch-value">{pitch}</Typography>
              </div>
              <input
              style={{width: "1035px"}}
                type="range"
                min="0"
                max="2"
                defaultValue="1"
                step="0.1"
                id="pitch"
                onChange={(event) => {
                  setPitch(event.target.value);
                }}
              />
            </div>
   

                
                </div>

                

                
        
        </div>

}

export default Main;