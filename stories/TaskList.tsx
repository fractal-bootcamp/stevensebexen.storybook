import { useState } from 'react';

import { Task, TaskProps } from './Task';

interface TaskListProps {
  tasks?: Array<TaskProps>
  width?: number
}

function sortTaskList(a: TaskProps, b: TaskProps) {
  if (a.isCompleted && !b.isCompleted) {
    return -1;
  }
  else if (!a.isCompleted && b.isCompleted) {
    return 1;
  }
  else {
    return 0;
  }
}

export function TaskList(props: TaskListProps) {

  const [taskList, setTaskList] = useState<TaskProps[]>(props.tasks ? props.tasks.sort(sortTaskList) : []);

  return (
    <div className="flex flex-col gap-[16px]">
      {taskList.map((task, index) => <Task name={task.name} description={task.description} isCompleted={task.isCompleted} width={props.width || 300}
      onClick={() => {
        const newTaskList = [...taskList];
        newTaskList[index].isCompleted = !newTaskList[index].isCompleted;
        newTaskList.sort(sortTaskList);
        setTaskList(newTaskList);
      }}
      />)}
    </div>
  );
}