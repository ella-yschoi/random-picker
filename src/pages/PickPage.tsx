import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PickPage = () => {
  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <DirectionContainer>참여자들을 확인해 주세요</DirectionContainer>
      <ListContainer/>
      <ButtonsContainer>
        <StyledLink to='/complete'>
          <ConfirmButton>확인</ConfirmButton>
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
`;

const TitleContainer = styled.div`
  margin: 1.7rem 0rem;
  font-size: 3.3rem;
`;

const DirectionContainer = styled.div`
  margin-bottom: 1.7rem;
  font-size: 1.5rem;
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

const ConfirmButton = styled(ButtonStyle)``;

export default PickPage;
