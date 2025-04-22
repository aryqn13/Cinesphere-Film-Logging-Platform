import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { FilmIcon, SearchIcon, BookmarkIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    user,
    logout
  } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FilmIcon className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-indigo-400">
                cinesphere
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/explore" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Explore
            </Link>
            <Link to="/" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Watchlist
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Profile
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-400 hover:text-indigo-400">
              <SearchIcon className="h-5 w-5" />
            </button>
            {user ? <div className="flex items-center space-x-4">
                <Link to="/profile" className="p-1 rounded-full bg-gray-800 border border-gray-700">
                  <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} />
                </Link>
                <button onClick={handleLogout} className="text-sm text-gray-300 hover:text-indigo-400">
                  Logout
                </button>
              </div> : <div className="flex items-center space-x-4">
                <Link to="/login" className="text-sm text-gray-300 hover:text-indigo-400">
                  Login
                </Link>
                <Link to="/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">
                  Sign Up
                </Link>
              </div>}
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">
              {mobileMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              Home
            </Link>
            <Link to="/explore" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              Explore
            </Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              Watchlist
            </Link>
            <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              Profile
            </Link>
            <div className="px-3 py-2">
              <button className="w-full text-left flex items-center text-gray-300">
                <SearchIcon className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navigation;