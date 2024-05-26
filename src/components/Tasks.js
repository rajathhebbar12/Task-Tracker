import Task from './Task'// const Tasks=(props)=>{
    
//     return(
//         <>
//         {props.tasks.map(task =>
//              (<h3 key={task.id}>{task.text}</h3>
//              ))}
//         </>
//     )
//     }
const Tasks = ({tasks,onDelete,Toggle}) => {
    return (
        <>
            {tasks.map((task,index) => (
                <Task key={index} task={task} onDelete={onDelete} AToggle={Toggle}/>
            ))}
        </>
    );
}
export default Tasks