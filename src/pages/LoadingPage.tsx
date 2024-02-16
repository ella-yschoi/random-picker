import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import LoadingImage from '../assets/drumming.gif'

const LoadingPage = () => { 
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/winner'); // 3초 후 WinnerPage로 이동
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <Container>
      <TitleContainer>🔀 랜덤 피커</TitleContainer>
      <DirectionContainer>당첨자 뽑는 중.. 잠시만 기다려주세요 🙏🏻</DirectionContainer>
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

const DirectionContainer = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const ImageContainer = styled.div`
  align-items: center;
  height: 20rem;
  margin: 2rem 0rem;
`;

export default LoadingPage;
