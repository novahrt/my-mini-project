import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const showPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <div className={`hamburger ${sidebarActive ? 'active-sidebar' : ''}`} onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`side-bar ${sidebarActive ? 'active-sidebar' : ''}`} id="sidebar">
        {/* Sidebar content */}
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