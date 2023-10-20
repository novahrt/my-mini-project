import React from 'react';

function AboutUs() {
  const email = 'hertantyuyee@gmail.com';

  function returnToDashboard() {
    // Gantilah URL tujuan sesuai dengan halaman dashboard Anda
    window.location.href = 'dashboard.html';
  }

  return (
    <div>
      <header style={{ backgroundColor: '#23242b', color: '#fff', textAlign: 'center', padding: '50px 0' }}>
        <h1 style={{ fontSize: '36px' }}>About Us</h1>
      </header>

      <div className="container" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', maxWidth: '100%', margin: '0 auto', padding: '20px', flexGrow: 1 }}>
        <div className="creator-info" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <img src="logokramat.png" alt="Web Creator" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
          <p style={{ fontSize: '24px', lineHeight: '1.6' }}>
            Website ini dibuat oleh Nova Hertanti. Mohon maaf jika masih banyak kekurangan dalam website ini. Jika kalian ingin memberikan saran atau feedback, <a href={`mailto:${email}`}>hubungi kami</a>.
          </p>
        </div>
        <button className="return-button" style={{ backgroundColor: '#23242b', color: '#fff', border: 'none', borderRadius: '5px', padding: '20px 30px', cursor: 'pointer', marginTop: '20px' }} onClick={returnToDashboard}>Kembali ke Dashboard</button>
      </div>
      <div className="footer" style={{ backgroundColor: '#23242b', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
        <p style={{ fontSize: '18px' }}>Hubungi kami: <a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </div>
  );
}

export default AboutUs;