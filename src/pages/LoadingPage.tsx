import styled from '@emotion/styled';
import LoadingImage from '../assets/drumming.gif'

const LoadingPage = () => {  
  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <ImageContainer>
        <img src={LoadingImage} alt="loading.gif" />
      </ImageContainer>
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

const ImageContainer = styled.div`
  align-items: center;
  height: 20rem;
  margin: 2rem 0rem;
`;

export default LoadingPage;
