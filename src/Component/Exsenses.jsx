import React, { useState } from 'react';

function ExpensesPage() {
  const [data, setData] = useState([
    { date: '2023-10-20', account: 'cash', amount: 100000, category: 'tagihan', description: 'Gaji bulan ini' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [editIndex, setEditIndex] = useState(-1);

  const [addDate, setAddDate] = useState('');
  const [addAccount, setAddAccount] = useState('cash');
  const [addAmount, setAddAmount] = useState('');
  const [addCategory, setAddCategory] = useState('makan');
  const [addDescription, setAddDescription] = useState('');

  const [editDate, setEditDate] = useState('');
  const [editAccount, setEditAccount] = useState('cash');
  const [editAmount, setEditAmount] = useState('');
  const [editCategory, setEditCategory] = useState('makan');
  const [editDescription, setEditDescription] = useState('');

  const openModal = () => {
    setAddDate('');
    setAddAccount('cash');
    setAddAmount('');
    setAddCategory('makan');
    setAddDescription('');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addRow = () => {
    const newItem = {
      date: addDate,
      account: addAccount,
      amount: addAmount,
      category: addCategory,
      description: addDescription,
    };

    setData([...data, newItem]);
    closeModal();
  };

  const updateTable = () => {
    // Implement the code to update the table
  };

  const editRow = (index) => {
    setEditIndex(index);
    setEditDate(data[index].date);
    setEditAccount(data[index].account);
    setEditAmount(data[index].amount);
    setEditCategory(data[index].category);
    setEditDescription(data[index].description);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const saveEditedData = () => {
    const updatedData = [...data];
    updatedData[editIndex] = {
      date: editDate,
      account: editAccount,
      amount: editAmount,
      category: editCategory,
      description: editDescription,
    };
    setData(updatedData);
    closeEditModal();
  };

  const deleteRow = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const formatAsRupiah = (amount) => {
    return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount);
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.account}</td>
              <td>{formatAsRupiah(item.amount)}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => editRow(index)}>Edit</button>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="action-btn">
        <button onClick={openModal}>Tambah Data</button>
        <button onClick={() => window.location.href = 'dashboard.html'}>Kembali ke Dashboard</button>
      </div>
      {isModalOpen && (
        <div id="dataModal" className="modal">
          <div className="modal-content">
            <h2>Tambah Data</h2>
            <input
              type="date"
              placeholder="Tanggal"
              value={addDate}
              onChange={(e) => setAddDate(e.target.value)}
            />
            <select
              id="addAccount"
              value={addAccount}
              onChange={(e) => setAddAccount(e.target.value)}
            >
              <option value="cash">Uang Tunai</option>
              <option value="ewallet">Dompet Digital</option>
              <option value="mbanking">M-Banking</option>
            </select>
            <input
              type="text"
              placeholder="Jumlah"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
            />
            <select
              value={addCategory}
              onChange={(e) => setAddCategory(e.target.value)}
            >
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
            <input
              type="text"
              placeholder="Keterangan"
              value={addDescription}
              onChange={(e) => setAddDescription(e.target.value)}
            />
            <button onClick={addRow}>Tambah</button>
            <button onClick={closeModal}>Batal</button>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div id="editModal" className="modal">
          <div className="modal-content">
            <h2>Edit Data</h2>
            <input
              type="date"
              placeholder="Tanggal"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
            <select
              value={editAccount}
              onChange={(e) => setEditAccount(e.target.value)}
            >
              <option value="cash">Uang Tunai</option>
              <option value="ewallet">Dompet Digital</option>
              <option value="mbanking">M-Banking</option>
            </select>
            <input
              type="text"
              placeholder="Jumlah"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
            />
            <select
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            >
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
            <input
              type="text"
              placeholder="Keterangan"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <button id="saveEditButton" onClick={saveEditedData}>Simpan</button>
            <button onClick={closeEditModal}>Batal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpensesPage;
