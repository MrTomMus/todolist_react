import classes from './App.module.css';
import {useState} from 'react';

function App() {

  let [arr, setTask] = useState(['test']);
  let [str, setStr] = useState('');

  let clearStr = (elem) => {
    setTask([...arr, elem.value]);
    elem.value = '';
  }

  let enterPress = (event) => {
    console.log(event)
    if(event.key === 'Enter') {
      clearStr(event.currentTarget)
    }
  }

  let arrTask = arr.map((e, id) => {
    return (
      <div key={id} className={classes.task}>
        <div>{id+1} {e}</div>
        <button onClick={() => setTask(arr.filter((elem, index) => index !== id ? elem : console.log('test')))}>Удалить</button>
      </div>
      
    ) 
  })

  return (
    <div className={classes.wrapper}>
        <h1 className={classes.title}>Задания</h1>
        <input className={classes.exercise} type='text' onChange={(event) => setStr(event.currentTarget)} onKeyDown={(event) => enterPress(event)}/>
        <button className={classes.btn} onClick={() => clearStr(str)}>Создать задание</button>
        {arrTask}
    </div>
  );
}

export default App;
