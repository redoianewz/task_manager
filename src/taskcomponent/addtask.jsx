import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/tasks/', {
        title,
        description,
        completed: completed ? 1 : 0,
    
      });

      console.log('Task created:', response.data);
        navigate('/');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="card
    col-md-9 offset-md-1 
    ">
        <div className="card-header">
            <h2 >Create Task</h2>
        </div>
      <div className="card-body">
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Completed:</label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
              className="form-check-input"
            />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
