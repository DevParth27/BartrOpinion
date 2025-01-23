import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, User, MessageSquare, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:top-0 md:border-t-0 md:border-b">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hidden md:flex items-center space-x-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl">Bartr Opinion</span>
          </Link>
          
          <div className="flex items-center justify-around w-full md:w-auto md:space-x-8">
            <NavLink to="/" icon={<Home />} label="Home" isActive={isActive('/')} />
            <NavLink to="/wallet" icon={<Wallet />} label="Wallet" isActive={isActive('/wallet')} />
            <NavLink to="/profile" icon={<User />} label="Profile" isActive={isActive('/profile')} />
            <NavLink to="/contact" icon={<MessageSquare />} label="Contact" isActive={isActive('/contact')} />
            <button
              onClick={handleLogout}
              className="flex flex-col items-center text-gray-500 hover:text-blue-600"
            >
              <LogOut className="w-6 h-6" />
              <span className="text-xs mt-1">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, label, isActive }: { to: string; icon: React.ReactNode; label: string; isActive: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center text-gray-500 hover:text-blue-600",
        isActive && "text-blue-600"
      )}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}