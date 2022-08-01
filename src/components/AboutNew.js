// import React, {useState} from 'react'


export default function About(props) {

    //  const [myStyle, setMyStyle] = useState(
    // {
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color == "white"){
    //         setMyStyle({
    //             color: '#042743',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: '#042743',
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

  return (
    <div className='container' style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }}>
        {/* <strong>This is the first item's accordion body.</strong>  */}
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }}>
        {/* <strong>This is the second item's accordion body.</strong> */}
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==="dark" ? '#042743' : 'white' , color : props.mode==="dark" ? 'white' : 'black' }}>
        {/* <strong>This is the third item's accordion body.</strong> */}
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer , Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
<div className='container my-3'>
    {/* <button onClick={toggleStyle} type="button" className='btn btn-primary'>{btntext}</button> */}
    {/* <div className="form-check form-switch">
  <input className="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
    </div> */}



</div>
    </div>
  )
}
