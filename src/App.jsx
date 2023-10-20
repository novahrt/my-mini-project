import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegistrationForm from './Component/RegistrationForm';
import Dashboard from './Dashboard';
import Income from './Income';
import Expenses from './Expenses'; // Impor halaman Expenses

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link> {/* Tambahkan Link ke Expenses */}
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/income">
            <Income />
          </Route>
          <Route path="/expenses">
            <Expenses /> {/* Tambahkan Route untuk Expenses */}
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;