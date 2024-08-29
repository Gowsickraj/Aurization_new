// src/components/FormComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import { Table } from './Table';

export const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (eve) => {
    eve.preventDefault();

    axios
      .post('http://localhost:5000/api/method', formData)
      .then(res => {
        console.log('Data', res.data);
      })
      .catch(error => {
        console.error('Error sending.........', error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        // required
        />

        <label>Date Of Birth:</label>
        <input
          type="data"
          name="date"
          value={formData.date}
          onChange={handleChange}
        // required
        />
        
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

