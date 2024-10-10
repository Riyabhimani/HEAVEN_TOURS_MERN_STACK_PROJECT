import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Style/ViewDetails.css';

export function ViewDetails() {
  const location = useLocation();
  const { tour } = location.state;
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    gender: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
    duration: '',
    destination: ''
  });
  const [submittedNames, setSubmittedNames] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [passwordForUpdate, setPasswordForUpdate] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('registeredClients');
    if (savedData) {
      setSubmittedNames(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('registeredClients', JSON.stringify(submittedNames));
  }, [submittedNames]);

  if (!tour) {
    return <p>Tour not found!</p>;
  }

  const validate = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) errors.mobile = 'Valid 10-digit Mobile Number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid Email Address is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.duration) errors.duration = 'Tour Duration is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const dataToSubmit = {
      ...formData,
      destination: tour.Destination
    };

    if (editingIndex !== null) {
      if (passwordForUpdate !== submittedNames[editingIndex].password) {
        Swal.fire('Oops', 'Incorrect password for update', 'error');
        return;
      }
      const updatedNames = submittedNames.map((item, index) =>
        index === editingIndex ? formData : item
      );
      setSubmittedNames(updatedNames);
      setEditingIndex(null);
      Swal.fire('Updated', 'Data updated successfully!', 'success');
    } else {
      setSubmittedNames([...submittedNames, dataToSubmit]);
      Swal.fire('Success', 'Form submitted successfully!', 'success');
    }

    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      gender: '',
      city: '',
      state: '',
      password: '',
      confirmPassword: '',
      duration: '',
      destination: ''
    });
    setPasswordForUpdate('');
    setErrors({});
    setShowForm(false);
  };

  const handleUpdate = (index) => {
    const existingEntry = submittedNames[index];
    Swal.fire({
      title: 'Confirm Update',
      html: `
        <label>Email:</label><input id="email" class="swal2-input" type="email" placeholder="Email">
        <label>Password:</label><input id="password" class="swal2-input" type="password" placeholder="Password">
      `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email === existingEntry.email && password === existingEntry.password) {
          setFormData(existingEntry);
          setEditingIndex(index);
          setShowForm(true);
          return true;
        } else {
          Swal.showValidationMessage('Email or Password is incorrect');
          return false;
        }
      }
    });
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will permanently delete the entry!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedNames = submittedNames.filter((_, i) => i !== index);
        setSubmittedNames(updatedNames);
        localStorage.setItem('registeredClients', JSON.stringify(updatedNames));
        Swal.fire('Deleted!', 'Your entry has been deleted.', 'success');
      }
    });
  };

  const handleReadMore = (index) => {
    const filteredClients = submittedNames.filter(item => item.destination === tour.Destination);
    const entry = filteredClients[index]; // Get the correct client from the filtered list
  
    Swal.fire({
      title: 'Client Details',
      html: `
        <p><strong>Name:</strong> ${entry.fullName}</p>
        <p><strong>Mobile:</strong> ${entry.mobile}</p>
        <p><strong>Email:</strong> ${entry.email}</p>
        <p><strong>Gender:</strong> ${entry.gender}</p>
        <p><strong>City:</strong> ${entry.city}</p>
        <p><strong>State:</strong> ${entry.state}</p>
        <p><strong>Duration:</strong> ${entry.duration}</p>
        <p><strong>Destination:</strong> ${entry.destination}</p>
      `,
      confirmButtonText: 'Close',
    });
  };
  

  return (
    <div className="container">
      <h2 className="destination-name">{tour.Destination}</h2>
      <p>{tour.Description}</p>
      <p>Starting Package: {tour.StartingPackage + "/-"}</p>
      <p>Highest Package: {tour.HighestPackage + "/-"}</p>
      <div className="image-gallery">
        <img src={tour.MoreImages1} alt={tour.Destination} className="tour-image" />
        <img src={tour.MoreImages2} alt={tour.Destination} className="tour-image" />
      </div>

      <button className="btn btn-success mt-3" onClick={() => setShowForm(true)}>
        Register Now
      </button>

      <div className="form-container">
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
              {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
              {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <label htmlFor="male" style={{ marginRight: "7px" }}>Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <label htmlFor="female" style={{ marginRight: "7px" }}>Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <label htmlFor="other" style={{ marginRight: "7px" }}>Other</label>
              </div>
              {errors.gender && <p className="text-danger">{errors.gender}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
              {errors.city && <p className="text-danger">{errors.city}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
              />
              {errors.state && <p className="text-danger">{errors.state}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="duration">Select Duration:</label>
              <select
                className="form-control"
                id="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                required
              >
                <option value="">Select Duration</option>
                <option value="3 days">3 Days</option>
                <option value="5 days">5 Days</option>
                <option value="7 days">7 Days</option>
              </select>
              {errors.duration && <p className="text-danger">{errors.duration}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Create Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
              {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
            </div>
            {editingIndex !== null && (
              <div className="form-group">
                <label htmlFor="passwordForUpdate">Enter Your Password to Update:</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordForUpdate"
                  value={passwordForUpdate}
                  onChange={(e) => setPasswordForUpdate(e.target.value)}
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary mt-3">
              {editingIndex !== null ? 'Update' : 'Submit'}
            </button>
          </form>
        )}
      </div>

      <div className="mt-4">
        <h4>Registered Clients for {tour.Destination}:</h4>
        {submittedNames.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Read More</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {submittedNames.filter(item => item.destination === tour.Destination).map((item, index) => (
                <tr key={index}>
                  <td>{item.fullName}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleReadMore(index)}
                    >
                      Read More
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No registrations yet.</p>
        )}
      </div>

      <Link to="/" className="btn btn-secondary mt-3">
        Back to Tours
      </Link>
    </div>
  );
}