import classes from './App.module.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { useState } from 'react';

function App() {

  let [topic, setTopic] = useState([]);
  let [strHeader, setStrHeader] = useState('');
  
  
  return (
    <div className={classes.wrapper}>
      <Header topic={topic} 
              setTopic={setTopic}
              strHeader={strHeader}
              setStrHeader={setStrHeader}/>
      <Content topic={topic}
               setTopic={setTopic}/>
    </div>
    
  )
}

export default App;
