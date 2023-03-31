import React, { useState } from "react";
import classes from "../taks/Task.module.css";

let Task = (props) => {

    let [str, setStr] = useState('');
    let [task, setTask] = useState([]);
    
    let pressEnter = (event) => {
        if(event.key === 'Enter'){
            if (/[a-zа-яё0-9]/i.test(event.currentTarget.value)) {
                setTask([...task, str])
                setStr('');
                event.currentTarget.style.border = 'none';
            }else {
                event.currentTarget.style.border = 'solid';
                event.currentTarget.style.borderColor = 'red';
            }
            
        }
    }

    let newTask = task.map((e, id) => <li key={id}>{e}</li>)

    return (
        <div>
            <input className={classes.task__input}
                       type="text" 
                       placeholder='Enter a task'
                       value={str}
                       onChange={(event) => setStr(event.currentTarget.value)}
                       onKeyDown={(event) => pressEnter(event)}
                       onClick={() => console.log(props.id)}
                       />
                <div className={classes.task__tasks}>
                    <ol>
                        {newTask}
                    </ol>
                </div>
        </div>
    )
}

export default Task;