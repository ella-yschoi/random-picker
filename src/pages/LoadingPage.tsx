import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/Toggle/Toggle';
import Title from '../components/Title/Title';
import LoadingImage from '../assets/drumming.gif';

import { Container, DirectionContainer, ImageContainer } from '../components/Container/Container.style';

const LoadingPage = () => {
  const navigate = useNavigate();

  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode') ? true : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/winner'); // 4초 후 WinnerPage로 이동
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <Container>
      <Toggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Title/>
      <DirectionContainer>
        당첨자 뽑는 중.. 잠시만 기다려주세요 🙏🏻
      </DirectionContainer>
      <ImageContainer>
        <img src={LoadingImage} alt='Loading Image' />
      </ImageContainer>
    </Container>
  );
};

export default LoadingPage;
