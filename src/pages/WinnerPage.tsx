import styled from '@emotion/styled';

import { Container, ImageContainer, ButtonsContainer } from '../components/Container/Container.style';
import Title from '../components/Title/Title';
import { PrimaryButton } from '../components/Button/Button';
import WinningImage from '../../public/celebrate.gif';

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
      <ButtonsContainer gap="5rem">
        <PrimaryButton to='/'>홈으로</PrimaryButton>
        <PrimaryButton to='/confirm'>다시하기</PrimaryButton>
      </ButtonsContainer>
    </Container>
  );
};

const WinnerContainer = styled.div`
  margin: 0rem 0rem 3rem 0rem;
  font-size: 3rem;
`;

export default WinnerPage;
