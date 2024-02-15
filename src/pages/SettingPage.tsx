import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const WinnerPage = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [nameInput, setNameInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  const handleAddParticipant = (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    if (!nameInput.trim()) { // 입력 값의 앞뒤 공백을 제거한 후 검사
      alert('이름을 입력해 주세요.');
      return;
    }
    if (participants.length >= 10) {
      alert('참여자는 10명까지만 입력할 수 있어요.');
      return;
    }
    
    setParticipants([...participants, nameInput]);
    setNameInput(''); // 입력창 초기화
  }

  const handleComplete = () => {
    if (participants.length < 1) {
      alert('1명 이상의 참여자 이름을 입력해 주세요.');
      return;
    }
    alert('참여자 리스트업이 완료되었습니다.');
    navigate('/') // 메인 페이지로 이동
  };

  const handleReset = () => {
    setParticipants([]);
  };
  
  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <DirectionContainer>참여자들을 입력해 주세요</DirectionContainer>
      <form onSubmit={handleAddParticipant}>
        <InputContainer>
          <TextInput
            type='text'
            id="name"
            value={nameInput}
            onChange={handleInputChange}
          />
          <InputButton onClick={handleAddParticipant}>입력</InputButton>
        </InputContainer>
      </form>
      <ListContainer>
        {participants.map((participant, index) => (
          <ParticipantUnit key={index}>
            <PencilIcon>✏️</PencilIcon>
            {participant}
          </ParticipantUnit>
        ))}
      </ListContainer>
      <ButtonsContainer>
        <CompleteButton onClick={handleComplete}>완료</CompleteButton>
        <ResetButton onClick={handleReset}>초기화</ResetButton>
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
  padding-left: 10px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: none;
  font-size: 1.5rem;
  color: #333;
  font-family: 'Pretendard-Thin';

  &:focus {
    outline: none;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20rem;
  height: 24rem;
  margin: 2rem 0rem;
  padding: 1rem;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: #ffffff;
`;

const ParticipantUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0rem 0rem 0.5rem 0.5rem;
  color: #000000;
`;

const PencilIcon = styled.span`
  font-size: 1.5rem;
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

const InputButton = styled(ButtonStyle)``;
const CompleteButton = styled(ButtonStyle)``;
const ResetButton = styled(ButtonStyle)``;

export default WinnerPage;
