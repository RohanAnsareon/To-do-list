import React,{createContext, useState, useEffect} from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => { 
 const initialState = JSON.parse
 (localStorage.getItem('tasks')) || []
 const [tasks, setTasks] = useState(initialState);

 useEffect(() => {
     localStorage.setItem('tasks', JSON.stringify(tasks));
 }, [tasks]);

 const addTask = (name) => {
    setTasks([...tasks, {name, id: uuid()}]);
 };
 const removeTask = (id) => {
     setTasks(tasks.filter(task => task.id !== id));
 };

 const clearList = () => {
     setTasks([]);
 };

    return(
        <TaskListContext.Provider value = {{tasks, setTasks, addTask, removeTask, clearList}}>
            {props.children}
        </TaskListContext.Provider>
    );
};
export default TaskListContextProvider;