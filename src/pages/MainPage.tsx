import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Container>
      <TitleContainer>
        🔀 랜덤 피커
      </TitleContainer>
      <ButtonsContainer>
      <StyledLink to='/setting'>
        <SettingButton>참여자 설정</SettingButton>
      </StyledLink>
      <StyledLink to='/pick'>
      <WinnerPickerButton>당첨자 뽑기</WinnerPickerButton>
      </StyledLink>
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
`

const TitleContainer = styled.div`
  margin: 1.7rem 0rem;
  font-size: 3.3rem;
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
