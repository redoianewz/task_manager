import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


    function AddUser() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        const formData=new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);

        axios.post('http:///localhost:8000/api/user/',formData)
        .then(({data}) => {
            navigate('/user');

        }).catch(({response}) => {
            console.log(response);
        });
    }

    return (
    <div>
        <h1>Add User</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    </div>
    )
}

export default AddUser