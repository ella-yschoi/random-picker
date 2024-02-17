import { MouseEventHandler } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default ButtonProps;
