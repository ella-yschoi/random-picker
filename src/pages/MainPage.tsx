import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';

interface MainPageProps {
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
    navigate('/confirm'); // 참여자가 있으면 당첨자 뽑기 페이지로 이동
  };

  return (
    <Container>
      <TitleContainer>
        🔀 랜덤 피커
      </TitleContainer>
      <ButtonsContainer>
      <StyledLink to='/setting'>
        <SettingButton>참여자 설정</SettingButton>
      </StyledLink>
      <WinnerPickerButton onClick={handleSetting}>당첨자 뽑기</WinnerPickerButton>
    </ButtonsContainer>
    </Container>
  )
}

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
`

const TitleContainer = styled.div`
  margin: 1.7rem 0rem;
  font-size: 3.3rem;
  font-family: 'Pretendard-Black';
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const ButtonStyle = styled.div`
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  background-color: #D9D9D9;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SettingButton = styled(ButtonStyle)``
const WinnerPickerButton = styled(ButtonStyle)``

export default MainPage;
