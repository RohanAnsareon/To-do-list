import React,{useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const Task = ({task}) => {
    const {removeTask} = useContext(TaskListContext)

    return (
        <li className='list-item'>
            <span>{task.name}</span>
            <div>
                <button  
                    className='delete-btn'
                    onClick={()=>removeTask(task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>   
     );
};

export default Task;
