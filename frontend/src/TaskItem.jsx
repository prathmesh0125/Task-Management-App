import React from "react";
import axios from "axios";
import { FaCheck, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const updateStatus = (newStatus) => {
    axios
      .put(`http://127.0.0.1:8000/api/tasks/${task.id}`, { status: newStatus })
      .then((response) => updateTask(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${task.id}`)
      .then(() => deleteTask(task.id))
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gray-200 mt-2 rounded-lg shadow-lg p-6 space-y-4 ">
      <div className="grid gap-5">
        <div className="rounded-lg  ">
          <div className="mb-4 flex justify-start flex-col items-start">
            <h2 className="text-xl font-semibold ">
              Title : <span className="ml-20 ">{task.title} </span>
            </h2>
            <h3 className="text-lg font-semibold">
              description :<span className="ml-[35px]">{task.description}</span>
            </h3>
            <h3 className="text-xl font-semibold text-black">
              Status : <span className=" ml-16 text-xl">{task.status} </span>
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-white bg-slate-700"><span className="px-7"> Update Task</span></div>
            <div className="flex items-center gap-4 ">
              <button
                className="text-white hover:text-gray-700 p-2 bg-yellow-600"
                onClick={() => updateStatus("in_progress")}
              >
                <p>In Progress</p>
              </button>
              <button
                className="text-white  p-2 rounded bg-green-600"
                onClick={() => updateStatus("done")}
              >
                <p className=""> Done</p>
              </button>
              <button
                className="text-white p-2 rounded bg-red-600"
                onClick={handleDelete}
              >
                {/* <FaTrash className="w-4 h-4" /> */}
                Delete task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
