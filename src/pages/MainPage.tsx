import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container/Container.style';
import Title from '../components/Title/Title';
import { PrimaryButton, NavigationButton } from '../components/Button/Button';

export interface MainPageProps {
  participants: string[];
}

const MainPage: React.FC<MainPageProps> = ({participants}) => {
  const navigate = useNavigate();

  const handleSetting = () => {
    if (participants.length === 0) {
      alert('참여자를 먼저 입력해 주세요. \n참여자 설정 화면으로 이동합니다.')
      navigate('/setting');
      return;
    }
    navigate('/confirm');
  };

  return (
    <Container>
      <Title/>
      <ButtonsContainer>
        <PrimaryButton to='/setting'>참여자 설정</PrimaryButton>
        <NavigationButton onClick={handleSetting}>당첨자 뽑기</NavigationButton>
    </ButtonsContainer>
    </Container>
  )
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export default MainPage;
