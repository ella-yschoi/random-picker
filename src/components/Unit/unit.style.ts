import styled from '@emotion/styled';

const SettingListUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0rem 0rem 0.5rem 0.5rem;
  color: #000000;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const PencilIcon = styled.span`
  font-size: 1.5rem;
`;

const ConfirmListUnit = styled.div`
  width: 4rem;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #ffffff;
  text-align: center;
  background-color: var(--background-color);
  color: var(--text-color);
`;

export { SettingListUnit, PencilIcon, ConfirmListUnit };