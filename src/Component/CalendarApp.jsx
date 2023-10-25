import React, { useState } from 'react';
import './Calendar.css';
import './toogle.css';

function Calendar() {
  // State untuk mengelola tampilan sidebar
  const [sidebarActive, setSidebarActive] = useState(false);

  // State untuk mengelola tampilan popup
  const [popupContent, setPopupContent] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  // Fungsi untuk mengubah status sidebar
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  // Fungsi untuk menampilkan pop-up dengan konten tertentu
  const showPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  // Fungsi untuk menutup pop-up
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      {/* Tombol hamburger untuk membuka/menutup sidebar */}
      <div className={`hamburger ${sidebarActive ? 'active-sidebar' : ''}`} onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`side-bar ${sidebarActive ? 'active-sidebar' : ''}`} id="sidebar">
        {/* Konten sidebar */}
      </div>

      <div className="wrapper">
        <header>
          <p className="current-date"></p>
          <div className="icons">
            <span id="prev" className="material-symbols-rounded">
              chevron_left
            </span>
            <span id="next" className="material-symbols-rounded">
              chevron_right
            </span>
          </div>
        </header>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days" id="calendar-days">
            {/* Isi data kalender di sini */}
          </ul>
        </div>
      </div>

      {popupVisible && (
        <div className="popup" id="popup" onClick={closePopup}>
          <div className="popup-content" id="popupContent">
            {/* Isi konten pop-up di sini */}
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
