import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Logo Keuangan Ku" />
          <h1>Keuangan Ku</h1>
        </div>
      </div>
      <div className="container">
        <div className="left">
          <div className="text">
            <h1>Selamat datang di Keuangan Ku</h1>
            <p>Keuangan Ku adalah sebuah situs untuk mengatur keuangan Anda. Dapat mencatat pemasukkan dan pengeluaran, bukan hanya itu. Anda juga bisa menanyakan rencana finansial Anda dengan sistem AI kami. Segera bergabung dengan kami.</p>
          </div>
          <a className="button" href="login.html">Ayo Mulai</a>
        </div>
        <div className="right">
          <img className="image" src={require('./path/ke/gambar.png')} alt="Gambar Landing Page" />
        </div>
      </div>
      <div className="footer">
        Copyright 2023
      </div>
    </div>
  );
};

export default LandingPage;
