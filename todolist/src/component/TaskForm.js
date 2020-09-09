import React, {useContext, useState} from 'react';
import { TaskListContext } from '../context/TaskListContext';


const TaskForm = () => {
    const {addTask, clearList} = useContext(TaskListContext)
    const handleChange = e => {
        setName(e.target.value);
        // console.log(name);
    };
    const handleSubmit = e => {
        e.preventDefault();
        addTask(name);
        setName('');
    };

    const [name, setName] = useState('')
    return (
            <form  className='task-form' onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={name}
                    type="text"
                    placeholder="Add task to your list"
                    required
                    className='task-input'
                />
                <div className='buttons'>
                    <button  type="submit" className="btn" >
                        Add task
                    </button>
                    <button onClick={clearList} type="submit" className="btn">
                        Clear
                    </button>
                </div>
            </form>
    );
};

export default TaskForm;
