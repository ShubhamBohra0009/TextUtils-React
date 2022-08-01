import React, {useState} from 'react'
// const [count, setCount] = useState(0);
//here count is a variable with having default value which is 0 given in the bracket and setCount will be the function
// that will be used for updating the value of count. Hooks let us use state and other React features without writing a class. 

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }
  const handleClearClick = ()=>{
    let newText = ("");
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleCapitalizeClick = ()=>{
    let newText = text.replace(/\b\w/g, function(l){ return l.toUpperCase() });
    setText(newText);
    props.showAlert(" Converted to Capitalize!", "success");
  }
  
  const handleCopy = ()=>{
    let text= document.getElementById('myBox');
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  // const [text, setText] = useState("Enter the Text here");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container' style={{color : props.mode==="dark" ? 'white' : 'black'}}>
    <h1 className='mb-3'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCapitalizeClick}>Capitalize</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color : props.mode==="dark" ? 'white' : 'black'}}>
      <h2>Text Summary</h2>
      {/* <p>{text.length>0 ? text.split(" ").length : "0"} words and {text.length} characters</p> */}
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length } Words and {text.length} Characters and  {text.split(/\n/).filter((element)=>{return element.length!==0}).length } Paragraphs</p>
      {/* <p> Paragraphs: {text.split(/\n/).filter((element)=>{return element.length!==0}).length } </p> */}
      <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ?text : "Nothing to Preview! "}</p>
    </div>
    </>
  )
}

// TextForm.propTypes ={
//     heading : Proptypes.string
// }