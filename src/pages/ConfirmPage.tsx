import { useEffect } from 'react';
import { ConfirmPageProps } from '../types/pages.type';

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/toggle/Toggle';
import Title from '../components/title/Title';
import { PrimaryButton } from '../components/button/Button';

import {
  Container,
  DirectionContainer,
  ComfirmListContainer,
  ButtonsContainer,
} from '../components/container/Container.style';
import { ConfirmListUnit } from '../components/unit/Units.style';

const ConfirmPage: React.FC<ConfirmPageProps> = ({ participants }) => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode')
      ? true
      : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  return (
    <Container>
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Title />
      <DirectionContainer>참여자를 확인해 주세요</DirectionContainer>
      <ComfirmListContainer>
        {participants.map((participants, index) => (
          <ConfirmListUnit key={index}>{participants}</ConfirmListUnit>
        ))}
      </ComfirmListContainer>
      <ButtonsContainer gap='9rem'>
        <PrimaryButton to='/loading'>확인</PrimaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ConfirmPage;
