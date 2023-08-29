"use client";

import React, { FormEventHandler, Suspense, useState } from 'react';
import Loading from './loading';
import { useRouter } from "next/navigation";
import { addTodo } from '../../../../api';
import { v4 as uuidv4 } from "uuid";

const CreateTodo = () => {
  const router = useRouter();
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await addTodo({
        id: uuidv4(),
        text: newTaskValue,
      });
      setNewTaskValue("");
      router.push('/todos')
    } catch (error) {
      alert(error)
    }
  }


  return (
    <Suspense fallback={<Loading />}>
      <div className="text-white mx-auto max-w-screen-sm py-4 px-5 mt-10">
          <div className='shadow-md border border-blue-100 p-10'>
          <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Type here'
              className='py-2 px-2 rounded-lg w-full text-black'
            />
            <button type='submit' className='mt-4 rounded-md bg-blue-500 px-2 py-1'>
              Submit
            </button>
          </div>
        </form>
          </div>
      </div>
    </Suspense>
  );
};

export default CreateTodo;
