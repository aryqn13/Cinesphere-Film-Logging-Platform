import React, { useEffect, useState, createContext, useContext } from 'react';
interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
  joinedYear: number;
  stats: {
    filmsWatched: number;
    filmsRated: number;
    following: number;
    followers: number;
  };
  bio: string;
}
interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, username: string, password: string, name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
export function UserProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Check local storage for user data on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const signup = (email: string, username: string, password: string, name: string) => {
    // Create new user with default values
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      username,
      name,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      joinedYear: new Date().getFullYear(),
      stats: {
        filmsWatched: 0,
        filmsRated: 0,
        following: 0,
        followers: 0
      },
      bio: 'New to Cinesphere! Ready to explore great films.'
    };
    // Store user data and credentials
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem(email, password); // Simple password storage (not secure, just for demo)
    setUser(newUser);
  };
  const login = (email: string, password: string): boolean => {
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        return true;
      }
    }
    return false;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return <UserContext.Provider value={{
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  }}>
      {children}
    </UserContext.Provider>;
}
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}