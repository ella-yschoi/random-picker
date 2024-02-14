import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LoadingImage from '../assets/celebrate.gif'

const SettingPage = () => {  
  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <ImageContainer>
        <img src={LoadingImage} alt="celebrate.gif" />
      </ImageContainer>
      <WinnerContainer>엘라</WinnerContainer>
      <ButtonsContainer>
        <StyledLink to='/'>
          <RootButton>홈으로</RootButton>
        </StyledLink>
        <StyledLink to='/setting'>
          <ReplyButton>다시하기</ReplyButton>
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

const ImageContainer = styled.div`
  align-items: center;
  height: 20rem;
  margin: 2rem 0rem;
`;

const WinnerContainer = styled.div`
  margin: 10rem 0rem 5rem 0rem;
  font-size: 3.3rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
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

const RootButton = styled(ButtonStyle)``;
const ReplyButton = styled(ButtonStyle)``;

export default SettingPage;
