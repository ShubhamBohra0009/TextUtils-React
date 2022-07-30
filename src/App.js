import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import AboutNew from './components/AboutNew';
import Alert from './components/Alert';
import React, {useState} from 'react'
// import {Routes} from 'react-router-dom';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  

 const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
 };

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      // document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    <Router>
{/* <Navbar/> */}
{/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/> 
  
<div className="container my-3">
          <Routes>
            {/* /users ---> Component 1 
            /users/home ---> Component 2 */}
              <Route exact path='/about' element={<AboutNew mode={mode}/>}/>
              <Route exact path="/"  element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
        </Routes>
{/* <AboutNew mode={mode}/> */}
</div>
    </Router>

    </>
  );
}

export default App;
