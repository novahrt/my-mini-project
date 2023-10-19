import React from 'react';

function LandingPage() {
  return (
    <div>
      <head>
        <title>Keuangan Ku</title>
        <link rel="icon" href="logo.png" type="image" />
      </head>
      <body>
        <div className="container">
          <div className="left">
            <div className="text">
              <h1>Selamat datang di Keuangan Ku</h1>
              <p>Keuangan Ku adalah sebuah situs untuk mengatur keuangan Anda. Dapat mencatat pemasukkan dan pengeluaran, bukan hanya itu. Anda juga bisa menanyakan rencana finansial Anda dengan sistem AI kami. Segera bergabung dengan kami.</p>
            </div>
            <a className="button" href="login.html">Ayo Mulai</a>

            {/* Tambahkan tautan ke halaman login */}
            <a href="/login">Ke Halaman Login</a>
          </div>
          <div className="right">
            <img className="image" src="gambar.png" alt="Gambar Landing Page" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default LandingPage;
