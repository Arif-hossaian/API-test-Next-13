import React from 'react';

const TodoLists: React.FC<any> = ({ tasks }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {tasks?.map((task: any) => (
          <div
            className="px-4 py-2 border rounded-md shadow-gray-700 border-red-100 shadow-lg text-white"
            key={task.id}
          >
            <p className="mt-1">
              {' '}
              <span className="text-yellow-600">{task?.body}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoLists;
