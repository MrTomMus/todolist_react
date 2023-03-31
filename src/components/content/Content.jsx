import classes from '../content/Content.module.css';
import Task from './taks/Task';

const Content = (props) => {

    let newTopic = props.topic.map((e, id) => {
        return (
            <div key={id} className={classes.task}>
                <h2 className={classes.task__name}>{id} {e}</h2>
                <Task/>
                <button className={classes.task__button} onClick={() => props.setTopic(props.topic.filter((elem, index) => id !== index ? elem : console.log('test')))}>Delete</button>
            </div>
        )
       
    })
    return (
        <div className={classes.container}>
            {newTopic}
        </div>
    )
}


export default Content;