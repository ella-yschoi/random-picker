import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';

import Container from '../components/Container/Container.style';
import Title from '../components/Title/Title';
import LoadingImage from '../../public/drumming.gif';

const LoadingPage = () => { 
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/winner'); // 4초 후 WinnerPage로 이동
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <Container>
      <Title/>
      <DirectionContainer>당첨자 뽑는 중.. 잠시만 기다려주세요 🙏🏻</DirectionContainer>
      <ImageContainer>
        <img src={LoadingImage} alt="loading.gif" />
      </ImageContainer>
    </Container>
  );
};

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
