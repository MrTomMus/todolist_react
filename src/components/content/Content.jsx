import classes from '../content/Content.module.css';
import Task from './taks/Task';

const Content = (props) => {
    console.log(props)
    let newTopic = props.topics.map((e, id) => {
       
        return (
            <div key={id} className={classes.task}>
                <h2 className={classes.task__name}>{e.topicName}</h2>
                <Task tasks={e.tasks} setTopic={props.setTopic} />
                <button className={classes.task__button} onClick={() => props.setTopic(props.topics.filter((elem, index) => id !== index ? elem : console.log('test')))}>Delete</button>
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