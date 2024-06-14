import React, { createContext, useContext, useState, useEffect } from 'react';
import httpClient from '@/utils/httpClient';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await httpClient.get('/@me');
        console.log(response.data)
        setUser(response.data);
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
