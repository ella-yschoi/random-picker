import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const WinnerPage = () => {
  const [participantName, setParticipantName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantName(event.target.value);
  };
  
  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <DirectionContainer>참여자들을 입력해 주세요</DirectionContainer>
      <InputContainer>
        <TextInput
          id="name"
          value={participantName}
          onChange={handleInputChange}
        />
        <InputButton>입력</InputButton>
      </InputContainer>
      <ListContainer/>
      <ButtonsContainer>
        <StyledLink to='/complete'>
          <CompleteButton>완료</CompleteButton>
        </StyledLink>
        <StyledLink to='/initialize'>
          <InitializationButton>초기화</InitializationButton>
        </StyledLink>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0;
  padding-top: 1rem;
  font-family: 'Pretendard-Thin';
`;

const TitleContainer = styled.div`
  margin: 1.7rem 0rem;
  font-size: 3.3rem;
  font-family: 'Pretendard-Black';
`;

const DirectionContainer = styled.div`
  margin-bottom: 1.7rem;
  font-size: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`;

const TextInput = styled.input`
  width: 13.5rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #000000;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: none;
`;

const ListContainer = styled.div`
  width: 20rem;
  height: 30rem;
  margin: 2rem 0rem;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 9rem;
`;

const ButtonStyle = styled.div`
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const InputButton = styled(ButtonStyle)``;
const CompleteButton = styled(ButtonStyle)``;
const InitializationButton = styled(ButtonStyle)``;

export default WinnerPage;
