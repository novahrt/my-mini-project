import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegistrationForm from './Component/RegistrationForm';
import Dashboard from './Dashboard';
import Income from './Income';
import Expenses from './Expenses';
import Calendar from './Calendar';
import FinancialPlanner from './FinancialPlanner';
import Calculator from './Calculator';
import About from './About';

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
              <Link to="/expenses">Expenses</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/chatbot">Financial Planner</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/logout">Log Out</Link>
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
            <Expenses />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/chatbot">
            <FinancialPlanner />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/logout">
            <LandingPage /> {/* Asumsikan ini mengarahkan ke halaman landing */}
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
