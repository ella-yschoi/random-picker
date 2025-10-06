import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SettingPageProps } from '../types/pages.type';

import { useTheme } from '../contexts/ThemeProvider';
import Toggle from '../components/toggle/Toggle';
import Title from '../components/title/Title';
import {
  NavigationButton,
  InteractionButton,
} from '../components/button/Button';

import {
  Container,
  DirectionContainer,
  InputContainer,
  SettingListContainer,
  ButtonsContainer,
} from '../components/container/Container.style';
import { TextInput } from '../components/input/Input.style';
import { SettingListUnit, PencilIcon } from '../components/unit/Units.style';

const SettingPage: React.FC<SettingPageProps> = ({
  setParticipants,
  participants,
}) => {
  const [nameInput, setNameInput] = useState('');
  const navigate = useNavigate();

  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-mode')
      ? true
      : false;
    setIsDarkMode(currentTheme);
  }, [setIsDarkMode]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  const handleAddParticipant = (event: React.FormEvent) => {
    event.preventDefault();
    if (!nameInput.trim()) {
      alert('Please enter a name.');
      return;
    }
    if (nameInput.trim().length > 6) {
      alert('Participant name must be 6 characters or fewer.');
      return;
    }
    setParticipants((currentParticipants) => {
      if (currentParticipants.length >= 10) {
        alert('You can enter up to 10 participants.');
        return currentParticipants;
      }
      return [...currentParticipants, nameInput.trim()];
    });

    setNameInput('');
  };

  const handleComplete = () => {
    if (participants.length < 1) {
      alert('Please enter at least one participant.');
      return;
    }
    alert('Participant list setup is complete.');
    navigate('/');
  };

  const handleReset = () => {
    setParticipants([]);
  };

  return (
    <Container>
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Title />
      <DirectionContainer>
        Please enter participants (up to 6 characters)
      </DirectionContainer>
      <form onSubmit={handleAddParticipant}>
        <InputContainer>
          <TextInput
            type='text'
            id='name'
            value={nameInput}
            onChange={handleInputChange}
          />
          <InteractionButton onClick={handleAddParticipant}>
            Add
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
        <NavigationButton onClick={handleComplete}>Done</NavigationButton>
        <InteractionButton onClick={handleReset}>Reset</InteractionButton>
      </ButtonsContainer>
    </Container>
  );
};

export default SettingPage;
