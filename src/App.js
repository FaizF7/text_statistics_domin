import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [text, setText] = useState("")
  const [wordsList, setWordsList] = useState([])
  const [stats, setStats] = useState({
    numberWords:"0",
    avgLength:0,
    mostFreqWord:"",
    countWordLengths:[]
  })

  useEffect(()=>{

    calculateStats()

  },[wordsList])

  const onInput = (event)=>{
    setText(event.target.value)
    setWordsList(event.target.value.split(" ").filter(t => t!=""))
  }

  const avgWordLength = ()=>{
    return wordsList.reduce((avg, word)=> avg+=word.length/wordsList.length,0)
  }

  const calculateFreq=()=>{

    // let freqs = Array(Math.max((wordsList)=>wordsList.)

    return wordsList.reduce((freqs,word)=> {
      freqs[word.length]? freqs[word.length]+=1: freqs[word.length]=1
      return freqs
    }
    ,{})
  }

  const calculateStats = ()=>{
    if (text.length==0){
      setStats(
        {
          numberWords:"0",
          avgLength:0,
          mostFreqWord:"",
          countWordLengths:{}
        }
      )
    }
    else{
    const updatedStats = {...stats}
    updatedStats.numberWords = wordsList.length
    updatedStats.avgLength = avgWordLength()

    const freqs = calculateFreq()
    console.log(freqs);
    updatedStats.mostFreqWord = Object.keys(freqs).find((length)=>freqs[length]==Math.max.apply(Object.values(freqs)))
    updatedStats.countWordLengths=Object.entries(freqs)


    setStats(updatedStats)
    }
    
  }

  return (
    <>
      <h1>Text Statistics</h1>

      <input type='text' onChange={onInput}/>

      <p>Total number of words: {stats.numberWords}</p>
      <p>Average word length:{stats.avgLength}</p>
      <p>Most frequently occurring word length: {stats.mostFreqWord}</p>
      {/* <p>A list of the number of words of each length: {stats.countWordLengths} </p> */}

    
    </>
  );
}

export default App;
