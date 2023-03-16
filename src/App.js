import classes from './App.module.css';
import {useState} from 'react';

function App() {

  let [arr, setTask] = useState(['test']);
  let [str, setStr] = useState('');

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
        <input className={classes.exercise} type='text' onChange={(event) => setStr(event.currentTarget.value)}/>
        <button className={classes.btn} onClick={() => setTask([...arr, str])}>Создать задание</button>
        {arrTask}
    </div>
  );
}

export default App;
