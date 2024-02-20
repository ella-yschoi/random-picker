import { ToggleProps } from './Toggle.type';
import { ToggleWrapper, ToggleSwitch, Slider, Input } from './Toggle.style';

const Toggle: React.FC<ToggleProps> = ({ isDarkMode, setIsDarkMode }) => {

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
      <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <Input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
        <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </ToggleSwitch>
    </ToggleWrapper>
  );
};

export default Toggle;
