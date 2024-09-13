import './HooksContext.css'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Trainingcode() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [users, setUsers] = useState([]);

  const Notify = () => {
    toast.success("Datas added to tabls..", {
      autoClose: 2000,
      position: 'bottom-right',
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      progress: undefined,
      style: {
        backgroundColor: "whiteSmoke",
        textAlign: "center",
        color: "black",
        borderRadius: "50px",
      }
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((prevntUsers) => [...prevntUsers, { name, age }]);
    setName('');
    setAge('');
  };

  return (
    <div className='App'>
      <div className='main'>
        <div className='inner'>
          <div className='frountpage'>
            <span className='mar'><marquee behavior="alternate">Guru--Gowsick</marquee></span>
          </div>
          <div className='backpage'>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Name:</span>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} /></label>
              <br />
              <label>
                <span>Age:</span>
                <input type="number" placeholder='Enter your age' value={age} onChange={(e) => setAge(e.target.value)} /></label>
              <br /><br />
              <button onClick={Notify} type="submit" className='button'>Add to Table</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Trainingcode;



<div class="card">
  <div class="inner">
    <div class="front">
      <h4>Frount Page</h4>
    </div>
    <div class="back">
      <p>back page</p>
    </div>
  </div>
</div>