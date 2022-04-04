import ReactMarkdown from "react-markdown";
import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import {useEffect, useState} from 'react';

function Main({activeNote, onUpdateNote}) {

    // const {speak} = useSpeechSynthesis();

    // const [value1,setValue] = useState("")

    ////////////////////////////
        // const setText = (key, value) => {

        //   text({

        //   ...activeNote,
        //   [key]:value

        //   });

        // };


        const [text, setText] = useState(null);
        const [pitch, setPitch] = useState(1);
        const [rate, setRate] = useState(1);
        const [voiceIndex, setVoiceIndex] = useState(null);
        const onEnd = () => {
          // You could do something here after speaking has finished
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



    // taking key we're updating and value
    const onEditField = (key, value) => {

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

    if(!activeNote) return <div className="no-active-note">Add a new note</div>

     //tts[setText, activeNote] = (null)


    return <div className="app-main">

        <div className="app-main-note-edit">

            {/* updating a part of the array  */}
            <input type="text" 
            id="title" 
            placeholder="Note Title"
            value={activeNote.title} 
            onChange={(e) => onEditField("title", e.target.value)} 
            autoFocus />


            <textarea
              id="message"
              name="message"
              //rows={3}
              placeholder="Write your note here..."
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />


            
            {/* <textarea 
            id="body" 
            name="body"
            placeholder="Write your note here..." 
            value ={activeNote.body} 
            onChange={(e) => onEditField("body", e.target.value) && setText("text", e.target.value)} 
            /> */}
            
            
            </div>


            <div className="app-main-note-preview">

                {/* <h1 className="preview-title">{activeNote.title}</h1>

                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown> */}

                <label htmlFor="voice">Voice</label>
            <select
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

            <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="rate">Rate: </label>
                <div className="rate-value">{rate}</div>
              </div>
              <input
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
            <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="pitch">Pitch: </label>
                <div className="pitch-value">{pitch}</div>
              </div>
              <input
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

            

            {speaking ? (
              <button type="button" onClick={cancel}>
                Stop
              </button>
            ) : (
              <button
                type="button"
                onClick={() => speak({text, voice, rate, pitch })}
              >
                Speak
              </button>
            )}
   

                {/* <div className="app-main-note-voice">
                    <button>Speak</button>
                </div> */}
                
                </div>

                

                
        
        </div>

}

export default Main;