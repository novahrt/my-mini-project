import React, { useState } from 'react';

const RegistrationForm = () => {
  // State untuk menyimpan data input dan pesan kesalahan
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Fungsi untuk mengatur visibilitas password
  const togglePasswordVisibility = (input) => {
    // Implementasikan logika toggle visibilitas password di sini
  };

  // Fungsi untuk validasi formulir
  const validateForm = () => {
    // Implementasikan logika validasi formulir di sini
  };

   // Render tampilan register
  return (
    <div className="registration-form">
      <h2>Registrasi</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
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
        {/* Ulangi struktur yang serupa untuk bidang formulir lainnya */}
        <button type="button" onClick={validateForm}>
          Daftar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
