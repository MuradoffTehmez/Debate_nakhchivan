// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateDebate from './pages/CreateDebate';
import DebateForum from './pages/DebateForum';
import AdminPanel from './pages/AdminPanel';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><a href="/login">Giriş</a></li>
              <li><a href="/register">Qeydiyyat</a></li>
              <li><a href="/create-debate">Yeni Debat</a></li>
              <li><a href="/debate-forum">Debat Forumu</a></li>
              <li><a href="/admin">Admin Paneli</a></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/create-debate" component={CreateDebate} />
            <Route path="/debate-forum" component={DebateForum} />
            <Route path="/admin" component={AdminPanel} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
