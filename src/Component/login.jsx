import React, { useState } from 'react';

function LoginForm() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [namaError, setNamaError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamaError('');
    setEmailError('');
    setPasswordError('');

    if (nama.trim() === '' || nama.length > 10 || !/^[A-Za-z]*$/.test(nama)) {
      setNamaError('Nama tidak valid.');
    }

    if (!email.includes('@')) {
      setEmailError('Format Email tidak valid');
    }

    if (password.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      setPasswordError('Password harus memiliki 8 karakter berupa huruf dan angka.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="nama">Nama</label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <span id="nama-error" className="error">
            {namaError}
          </span>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span id="email-error" className="error">
            {emailError}
          </span>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`password-toggle far ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
              id="password-toggle"
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <span id="password-error" className="error">
            {passwordError}
          </span>
        </div>
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
      <br />
      <div className="sign-up-link">
        Belum memiliki akun? <a href="register.html">Daftar Sekarang</a>
      </div>
    </div>
  );
}

export default LoginForm;