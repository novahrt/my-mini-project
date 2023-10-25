 // Array untuk menyimpan data Expenses
var data = [];

// Fungsi untuk membuka modal tambah data
function openModal() {
    var modal = document.getElementById('dataModal');
    modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById('dataModal');
    modal.style.display = 'none';
}

// Fungsi untuk menambahkan data Expenses ke dalam array data
function addRow() {
    var date = document.getElementById('addDate').value;
    var account = document.getElementById('addAccount').value;
    var amount = document.getElementById('addAmount').value;
    var category = document.getElementById('addCategory').value;
    var description = document.getElementById('addDescription').value;

    // Menambahkan data baru ke dalam array data
    data.push({ date, account, amount, category, description });

    // Memperbarui tampilan tabel
    updateTable();

    // Menutup modal
    closeModal();
}

// Fungsi untuk memperbarui tampilan tabel Expenses
function updateTable() {
    var table = document.querySelector('table');
    var tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var newRow = tbody.insertRow(-1);

        var dateCell = newRow.insertCell(0);
        var accountCell = newRow.insertCell(1);
        var amountCell = newRow.insertCell(2);
        var categoryCell = newRow.insertCell(3);
        var descriptionCell = newRow.insertCell(4);
        var actionCell = newRow.insertCell(5);

        dateCell.innerHTML = data[i].date;
        accountCell.innerHTML = data[i].account;
        
        // Menampilkan jumlah dengan format mata uang Rupiah
        amountCell.innerHTML = formatAsRupiah(data[i].amount);
        categoryCell.innerHTML = data[i].category;
        descriptionCell.innerHTML = data[i].description;

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function (index) {
            return function () {
                editRow(index);
            };
        }(i);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function (index) {
            return function () {
                deleteRow(index);
            };
        }(i);

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    }
}

// Fungsi untuk menyunting data Expenses
function editRow(index) {
    var modal = document.getElementById('editModal');
    modal.style.display = 'block';

    document.getElementById('editDate').value = data[index].date;
    document.getElementById('editAccount').value = data[index].account;
    document.getElementById('editAmount').value = data[index].amount;
    document.getElementById('editCategory').value = data[index].category;
    document.getElementById('editDescription').value = data[index].description;

    var saveEditButton = document.getElementById('saveEditButton');
    saveEditButton.onclick = function () {
        // Memperbarui data setelah penyuntingan
        data[index].date = document.getElementById('editDate').value;
        data[index].account = document.getElementById('editAccount').value;
        data[index].amount = document.getElementById('editAmount').value;
        data[index].category = document.getElementById('editCategory').value;
        data[index].description = document.getElementById('editDescription').value;
        updateTable();
        closeEditModal();
    };
}

// Fungsi untuk menutup modal penyuntingan
function closeEditModal() {
    var modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

// Fungsi untuk menghapus data Expenses
function deleteRow(index) {
    data.splice(index, 1);
    updateTable();
}

// Fungsi untuk memformat jumlah sebagai mata uang Rupiah
function formatAsRupiah(amount) {
    return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount);
}

// Inisialisasi awal dengan data contoh
data.push({ date: '2023-10-20', account: 'cash', amount: 100000, category: 'tagihan', description: 'Gaji bulan ini' });

// Memperbarui tampilan tabel dengan data awal
updateTable();
