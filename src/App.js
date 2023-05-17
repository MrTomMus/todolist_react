import classes from './App.module.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { useState } from 'react';

function App() {

  let [topics, setTopic] = useState([]);
  let [strHeader, setStrHeader] = useState('');

  function setLocalStorage() {
    localStorage.setItem('state', JSON.stringify(topics));
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('state')) {
      setTopic(JSON.parse(localStorage.getItem('state')));
    }
  }
  window.addEventListener('load', getLocalStorage)
  
  return (
    <div className={classes.wrapper}>
      <Header topics={topics} 
              setTopic={setTopic}
              strHeader={strHeader}
              setStrHeader={setStrHeader}/>
      <Content topics={topics}
               setTopic={setTopic}/>
    </div>
    
  )
}

export default App;
