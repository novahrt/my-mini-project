import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const togglePasswordVisibility = (input) => {
    // Implement your password visibility toggle logic here
  };

  const validateForm = () => {
    // Implement your form validation logic here
  };

  return (
    <div className="registration-form">
      <h2>Registrasi</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="error" id="name-error">
            {nameError}
          </div>
        </div>
        {/* Repeat similar structure for other form fields */}
        <button type="button" onClick={validateForm}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;