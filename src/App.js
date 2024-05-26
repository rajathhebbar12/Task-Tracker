// import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState,useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
function App() {
  // const name='Brad';
  // const x=true;
  const [showAddTask,setShowAddTask]=useState(false)
  const [task,setTask]=useState([])

  useEffect(()=>{
    const getTasks=async()=>{
      const tasksFromServer=await fetchTasks()
      setTask(tasksFromServer)
    }

    getTasks()
  },[])

  const fetchTasks=async()=>{
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json()
    return data
  }

  const fetchTask=async(id)=>{
    const res=await fetch(`http://localhost:5000/tasks/${id}`)
    const data=await res.json()
    return data
  }

const addTask=async(tasks)=>{
  // const id=Math.floor(Math.random()*10000)+1
  // const newTask={id,...tasks}
  // setTask([...task,newTask])
  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    header:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(tasks)
  })
const data= await res.json()
setTask([...task,data])
}

const deleteTask=async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTask(task.filter((task)=>task.id!==id))
}
const toggleReminder=async(id)=>{
  const taskToToggle=await  fetchTask(id)
  const updateTask={...taskToToggle,reminder:!taskToToggle.reminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
  method:'PUT',
  headers:{
    'Content-type':'application/json'
  },
  body:JSON.stringify(updateTask)
})
  const data=await res.json()
  setTask(task.map((task)=>task.id===id ? {...task,reminder:data.reminder} : task))
}
  return (
    <Router>
    <div className="container">
    {/* <h1>hello from react</h1> */}
    {/* <h2>Hello {name}</h2>
    <h2>{1+1}</h2>
    <h2>{x?'Yes' :'No'}</h2>  */}
    <Header /*title='Hello'title={1}*/ onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    
    <Routes>
    <Route path='/' exact element={
    
      <>
      {showAddTask && <AddTask onAdd={addTask}/>}
    {task.length>0 ? (<Tasks tasks={task} onDelete={deleteTask}  Toggle={toggleReminder}/>) : ('No Task to show')}
      </>
    }/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    
    <Footer/>
    </div>
    </Router>
  );





}
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
