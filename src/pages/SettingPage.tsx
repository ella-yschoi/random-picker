import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SettingPageProps } from '../types/pages.type'

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/Toggle/Toggle';
import Title from '../components/Title/Title';
import { NavigationButton, InteractionButton } from '../components/Button/Button';

import { Container, DirectionContainer, InputContainer, SettingListContainer, ButtonsContainer } from '../components/Container/Container.style';
import { TextInput } from '../components/Input/Input.style';
import { SettingListUnit, PencilIcon } from '../components/Unit/unit.style';

const SettingPage: React.FC<SettingPageProps> = ({
  setParticipants,
  participants,
}) => {
  const [nameInput, setNameInput] = useState('');
  const navigate = useNavigate();

  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode') ? true : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  const handleAddParticipant = (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    if (!nameInput.trim()) { // 입력 값의 앞뒤 공백을 제거한 후 검사
      alert('이름을 입력해 주세요.');
      return;
    }
    setParticipants((currentParticipants) => {
      if (currentParticipants.length >= 10) {
        alert('참여자는 10명까지만 입력할 수 있어요.');
        return currentParticipants;
      }
      return [...currentParticipants, nameInput];
    });

    setNameInput(''); // 입력창 초기화
  };

  const handleComplete = () => {
    if (participants.length < 1) {
      alert('1명 이상의 참여자 이름을 입력해 주세요.');
      return;
    }
    alert('참여자 리스트업이 완료되었습니다.');
    navigate('/'); // 메인 페이지로 이동
  };

  const handleReset = () => {
    setParticipants([]);
  };

  return (
    <Container>
      <Toggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Title />
      <DirectionContainer>참여자를 입력해 주세요</DirectionContainer>
      <form onSubmit={handleAddParticipant}>
        <InputContainer>
          <TextInput
            type='text'
            id='name'
            value={nameInput}
            onChange={handleInputChange}
          />
          <InteractionButton onClick={handleAddParticipant}>
            입력
          </InteractionButton>
        </InputContainer>
      </form>
      <SettingListContainer>
        {participants &&
          participants.map((participant, index) => (
            <SettingListUnit key={index}>
              <PencilIcon>✏️</PencilIcon>
              {participant}
            </SettingListUnit>
          ))}
      </SettingListContainer>
      <ButtonsContainer gap='9rem'>
        <NavigationButton onClick={handleComplete}>완료</NavigationButton>
        <InteractionButton onClick={handleReset}>초기화</InteractionButton>
      </ButtonsContainer>
    </Container>
  );
};

export default SettingPage;
