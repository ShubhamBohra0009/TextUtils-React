import React, {useState} from 'react'
// const [count, setCount] = useState(0);
//here count is a variable with having default value which is 0 given in the bracket and setCount will be the function
// that will be used for updating the value of count. Hooks let us use state and other React features without writing a class. 



export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
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
    <div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>

    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

// TextForm.propTypes ={
//     heading : Proptypes.string
// }