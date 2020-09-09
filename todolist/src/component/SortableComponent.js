import React, {useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Task from './Task'

const SortableItem = SortableElement(({value}) => <Task task={value} key={value.id}/>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={value} />
      ))}
    </ul>
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
