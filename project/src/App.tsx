import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ListProperty from './pages/ListProperty';
import PropertyDetails from './pages/PropertyDetails';
import UserProfile from './pages/UserProfile';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/list-property" element={<ListProperty />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;