import React, { useState, useEffect } from 'react';
import './Income.css';
import './toogle.css';

function IncomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const toggleSidebar = () => {
    // Fungsi untuk membuka/menutup sidebar
  };

  const openModal = () => {
    // Fungsi untuk membuka modal
    setModalOpen(true);
  };

  const closeModal = () => {
    // Fungsi untuk menutup modal
    setModalOpen(false);
  };

  const addRow = () => {
    // Implementasi penambahan data di sini
    // Pastikan untuk mengonversi jumlah menjadi angka sebelum menyimpannya
    // dan menutup modal setelah berhasil menambahkan data
    closeModal();
  };

  const editRow = () => {
    // Implementasi penyuntingan data di sini
  };

  const closeEditModal = () => {
    // Implementasi penutupan modal penyuntingan
  };

  const deleteRow = () => {
    // Implementasi penghapusan data di sini
  };

  useEffect(() => {
    // Fetch data dari mock API saat komponen dimuat
    fetch('https://65364fc0c620ba9358ed4c20.mockapi.io/db/:endpoint') // Ganti URL sesuai dengan mock API Anda
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Mengelola kesalahan (error)
      });
  }, []);

  return (
    <div>
      <h1>Income</h1>
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Pilih Rekening</th>
            <th>Jumlah</th>
            <th>Kategori</th>
            <th>Keterangan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.tanggal}</td>
                <td>{item.rekening}</td>
                <td>{item.jumlah}</td>
                <td>{item.kategori}</td>
                <td>{item.keterangan}</td>
                <td>
                  <button onClick={() => editRow(index)}>Edit</button>
                  <button onClick={() => deleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="action-btn">
        <button onClick={openModal}>Tambah Data</button>
      </div>

      <div id="dataModal" className="modal">
        {/* Modal untuk menambah data */}
      </div>

      <div id="editModal" className="modal">
        {/* Modal untuk menyunting data */}
      </div>
    </div>
  );
}

export default IncomePage;
