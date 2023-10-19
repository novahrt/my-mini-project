import React from 'react';
import './Login.css'; // Impor file CSS yang sesuai

function Login() {
  return (
    <div className="login-container">
      <h1>Masuk</h1>
      <form>
        <div className="input-container">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" placeholder="Masukkan Nama" />
        </div>
        <div className="input-container">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Masukkan Email" />
        </div>
        <div className="input-container">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Masukkan Password" />
        </div>
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
}

export default Login;
