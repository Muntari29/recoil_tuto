import styled from '@emotion/styled';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Toggle from '../components/Toggle';
import { useTasks } from '../contexts/TaskProvider';
import taskState from '../gs';

interface Props {
  id: string;
  content: string;
  completed: boolean;
}

const Task = ({ id, content, completed, ...props }: Props) => {
  const { updateTask, removeTask } = useTasks();
  const [todoList, setTodoList] = useRecoilState(taskState);
  
  const updateTask2 = (id: string, status: boolean) => {
    const newList = todoList.map((todo) => todo.id === id ? {...todo, completed: status} : todo)
    setTodoList(newList)
  }

  const removeTask2 = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }


  return (
    <ListItem {...props}>
      <Toggle
        on={completed}
        onChange={(e) => updateTask2(id, e.target.checked)}
      />
      <Content completed={completed}>{content}</Content>
      <RemoveButton onClick={() => removeTask2(id)}>Remove</RemoveButton>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  list-style: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const Content = styled.span<{ completed: boolean }>`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  background-color: red;
  border: none;
  cursor: pointer;
`;

export default Task;
