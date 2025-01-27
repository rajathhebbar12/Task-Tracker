import {FaTimes} from 'react-icons/fa'
const Task=({task,onDelete,AToggle})=>{
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>AToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task