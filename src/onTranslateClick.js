import axios from "axios";

// export default function onTranslateClick(text) {
//     const path = `/translate/yoda.json${ text }`
//     return fetch(path).then(res => res.json())
//     axios
//       .post("/translate/yoda.json", { text })
//   };

export const translateYoda = (text) =>  {
  return axios
    .post("https://api.funtranslations.com/translate/yoda.json", { text })    
};

export const translateYoda2 = async(text) =>  {
  const response = await fetch(`https://api.funtranslations.com/translate/yoda?text=${ text }`)
  const json = await response.json()
  return json   
};

// translateYoda2("How are you").then((response) => {console.log(response)})