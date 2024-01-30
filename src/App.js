import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const[text,setText] = useState('');
  const[correctWord,setCorrectWord] = useState('');
  const [customDictionary,setCustomDictionary] = useState({
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  });
  const[showError,setShowError] = useState(false);

  useEffect(()=>{
    if(text){
      let word = text.toLowerCase().split(" ");
      for(let i=0;i<word.length;i++){
        if(customDictionary.hasOwnProperty(word[i])){
          setCorrectWord(customDictionary[word[i]]);
          setShowError(true);
          break;
        }
      }
    }else{
      setShowError(false);
    }

  },[text])
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1><br/>
      <textarea value={text} placeholder='Enter text...' rows={5} style={{width:"500px"}} onChange={(e)=>setText(e.target.value)}/>
      <br/>

      {showError && <p>Did you mean: {correctWord}?</p>}
    </div>
  );
}

export default App;
