import axios from "axios";

export default function onTranslateClick(text) {
    // const path = `/translate/yoda.json${ text }`
    // return fetch(path).then(res => res.json())
    axios
      .post("/translate/yoda.json", { text })
  };

//   const onTranslateClick = () =>  {
//     axios
//       .post("/translate/yoda.json", { text })
//       .then(res => {
//         const { translated } = res.data.contents;
//         setYodaText(translated);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   };