import React, { Component } from 'react';
import Chart from 'chart.js';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            selectedIncomePeriod: 'week',
            selectedExpensesPeriod: 'week',
            selectedSavingsPeriod: 'week',
            selectedPieChartPeriod: 'week',
            selectedBarChartPeriod: 'week',
        };
    }

    componentDidMount() {
        // Inisialisasi grafik
        this.initCharts();
    }

    initCharts() {
        // Data untuk grafik Pie
        const pieData = {
            labels: ['Income', 'Expenses', 'Savings'],
            datasets: [{
                data: [1000, 500, 300],
                backgroundColor: ['#36A2EB', '#4CAF50', '#FFA500'],
            }],
        };

        // Data untuk grafik Bar
        const barData = {
            labels: ['Category 1', 'Category 2', 'Category 3'],
            datasets: [{
                label: 'Income',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [2000, 1500, 1000],
            }, {
                label: 'Expenses',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [300, 200, 500],
            }],
        };

        // Referensi elemen canvas
        const pieChartCanvas = this.refs.pieChartCanvas;
        const barChartCanvas = this.refs.barChartCanvas;

        // Inisialisasi grafik Pie
        new Chart(pieChartCanvas, {
            type: 'pie',
            data: pieData,
        });

        // Inisialisasi grafik Bar
        new Chart(barChartCanvas, {
            type: 'bar',
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
            },
        });
    }

    toggleSidebar() {
        // Toggle sidebar
    }

    showLogoutConfirmation() {
        alert("Apakah Anda yakin ingin keluar?");
        // Tambahkan logika untuk pergi ke halaman landing jika dikonfirmasi.
    }

    render() {
        return (
            <div>
                <div className="hamburger" onClick={this.toggleSidebar}>&#9776;</div>
                <div className="side-bar" id="sidebar">
                    {/* Sidebar content */}
                </div>
                <div className="content">
                    <div className="header">
                        <i className="fa fa-bars" onClick={this.toggleSidebar}></i>
                        <h1>Selamat Datang di Keuangan Ku</h1>
                    </div>
                    <div className="total-box income-box">
                        {/* Total Income box */}
                    </div>
                    <div className="total-box expenses-box">
                        {/* Total Expenses box */}
                    </div>
                    <div className="total-box savings-box">
                        {/* Total Savings box */}
                    </div>
                    <div className="chart-container">
                        <div className="chart">
                            {/* Pie chart */}
                            <canvas ref="pieChartCanvas" width="300" height="300"></canvas>
                        </div>
                        <div className="chart">
                            {/* Bar chart */}
                            <canvas ref="barChartCanvas" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>
                <button onClick={this.showLogoutConfirmation}>Logout</button>
            </div>
        );
    }
}

export default Dashboard;
