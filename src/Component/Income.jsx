import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

const formatAsRupiah = (amount) => {
  return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount);
};

function IncomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedDataIndex, setEditedDataIndex] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addRow = () => {
    // Implementasi penambahan data di sini
    // Pastikan untuk mengonversi jumlah menjadi angka sebelum menyimpannya
    // dan menutup modal setelah berhasil menambahkan data
    closeModal();
  };

  const updateTable = () => {
    // Implementasi pembaruan tabel di sini
  };

  const editRow = (index) => {
    // Implementasi penyuntingan data di sini
    // Munculkan modal penyuntingan dengan data yang sesuai
    setEditModalOpen(true);
    setEditedDataIndex(index);
  };

  const closeEditModal = () => {
    // Implementasi penutupan modal penyuntingan
    setEditModalOpen(false);
  };

  const deleteRow = (index) => {
    // Implementasi penghapusan data di sini
  };

  useEffect(() => {
    // Fetch data awal saat komponen dimuat
    fetchIncomeData();
  }, []);

  const fetchIncomeData = () => {
    // Implementasi pengambilan data melalui API
    axios
      .get('https://platform.openai.com/account/api-keys/api/income')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Mengelola kesalahan (error)
      });
  };

  const goToDashboard = () => {
    // Implementasi navigasi kembali ke dashboard
  };

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
        <button onClick={goToDashboard}>Kembali ke Dashboard</button>
      </div>
      {/* Modal untuk menambah data */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Tambah Data</h2>
            {/* Input dan tombol tambah data */}
          </div>
        </div>
      )}
      {/* Modal untuk menyunting data */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Data</h2>
            {/* Input dan tombol penyuntingan data */}
          </div>
        </div>
      )}
    </div>
  );
}

class ClassBasedIncomePage extends Component {
  // ... Implementasi komponen berbasis kelas ...
}

export { IncomePage, ClassBasedIncomePage };