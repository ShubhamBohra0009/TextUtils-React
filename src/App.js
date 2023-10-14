import React, {useEffect, useRef, useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import  {Alert,modeRender, showAlert} from './components/Alert';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState(true); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  
  const renderCount = useRef(0);
  
  useEffect((e) => {
     modeRender({darkmode,renderCount,setAlert});
   },[darkmode])

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextAnalyzer" aboutText="About" darkmode={darkmode} setDarkmode={setDarkmode} />
    <Alert alert={alert} /> 
  
    <div className="container my-3">
          <Routes>
              <Route exact path="/"  element={<TextForm  darkmode={darkmode} showAlert={showAlert} setAlert={setAlert} heading=" TextAnalyzer"></TextForm>} />
              <Route exact path='/about' element={<About darkmode={darkmode}/>}/>
        </Routes>
      </div>
      {/* <Footer darkmode={darkmode} style={style}/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
