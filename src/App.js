import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
// let name ="PRAKHAR";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  // setmode("light");/
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform
                heading="Enter the text to analyse below"
                mode={mode}
                showalert={showalert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
