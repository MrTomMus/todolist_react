import React from 'react';
import classes from '../content/Content.module.css';

const Content = (props) => {

    console.log(props)

    let task = props.topic.map((e, id) => {
        return (
            <div key={id} className={classes.task}>
                <h2 className={classes.task__name}>{e}</h2>
                <input className={classes.task__input}
                       type="text" 
                       placeholder='Enter a task'
                       />
                <div className={classes.task__tasks}>
                    test
                </div>
                <button className={classes.task__button} onClick={() => props.setTopic(props.topic.filter((elem, index) => id !== index ? elem : console.log('test')))}>Delete</button>
            </div>
        )
       
    })
    return (
        <div className={classes.container}>
            {task}
        </div>
    )
}


export default Content;