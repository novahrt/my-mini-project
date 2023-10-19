import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const togglePasswordVisibility = (input, setInputType) => {
    setInputType(input.type === 'password' ? 'text' : 'password');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (name.trim() === '') {
      setNameError('Name is required.');
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError('Name should only contain letters.');
    } else if (name.length > 10) {
      setNameError('Name should be a maximum of 10 characters.');
    }

    if (!email.includes('@')) {
      setEmailError('Invalid email format.');
    }

    if (password.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      setPasswordError('Password must be at least 8 characters and contain letters and numbers.');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Password confirmation does not match.');
    }
  };

  return (
    <div className="registration-form">
      <h2>Registrasi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error" id="name-error">
            {nameError}
          </div>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error" id="email-error">
            {emailError}
          </div>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={password === 'password' ? 'text' : 'password'}
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className="password-toggle far fa-eye-slash"
              id="password-toggle"
              onClick={() => togglePasswordVisibility(password, setPassword)}
            ></i>
          </div>
          <div className="error" id="password-error">
            {passwordError}
          </div>
        </div>
        <div className="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={confirmPassword === 'password' ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i
              className="password-toggle far fa-eye-slash"
              id="confirmPassword-toggle"
              onClick={() =>
                togglePasswordVisibility(confirmPassword, setConfirmPassword)
              }
            ></i>
          </div>
          <div className="error" id="confirmPassword-error">
            {confirmPasswordError}
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;