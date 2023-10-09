import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edittask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fettask();
  }, []);

  const fettask= async () => {
    await axios.get('http://localhost:8000/api/tasks/'+id).then(({ data }) => {
      setTitle(data.title);
      setDescription(data.description);
      setCompleted(data.completed);
    });
  }
  

  const updatetask = async (e) => {
    e.preventDefault();

    const formData= new FormData();
    formData.append('_method', 'PATCH');
    formData.append('title', title);
    formData.append('description', description);
    formData.append('completed', completed ? 1 : 0);

    await axios.post('http://localhost:8000/api/tasks/'+id, formData).then(({ data }) => {
    console.log(data.message);
    navigate('/');
    }).catch((error) => {
    console.error('Error fetching data: ', error);
    });
    };

  
  

  return (
    <div className="card
    col-md-9 offset-md-1 
    ">
        <div className="card-header">
            <h2 >Edit Task</h2>
        </div>
      <div className="card-body">
        
        <form onSubmit={updatetask}>
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
              onChange={(e) => setCompleted(e.target.checked)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edittask;
