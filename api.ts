import { ITask } from './types/type';
import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    let todos = await axios.get(`${baseUrl}/tasks`);
    //console.log(todos, 'api');
    return todos.data as any;
  } catch (error) {
    return error as any;
  }
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const newTodo = await axios.post(`${baseUrl}/tasks`, todo);
  return newTodo as any;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  });
};
