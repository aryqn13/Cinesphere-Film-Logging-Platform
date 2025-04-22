import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navigation from './components/Navigation';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
export function App() {
  return <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-100">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>;
}