import React, {useState, useEffect} from 'react';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import MicIcon from '@mui/icons-material/Mic';


//creating eindow javascript object
//'or' for chrome
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function SpeechRec() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    // const [savedNotes, setSavedNotes] = useState(JSON.parse(localStorage) || []) 
    const [savedNotes, setSavedNotes] = useState([]) //array of saved notes which will be looped through


    useEffect(() => {
        handleListen()
    }, [isListening])

    // useEffect(() => {
    //     localStorage.setItem("savedNotes", JSON.stringify(savedNotes))
      
    //   }, [savedNotes]);


    const handleListen = () => {
        if(isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue...')
                mic.start()
            }
        } else{
            mic.stop()
            mic.onend = () => {
                console.log('Stopped')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }


    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    return(
        <>

<div class="content-spacing top">
      <Link to="/" style={{textDecoration: 'none'}}><Button style={{
        borderRadius: 35,
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "6px 22px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><ArrowBackIcon sx={{color: '#ffffff'}} />Return to Home</Button></Link>
      </div>

        <Typography variant="h3" className="centertext top">Voice Notes</Typography>
        <Typography variant="h6" className="centertext top">Press Record and turn your voice into text! </Typography>
        <RecordVoiceOverIcon sx={{ marginLeft: "990px", fontSize: 60 }} />

        <div className='container'>
            <div className='box'>
                <Typography variant="h4">Current Note</Typography>
                {isListening ? <span><MicIcon sx={{color: '#5c5c5c',  mr: 2, fontSize: 40 }}/></span> : <span><RadioButtonCheckedIcon sx={{color: '#e81c0e',  mr: 2, fontSize: 40 }}/><MicIcon sx={{color: '#5c5c5c',  mr: 2, fontSize: 40 }}/></span>}
                <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFBA3E",
        padding: "18px 36px",
        fontSize: "18px"
    }} onClick={handleSaveNote} disabled={!note} className='buttonStyle top3'>Save Note</Button>
                <Button style={{
        borderRadius: 35,
        backgroundColor: "#2D95EC",
        color: '#000000',
        padding: "18px 36px",
        fontSize: "18px"
    }} onClick={()=> setIsListening(prevState => !prevState)} className='buttonStyle top3'>
                    Record/Stop
                    </Button>
                    <Typography variant="h5">{note}</Typography>

            </div>
            
            <div className='box'>
                <Typography variant="h4">Saved Notes</Typography>
                {savedNotes.map(n => (

                    <Typography variant="h5" key={n}>{n}</Typography>
                ))}
            </div>


         </div>
         </>

    );
}

export default SpeechRec;