// LangContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Load theme preference from storage
    const loadLang = async () => {
      try {
        const lan = await AsyncStorage.getItem('selectedLang');
        if (lan !== null) {
          setLang(lan);
        }
      } catch (error) {
        console.error('Error loading theme preference:', error);
      }
    };
    loadLang();
  }, []);

  const toggleLang = (value) => {
    setLang(value);
    // Save lang  to storage
    AsyncStorage.setItem('selectedLang', value).catch((error) =>
      console.error('Error saving theme preference:', error),
    );
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
