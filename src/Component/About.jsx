import React from 'react';
import './Calculator.css';

function About() {
  return (
    <div>
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

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
          <li>
            <a href="Income.html">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span>Income</span>
            </a>
          </li>
          <li>
            <a href="Expenses.html">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <span>Expenses</span>
            </a>
          </li>
          <li>
            <a href="Calendar.html">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="Chatbot.html">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <span>Financial Planner</span>
            </a>
          </li>
          <li>
            <a href="Calculator.html">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <span>Calculator</span>
            </a>
          </li>
          <li>
            <a href="About.html">
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i className="fa fa-power-off" aria-hidden="true"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="card-container">
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
          <div className="right">
            <div className="right-container">
              <form action="">
                <h2 className="lg-view">Hubungi Kami</h2>
                <h2 className="sm-view">Hubungi Kami</h2>
                <input type="text" placeholder="Nama" />
                <input type="email" placeholder="Alamat Email" />
                <input type="text" placeholder="Perusahaan" autoComplete="off" />
                <input type="phone" placeholder="Telepone" autoComplete="off" />
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
  const sidebar = document.getElementById('sidebar');
  const wrapper = document.querySelector('.wrapper');
  const hamburger = document.querySelector('.hamburger');

  sidebar.classList.toggle('active-sidebar');
  wrapper.classList.toggle('active-sidebar');
  hamburger.classList.toggle('active-sidebar');
}

export default About;
