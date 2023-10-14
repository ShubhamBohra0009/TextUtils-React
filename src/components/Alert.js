import React from 'react'

export function Alert({alert}) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
    
        <div style={{height: '50px'}}>
        {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(alert.type)}</strong> : {alert.msg}
        </div>}
        </div>
  )
}

export const showAlert = (message,type,setAlert)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   };

export function modeRender({darkmode,renderCount,setAlert}){
  if(!darkmode  ){
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success",setAlert);
      // document.title = 'TextAnalyzer - Light Mode'
    renderCount.current+=1;
  }
  else if(darkmode ){
      document.body.style.backgroundColor = '#042743';
     if(renderCount.current>0){
       showAlert("Dark mode has been enabled", "success",setAlert);
     }
    //  document.title = 'TextAnalyzer - Dark Mode'
    }

}
