// Contoh data dummy untuk Total Income
var dummyIncomeData = {
    week: 2500000,
    month: 10000000,
    year: 120000000,
};

// Contoh data dummy untuk Total Expenses
var dummyExpensesData = {
    week: 2000000,
    month: 8000000,
    year: 96000000,
};

// Contoh data dummy untuk Total Tabungan
var dummySavingsData = {
    week: 500000,
    month: 2000000,
    year: 24000000,
};

// Fungsi untuk memperbarui total pendapatan
function updateIncomeData() {
    var incomeTotalElement = document.getElementById("incomeTotal");
    var selectedPeriod = document.getElementById("incomeDateOption").value;
    incomeTotalElement.textContent = "Rp " + formatRupiah(dummyIncomeData[selectedPeriod]);
}

// Fungsi untuk memperbarui total pengeluaran
function updateExpensesData() {
    var expensesTotalElement = document.getElementById("expensesTotal");
    var selectedPeriod = document.getElementById("expensesDateOption").value;
    expensesTotalElement.textContent = "Rp " + formatRupiah(dummyExpensesData[selectedPeriod]);
}

// Fungsi untuk memperbarui total tabungan
function updateSavingsData() {
    var savingsTotalElement = document.getElementById("savingsTotal");
    var selectedPeriod = document.getElementById("savingsDateOption").value;
    savingsTotalElement.textContent = "Rp " + formatRupiah(dummySavingsData[selectedPeriod]);
}

// Fungsi untuk memperbarui grafik pie
function updatePieChart() {
    var pieCtx = document.getElementById("myPieChart").getContext("2d");
    var selectedPeriod = document.getElementById("pieChartDateOption").value;

    var pieData = {
        labels: ["Income", "Expenses", "Savings"], // Perbarui label
        datasets: [{
            data: [dummyIncomeData[selectedPeriod], dummyExpensesData[selectedPeriod], dummySavingsData[selectedPeriod]],
            backgroundColor: ["#0085ff", "#69b4ff", "#e0ffff"] // Perbarui warna
        }]
    };

    var pieChart = new Chart(pieCtx, {
        type: "pie",
        data: pieData,
    });
}

// Fungsi untuk memperbarui grafik batang
function updateBarChart() {
    var barCtx = document.getElementById("myBarChart").getContext("2d");
    var selectedPeriod = document.getElementById("barChartDateOption").value;

    // Warna untuk Pemasukan, Pengeluaran, dan Tabungan
    var incomeColor = "#0085ff"; // Warna untuk Pemasukan
    var expensesColor = "#69b4ff"; // Warna untuk Pengeluaran
    var savingsColor = "#e0ffff"; // Warna untuk Tabungan

    var barData = {
        labels: ["Gaji", "Tabungan", "Makanan", "Hiburan", "Transportasi", "Tagihan"],
        datasets: [
            {
                label: "Pemasukan",
                backgroundColor: incomeColor,
                data: [dummyIncomeData[selectedPeriod], dummySavingsData[selectedPeriod], 0, 0, 0, 0],
            },
            {
                label: "Pengeluaran",
                backgroundColor: expensesColor,
                data: [0, 0, 4000000, 2000000, 1000000, 1000000],
            },
        ],
    };

    var barChart = new Chart(barCtx, {
        type: "bar",
        data: barData,
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                }],
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true, // Menggunakan simbol kotak untuk warna
                },
            },
        },
    });
}

// Fungsi untuk memformat angka sebagai mata uang Rupiah
function formatRupiah(angka) {
    var reverse = angka.toString().split('').reverse().join('');
    var ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}
