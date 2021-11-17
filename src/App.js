import React, { useState, useEffect} from 'react';
import Cards from './components/Cards';

import './App.css';



function App() {

  const [sentences, setSentences] = useState([ ])

  useEffect(()=>{
    const getData = async()=>{
      const dataFromAPI = await fetchData()
      setSentences(dataFromAPI)
    }

    getData()
  }, [])

  const fetchData = async ()=>{
    const res  = await fetch('https://api.quotable.io/random')
    const data = await res.json()
    return data
  }

  return (
    <div className="App">
      <Cards  sentences={sentences} />
    </div>
  );
}

export default App;
