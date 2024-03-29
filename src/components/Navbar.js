import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({title,aboutText,darkmode,setDarkmode}) {

  return (
    <nav id='nav' className={`navbar navbar-expand-lg navbar-${ darkmode ?'dark' : 'light'} bg-${darkmode ?'dark' : 'light'}`  }>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link "  aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">{aboutText}</Link>
          </li>
        </ul>

          <div className={`form-check form-switch text-${!darkmode ? "dark" : "light"}`}>
          <input className="form-check-input" onClick={()=>{setDarkmode(!darkmode)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {darkmode? "Dark": "Light"} Mode</label>
      </div>
      </div>
    </div>
  </nav>
  )
}
