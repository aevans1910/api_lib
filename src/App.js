import React, { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  let [text, setText] = useState("");

  const options = {
    method: 'POST',
    url: 'https://yodish.p.rapidapi.com/yoda.json',
    params: {text: 'Master Obiwan has lost a planet.'},
    headers: {
      'x-rapidapi-key': '5d0b8f28c8msh35ad9af1178a47ep192210jsn7ee9b426ee33',
      'x-rapidapi-host': 'yodish.p.rapidapi.com'
    }
  };

  const onTranslateClick = () =>  {
    axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  };

  return (
    <div>
      <h1>Yoda speech translator!</h1>
      <label>English</label>
      <br/>
      <input type="text" value={text} onChange={ e => setText(e.target.value)} placeholder="Type your text here..."/>
      <button onClick={onTranslateClick}>Translate</button>
      <br/>
      <label>Yoda</label>
      <div>yoda translator will be here</div>
    </div>
  );
}

export default App;
