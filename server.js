const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Data untuk menyimpan daftar pendapatan
let incomeData = [];

// Endpoint untuk mendapatkan semua pendapatan
app.get('/api/income', (req, res) => {
  res.json(incomeData);
});

// Endpoint untuk menambahkan pendapatan baru
app.post('/api/income', (req, res) => {
  const newIncome = req.body;
  incomeData.push(newIncome);
  res.status(201).json(newIncome);
});

// Endpoint untuk menghapus pendapatan
app.delete('/api/income/:id', (req, res) => {
  const id = req.params.id;
  incomeData = incomeData.filter((income) => income.id !== id);
  res.sendStatus(204);
});

// Endpoint untuk memperbarui pendapatan
app.put('/api/income/:id', (req, res) => {
  const id = req.params.id;
  const updatedIncome = req.body;
  const index = incomeData.findIndex((income) => income.id === id);
  if (index !== -1) {
    incomeData[index] = updatedIncome;
    res.json(updatedIncome);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
