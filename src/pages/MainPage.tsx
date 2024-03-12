import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { MainPageProps } from '../types/pages.type';

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/toggle/Toggle';
import Title from '../components/title/Title';
import { PrimaryButton, NavigationButton } from '../components/button/Button';
import TitleImageinDarkMode from '../assets/TitleImage-white.png';
import TitleImageinLightMode from '../assets/TitleImage-black.png';

import {
  Container,
  ButtonsContainer,
  ImageContainer,
} from '../components/container/Container.style';

const MainPage: React.FC<MainPageProps> = ({ participants }) => {
  const navigate = useNavigate();
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode')
      ? true
      : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  const handleSetting = () => {
    if (participants.length === 0) {
      alert('참여자를 먼저 입력해 주세요. \n참여자 설정 화면으로 이동합니다.');
      navigate('/setting');
      return;
    }
    navigate('/confirm');
  };

  return (
    <Container>
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Title />
      <ImageContainer>
        {isDarkMode ? (
          <img
            src={TitleImageinDarkMode}
            width='300rem'
            alt='Title Image in Dark Mode'
          />
        ) : (
          <img
            src={TitleImageinLightMode}
            width='300rem'
            alt='Title Image in Light Mode'
          />
        )}
      </ImageContainer>
      <ButtonsContainer gap='1rem'>
        <PrimaryButton to='/setting'>참여자 설정</PrimaryButton>
        <NavigationButton onClick={handleSetting}>당첨자 뽑기</NavigationButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MainPage;
