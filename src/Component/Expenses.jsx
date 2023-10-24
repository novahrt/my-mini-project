import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Expenses.css';
import './toogle.css';

function ExpensesPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]); // State untuk menyimpan data dari API
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

  // Mengambil data awal saat komponen dimuat
  useEffect(() => {
    fetchExpensesData();
  }, []);

  const fetchExpensesData = () => {
    // Mengambil data dari API
    axios
      .get('https://65364fc0c620ba9358ed4c20.mockapi.io/db/:endpoint')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Mengelola kesalahan (error)
      });
  };

  return (
    <div>
      <h1>Expenses</h1>
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
                {/* Tampilkan data dari API di sini */}
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

export default ExpensesPage;
