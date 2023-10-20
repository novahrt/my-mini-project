<>
  <meta charSet="utf-8" />
  <title>Calendar</title>
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Google Font Link for Icons */}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Import Google font - Poppins */\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: 'Poppins', sans-serif;\n        }\n        body {\n            display: flex;\n            align-items: center;\n            padding: 0 10px;\n            justify-content: center;\n            min-height: 100vh;\n            background: #262931;\n        }\n        .wrapper {\n            width: 100%;\n            max-width: 450px;\n            background: #fff;\n            border-radius: 10px;\n            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);\n        }\n        .wrapper header {\n            display: flex;\n            align-items: center;\n            padding: 25px 30px 10px;\n            justify-content: space-between;\n        }\n        header .icons {\n            display: flex;\n        }\n        header .icons span {\n            height: 38px;\n            width: 38px;\n            margin: 0 1px;\n            cursor: pointer;\n            color: #878787;\n            text-align: center;\n            line-height: 38px;\n            font-size: 1.9rem;\n            user-select: none;\n            border-radius: 50%;\n        }\n        .icons span:last-child {\n            margin-right: -10px;\n        }\n        header .icons span:hover {\n            background: #f2f2f2;\n        }\n        header .current-date {\n            font-size: 1.45rem;\n            font-weight: 500;\n        }\n        .calendar {\n            padding: 20px;\n        }\n        .calendar ul {\n            display: flex;\n            flex-wrap: wrap;\n            list-style: none;\n            text-align: center;\n        }\n        .calendar .days {\n            margin-bottom: 20px;\n        }\n        .calendar li {\n            color: black;\n            width: calc(100% / 7);\n            font-size: 1.07rem;\n            cursor: pointer;\n        }\n        .calendar .weeks li {\n            font-weight: 500;\n            cursor: default;\n        }\n        .calendar .days li {\n            z-index: 1;\n            position: relative;\n            margin-top: 30px;\n        }\n        .days li.inactive {\n            color: #aaa;\n        }\n        .days li.active {\n            color: #fff;\n        }\n        .days li::before {\n            position: absolute;\n            content: \"\";\n            left: 50%;\n            top: 50%;\n            height: 40px;\n            width: 40px;\n            z-index: -1;\n            border-radius: 50%;\n            transform: translate(-50%, -50%);\n        }\n        .days li.active::before {\n            background: black;\n        }\n        .days li:not(.active):hover::before {\n            background: #f2f2f2;\n        }\n        .dashboard-button {\n            text-align: center;\n            padding: 20px;\n        }\n        .dashboard-button button {\n            background-color: #007BFF;\n            color: #fff;\n            padding: 10px 20px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            margin-top: 20px;\n        }\n        .dashboard-button button:hover {\n            background-color: #0056b3;\n        }\n        .popup {\n            display: none;\n            background: rgba(0, 0, 0, 0.7);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            align-items: center;\n            justify-content: center;\n        }\n        .popup-content {\n            background: #fff;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n            max-width: 80%;\n        }\n    "
    }}
  />
  <div className="wrapper">
    <header>
      <p className="current-date" />
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
      <ul className="days" />
    </div>
    <div className="dashboard-button">
      <button id="gotoDashboard">Kembali ke Dashboard</button>
    </div>
  </div>
  <div className="popup" id="popup">
    <div className="popup-content" id="popupContent">
      {/* Pop-up content goes here */}
    </div>
  </div>
</>

export default CalendarApp;