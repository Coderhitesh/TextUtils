
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode , setmode] = useState('light')
  const [alert , setAlert] = useState(null)


  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("LightMode is enable","success")
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='#031220'
      showAlert("DarkMode is enable","success")
    }
  }
  
  return (
    <>
  <Router>
    <Navbar title = 'TextUtils' aboutText = 'About' homeText = 'Home' mode = {mode} toggleMode = {toggleMode}></Navbar>
    <Alert className='container' alert = {alert}></Alert>
    <div className='container my-3'> 
      <Switch>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/">
          <TextForm heading = 'Enter the Text to Analyze below' mode = {mode} showAlert = {showAlert}></TextForm>
          </Route>
      </Switch>
    </div> 
    </Router>

    
    </>
  );
}

export default App;
