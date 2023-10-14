function Footer({darkmode,style}){
    const date = new Date;
    const year= date.getFullYear();
    console.log(style)
    return (
        <>
    <div id="footer" style={style}>
    {/* <div id="footer" style={{position: 'absolute',bottom: 0,width: '100%',backgroundColor: 'orange'}
    }> */}
    {/* <div id="footer" style={{position: 'absolute',left:0,bottom : 0,width: '100%' }}> */}
    {/* <div id="footer" > */}
  <footer className={`text-center text-lg-start text-${darkmode? 'white' : 'dark'}`} style={{backgroundColor: darkmode? '#1c2331': '#f8f9fa',textAlign: 'center'}}>
  {/* <footer className={`text-center text-lg-start text-${darkmode? 'white' : 'dark'}`} style={{backgroundColor: darkmode? '#1c2331': '#f8f9fa',textAlign: 'center',position: 'absolute',left:0,bottom : 0,width: '100%'}}> */}
    <div className="text-center p-2" style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', height: '48px', }}>
      © {year} Copyright:  
      <a className={`text-${darkmode? 'white' : 'dark'} mx-2`} href="https://www.linkedin.com/in/shubham-bohra-17ba94201/" target="_blank" rel="noopener noreferrer" style={{textDecoration : 'none', borderBottom : `1px solid ${!darkmode ? "black " : 'white'}`}} >Shubham Bohra</a>
    </div>
  </footer>
</div>
         </>
        )
}

export default Footer;