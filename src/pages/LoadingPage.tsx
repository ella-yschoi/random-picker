import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/toggle/Toggle';
import Title from '../components/title/Title';
import LoadingImage from '../assets/drumming.gif';

import {
  Container,
  DirectionContainer,
  ImageContainer,
} from '../components/container/Container.style';

const LoadingPage = () => {
  const navigate = useNavigate();

  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode')
      ? true
      : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/winner');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Title />
      <DirectionContainer>
        Selecting a winner... Please wait a moment 🙏🏻
      </DirectionContainer>
      <ImageContainer>
        <img src={LoadingImage} alt='Loading Image' />
      </ImageContainer>
    </Container>
  );
};

export default LoadingPage;
