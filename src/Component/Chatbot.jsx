import React, { useState } from 'react';
import './Chatbot.css';

function FinancialPlanner() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Fungsi untuk menambahkan pesan ke tampilan chat
  const addMessage = (message, userType) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { message, userType },
    ]);
  };

  // Fungsi-fungsi untuk menanggapi pertanyaan
  const respondToFinancialPlanning = () => {
    const financialPlanningSteps = [
      'Anda ingin tahu cara membuat rencana keuangan. Berikut adalah langkah-langkahnya:',
      '1. Tentukan tujuan keuangan anda',
      '2. Analisis dan kelola pengeluaran anda',
      '3. Pertimbangkan untuk mencari pendapatan tambahan, seperti freelance atau investasi',
      '4. Siapkan dana darurat',
      '5. Evaluasi dan kelola utang anda. Namun, lebih baik tidak memiliki utang.',
      '6. Mulailah untuk investasi',
      '7. Lindungi aset anda dengan asuransi',
      '8. Buatlah perencanaan pensiun',
      '9. Evaluasi rencana keuangan yang sudah anda buat setidaknya setahun sekali',
      '10. Konsultasikan dengan Ahli Keuangan',
    ];

    addMessage('Bot: ' + financialPlanningSteps.join('\n'), 'bot');
  };

  const respondToInvesting = () => {
    const investingSteps = [
      'Anda ingin tahu cara berinvestasi. Berikut adalah beberapa langkah awal:',
      '1. Tentukan tujuan investasi',
      '2. Buatlah perencanaan keuangan sebelum berinvestasi',
      '3. Memahami konsep dasar investasi',
      '4. Tentukan resiko dari investasi yang anda pilih',
      '5. Mulai berinvestasi',
      '6. Lakukan investasi secara konsisten dan disiplin',
    ];

    addMessage('Bot: ' + investingSteps.join('\n'), 'bot');
  };

  const respondToUnavailable = () => {
    addMessage(
      'Bot: Maaf, pertanyaan Anda tidak tersedia atau Anda hanya bisa menanyakan masalah keuangan.',
      'bot'
    );
  };

  const handleSendButtonClick = () => {
    const userMessage = userInput.trim().toLowerCase();

    // Menambahkan pesan pengguna ke tampilan chat
    addMessage('User: ' + userMessage, 'user');

    // Hanya tanggapi pertanyaan seputar keuangan
    if (userMessage.includes('keuangan')) {
      if (userMessage.includes('rencana keuangan')) {
        respondToFinancialPlanning();
      } else if (userMessage.includes('investasi')) {
        respondToInvesting();
      } else {
        respondToUnavailable();
      }
    } else if (userMessage.includes('investasi')) {
      respondToInvesting();
    } else {
      respondToUnavailable();
    }

    // Membersihkan input pengguna setelah mengirim
    setUserInput('');
  };

  return (
    <div>
      {/* Konten Anda */}
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className="side-bar" id="sidebar">
        {/* ... Konten sidebar Anda ... */}
      </div>
      <div className="chat-container" id="chat">
        {/* Tampilan chat */}
        <div className="bot-greeting">
          Halo, saya chatbot. Saya akan membantu Anda terkait masalah keuangan Anda. Tanyakan saja pada saya!
        </div>
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={message.userType === 'user' ? 'user-text' : 'bot-text'}
          >
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="user-input"
          type="text"
          value={userInput}
          placeholder="Ketik pesan Anda di sini..."
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="send-button" onClick={handleSendButtonClick}>
          Kirim
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
