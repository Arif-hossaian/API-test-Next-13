import AddTask from '@/components/AddTask';
import React, { Suspense } from 'react';
import InitialLoading from './loading';
import { getAllTodos } from '../../../api';
import TodoLists from '@/components/TodoLists';

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <>
      <div className="mx-auto max-w-screen-xl py-4 px-5 mt-10">
        <h1 className="text-4xl text-center text-white">
          Todo application with Next JS 13
        </h1>
        <div>
          <AddTask />
        </div>
        <Suspense fallback={<InitialLoading />}>
          <TodoLists tasks={tasks} />
        </Suspense>
      </div>
    </>
  );
};

