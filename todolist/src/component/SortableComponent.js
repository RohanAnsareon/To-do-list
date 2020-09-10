import React, {useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Task from './Task'

const SortableItem = SortableElement(({value}) => < Task task={value} key={value.id}/>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="task-list">
    {items.length ? 
    (<ul >
      {items.map((value, index) => (
        <SortableItem key={value.id} index={index} value={value} />
      ))}
    </ul>):
    (<div className='no-task'>There is not any task.</div>)}
    </div>
  );
});

const SortableComponent  = () => {

    const {tasks, setTasks} = useContext(TaskListContext);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setTasks(arrayMove(tasks, oldIndex, newIndex));
    };

    return (
        <SortableList items={tasks} onSortEnd={onSortEnd} />
    )
}


export default SortableComponent;
