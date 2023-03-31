import React from 'react';
import classes from '../header/Header.module.css';

const Header = (props) => {
   // Функция pressEnter которую ты сказал нужно над ретерном и так над ретерном
    let pressEnter = (event) => {
        if(event.key === 'Enter'){
            if (/[a-zа-яё0-9]/i.test(event.currentTarget.value)) {
                props.setTopic([...props.topic, props.strHeader])
                props.setStrHeader('');
                event.currentTarget.style.border = 'none';
            }else {
                event.currentTarget.style.border = 'solid';
                event.currentTarget.style.borderColor = 'red';
            }
            
        }
    }

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <h1 className={classes.header__name}>todolist</h1>
                <input className={classes.header__input} 
                       type="text"
                       placeholder='Enter the topic of the task'
                       value={props.strHeader}
                       onChange={(event) => props.setStrHeader(event.currentTarget.value)}
                       onKeyDown={(event) => pressEnter(event)}/>
                <span className={classes.header__number}>number of tasks: {props.topic.length}</span>
            </div>
        </div>
    )
}


export default Header;