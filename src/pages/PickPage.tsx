import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PickPage = () => {
  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <DirectionContainer>참여자들을 확인해 주세요</DirectionContainer>
      <ListContainer>
        <ListUnit>엘라</ListUnit>
        <ListUnit>클로이</ListUnit>
        <ListUnit>슈우</ListUnit>
        <ListUnit>뚜우</ListUnit>
      </ListContainer>
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
  font-family: 'Pretendard-Thin';
`;

const TitleContainer = styled.div`
  margin: 1.7rem 0rem;
  font-size: 3.3rem;
  font-family: 'Pretendard-Black';
`;

const DirectionContainer = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  margin: 2rem 0rem;
  width: 13.2rem;
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
