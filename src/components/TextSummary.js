function TextSummary({darkmode,text}){
    return (
        <>
        <div className="container my-3" style={{color : darkmode ? 'white' : 'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length } Words and {text.length} Characters and  {text.split(/\n/).filter((element)=>{return element.length!==0}).length } Paragraphs</p>
      <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ?text : "Nothing to Preview! "}</p>
    </div>
        </>
    )
}
export default TextSummary;