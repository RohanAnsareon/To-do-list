import React from 'react';
// import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';
import TaskListContextProvider  from './context/TaskListContext';
import Header from './component/Header';
import './App.css';
import SortableComponent from './component/SortableComponent';


const App = () => {
  return (
    <TaskListContextProvider>
    <div className="container">
      <div className="wrapper">
        <Header/>
        <div className="main-content"> 
          <TaskForm/>
          <SortableComponent />
        </div>
      </div>
    </div>
    </TaskListContextProvider>

  );
};

export default App;
