import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import WinningImage from '../../public/celebrate.gif';
import Title from '../components/Title/Title';

interface WinnerPageProps {
  participants: string[];
  setParticipants: React.Dispatch<React.SetStateAction<string[]>>;
}

const WinnerPage: React.FC<WinnerPageProps> = ({ participants }) => {
  const winnerIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[winnerIndex];

  return (
    <Container>
      <Title/>
      <ImageContainer>
        <img src={WinningImage} alt="celebrate.gif" height="200" width="300" />
      </ImageContainer>
      <WinnerContainer>{winner}</WinnerContainer>
      <ButtonsContainer>
        <StyledLink to='/'>
          <RootButton>홈으로</RootButton>
        </StyledLink>
        <StyledLink to='/confirm'>
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
  font-family: 'Pretendard-Thin';
`;

const ImageContainer = styled.div`
  align-items: center;
  margin: 2rem 0rem;
`;

const WinnerContainer = styled.div`
  margin: 0rem 0rem 3rem 0rem;
  font-size: 3rem;
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

export default WinnerPage;
