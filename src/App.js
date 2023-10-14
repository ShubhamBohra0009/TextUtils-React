import React, {useEffect, useRef, useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutNew from './components/AboutNew';
import Alert from './components/Alert';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  
  const renderCount = useRef(0);

 const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
 };
 
 useEffect((e) => {
  if(mode === "light" ){
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
      // document.title = 'TextAnalyzer - Light Mode'
    renderCount.current+=1;
  }
  else if(mode === "dark"){
      document.body.style.backgroundColor = '#042743';
     if(renderCount.current>0){
       showAlert("Dark mode has been enabled", "success");
     }
    //  document.title = 'TextAnalyzer - Dark Mode'
    }
    
  },[mode])
 

 const toggleMode = (e)=>{
    // e.stopPropagation();
    if(mode === 'dark'){
      setMode("light");
    //   document.body.style.backgroundColor = '#042743';
    //   // document.body.style.backgroundColor = 'grey';
    //   showAlert("Dark mode has been enabled", "success");
    //   // document.title = 'TextAnalyzer - Dark Mode'
    }
    else{
      setMode("dark");
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Light mode has been enabled", "success");
    //   // document.title = 'TextAnalyzer - Light Mode'
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextAnalyzer" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> 
  
    <div className="container my-3">
          <Routes>
            {/* /users ---> Component 1 
            /users/home ---> Component 2 */}
              <Route exact path="/"  element={<TextForm  mode={mode} showAlert={showAlert} heading=" TextAnalyzer "/>} />
              <Route exact path='/about' element={<AboutNew mode={mode}/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
