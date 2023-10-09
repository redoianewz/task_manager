import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Listtask() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    await axios.get('http://localhost:8000/api/tasks/').then(({ data }) => {
      setTask(data);
    });
  };
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
    getTask();
  };

  return (
    <div className="container">
        <div className="card col-md-19">
        <div className="card-header">
      <h1>List of Tasks</h1>
        </div>
    <div className="card-body">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
                <td>
                    <Link to={`/edittask/${task.id}`} className="btn btn-primary">
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTask(task.id)}
                    >
                        Delete
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default Listtask;
