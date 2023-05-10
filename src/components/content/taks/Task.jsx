import React, { useState } from "react";
import classes from "../taks/Task.module.css";

let Task = (props) => {
    
    let [str, setStr] = useState('');
    let [isPress, setPress] = useState(true);

    let [isFlag, setFlag] = useState('true')
    
    
    let pressEnter = (event) => {
        if(event.key === 'Enter'){
            
            if (/[a-zа-яё0-9]/i.test(event.currentTarget.value)) {  
                props.setTopic(props.topics.map(obj => obj.id === props.id ? {...obj, tasks: [...obj.tasks, str]} : obj))    
                setStr('');
                event.currentTarget.style.border = 'none';
            }else {
                event.currentTarget.style.border = 'solid';
                event.currentTarget.style.borderColor = 'red';
            }
            
        }
    }
   
    let newTask = props.tasks.map((e, index) => <li  onClick={() => setFlag(!isFlag)} className={`${classes.task} ${isFlag && classes.task_active}`} key={index}>{index+1}. {e} <input checked={isFlag} type="checkbox" /></li>)
    
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