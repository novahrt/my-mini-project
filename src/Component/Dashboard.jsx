import React from 'react';

function Dashboard() {
    return (
        <div className="body">
            <nav className="side-bar">
                <div className="user-p">
                    <img src="logo.png" alt="Logo" />
                    <h4>Keuangan KU</h4>
                </div>
                <ul>
                    <li>
                        <a href="Dashboard.html">
                            <i className="fa fa-desktop" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <span>Income</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <span>Expenses</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <span>Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <span>Financial Planner</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <span>Calculator</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            <span>Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="welcome-box">
                <h2>Selamat Datang di Keuangan KU</h2>
            </div>
        </div>
    );
}

export default Dashboard;