import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Listtask from './taskcomponent/listtask';
import Addtask from './taskcomponent/addtask';
import Edittask from './taskcomponent/edittask';
import AddUser from './taskcomponent/AddUser';

function App() {
  return (
    <Router>
      <div className="container w-90"
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
          borderRadius: '5px',
          margin: 'auto',
          marginTop: '20px',
          height: '50px',
         
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand btn btn-outline-primary" href="#">
            <Link to="/" >task</Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <Link to="/addtask" >Add task</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline mx-auto 
            w-50 d-flex justify-content-center
            "> {/* Center-align the form */}
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            {/* login */}
            <Link className="btn btn-outline-primary ml-2" to="/adduser">
              <i className="fas fa-user-plus"></i> Login
            </Link>

            <Link className="btn btn-outline-primary ml-2" to="/adduser">
              <i className="fas fa-user-plus"></i> Sign up
            </Link>
          </div>
        </nav>
      </div>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Listtask />} />
          <Route path="/addtask" element={<Addtask />} />
          <Route path="/edittask/:id" element={<Edittask />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
