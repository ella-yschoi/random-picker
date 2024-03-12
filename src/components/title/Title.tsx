import { TitleStyle } from './Title.style';
import { useNavigate } from 'react-router';

const Title = () => {
  const navigate = useNavigate();

  return (
    <TitleStyle onClick={() => navigate('/')}>
      🔀 랜덤 피커
    </TitleStyle>
  );
}

export default Title;
