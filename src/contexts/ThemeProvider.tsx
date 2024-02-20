import React, { createContext, useState, useContext, ReactNode } from 'react';

// 컨텍스트에 대한 타입 정의
type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// createContext의 초기값 지정
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

// 훅 사용을 위한 커스텀 훅
const useTheme = () => useContext(ThemeContext);

// ThemeProvider 컴포넌트
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
