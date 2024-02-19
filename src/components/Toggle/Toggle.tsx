import { useState } from 'react';
import { ToggleWrapper, ToggleSwitch, Slider, Input } from './Toggle.style';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);

    // document.body에 'dark-mode' 클래스를 토글
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <ToggleWrapper>
      <ToggleSwitch isDarkMode={isDarkMode}>
        <Input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
        <Slider isDarkMode={isDarkMode} />
      </ToggleSwitch>
    </ToggleWrapper>
  );
};

export default Toggle;
