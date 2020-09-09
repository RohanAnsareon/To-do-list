import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const {tasks}=useContext(TaskListContext);

    return (
        <div className="task-list">
            {tasks.length ? (
                <ul> 
                    {tasks.map((task)=>{
                    return <Task task={task} key = {task.id}/>;  
                    })}
                </ul>
            ) : (
                <div className='no-task'>There is not any task.</div>
            )}    
        </div>
    );
};

export default TaskList
