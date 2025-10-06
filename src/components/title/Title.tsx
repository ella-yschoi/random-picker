import { TitleStyle } from './Title.style';
import { useNavigate } from 'react-router';

const Title = () => {
  const navigate = useNavigate();

  return (
    <TitleStyle onClick={() => navigate('/')}>🔀 Random Picker</TitleStyle>
  );
};

export default Title;
