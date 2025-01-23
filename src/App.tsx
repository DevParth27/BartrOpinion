import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AuthGuard } from './components/AuthGuard';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Wallet } from './pages/Wallet';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AuthGuard>
              <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pt-16">
                <Navbar />
                <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </div>
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;