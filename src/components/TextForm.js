import React, {useState} from 'react'
import TextSummary from './TextSummary';

export default function TextForm({darkmode,showAlert,heading,setAlert}) {
  
  const [text, setText] = useState("");
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to UpperCase!", "success",setAlert);
  }
  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to LowerCase!", "success",setAlert);
  }
  const handleCapitalizeClick = ()=>{
    let newText = text.replace(/\b\w/g, function(l){ return l.toUpperCase() });
    setText(newText);
    showAlert(" Converted to Capitalize!", "success",setAlert);
  }
  const handleCopy = ()=>{
    let text= document.getElementById('myBox');
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    showAlert("Copied to Clipboard!", "success",setAlert);
  }
  
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra Spaces Removed!", "success",setAlert);
  }
  const handleClearClick = ()=>{
    let newText = ("");
    setText(newText);
    showAlert("Text Cleared!", "success",setAlert);
  }
  const handleTexttoSpeech=()=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
    showAlert("Text To Speech!","success",setAlert);
  }


  return (
    <>
    <div className='container' style={{color : darkmode ? 'white' : 'black'}}>
    <h1 className='mb-3 text-center'>{heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor : darkmode ? '#042743' : 'white' , color : darkmode ? 'white' : 'black' }}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCapitalizeClick}>Capitalize</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleTexttoSpeech}>🔊 Text to Speech</button>
    </div>
    <TextSummary darkmode={darkmode} text={text}/>
    </>
  )
}