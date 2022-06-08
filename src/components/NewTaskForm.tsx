import { FormEvent, useState } from 'react';
// import { useTasks } from '../contexts/TaskProvider';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import taskState from '../gs';
// import { ITask } from './TaskList';

let id = 0;

const NewTaskForm = (props: any) => {
  const [task, setTask] = useState('');
  // const { addTask } = useTasks();
  const setTodoList = useSetRecoilState(taskState);

  const addTask2 = () => {
    const newTask = {
      id: String(++id),
      content: task,
      completed: false
    }
    setTodoList((prev) => [...prev, newTask])
    setTask('')
  }


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask2()
    setTask('');
  };
  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <SubmitBtn>Add</SubmitBtn>
    </Form>
  );
};

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`;

export default NewTaskForm;
