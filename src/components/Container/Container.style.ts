import styled from '@emotion/styled';
import { ButtonsContainerProps } from './Container.type';

const Container = styled.div`
  position: relative;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0;
  font-family: 'Pretendard-Thin';
  background-color: var(--background-color);
  color: var(--text-color);
`;

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

const SettingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20rem;
  height: 24rem;
  margin: 2rem 0rem;
  padding: 1rem;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: #ffffff;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const ComfirmListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto;
  width: 15rem;
`;

const WinnerContainer = styled.div`
  margin: 0rem 0rem 3rem 0rem;
  font-size: 3rem;
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

export { Container, DirectionContainer, InputContainer, SettingListContainer, ComfirmListContainer, ImageContainer, WinnerContainer, ButtonsContainer };
