import axios from "axios";
import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const showToastMessage = () => {
    toast.info("Updated !", {
      position: toast.POSITION.TOP_RIGHT,
      
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, { name, email })
      .then((res) => {
        console.log(res);
        showToastMessage();
        
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update student</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-success"> Submit</button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
