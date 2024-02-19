import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Toggle from '../components/Toggle/Toggle';
import Title from '../components/Title/Title';
import LoadingImage from '../../public/drumming.gif';

import { Container, DirectionContainer, ImageContainer } from '../components/Container/Container.style';

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
      <Toggle/>
      <Title/>
      <DirectionContainer>
        당첨자 뽑는 중.. 잠시만 기다려주세요 🙏🏻
      </DirectionContainer>
      <ImageContainer>
        <img src={LoadingImage} alt='loading.gif' />
      </ImageContainer>
    </Container>
  );
};

export default LoadingPage;
