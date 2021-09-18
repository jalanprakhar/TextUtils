import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  // text="hwqdcb"// wrong
  // setText("odwh");//correct
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    if(text!==newText) props.showalert("Converted to UpperCase","success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    if(text!==newText) props.showalert("Converted to LowerCase","success");
  };
  const handleAltClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    var newstring = [];
    for (var i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newstring[i] = newText[i].toUpperCase();
      } else newstring[i] = newText[i];
    }
    var f = newstring.join("");
    setText(f);
    if(text!==f)props.showalert("Converted to Alternate Casing","success");
  };
  const handleCleClick = () => {
    setText("");
    props.showalert("Text Cleared","success");
  };
  const handleespClick = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text!==newText.join(" "))props.showalert("Extra spaces removed","success");
  };

  const handleOnChange = (event) => {
    // console.log("Do on change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{backgroundcolor:props.mode==='dark'?'white':'#042743'}}>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="mybox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'#042743'}}
            // style={{color:props.mode==='dark'?'white':'grey'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleAltClick}>
          Alternate upper-lower casing
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCleClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleespClick}>
          Remove extra spaces
        </button>

      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          No of words- {text.length>0?text.trim().replace(/  +/g, " ").split(/\s/).length:0}; No of characters- {text.length}
        </p>
        <p>
          {((2 / 600.0) * text.split(" ").filter((Element)=>{return Element.length!==0}).length).toPrecision(2)} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  );
}
