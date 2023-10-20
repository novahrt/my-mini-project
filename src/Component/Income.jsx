import React, { Component } from 'react';

class IncomePage extends Component {
  // Fungsi-fungsi dan logika komponen React Anda akan ditempatkan di sini

  render() {
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
            {/* Tabel isi data akan muncul di sini */}
          </tbody>
        </table>
        <div className="action-btn">
          <button onClick={this.openModal}>Tambah Data</button>
          <br />
          <button onClick={this.goToDashboard}>Kembali ke Dashboard</button>
        </div>

        <div id="dataModal" className="modal">
          <div className="modal-content">
            <h2>Tambah Data</h2>
            <input type="date" placeholder="Tanggal" />
            <select>
              <option value="cash">Uang Tunai</option>
              <option value="ewallet">Dompet Digital</option>
              <option value="mbanking">M-Banking</option>
            </select>
            <input type="text" placeholder="Jumlah" />
            <select>
              <option value="salary">Gaji</option>
              <option value="savings">Tabungan</option>
              <option value="refund">Pengembalian Dana</option>
              <option value="investment">Investasi</option>
              <option value="freelance">Freelance</option>
            </select>
            <input type="text" placeholder="Keterangan" />
            <button onClick={this.addRow}>Tambah</button>
            <button onClick={this.closeModal}>Batal</button>
          </div>
        </div>
      </div>
    );
  }
}

export default IncomePage;