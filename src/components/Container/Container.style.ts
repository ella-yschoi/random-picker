import styled from '@emotion/styled';
import { ButtonsContainerProps } from './Container.type';

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

const DirectionContainer = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  gap: 1.2rem;
`;

const ImageContainer = styled.div`
  align-items: center;
  margin: 2rem 0rem;
`;

const ButtonsContainer = styled.div<ButtonsContainerProps>`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.gap};
`;

export { Container, DirectionContainer, InputContainer, ImageContainer, ButtonsContainer };
