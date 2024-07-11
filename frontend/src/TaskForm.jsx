import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tasks', { title, description, status: 'todo' })
            .then(response => {
                addTask(response.data);
                setTitle('');
                setDescription('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold">Add New Task</h2>
        <form className="space-y-4">
          <div className="space-y-1" onSubmit={handleSubmit}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input id="title" placeholder="Enter task title" className="w-full p-2 border rounded"  value={title}
                  onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="space-y-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" placeholder="Enter task description" className="w-full p-2 border rounded"      value={description}
                  onChange={e => setDescription(e.target.value)}
                  required />
          </div>
          
          <button type="submit" className="w-full bg-black text-white p-2 rounded " onClick={handleSubmit}>
            Add Task
          </button>
        </form>
      </div>
    );
};

export default TaskForm;

