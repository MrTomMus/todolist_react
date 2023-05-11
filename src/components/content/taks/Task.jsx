import React, { useState } from "react";
import classes from "../taks/Task.module.css";

let Task = (props) => {
    console.log(props)
    let [str, setStr] = useState('');
    

    let pressEnter = (event) => {
        if(event.key === 'Enter'){
            
            if (/[a-zа-яё0-9]/i.test(event.currentTarget.value)) {  
                props.setTopic(props.topics.map(obj => obj.id === props.id ? {...obj, tasks: [...obj.tasks, {name: str, id: props.tasks.length, isFlag: false}]} : obj))    
                setStr('');
                event.currentTarget.style.border = 'none';
            }else {
                event.currentTarget.style.border = 'solid';
                event.currentTarget.style.borderColor = 'red';
            }
            
        }
    }

    let changeFlag = (id) => {
        props.setTopic(props.topics.map(obj => obj.id === props.id ? obj.tasks.map(elem => elem.id === id ? {...elem, isFlag: !elem.isFlag} : elem) : obj))
    }
   
    let newTask = props.tasks.map((obj, index) => <li onClick={() => changeFlag(obj.id)} 
                                                      className={`${classes.task} ${obj.isFlag && classes.task_active}`} 
                                                      key={index}>{index+1}. {obj.name} 
                                                      <input checked={obj.isFlag} type="checkbox" /></li>)
    console.log(props)
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