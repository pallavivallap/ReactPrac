import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DOB from "./DOB";
import Address from "./Address";
import Education1 from "./Education1";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const App = () => {
  const [user, setUser] = useState({
      firstname : "",
      middlename : "",
      lastname : "",
      dob: {
        day: "",
        month: "",
        year: ""
      },
      address: {
        street1: "",
        street2: "",
        city: "",
        state: "",
        pincode: "",
        email: "",
        phone: ""
      }, 
      degree: {
        degree: "",
        btech: "",
        bsc: ""
      }
    });


    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value
      }));
    };
    
    const handleDobChange = (name, value) => {
      setUser((prevUser) => ({
        ...prevUser,
        dob: {
          ...prevUser.dob,
          [name]: value
        }
      }));
    };
    
    const handleAddressChange = (name, value) => {
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name]: value
        }
      }));
    };
    
    const handleEducChange = (name, value) => {
      setUser((prevUser) => ({
        ...prevUser,
        degree: {
          ...prevUser.degree,
          [name]: value
        }
      }));
    };
    

    const handleSubmit = () => {
      setShowModal(true); 
    };
    


  return (
    <div className="d-flex justify-content-center bg">
      <div className="d-flex flex-column form">
        <h1>Application</h1>
        <p>Please complete the form below.</p>
        <hr />


        <div>
        <h6>Full Name</h6>
        </div>
        
        <div className="d-flex flex-row">

          <div className="me-3 flex-grow-1">
            <input className="inputbox w-100" type="text" name="firstname" value={user.firstname} onChange={handleChange} required/>
            <p className="label">First Name</p>
          </div>

          <div className="me-3 flex-grow-1">
            <input className="inputbox w-100" name="middlename" value={user.middlename} onChange={handleChange} type="text"/>
            <p className="label">Middle Name</p>
          </div>

          <div className="me-3 flex-grow-1">
            <input className="inputbox w-100" name="lastname" value={user.lastname} onChange={handleChange} type="text" required/>
            <p className="label">Last Name</p>
          </div>

        </div> 
        <DOB dob={user.dob} handleDobChange={handleDobChange}/>
        <br/>
        <Address address={user.address} handleAddressChange={handleAddressChange}/>
        <br/>
        <Education1 degree={user.degree} handleEducChange={handleEducChange}/>

        <br/>

        <div className="d-flex justify-content-center">
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>

      </div>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Form Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>First Name: {user.firstname}</p>
          <p>Middle Name: {user.middlename}</p>
          <p>Last Name: {user.lastname}</p>
          <p>Date of Birth: {user.dob.day}/{user.dob.month}/{user.dob.year}</p>
          <p>Street Address 1: {user.address.street1}</p>
          <p>Street Address 2: {user.address.street2}</p>
          <p>City: {user.address.city}</p>
          <p>State: {user.address.state}</p>
          <p>Postal/Zip Code: {user.address.pincode}</p>
          <p>Email Address: {user.address.email}</p>
          <p>Phone Number: {user.address.phone}</p>
          <p>Degree: {user.degree.degree}</p>
          {user.degree.degree === "Bachelor of Technology" && (
            <p>Specialization: {user.degree.btech}</p>
          )}
          {user.degree.degree === "Bachelor of Science" && (
            <p>Specialization: {user.degree.bsc}</p>
          )}
                  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Done</Button>
        </Modal.Footer>
      </Modal>

    </div>

  )    
}

export default App;