import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import ButtonStyle from './Button.style';
import { ButtonProps } from './Button.type';

const PrimaryButton: React.FC<ButtonProps> = ({ children, to }) => {
  // 'to' prop이 제공되면 Link 컴포넌트 사용, 그렇지 않으면 div 사용
  return to ? (
    <StyledLink to={to}>
      <ButtonStyle>{children}</ButtonStyle>
    </StyledLink>
  ) : (
    <ButtonStyle>{children}</ButtonStyle>
  );
};

const NavigationButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
  );
};

const InteractionButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { PrimaryButton, NavigationButton, InteractionButton };
