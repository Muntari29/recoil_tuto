import styled from '@emotion/styled';
// import { useTasks } from '../contexts/TaskProvider';
import Task from './Task';
import {useRecoilState, useRecoilValue} from 'recoil';
import taskState from '../gs';

export interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

const TaskList = (props: any) => {
  // const { tasks } = useTasks();
  const todoList: ITask[] = useRecoilValue(taskState);
  const setTodoList = useRecoilState(taskState);

  console.log('todolist', todoList);
  console.log('setTodo', setTodoList, typeof setTodoList);

  return (
    <UnorderedList>
      {todoList.map((item) => (
        <Task key={item.id} id={item.id} content={item.content} completed={item.completed} />
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

export default TaskList;
