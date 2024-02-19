import { ConfirmPageProps } from '../types/pages.type';

import Toggle from '../components/Toggle/Toggle';
import Title from '../components/Title/Title';
import { PrimaryButton } from '../components/Button/Button';

import { Container, DirectionContainer, ComfirmListContainer, ButtonsContainer } from '../components/Container/Container.style';
import { ConfirmListUnit } from '../components/Unit/unit.style';

const ConfirmPage: React.FC<ConfirmPageProps> = ({ participants }) => {
  return (
    <Container>
      <Toggle/>
      <Title/>
      <DirectionContainer>참여자를 확인해 주세요</DirectionContainer>
      <ComfirmListContainer>
        {participants.map((participants, index) => (
          <ConfirmListUnit key={index}>{participants}</ConfirmListUnit>
        ))}
      </ComfirmListContainer>
      <ButtonsContainer gap='9rem'>
        <PrimaryButton to='/loading'>확인</PrimaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ConfirmPage;
