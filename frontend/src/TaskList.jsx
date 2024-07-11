import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks")
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4 md:p-6">
      <TaskForm addTask={addTask} />
      <div className="bg-white">
        <h1 className="text-2xl font-bold text-left sticky">Tasks :</h1>
        {loading ? (
          <div className="flex justify-center items-center h-[36rem]">
            <div className=""> loading...</div>
          </div>
        ) : (
          <ul className="overflow-y-scroll h-[36rem] scroll">
            <div className="mt-8">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
