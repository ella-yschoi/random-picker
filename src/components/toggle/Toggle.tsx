import { useEffect } from 'react';

import { ToggleProps } from './Toggle.type';
import { ToggleWrapper, ToggleSwitch, Slider, Input } from './Toggle.style';

const Toggle: React.FC<ToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, [setIsDarkMode]);

  const handleToggle = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    document.body.classList.toggle('dark-mode', newIsDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newIsDarkMode));
  };

  return (
    <ToggleWrapper>
      <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <Input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
        <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </ToggleSwitch>
    </ToggleWrapper>
  );
};

export default Toggle;
