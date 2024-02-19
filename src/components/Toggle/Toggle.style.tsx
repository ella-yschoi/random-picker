import styled from '@emotion/styled';
import { StyledProps } from './Toggle.type';

const ToggleWrapper = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

const ToggleSwitch = styled.label<StyledProps>`
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 2.2rem;
  background: ${({ isDarkMode }) => (isDarkMode ? '#4D4D4D' : '#F0C419')};
  border-radius: 2.2rem;
  transition: background-color 0.2s;
`;

const Slider = styled.span<StyledProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    content: '';
    position: absolute;
    height: 1.625rem;
    width: 1.625rem;
    left: 0.25rem;
    bottom: 0.25rem;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    ${({ isDarkMode }) =>
      isDarkMode
        ? `
      transform: translateX(26px);
      background-image: url('/public/darkMode.svg');
    `
        : `
      background-image: url('/public/lightMode.svg');
    `}
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export { ToggleWrapper, ToggleSwitch, Slider, Input };
