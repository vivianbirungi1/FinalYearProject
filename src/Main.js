import ReactMarkdown from "react-markdown";

function Main({activeNote, onUpdateNote}) {


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
            id="body" 
            placeholder="Write your note here..." 
            value={activeNote.body} 
            onChange={(e) => onEditField("body", e.target.value)} />
            
            </div>


            <div className="app-main-note-preview">

                <h1 className="preview-title">{activeNote.title}</h1>

                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
                
                
                </div>
        
        </div>

}

export default Main;