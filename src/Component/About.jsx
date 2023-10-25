import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      {/* Tombol hamburger untuk membuka/menutup sidebar */}
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

      {/* Sidebar */}
      <div className="side-bar" id="sidebar">
        <div className="user-p">
          <img src="logo.png" alt="Logo" />
          <h4>Keuangan KU</h4>
        </div>
        <ul>
          <li>
            <a href="Dashboard.html">
              <i className="fa fa-desktop" aria-hidden="true"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* Daftar menu lainnya */}
        </ul>
      </div>
      <div className="container">
        <div className="card-container">

          {/* Kartu Kiri (Informasi Tentang) */}
          <div className="left">
            <div className="left-container">
              <h2>Tentang Kami</h2>
              <p>Keuangan Ku adalah aplikasi untuk mengelola rencana keuangan dengan fitur tambahan yang lengkap dengan tambahan fitur chatbot.</p>
              <br />
              <p>Kami berharap fitur kami bisa membuat pengguna merasa senang dan nyaman dalam menggunakan aplikasi ini.</p>
              <br />
              <p>Silakan hubungi kami jika ada pertanyaan.</p>
            </div>
          </div>
          
          {/* Kartu Kanan (Formulir Kontak) */}
          <div className="right">
            <div className="right-container">
              <form action="">
                <h2 className="lg-view">Hubungi Kami</h2>
                <h2 className="sm-view">Hubungi Kami</h2>
                <input type="text" placeholder="Nama" />
                <input type="email" placeholder="Alamat Email" />
                <input type="text" placeholder="Perusahaan" autoComplete="off" />
                <input type="phone" placeholder="Telepon" autoComplete="off" />
                <textarea rows="10" placeholder="Pesan"></textarea>
                <button>Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function toggleSidebar() {
  // Mengubah tampilan sidebar ketika tombol hamburger diklik
  const sidebar = document.getElementById('sidebar');
  const wrapper = document.querySelector('.wrapper');
  const hamburger = document.querySelector('.hamburger');

  sidebar.classList.toggle('active-sidebar');
  wrapper.classList.toggle('active-sidebar');
  hamburger.classList.toggle('active-sidebar');
}

export default About;
