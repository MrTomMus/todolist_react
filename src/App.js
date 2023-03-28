import classes from './App.module.css';
import {useState} from 'react';

function App() {

  let [arr, setTask] = useState([]);
  let [str, setStr] = useState('');

  
  let clearStr = (elem) => {
    setTask([...arr, elem]);
    setStr('')
    
  }

  let enterPress = (event) => {
    if(event.key === 'Enter') {
      clearStr(event.currentTarget.value)
    }
  }

  let arrTask = arr.map((e, id) => {
    return (
      <div key={id} className={classes.task}>
        {console.log('render')}
        <div>{id+1} {e}</div>
        <button onClick={() => setTask(arr.filter((elem, index) => index !== id ? elem : console.log('test')))}>Удалить</button>
      </div>
      
    ) 
  })

  return (
    <div className={classes.wrapper}>
        <h1 className={classes.title}>Задания</h1>
        <h1>Количество заданий {arr.length}</h1>
        <input placeholder='Введите задание' className={classes.exercise} type='text' value={str} onChange={(event) => setStr(event.currentTarget.value)} onKeyDown={(event) => enterPress(event)}/>
        <button className={classes.btn} onClick={() => clearStr(str)}>Создать задание</button>
        {arrTask}
    </div>
  );
}

export default App;
