import React from 'react';

const ExpensesPage = () => {
  const openModal = () => {
    document.getElementById("dataModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("dataModal").style.display = "none";
  };

  const addRow = () => {
    const tanggal = document.querySelector(".modal-content input[type='date']").value;
    const rekening = document.querySelector(".modal-content select:nth-of-type(1)").value;
    const jumlah = document.querySelector(".modal-content input[type='text']").value;
    const kategori = document.querySelector(".modal-content select:nth-of-type(2)").value;
    const keterangan = document.querySelector(".modal-content input[type='text']").value;

    const table = document.querySelector("table tbody");
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerHTML = tanggal;
    cell2.innerHTML = rekening;
    cell3.innerHTML = jumlah;
    cell4.innerHTML = kategori;
    cell5.innerHTML = keterangan;
    cell6.innerHTML = '<button>Edit</button> <button>Delete</button>';

    closeModal();

    document.querySelector(".modal-content input[type='date']").value = "";
    document.querySelector(".modal-content select:nth-of-type(1)").value = "cash";
    document.querySelector(".modal-content input[type='text']").value = "";
    document.querySelector(".modal-content select:nth-of-type(2)").value = "belanja-bulanan";
    document.querySelector(".modal-content input[type='text']").value = "";
  };

  const goToDashboard = () => {
    window.location.href = "dashboard.html";
  };

  return (
    <div>
      <h1>Expenses Page</h1>
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
          {/* Data expenses akan ditampilkan di sini */}
        </tbody>
      </table>
      <div className="action-btn">
        <button onClick={openModal}>Tambah Data</button>
        <br />
        <button onClick={goToDashboard}>Kembali ke Dashboard</button>
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
            <option value="belanja-bulanan">Belanja Bulanan</option>
            <option value="makan">Makan</option>
            <option value="skincare">Skincare</option>
            <option value="tagihan">Tagihan</option>
            <option value="biaya-sewa">Biaya Sewa</option>
            <option value="transportasi">Transportasi</option>
            <option value="listrik">Listrik</option>
            <option value="pajak">Pajak</option>
            <option value="liburan">Liburan</option>
            <option value="biaya-tidak-terduga">Biaya Tidak Terduga</option>
          </select>
          <input type="text" placeholder="Keterangan" />
          <button onClick={addRow}>Tambah</button>
          <button onClick={closeModal}>Batal</button>
        </div>
      </div>
    </div>
  );
};

export default Expenses;