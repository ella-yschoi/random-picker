import styled from '@emotion/styled';

import { Container, DirectionContainer, ButtonsContainer } from '../components/Container/Container.style';
import Title from '../components/Title/Title';
import { PrimaryButton } from '../components/Button/Button';

interface ConfirmPageProps {
  participants: string[];
}

const ConfirmPage: React.FC<ConfirmPageProps> = ({ participants }) => {
  return (
    <Container>
      <Title/>
      <DirectionContainer>참여자를 확인해 주세요</DirectionContainer>
      <ListContainer>
        {participants.map((participants, index) => (
          <ListUnit key={index}>{participants}</ListUnit>
        ))}
      </ListContainer>
      <ButtonsContainer gap="9rem">
        <PrimaryButton to='/loading'>확인</PrimaryButton>
      </ButtonsContainer>
    </Container>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto;
  width: 15rem;
`;

const ListUnit = styled.div`
  width: 4rem;
  padding: 1rem;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #ffffff;
  text-align: center;
`;

export default ConfirmPage;
