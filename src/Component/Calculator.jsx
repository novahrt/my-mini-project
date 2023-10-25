import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  // State untuk mengelola tampilan di layar kalkulator
  const [display, setDisplay] = useState('');

  // Fungsi untuk menangani klik tombol kalkulator
  const handleButtonClick = (value) => {
    if (value === 'C') {
      // Menghapus tampilan
      setDisplay('');
    } else if (value === '=') {
      // Menghitung hasil ekspresi
      try {
        const result = eval(display);
        setDisplay(result);
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      // Menambahkan nilai ke tampilan
      setDisplay(display + value);
    }
  };

  return (
    <div>
      <h1>Kalkulator</h1>
      <input
        type="text"
        name="display"
        style={{
          width: '370px',
          height: '70px',
          backgroundColor: '#4c555c',
          color: 'white',
        }}
        value={display}
        readOnly
      />
      <br />
      <div>
        <button className="btn" onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button className="btn" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button
          className="btn"
          onClick={() => handleButtonClick('+')}
          style={{ backgroundColor: '#cc5c11' }}
        >
          +
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="btn" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button
          className="btn"
          onClick={() => handleButtonClick('-')}
          style={{ backgroundColor: '#ba55d3' }}
        >
          -
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="btn" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button
          className="btn"
          onClick={() => handleButtonClick('*')}
          style={{ backgroundColor: '#7db1b2' }}
        >
          *
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button
          className="btn"
          onClick={() => handleButtonClick('C')}
          style={{ backgroundColor: '#cc0000' }}
        >
          C
        </button>
        <button className="btn" onClick={() => handleButtonClick('=')}>
          =
        </button>
        <button
          className="btn"
          onClick={() => handleButtonClick('/')}
          style={{ backgroundColor: '#1f80c9' }}
        >
          &#247;
        </button>
      </div>
    </div>
  );
}

export default Calculator;
