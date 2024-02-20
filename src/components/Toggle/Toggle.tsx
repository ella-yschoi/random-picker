import { useEffect } from 'react';

import { ToggleProps } from './Toggle.type';
import { ToggleWrapper, ToggleSwitch, Slider, Input } from './Toggle.style';

const Toggle: React.FC<ToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 localStorage에서 다크모드 설정 확인
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, [setIsDarkMode]);

  const handleToggle = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    document.body.classList.toggle('dark-mode', newIsDarkMode);
    // 새 설정을 localStorage에 저장
    localStorage.setItem('darkMode', JSON.stringify(newIsDarkMode));
  };

  return (
    <ToggleWrapper>
      <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <Input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
        <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </ToggleSwitch>
    </ToggleWrapper>
  );
};

export default Toggle;
