// App.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const   Notification = () => {
  const showToast = () => {
    toast("This is a basic toast notification!");
  };

  const showSuccessToast = () => {
    toast.success("Success! Your action was completed.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const showErrorToast = () => {
    toast.error("Oops! Something went wrong.", {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const showWarningToast = () => {
    toast.warn("Warning! Check this out.", {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Toastify Example</h1>
      <button onClick={showToast}>Show Basic Toast</button><br/>
      <button onClick={showSuccessToast}>Show Success Toast</button><br/>
      <button onClick={showErrorToast}>Show Error Toast</button><br/>
      <button onClick={showWarningToast}>Show Warning Toast</button><br/>
      <ToastContainer />
    </div>
  );
};

export default Notification;
