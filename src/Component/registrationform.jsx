import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.password.length > 8) {
      newErrors.password = 'Password harus kurang dari 8 karakter';
    }

    if (!/^(?=.*[a-z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung huruf kecil dan alfanumerik';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password dan Konfirmasi Password harus cocok';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Formulir valid, lanjutkan proses pendaftaran
      console.log('Formulir valid:', formData);
    } else {
      // Formulir tidak valid, atur pesan kesalahan
      setErrors(newErrors);
    }
  };

  return (
    <div className="registration-form">
      <h2>Registrasi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <div className="error" id="firstName-error"></div>
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="error" id="lastName-error"></div>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error" id="email-error"></div>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>
        {/* Tambahkan tombol submit */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
