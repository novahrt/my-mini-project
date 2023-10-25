import React from 'react';
import './index.css';

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Logo Keuangan Ku" />
          <h1>Keuangan Ku</h1>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="container">
        <div className="left">
          <div className="text">

            {/* Judul dan Deskripsi */}
            <h1>Selamat datang di Keuangan Ku</h1>
            <p>
              Keuangan Ku adalah sebuah situs untuk mengatur keuangan Anda. Dapat mencatat pemasukkan dan pengeluaran, bukan hanya itu. Anda juga bisa menanyakan rencana finansial Anda dengan sistem AI kami. Segera bergabung dengan kami.
            </p>
          </div>

          {/* Tombol Ayo Mulai */}
          <a className="button" href="login.html">Ayo Mulai</a>
        </div>

        <div className="right">
          {/* Gambar Landing Page */}
          <img className="image" src={require('./path/ke/gambar.png')} alt="Gambar Landing Page" />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        
        {/* Hak Cipta */}
        Copyright 2023
      </div>
    </div>
  );
};

export default LandingPage;
