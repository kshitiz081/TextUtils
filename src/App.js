import React,{useState} from 'react';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// let name = "Kshitiz"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#14304c';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Light mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Dark mode"
    }
  }
  return (
    <>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nemo nobis nihil soluta. Sit sunt repellat, sed incidunt facilis doloribus neque consequuntur, blanditiis molestias obcaecati aperiam dolores culpa nemo laudantium excepturi, debitis minima distinctio!
        </p>
      </div> */}
      {/* <About/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
              </Route>
            </Switch>
          </div>
     </Router>
    </>
  );
}
export default App;
