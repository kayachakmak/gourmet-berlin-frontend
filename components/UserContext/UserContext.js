// src/userContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import httpClient from '@/pages/httpClient';

// Create a context for the user
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await httpClient.get('/@me');
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } 
    };
    checkSession();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
