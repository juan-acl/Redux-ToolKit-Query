import React from "react";
import { useGetTaskQuery, useDeleteTaskMutation, usePutTaskMutation} from '../api/apiSlice';

function TasksList () {

  const {data: tasks, isLoading, isError, error} = useGetTaskQuery();
  const  [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = usePutTaskMutation();


  {if(isLoading) return <div>Loading ...</div>}
  {if(isError) return <div>Error: {error.message}</div>}

  return (
    <>
      <ul>
        {tasks.map(task => (
          <li key={task.id} >
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <button 
            onClick={() => (
              deleteTask(task.id)  
            )} 
            >Delete</button>
            <input checked={task.completed} type='checkbox' id={task.id} 
            onChange={(e) => {
              updateTask({
                  ...task,
                  completed: e.target.checked
                })
            }} 
            />
            <label htmlFor={task.id} >Completed</label>
          </li>
        ))}
      </ul>
    </>
  )
}

export {TasksList}
