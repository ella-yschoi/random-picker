import styled from '@emotion/styled';

const TextInput = styled.input`
  width: 13.5rem;
  height: 3rem;
  padding-left: 10px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: none;
  font-size: 1.5rem;
  color: #333;
  font-family: 'Pretendard-Thin';
  background-color: var(--background-color);
  color: var(--text-color);

  &:focus {
    outline: none;
  }
`;

export { TextInput };