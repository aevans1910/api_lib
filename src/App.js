import React, { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  let [text, setText] = useState("");
  let [yodaText, setYodaText] = useState("");

  const onTranslateClick = () =>  {
    axios
      .post("/translate/yoda.json", { text })
      .then(res => {
        const { translated } = res.data.contents;
        setYodaText(translated);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div>
      <div className="container">
        <div className="hero">
          <h1>Yoda Speech Translator</h1>
          <p>Translate anything into Yoda speech</p>
        </div>
        <div className="about">
          <img src="images/yoda.jpg" alt="Yoda"/>
          <div className="text">
            <h2>About the Yoda Speech Translator</h2>
            <p>The Yoda Speech Translator is an API that converts phrases into 
              how Yoda would say them. We have simplified its use for you by
              creating an easy to use translator component. Input whatever
              sentence or phrase you want into the input box, hit the Translate
              button, and get your Yoda translation!
            </p>
          </div>
        </div>
        <label>English</label>
        <br/>
        <input type="text" value={text} onChange={ e => setText(e.target.value)} placeholder="Type your text here..."/>
        <button onClick={onTranslateClick}>Translate</button>
        <br/>
        <label>Yoda</label>
        <div>{yodaText}</div>
      </div>
    </div>
  );
}

export default App;
